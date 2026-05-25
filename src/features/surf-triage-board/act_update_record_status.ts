import type {
  ClinicPulsePatientRecord,
  ClinicPulsePatientStatus,
} from '../clinicpulse-triage/clinicpulse-triage.store';

export function updateTriageBoardRecordStatus(
  records: ClinicPulsePatientRecord[],
  recordId: string,
  status: ClinicPulsePatientStatus,
  updatedAt: string,
): ClinicPulsePatientRecord[] {
  return records.map((record) =>
    record.id === recordId
      ? {
          ...record,
          status,
          room: status === 'waiting' ? null : record.room ?? 'Fast Track 1',
          updatedAt,
        }
      : record,
  );
}
