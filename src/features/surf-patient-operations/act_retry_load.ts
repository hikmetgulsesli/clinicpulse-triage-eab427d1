import type { ClinicPulseAction } from '../clinicpulse-triage/clinicpulse-triage.store';

export type ClinicPulseDispatch = (action: ClinicPulseAction) => void;

export function retryLoadPatientRecords(dispatch: ClinicPulseDispatch): void {
  dispatch({ type: 'reset-records' });
}
