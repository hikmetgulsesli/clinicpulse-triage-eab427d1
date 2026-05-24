import {
  buildClinicPulseState,
  CLINICPULSE_STORAGE_KEY,
  type ClinicPulseAppState,
} from './clinicpulse-triage.store';

interface PersistedClinicPulseState {
  records?: ClinicPulseAppState['records'];
  route?: ClinicPulseAppState['route'];
  selectedRecordId?: string | null;
  activePanel?: ClinicPulseAppState['activePanel'];
}

export interface ClinicPulseLoadResult {
  state: ClinicPulseAppState;
  recovered: boolean;
  error: string | null;
}

export function loadClinicPulseState(storage: Storage | undefined = getStorage()): ClinicPulseLoadResult {
  if (!storage) {
    return { state: buildClinicPulseState({ storageStatus: 'unavailable' }), recovered: false, error: null };
  }

  const raw = storage.getItem(CLINICPULSE_STORAGE_KEY);
  if (!raw) {
    return { state: buildClinicPulseState({ storageStatus: 'ready' }), recovered: false, error: null };
  }

  try {
    const persisted = JSON.parse(raw) as PersistedClinicPulseState;
    return {
      state: buildClinicPulseState({
        records: Array.isArray(persisted.records) ? persisted.records : undefined,
        route: persisted.route,
        activeScreen: persisted.route,
        selectedRecordId: persisted.selectedRecordId ?? undefined,
        activePanel: persisted.activePanel,
        storageStatus: 'ready',
      }),
      recovered: false,
      error: null,
    };
  } catch {
    storage.removeItem(CLINICPULSE_STORAGE_KEY);
    return {
      state: buildClinicPulseState({
        storageStatus: 'recoverable-error',
        lastError: 'Saved triage data was corrupted and has been reset.',
      }),
      recovered: true,
      error: 'Saved triage data was corrupted and has been reset.',
    };
  }
}

export function saveClinicPulseState(state: ClinicPulseAppState, storage: Storage | undefined = getStorage()): boolean {
  if (!storage) return false;

  const payload: PersistedClinicPulseState = {
    records: state.records,
    route: state.route,
    selectedRecordId: state.selectedRecordId,
    activePanel: state.activePanel,
  };

  try {
    storage.setItem(CLINICPULSE_STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

function getStorage(): Storage | undefined {
  try {
    return globalThis.window?.localStorage;
  } catch {
    return undefined;
  }
}
