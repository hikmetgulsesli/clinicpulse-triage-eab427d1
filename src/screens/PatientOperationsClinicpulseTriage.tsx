// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Patient Operations - ClinicPulse Triage
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Check, Circle, CircleUserRound, Pencil, Plus, RefreshCw, Search, Settings, X } from "lucide-react";
import type { ClinicPulseCounts, ClinicPulsePatientRecord } from "../features/clinicpulse-triage/clinicpulse-triage.store";


export type PatientOperationsClinicpulseTriageActionId = "add-patient-1" | "button-2-2" | "button-3-3" | "button-4-4" | "retry-load-5" | "button-6-6" | "view-full-record-7" | "assign-room-8" | "operations-1" | "triage-board-2" | "settings-3" | "support-4";

export interface PatientOperationsClinicpulseTriageProps {
  actions?: Partial<Record<PatientOperationsClinicpulseTriageActionId, () => void>>;
  counts?: ClinicPulseCounts;
  records?: ClinicPulsePatientRecord[];
  searchQuery?: string;
  selectedRecord?: ClinicPulsePatientRecord | null;
  onSearchQueryChange?: (query: string) => void;
  onSelectRecord?: (recordId: string) => void;
}

const defaultCounts: ClinicPulseCounts = { total: 0, waiting: 0, roomed: 0, observing: 0, labsPending: 0 };

const acuityStyles: Record<ClinicPulsePatientRecord["acuity"], string> = {
  emergent: "bg-error text-on-error",
  urgent: "bg-secondary-container text-on-secondary-container",
  standard: "bg-surface-variant text-on-surface-variant border border-outline-variant",
};

function formatAcuity(acuity: ClinicPulsePatientRecord["acuity"]) {
  if (acuity === "emergent") return "Emergent";
  if (acuity === "urgent") return "Urgent";
  return "Standard";
}

function formatWaitTime(updatedAt: string) {
  const updatedTime = new Date(updatedAt).getTime();
  if (Number.isNaN(updatedTime)) return "--";
  const minutes = Math.max(0, Math.round((Date.now() - updatedTime) / 60000));
  return `${minutes}m`;
}

function formatRoomStatus(record: ClinicPulsePatientRecord) {
  if (record.room) return record.room;
  if (record.status === "observing") return "Observing";
  return "Waiting";
}

