import type { ClinicPulseAction } from '../clinicpulse-triage/clinicpulse-triage.store';

export type ClinicPulseDispatch = (action: ClinicPulseAction) => void;

export function selectPatientRecord(dispatch: ClinicPulseDispatch, recordId: string): void {
  dispatch({ type: 'select-record', recordId });
}
