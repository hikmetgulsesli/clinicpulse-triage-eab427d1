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
import './test/bridge';

const initialState = buildClinicPulseState();

export default function App() {
  const [state, dispatch] = useReducer(clinicPulseReducer, initialState);

  useEffect(() => {
    const result = loadClinicPulseState();
    dispatch({
      type: 'hydrate',
      state: result.state,
      storageStatus: result.recovered ? 'recoverable-error' : result.state.storageStatus,
      lastError: result.error,
    });
  }, []);

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
      'button-5-5': () => dispatch({ type: 'advance-priority' }),
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
      'assign-room-5': () => dispatch({ type: 'assign-room' }),
      'button-6-6': () => dispatch({ type: 'toggle-consent' }),
      'check-labs-7': () => dispatch({ type: 'check-labs' }),
      'button-8-8': () => dispatch({ type: 'handoff-note' }),
    }),
    [commonActions],
  );

  const operationsActions = useMemo<Partial<Record<PatientOperationsClinicpulseTriageActionId, () => void>>>(
    () => ({
      ...commonActions,
      'retry-load-5': () => dispatch({ type: 'reset-records' }),
      'button-6-6': () => dispatch({ type: 'toggle-consent' }),
      'view-full-record-7': () => navigate('patient-editor', 'editor'),
      'assign-room-8': () => dispatch({ type: 'assign-room' }),
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
      {state.route === 'operations' ? <PatientOperationsClinicpulseTriage actions={operationsActions} /> : null}
      {state.route === 'patient-editor' ? <PatientEditorClinicpulseTriage actions={editorActions} /> : null}
      {state.route === 'empty-recovery' ? <EmptyAndErrorRecoveryClinicpulseTriage actions={recoveryActions} /> : null}
      {state.route === 'triage-board' ? <TriageBoardClinicpulseTriage actions={boardActions} /> : null}
      <section
        aria-live="polite"
        className="fixed bottom-4 left-4 z-40 max-w-sm rounded border border-slate-200 bg-white px-4 py-3 text-sm shadow-lg"
      >
        <p className="font-semibold text-slate-900">ClinicPulse state</p>
        <p>Active: {state.activeScreen}</p>
        <p>Patients: {state.counts.total}</p>
        <p>Storage: {state.storageStatus}</p>
        {state.lastError ? <p className="text-red-700">{state.lastError}</p> : null}
      </section>
      {state.activePanel === 'settings' ? (
        <aside
          aria-label="ClinicPulse settings"
          className="fixed right-4 top-4 z-50 w-80 max-w-[calc(100vw-2rem)] rounded border border-slate-200 bg-white p-4 shadow-xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-slate-950">Settings</h2>
              <p className="mt-1 text-sm text-slate-600">Offline intake recovery is active for this browser.</p>
            </div>
            <button
              type="button"
              className="rounded border border-slate-300 px-2 py-1 text-sm font-medium text-slate-700"
              onClick={() => navigate('triage-board', 'board')}
            >
              Close
            </button>
          </div>
          <dl className="mt-4 grid gap-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Storage</dt>
              <dd className="font-medium text-slate-900">{state.storageStatus}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Selected</dt>
              <dd className="font-medium text-slate-900">{state.selectedRecord?.name ?? 'None'}</dd>
            </div>
          </dl>
        </aside>
      ) : null}
    </div>
  );
}

declare global {
  interface Window {
    app?: ClinicPulseSnapshot;
  }
}
