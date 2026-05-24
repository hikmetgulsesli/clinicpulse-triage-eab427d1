import type { ClinicPulseSnapshot } from '../features/clinicpulse-triage/clinicpulse-triage.store';

declare global {
  interface Window {
    app?: ClinicPulseSnapshot;
  }
}

export {};
