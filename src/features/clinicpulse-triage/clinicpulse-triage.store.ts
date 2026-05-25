import { clinicPulseTriageFixture } from '../../__fixtures__/clinicpulse-triage.fixture';

export type ClinicPulseRoute = 'triage-board' | 'operations' | 'patient-editor' | 'empty-recovery';
export type ClinicPulsePanel = 'board' | 'operations' | 'editor' | 'support' | 'settings';
export type ClinicPulseStorageStatus = 'idle' | 'ready' | 'recoverable-error' | 'unavailable';
export type ClinicPulsePatientStatus = 'waiting' | 'roomed' | 'observing';
export type ClinicPulseAcuity = 'emergent' | 'urgent' | 'standard';

export interface ClinicPulsePatientRecord {
  id: string;
  name: string;
  age: number;
  chiefComplaint: string;
  acuity: ClinicPulseAcuity;
  room: string | null;
  status: ClinicPulsePatientStatus;
  labsPending: number;
  updatedAt: string;
  consentMissing: boolean;
  handoffNote: string;
}

export interface ClinicPulseCounts {
  total: number;
  waiting: number;
  roomed: number;
  observing: number;
  labsPending: number;
}

export interface ClinicPulseAppState {
  route: ClinicPulseRoute;
  selectedRecordId: string | null;
  selectedRecord: ClinicPulsePatientRecord | null;
  records: ClinicPulsePatientRecord[];
  counts: ClinicPulseCounts;
  storageStatus: ClinicPulseStorageStatus;
  lastError: string | null;
  activePanel: ClinicPulsePanel;
}

export interface ClinicPulseSnapshot {
  activeScreen: ClinicPulseRoute;
  route: ClinicPulseRoute;
  selectedRecord: ClinicPulsePatientRecord | null;
  counts: ClinicPulseCounts;
  storageStatus: ClinicPulseStorageStatus;
  lastError: string | null;
  activePanel: ClinicPulsePanel;
}

export const CLINICPULSE_STORAGE_KEY = 'clinicpulse-triage:v1';

export function getClinicPulseCounts(records: ClinicPulsePatientRecord[]): ClinicPulseCounts {
  return records.reduce<ClinicPulseCounts>(
    (counts, record) => {
      counts.total += 1;
      counts[record.status] += 1;
      counts.labsPending += record.labsPending;
      return counts;
    },
    { total: 0, waiting: 0, roomed: 0, observing: 0, labsPending: 0 },
  );
}

export function buildClinicPulseState(
  partial: Partial<Omit<ClinicPulseAppState, 'counts' | 'selectedRecord'>> = {},
): ClinicPulseAppState {
  const records = (partial.records ?? clinicPulseTriageFixture).map(normalizeClinicPulseRecord);
  const selectedRecordId = partial.selectedRecordId ?? records[0]?.id ?? null;
  const selectedRecord = records.find((record) => record.id === selectedRecordId) ?? records[0] ?? null;
  const route = partial.route ?? 'triage-board';

  return {
    route,
    selectedRecordId: selectedRecord?.id ?? null,
    selectedRecord,
    records,
    counts: getClinicPulseCounts(records),
    storageStatus: partial.storageStatus ?? 'idle',
    lastError: partial.lastError ?? null,
    activePanel: partial.activePanel ?? panelForRoute(route),
  };
}

function normalizeClinicPulseRecord(record: ClinicPulsePatientRecord): ClinicPulsePatientRecord {
  return {
    ...record,
    consentMissing: record.consentMissing ?? false,
    handoffNote: record.handoffNote ?? 'No handoff note recorded.',
  };
}

export function panelForRoute(route: ClinicPulseRoute): ClinicPulsePanel {
  if (route === 'operations') return 'operations';
  if (route === 'patient-editor') return 'editor';
  if (route === 'empty-recovery') return 'support';
  return 'board';
}

export function toClinicPulseSnapshot(state: ClinicPulseAppState): ClinicPulseSnapshot {
  return {
    activeScreen: state.route,
    route: state.route,
    selectedRecord: state.selectedRecord,
    counts: state.counts,
    storageStatus: state.storageStatus,
    lastError: state.lastError,
    activePanel: state.activePanel,
  };
}

export type ClinicPulseAction =
  | { type: 'navigate'; route: ClinicPulseRoute; panel?: ClinicPulsePanel }
  | { type: 'select-record'; recordId: string | null }
  | { type: 'assign-room'; updatedAt: string }
  | { type: 'check-labs'; updatedAt: string }
  | { type: 'advance-priority'; updatedAt: string }
  | { type: 'toggle-consent'; updatedAt: string }
  | { type: 'handoff-note'; updatedAt: string }
  | { type: 'set-storage-status'; storageStatus: ClinicPulseStorageStatus; lastError?: string | null }
  | { type: 'reset-records' };

export function clinicPulseReducer(state: ClinicPulseAppState, action: ClinicPulseAction): ClinicPulseAppState {
  switch (action.type) {
    case 'navigate':
      return buildClinicPulseState({
        ...state,
        route: action.route,
        activePanel: action.panel ?? panelForRoute(action.route),
      });
    case 'select-record':
      return buildClinicPulseState({ ...state, selectedRecordId: action.recordId });
    case 'assign-room':
      return updateSelectedRecord(state, (record) => ({
        ...record,
        room: record.room ?? 'Fast Track 1',
        status: 'roomed',
        updatedAt: action.updatedAt,
      }));
    case 'check-labs':
      return updateSelectedRecord(state, (record) => ({
        ...record,
        labsPending: Math.max(0, record.labsPending - 1),
        updatedAt: action.updatedAt,
      }));
    case 'advance-priority':
      return updateSelectedRecord(state, (record) => ({
        ...record,
        acuity: record.acuity === 'standard' ? 'urgent' : 'emergent',
        updatedAt: action.updatedAt,
      }));
    case 'toggle-consent':
      return updateSelectedRecord(state, (record) => ({
        ...record,
        consentMissing: !record.consentMissing,
        updatedAt: action.updatedAt,
      }));
    case 'handoff-note':
      return updateSelectedRecord(state, (record) => ({
        ...record,
        handoffNote: record.handoffNote.includes('Charge nurse review')
          ? 'Handoff note updated for room team.'
          : 'Charge nurse review requested before room transfer.',
        updatedAt: action.updatedAt,
      }));
    case 'set-storage-status':
      return { ...state, storageStatus: action.storageStatus, lastError: action.lastError ?? null };
    case 'reset-records':
      return buildClinicPulseState({ ...state, records: clinicPulseTriageFixture, lastError: null });
    default:
      return state;
  }
}

function updateSelectedRecord(
  state: ClinicPulseAppState,
  update: (record: ClinicPulsePatientRecord) => ClinicPulsePatientRecord,
): ClinicPulseAppState {
  if (!state.selectedRecordId) return state;
  const records = state.records.map((record) => (record.id === state.selectedRecordId ? update(record) : record));
  return buildClinicPulseState({ ...state, records });
}
