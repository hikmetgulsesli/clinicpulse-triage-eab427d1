import type { ClinicPulsePanel, ClinicPulseRoute } from '../clinicpulse-triage/clinicpulse-triage.store';

export type NavigateClinicPulse = (route: ClinicPulseRoute, panel?: ClinicPulsePanel) => void;

export function cancelPatientEdit(navigate: NavigateClinicPulse): void {
  navigate('operations', 'operations');
}
