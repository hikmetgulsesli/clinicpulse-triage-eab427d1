import { useCallback, useEffect, useMemo, useReducer } from 'react';
import {
  EmptyAndErrorRecoveryClinicpulseTriage,
  PatientEditorClinicpulseTriage,
  PatientOperationsClinicpulseTriage,
  TriageBoardClinicpulseTriage,
  type EmptyAndErrorRecoveryClinicpulseTriageActionId,
  type PatientEditorClinicpulseTriageActionId,
  type PatientOperationsClinicpulseTriageActionId,
  type TriageBoardClinicpulseTriageActionId,
} from './screens';
import {
  buildClinicPulseState,
  clinicPulseReducer,
  toClinicPulseSnapshot,
  type ClinicPulsePanel,
  type ClinicPulseRoute,
  type ClinicPulseSnapshot,
} from './features/clinicpulse-triage/clinicpulse-triage.store';
import { loadClinicPulseState, saveClinicPulseState } from './features/clinicpulse-triage/clinicpulse-triage.repo';
import { createRecoveryPatientRecord } from './features/surf-empty-and-error-recovery/act_create_record';
import { retryLoadRecoveryRecords } from './features/surf-empty-and-error-recovery/act_retry_load';
import './test/bridge';

const initialState = buildClinicPulseState();
const currentTimestamp = () => new Date().toISOString();
const loadInitialClinicPulseState = () => loadClinicPulseState().state;

export default function App() {
  const [state, dispatch] = useReducer(clinicPulseReducer, initialState, loadInitialClinicPulseState);

  useEffect(() => {
    const saved = saveClinicPulseState(state);
    if (!saved && state.storageStatus !== 'unavailable') {
      dispatch({ type: 'set-storage-status', storageStatus: 'unavailable' });
    }
  }, [state]);

  const navigate = useCallback((route: ClinicPulseRoute, panel?: ClinicPulsePanel) => {
    dispatch({ type: 'navigate', route, panel });
  }, []);

  const commonActions = useMemo(
    () => ({
      'add-patient-1': () => navigate('patient-editor', 'editor'),
      'button-2-2': () => navigate('operations', 'operations'),
      'button-3-3': () => navigate('triage-board', 'board'),
      'button-4-4': () => navigate('empty-recovery', 'support'),
      'button-5-5': () => dispatch({ type: 'advance-priority', updatedAt: currentTimestamp() }),
      'operations-1': () => navigate('operations', 'operations'),
      'triage-board-2': () => navigate('triage-board', 'board'),
      'settings-3': () => navigate('triage-board', 'settings'),
      'support-4': () => navigate('empty-recovery', 'support'),
    }),
    [navigate],
  );

  const boardActions = useMemo<Partial<Record<TriageBoardClinicpulseTriageActionId, () => void>>>(
    () => ({
      ...commonActions,
      'assign-room-5': () => dispatch({ type: 'assign-room', updatedAt: currentTimestamp() }),
      'button-6-6': () => dispatch({ type: 'toggle-consent', updatedAt: currentTimestamp() }),
      'check-labs-7': () => dispatch({ type: 'check-labs', updatedAt: currentTimestamp() }),
      'button-8-8': () => dispatch({ type: 'handoff-note', updatedAt: currentTimestamp() }),
    }),
    [commonActions],
  );

  const operationsActions = useMemo<Partial<Record<PatientOperationsClinicpulseTriageActionId, () => void>>>(
    () => ({
      ...commonActions,
      'retry-load-5': () => dispatch({ type: 'reset-records' }),
      'button-6-6': () => dispatch({ type: 'toggle-consent', updatedAt: currentTimestamp() }),
      'view-full-record-7': () => navigate('patient-editor', 'editor'),
      'assign-room-8': () => dispatch({ type: 'assign-room', updatedAt: currentTimestamp() }),
    }),
    [commonActions, navigate],
  );

  const editorActions = useMemo<Partial<Record<PatientEditorClinicpulseTriageActionId, () => void>>>(
    () => ({
      ...commonActions,
      'save-now-6': () => navigate('triage-board', 'board'),
      'cancel-edit-7': () => navigate('triage-board', 'board'),
      'save-record-8': () => navigate('triage-board', 'board'),
    }),
    [commonActions, navigate],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryClinicpulseTriageActionId, () => void>>>(
    () => ({
      ...commonActions,
      'retry-load-6': () => retryLoadRecoveryRecords(dispatch),
      'create-patient-7': () => createRecoveryPatientRecord(navigate),
      'clear-all-filters-8': () => retryLoadRecoveryRecords(dispatch),
    }),
    [commonActions, navigate],
  );

  useEffect(() => {
    window.app = toClinicPulseSnapshot(state);
  }, [state]);

  return (
    <div data-setfarm-root="clinicpulse-triage" className="min-h-screen bg-slate-50 text-slate-950">
      {state.route === 'operations' ? <PatientOperationsClinicpulseTriage actions={operationsActions} /> : null}
      {state.route === 'patient-editor' ? <PatientEditorClinicpulseTriage actions={editorActions} /> : null}
      {state.route === 'empty-recovery' ? <EmptyAndErrorRecoveryClinicpulseTriage actions={recoveryActions} /> : null}
      {state.route === 'triage-board' ? <TriageBoardClinicpulseTriage actions={boardActions} /> : null}
    </div>
  );
}

declare global {
  interface Window {
    app?: ClinicPulseSnapshot;
  }
}
