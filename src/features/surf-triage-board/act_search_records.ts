import type { ClinicPulsePatientRecord } from '../clinicpulse-triage/clinicpulse-triage.store';

export function searchTriageBoardRecords(records: ClinicPulsePatientRecord[], query: string): ClinicPulsePatientRecord[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return records;

  return records.filter((record) =>
    [
      record.id,
      record.name,
      record.age.toString(),
      record.chiefComplaint,
      record.acuity,
      record.room ?? '',
      record.status,
      record.handoffNote,
    ]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery),
  );
}
