// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Patient Operations - ClinicPulse Triage
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Check, Circle, CircleUserRound, Pencil, Plus, RefreshCw, Search, Settings, X } from "lucide-react";


export type PatientOperationsClinicpulseTriageActionId = "add-patient-1" | "button-2-2" | "button-3-3" | "button-4-4" | "retry-load-5" | "button-6-6" | "view-full-record-7" | "assign-room-8" | "operations-1" | "triage-board-2" | "settings-3" | "support-4";

export interface PatientOperationsClinicpulseTriageProps {
  actions?: Partial<Record<PatientOperationsClinicpulseTriageActionId, () => void>>;
}

export function PatientOperationsClinicpulseTriage({ actions }: PatientOperationsClinicpulseTriageProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[240px] z-30 bg-surface-container-low border-r border-outline-variant flex flex-col py-default px-compact">
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
      <div className="flex-1 flex flex-col ml-[240px] relative w-full h-full">
      {/* TopNavBar */}
      <header className="fixed top-0 w-[calc(100%-240px)] z-20 bg-surface border-b border-outline-variant flex justify-between items-center h-12 px-margin-desktop transition-colors duration-150">
      <div className="font-headline-sm text-headline-sm font-bold text-on-surface flex items-center gap-margin-desktop w-full max-w-xl">
                      ClinicPulse Triage
                      {/* Search Bar (on_left) */}
      <div className="relative flex-1 ml-gutter">
      <Search  style={{fontSize: "16px"}} className="absolute left-compact top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-sm text-body-sm rounded pl-[32px] pr-compact py-[4px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" placeholder="Search patients, IDs..." type="text" />
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
      <main className="flex-1 mt-12 p-margin-desktop overflow-y-auto overflow-x-hidden flex flex-col gap-margin-desktop relative">
      {/* Header & Metrics */}
      <section className="flex flex-col gap-gutter">
      <div className="flex justify-between items-end">
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
      <div className="font-display-lg text-display-lg text-on-surface">12</div>
      </div>
      {/* Metric 2 */}
      <div className="bg-surface border border-outline-variant rounded p-default flex flex-col gap-base border-l-4 border-l-error">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Urgent</span>
      <div className="font-display-lg text-display-lg text-error">2</div>
      </div>
      {/* Metric 3 */}
      <div className="bg-surface border border-outline-variant rounded p-default flex flex-col gap-base">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Wait Time</span>
      <div className="font-display-lg text-display-lg text-on-surface">18<span className="text-headline-sm ml-1 text-on-surface-variant">m</span></div>
      </div>
      </div>
      </section>
      {/* Filters & Actions */}
      <section className="flex justify-between items-center bg-surface p-compact border border-outline-variant rounded">
      <div className="flex gap-compact">
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
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">ID</th>
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">Triage Level</th>
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">Wait Time</th>
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold">Room Status</th>
      <th className="py-compact px-default font-label-md text-label-md text-on-surface-variant font-semibold text-center">Consent</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-outline-variant">
      {/* Selected Row Example */}
      <tr className="h-[48px] bg-primary-fixed hover:bg-primary-fixed-dim transition-colors cursor-pointer">
      <td className="px-default font-medium">Doe, Jonathan</td>
      <td className="px-default font-data-mono text-data-mono text-on-surface-variant">PT-8429</td>
      <td className="px-default">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-error text-on-error uppercase tracking-wide">Urgent</span>
      </td>
      <td className="px-default font-data-mono text-data-mono">42m</td>
      <td className="px-default">
      <span className="inline-flex items-center gap-1 border border-outline-variant rounded px-2 py-0.5 text-[11px] text-on-surface-variant">
      <span className="w-2 h-2 rounded-full bg-error"></span> Waiting
                                          </span>
      </td>
      <td className="px-default text-center">
      <Circle  style={{fontSize: "16px"}} className="text-primary" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      {/* Normal Row */}
      <tr className="h-[48px] hover:bg-surface-container-low transition-colors cursor-pointer">
      <td className="px-default">Smith, Sarah</td>
      <td className="px-default font-data-mono text-data-mono text-on-surface-variant">PT-8430</td>
      <td className="px-default">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-container text-on-secondary-container uppercase tracking-wide">High</span>
      </td>
      <td className="px-default font-data-mono text-data-mono">15m</td>
      <td className="px-default">
      <span className="inline-flex items-center gap-1 border border-outline-variant rounded px-2 py-0.5 text-[11px] text-on-surface-variant">
      <span className="w-2 h-2 rounded-full bg-secondary"></span> Triage 1
                                          </span>
      </td>
      <td className="px-default text-center">
      <Circle  style={{fontSize: "16px"}} className="text-outline-variant" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      <tr className="h-[48px] hover:bg-surface-container-low transition-colors cursor-pointer bg-background">
      <td className="px-default">Chen, Wei</td>
      <td className="px-default font-data-mono text-data-mono text-on-surface-variant">PT-8431</td>
      <td className="px-default">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-surface-variant text-on-surface-variant uppercase tracking-wide border border-outline-variant">Moderate</span>
      </td>
      <td className="px-default font-data-mono text-data-mono">08m</td>
      <td className="px-default">
      <span className="inline-flex items-center gap-1 border border-outline-variant rounded px-2 py-0.5 text-[11px] text-on-surface-variant">
      <span className="w-2 h-2 rounded-full bg-primary"></span> In-Progress
                                          </span>
      </td>
      <td className="px-default text-center">
      <Circle  style={{fontSize: "16px"}} className="text-primary" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      <tr className="h-[48px] hover:bg-surface-container-low transition-colors cursor-pointer">
      <td className="px-default">Alvarez, Maria</td>
      <td className="px-default font-data-mono text-data-mono text-on-surface-variant">PT-8432</td>
      <td className="px-default">
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-surface-variant text-on-surface-variant uppercase tracking-wide border border-outline-variant">Low</span>
      </td>
      <td className="px-default font-data-mono text-data-mono">02m</td>
      <td className="px-default">
      <span className="inline-flex items-center gap-1 border border-outline-variant rounded px-2 py-0.5 text-[11px] text-on-surface-variant">
      <span className="w-2 h-2 rounded-full bg-error"></span> Waiting
                                          </span>
      </td>
      <td className="px-default text-center">
      <Circle  style={{fontSize: "16px"}} className="text-primary" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </section>
      </main>
      {/* Backdrop for Drawer */}
      <div aria-hidden={true} className="fixed inset-0 bg-inverse-surface/10 backdrop-blur-[2px] z-30 ml-[240px]"></div>
      {/* Side Drawer (Patient Details) */}
      <aside className="fixed right-0 top-0 h-screen w-[480px] bg-surface border-l border-outline-variant shadow-[-4px_0_12px_rgba(0,0,0,0.05)] z-40 flex flex-col transform translate-x-0 transition-transform duration-300">
      {/* Drawer Header */}
      <div className="p-default border-b border-outline-variant flex justify-between items-start bg-surface-container-lowest">
      <div>
      <div className="flex items-center gap-compact mb-1">
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Doe, Jonathan</h3>
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-error text-on-error uppercase tracking-wide">Urgent</span>
      </div>
      <div className="font-data-mono text-data-mono text-on-surface-variant flex gap-default">
      <span>ID: PT-8429</span>
      <span>DOB: 1982-05-14 (41y)</span>
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
                              Patient presents with severe chest pain radiating to left arm. Diaphoretic. Vitals unstable upon EMS arrival. Initiating STEMI protocol. Awaiting ECG interpretation.
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
      <span className="font-label-md text-label-md font-semibold text-on-surface">ECG Ordered</span>
      <span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant">10:42 AM</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Ordered by Dr. R. Vance. Stat priority.</p>
      </div>
      </div>
      {/* Event 2 */}
      <div className="flex gap-compact relative z-10 py-compact">
      <div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center mt-0.5">
      <Check  style={{fontSize: "14px"}} className="text-outline-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-label-md text-label-md text-on-surface">Vitals Recorded</span>
      <span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant">10:35 AM</span>
      </div>
      <div className="font-data-mono text-data-mono text-[11px] bg-surface-container-low p-1.5 rounded inline-block text-on-surface">
                                          BP: 160/95 | HR: 110 | O2: 94%
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
      <span className="font-label-md text-label-md text-on-surface">Patient Arrived (EMS)</span>
      <span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant">10:30 AM</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Drawer Footer / Actions */}
      <div className="p-default border-t border-outline-variant bg-surface flex justify-end gap-compact">
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