export function PatientOperationsClinicpulseTriage({
  actions,
  counts = defaultCounts,
  records = [],
  searchQuery = "",
  selectedRecord,
  onSearchQueryChange,
  onSelectRecord,
}: PatientOperationsClinicpulseTriageProps) {
  const activeRecord = selectedRecord ?? records[0] ?? null;
  return (
    <>
      {/* SideNavBar */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:h-full md:w-[240px] md:z-30 bg-surface-container-low border-r border-outline-variant md:flex flex-col py-default px-compact">
      {/* Header */}
      <div className="mb-default px-compact">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">ClinicPulse</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Emergency Triage</p>
      </div>
      {/* CTA */}
      <div className="mb-default px-compact">
      <button className="w-full bg-primary text-on-primary py-compact px-default rounded flex items-center justify-center gap-compact font-label-md text-label-md hover:opacity-90 transition-opacity" type="button" data-action-id="add-patient-1" onClick={actions?.["add-patient-1"]}>
      <Plus  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                      Add Patient
                  </button>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 flex flex-col gap-base">
      {/* Active Tab: Operations */}
      <a className="flex items-center gap-default py-compact px-compact text-primary font-bold border-r-2 border-primary bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      {/* Inactive Tab: Triage Board */}
      <a className="flex items-center gap-default py-compact px-compact text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#" data-action-id="triage-board-2" onClick={actions?.["triage-board-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Triage Board
                  </a>
      </nav>
      {/* Footer Tabs */}
      <div className="mt-auto flex flex-col gap-base pt-default border-t border-outline-variant">
      <a className="flex items-center gap-default py-compact px-compact text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-default py-compact px-compact text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out font-label-md text-label-md" href="#" data-action-id="support-4" onClick={actions?.["support-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Support
                  </a>
      </div>
      </aside>
      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col relative w-full md:w-[calc(100%-240px)] md:ml-[240px] min-w-0 h-full">
      {/* TopNavBar */}
      <header className="fixed left-0 md:left-[240px] top-0 w-full md:w-[calc(100%-240px)] z-20 bg-surface border-b border-outline-variant flex justify-between items-center h-auto min-h-12 px-compact sm:px-margin-desktop py-compact sm:py-0 gap-compact transition-colors duration-150">
      <div className="font-headline-sm text-headline-sm font-bold text-on-surface flex flex-col sm:flex-row sm:items-center gap-compact sm:gap-margin-desktop w-full max-w-xl min-w-0">
                      ClinicPulse Triage
                      {/* Search Bar (on_left) */}
      <div className="relative w-full sm:flex-1 sm:ml-gutter min-w-0">
      <Search  style={{fontSize: "16px"}} className="absolute left-compact top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-body-sm rounded pl-[32px] pr-compact py-[4px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" placeholder="Search patients, IDs..." type="text" value={searchQuery} onChange={(event) => onSearchQueryChange?.(event.target.value)} />
      </div>
      </div>
      <div className="flex items-center gap-compact">
      <button className="p-compact text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-compact text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-compact text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 mt-[88px] sm:mt-12 p-compact sm:p-margin-desktop overflow-y-auto overflow-x-hidden flex flex-col gap-margin-desktop relative min-w-0">
      {/* Header & Metrics */}
      <section className="flex flex-col gap-gutter">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-compact">
      <h2 className="font-headline-md text-headline-md text-on-surface">Patient Operations</h2>
      <div className="flex gap-compact text-on-surface-variant">
      <span className="font-body-sm text-body-sm flex items-center gap-base">
      <Circle  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                  Last updated: Just now
                              </span>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Metric 1 */}
      <div className="bg-surface border border-outline-variant rounded p-default flex flex-col gap-base">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Waiting</span>
      <div className="font-display-lg text-display-lg text-on-surface">{counts.waiting}</div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface border border-outline-variant rounded p-default flex flex-col gap-base border-l-4 border-l-error">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Roomed</span>
      <div className="font-display-lg text-display-lg text-error">{counts.roomed}</div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface border border-outline-variant rounded p-default flex flex-col gap-base">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Labs Pending</span>
      <div className="font-display-lg text-display-lg text-on-surface">{counts.labsPending}</div>
      </div>
      </div>
      </section>
      {/* Filters & Actions */}
      <section className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-compact bg-surface p-compact border border-outline-variant rounded">
      <div className="flex flex-col sm:flex-row gap-compact min-w-0">
      {/* Quiet Input Styling for Filters */}
      <select className="bg-transparent border-b border-outline-variant pb-1 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary cursor-pointer pr-6">
      <option>All Priorities</option>
      <option>Urgent</option>
      <option>High</option>
      <option>Moderate</option>
      </select>
      <select className="bg-transparent border-b border-outline-variant pb-1 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary cursor-pointer pr-6">
      <option>All Statuses</option>
      <option>Waiting</option>
      <option>In-Progress</option>
      </select>
      <select className="bg-transparent border-b border-outline-variant pb-1 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary cursor-pointer pr-6">
      <option>All Rooms</option>
      <option>Triage 1</option>
      <option>Triage 2</option>
      </select>
      </div>
      <div>
      <button className="flex items-center gap-base text-secondary font-label-md text-label-md hover:bg-surface-container-low px-compact py-[4px] rounded border border-outline-variant transition-colors" type="button" data-action-id="retry-load-5" onClick={actions?.["retry-load-5"]}>
      <RefreshCw  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                              Retry Load
                          </button>
      </div>
      </section>
      {/* Data Table */}
      <section className="flex-1 bg-surface border border-outline-variant rounded overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container-low border-b border-outline-variant">
      <tr>
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">Patient Name</th>
      <th className="hidden sm:table-cell py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">ID</th>
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">Triage Level</th>
      <th className="hidden sm:table-cell py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">Wait Time</th>
      <th className="hidden sm:table-cell py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">Room Status</th>
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold text-center">Consent</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-outline-variant">
      {records.map((record) => (
      <tr key={record.id} className={`h-[48px] hover:bg-surface-container-low transition-colors cursor-pointer ${activeRecord?.id === record.id ? "bg-primary-fixed hover:bg-primary-fixed-dim" : ""}`} onClick={() => onSelectRecord?.(record.id)}>
      <td className="px-default font-medium">{record.name}</td>
      <td className="hidden sm:table-cell px-default font-data-mono text-data-mono text-on-surface-variant">{record.id}</td>
      <td className="px-default">
      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide ${acuityStyles[record.acuity]}`}>{formatAcuity(record.acuity)}</span>
      </td>
      <td className="hidden sm:table-cell px-default font-data-mono text-data-mono">{formatWaitTime(record.updatedAt)}</td>
      <td className="hidden sm:table-cell px-default">
      <span className="inline-flex items-center gap-1 border border-outline-variant rounded px-2 py-0.5 text-[11px] text-on-surface-variant">
      <span className={`w-2 h-2 rounded-full ${record.status === "waiting" ? "bg-error" : record.status === "roomed" ? "bg-secondary" : "bg-primary"}`}></span> {formatRoomStatus(record)}
                                          </span>
      </td>
      <td className="px-default text-center">
      <Circle  style={{fontSize: "16px"}} className={record.consentMissing ? "text-outline-variant" : "text-primary"} aria-hidden={true} focusable="false" />
      </td>
      </tr>
      ))}
      </tbody>
      </table>
      </div>
      </section>
      </main>
      {/* Backdrop for Drawer */}
      <div aria-hidden={true} className="fixed inset-0 bg-inverse-surface/10 backdrop-blur-[2px] z-30 md:ml-[240px]"></div>
      {/* Side Drawer (Patient Details) */}
      <aside className="fixed inset-x-0 bottom-0 top-auto h-[62vh] w-full sm:left-auto sm:right-0 sm:top-0 sm:bottom-auto sm:h-screen sm:w-[min(480px,100vw)] md:w-[480px] max-w-full bg-surface border-l border-outline-variant shadow-[-4px_0_12px_rgba(0,0,0,0.05)] z-40 flex flex-col transform translate-x-0 transition-transform duration-300">
      {/* Drawer Header */}
      <div className="p-default border-b border-outline-variant flex justify-between items-start gap-compact bg-surface-container-lowest">
      <div>
      <div className="flex items-center gap-compact mb-1">
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">{activeRecord?.name ?? "No patient selected"}</h3>
      {activeRecord ? <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide ${acuityStyles[activeRecord.acuity]}`}>{formatAcuity(activeRecord.acuity)}</span> : null}
      </div>
      <div className="font-data-mono text-data-mono text-on-surface-variant flex gap-default">
      <span>ID: {activeRecord?.id ?? "--"}</span>
      <span>Age: {activeRecord?.age ?? "--"}</span>
      </div>
      </div>
      <button className="text-on-surface-variant hover:bg-surface-container-low p-1 rounded transition-colors" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Drawer Content (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-default flex flex-col gap-margin-desktop bg-surface-bright">
      {/* Handoff Notes Section */}
      <section>
      <h4 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-compact border-b border-outline-variant pb-1">Handoff Notes</h4>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-compact font-body-sm text-body-sm text-on-surface leading-relaxed relative">
      <Pencil  style={{fontSize: "16px"}} className="absolute top-compact right-compact text-outline-variant" aria-hidden={true} focusable="false" />
                              {activeRecord?.handoffNote ?? "Select a patient to review handoff notes."}
                          </div>
      </section>
      {/* Activity Event Timeline Section */}
      <section>
      <h4 className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-compact border-b border-outline-variant pb-1">Activity Timeline</h4>
      <div className="flex flex-col gap-0 relative">
      {/* Vertical line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-outline-variant z-0"></div>
      {/* Event 1 */}
      <div className="flex gap-compact relative z-10 py-compact">
      <div className="w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center mt-0.5">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-label-md text-label-md font-semibold text-on-surface">Record Updated</span>
      <span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant">{activeRecord ? formatWaitTime(activeRecord.updatedAt) : "--"}</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{activeRecord?.chiefComplaint ?? "No complaint recorded."}</p>
      </div>
      </div>
      {/* Event 2 */}
      <div className="flex gap-compact relative z-10 py-compact">
      <div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center mt-0.5">
      <Check  style={{fontSize: "14px"}} className="text-outline-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-label-md text-label-md text-on-surface">Room Status</span>
      <span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant">{activeRecord?.status ?? "--"}</span>
      </div>
      <div className="font-data-mono text-data-mono text-[11px] bg-surface-container-low p-1.5 rounded inline-block text-on-surface">
                                          Room: {activeRecord?.room ?? "Unassigned"} | Labs: {activeRecord?.labsPending ?? 0}
                                      </div>
      </div>
      </div>
      {/* Event 3 */}
      <div className="flex gap-compact relative z-10 py-compact">
      <div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center mt-0.5">
      <Check  style={{fontSize: "14px"}} className="text-outline-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-label-md text-label-md text-on-surface">Consent Status</span>
      <span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant">{activeRecord?.consentMissing ? "Missing" : "Complete"}</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Drawer Footer / Actions */}
      <div className="p-default border-t border-outline-variant bg-surface flex flex-wrap justify-end gap-compact">
      <button className="px-default py-compact font-label-md text-label-md border border-outline-variant text-on-surface rounded hover:bg-surface-container-low transition-colors" type="button" data-action-id="view-full-record-7" onClick={actions?.["view-full-record-7"]}>
                          View Full Record
                      </button>
      <button className="px-default py-compact font-label-md text-label-md bg-primary text-on-primary rounded hover:opacity-90 transition-opacity" type="button" data-action-id="assign-room-8" onClick={actions?.["assign-room-8"]}>
                          Assign Room
                      </button>
      </div>
      </aside>
      </div>
    </>
  );
}
