import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
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
import { cancelPatientEdit } from './features/surf-patient-editor/act_cancel_edit';
import { savePatientRecord } from './features/surf-patient-editor/act_save_record';
import { createPatientRecord } from './features/surf-patient-operations/act_create_record';
import { retryLoadPatientRecords } from './features/surf-patient-operations/act_retry_load';
import { searchPatientRecords } from './features/surf-patient-operations/act_search_records';
import { selectPatientRecord } from './features/surf-patient-operations/act_select_record';
import './test/bridge';

const initialState = buildClinicPulseState();
const currentTimestamp = () => new Date().toISOString();
const loadInitialClinicPulseState = () => loadClinicPulseState().state;

export default function App() {
  const [state, dispatch] = useReducer(clinicPulseReducer, initialState, loadInitialClinicPulseState);
  const [operationsSearch, setOperationsSearch] = useState('');

  useEffect(() => {
    const saved = saveClinicPulseState(state);
    if (!saved && state.storageStatus !== 'unavailable') {
      dispatch({ type: 'set-storage-status', storageStatus: 'unavailable' });
    }
  }, [state]);

  const navigate = useCallback((route: ClinicPulseRoute, panel?: ClinicPulsePanel) => {
    dispatch({ type: 'navigate', route, panel });
  }, []);

  const navigatePath = useCallback((path: '/notifications' | '/history') => {
    window.history.pushState({ clinicPulsePath: path }, '', path);
  }, []);

  const commonActions = useMemo(
    () => ({
      'add-patient-1': () => createPatientRecord(navigate),
      'button-2-2': () => navigate('operations', 'operations'),
      'button-3-3': () => navigatePath('/notifications'),
      'button-4-4': () => navigatePath('/history'),
      'button-5-5': () => dispatch({ type: 'advance-priority', updatedAt: currentTimestamp() }),
      'operations-1': () => navigate('operations', 'operations'),
      'triage-board-2': () => navigate('triage-board', 'board'),
      'settings-3': () => navigate('triage-board', 'settings'),
      'support-4': () => navigate('empty-recovery', 'support'),
    }),
    [navigate, navigatePath],
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
      'retry-load-5': () => {
        retryLoadPatientRecords(dispatch);
        setOperationsSearch('');
      },
      'button-6-6': () => dispatch({ type: 'toggle-consent', updatedAt: currentTimestamp() }),
      'view-full-record-7': () => navigate('patient-editor', 'editor'),
      'assign-room-8': () => dispatch({ type: 'assign-room', updatedAt: currentTimestamp() }),
    }),
    [commonActions, navigate],
  );

  const editorActions = useMemo<Partial<Record<PatientEditorClinicpulseTriageActionId, () => void>>>(
    () => ({
      ...commonActions,
      'save-now-6': () => savePatientRecord(navigate),
      'cancel-edit-7': () => cancelPatientEdit(navigate),
      'save-record-8': () => savePatientRecord(navigate),
    }),
    [commonActions, navigate],
  );

  const operationsRecords = useMemo(
    () => searchPatientRecords(state.records, operationsSearch),
    [operationsSearch, state.records],
  );

  const selectOperationsRecord = useCallback(
    (recordId: string) => {
      selectPatientRecord(dispatch, recordId);
    },
    [dispatch],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryClinicpulseTriageActionId, () => void>>>(
    () => ({
      ...commonActions,
      'retry-load-6': () => dispatch({ type: 'reset-records' }),
      'create-patient-7': () => navigate('patient-editor', 'editor'),
      'clear-all-filters-8': () => dispatch({ type: 'reset-records' }),
    }),
    [commonActions, navigate],
  );

  useEffect(() => {
    window.app = toClinicPulseSnapshot(state);
  }, [state]);

  return (
    <div data-setfarm-root="clinicpulse-triage" className="min-h-screen bg-slate-50 text-slate-950">
      {state.route === 'operations' ? (
        <PatientOperationsClinicpulseTriage
          actions={operationsActions}
          counts={state.counts}
          records={operationsRecords}
          searchQuery={operationsSearch}
          selectedRecord={state.selectedRecord}
          onSearchQueryChange={setOperationsSearch}
          onSelectRecord={selectOperationsRecord}
        />
      ) : null}
      {state.route === 'patient-editor' ? (
        <PatientEditorClinicpulseTriage actions={editorActions} selectedRecord={state.selectedRecord} />
      ) : null}
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
