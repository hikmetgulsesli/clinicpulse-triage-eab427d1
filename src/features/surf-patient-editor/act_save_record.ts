import type { ClinicPulsePanel, ClinicPulseRoute } from '../clinicpulse-triage/clinicpulse-triage.store';

export type NavigateClinicPulse = (route: ClinicPulseRoute, panel?: ClinicPulsePanel) => void;

export function savePatientRecord(navigate: NavigateClinicPulse): void {
  navigate('triage-board', 'board');
}
