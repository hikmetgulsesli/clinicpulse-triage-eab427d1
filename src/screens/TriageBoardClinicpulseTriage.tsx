// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Triage Board - ClinicPulse Triage
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Search, Settings, TriangleAlert } from "lucide-react";


export type TriageBoardClinicpulseTriageActionId = "add-patient-1" | "button-2-2" | "button-3-3" | "button-4-4" | "assign-room-5" | "button-6-6" | "check-labs-7" | "button-8-8" | "operations-1" | "triage-board-2" | "settings-3" | "support-4";

export interface TriageBoardClinicpulseTriageProps {
  actions?: Partial<Record<TriageBoardClinicpulseTriageActionId, () => void>>;
}

export function TriageBoardClinicpulseTriage({ actions }: TriageBoardClinicpulseTriageProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low docked left-0 h-full w-[240px] border-r border-outline-variant dark:border-outline-variant flat no shadows flex flex-col h-screen py-default px-compact hidden md:flex shrink-0">
      <div className="mb-relaxed px-compact">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">ClinicPulse</h1>
      <p className="font-label-md text-label-md text-on-surface-variant mt-base">Emergency Triage</p>
      </div>
      <button className="w-full bg-primary text-on-primary py-compact rounded font-label-bold text-label-bold mb-relaxed hover:bg-inverse-surface transition-colors duration-200" type="button" data-action-id="add-patient-1" onClick={actions?.["add-patient-1"]}>
                  Add Patient
              </button>
      <ul className="flex-1 space-y-base">
      <li>
      <a className="flex items-center px-compact py-compact rounded transition-colors duration-200 ease-in-out text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="mr-compact text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center px-compact py-compact rounded transition-colors duration-200 ease-in-out text-primary dark:text-on-primary-fixed-variant font-bold border-r-2 border-primary dark:border-on-primary-fixed-variant bg-surface-container-highest" href="#" data-action-id="triage-board-2" onClick={actions?.["triage-board-2"]}>
      <Circle className="mr-compact text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Triage Board</span>
      </a>
      </li>
      </ul>
      <ul className="mt-auto space-y-base pt-default border-t border-outline-variant">
      <li>
      <a className="flex items-center px-compact py-compact rounded transition-colors duration-200 ease-in-out text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="mr-compact text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center px-compact py-compact rounded transition-colors duration-200 ease-in-out text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest" href="#" data-action-id="support-4" onClick={actions?.["support-4"]}>
      <Circle className="mr-compact text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </li>
      </ul>
      <div className="mt-default px-compact flex items-center">
      <img alt="Clinician Profile" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small, circular profile picture of a female medical professional wearing scrubs, shot in high-key lighting against a pure white background. The image is crisp, professional, and conveys a sense of trust and clinical competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhmxCeyQ5Y0kKD4BvBT4-xbmG63dvSk5liDYs5EwmlOtEyVRHhKg8Vk4sq0-Y-0tsaHx-fr-w_LdiorD5qiDxODWntIQrBWQfHn8ltgt_HSr-dP7t4maHxDVCyJwZXQnCLkG4QFcMgTMO8rY0qeg9JVs-5DpnM_G54dX0D0SMDAu5bZ01ieGTuCmSXdrS4ZJm1JnH8L1jrxQniD_4LyqK7bkIPJdbm78kyvGf3-Mn1lw-vIfv4lhhscHyyjIRmN5ve1d6fK2LG5V8" />
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface docked top-0 w-full border-b border-outline-variant dark:border-outline-variant flat no shadows flex justify-between items-center h-12 px-margin-desktop shrink-0">
      <div className="flex items-center">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface">ClinicPulse Triage</span>
      </div>
      <div className="flex-1 max-w-md ml-margin-desktop hidden lg:block">
      <div className="relative">
      <Search className="absolute left-compact top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded py-[6px] pl-8 pr-compact font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors focus:ring-0" placeholder="Search patients..." type="text" />
      </div>
      </div>
      <div className="flex items-center space-x-compact ml-auto">
      <button className="p-compact rounded hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-150 text-on-surface-variant" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-compact rounded hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-150 text-on-surface-variant" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-compact rounded hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-150 text-on-surface-variant" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Kanban Board Area */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden p-margin-desktop bg-surface-bright">
      <div className="flex space-x-gutter h-full min-w-max pb-default">
      {/* Urgent Lane */}
      <div className="w-[320px] flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded-lg shrink-0">
      <div className="p-compact border-b border-outline-variant bg-[#fff5f5] rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
      <span className="w-2 h-2 rounded-full bg-error mr-compact"></span>
      <h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Urgent (Red)</h2>
      </div>
      <span className="bg-error text-on-error px-2 py-0.5 rounded font-data-mono text-[11px]">2</span>
      </div>
      <div className="flex-1 overflow-y-auto p-compact space-y-compact">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-error rounded p-compact shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
      <div className="flex justify-between items-start mb-base">
      <span className="font-label-bold text-label-bold text-on-surface">Doe, John</span>
      <span className="font-data-mono text-data-mono text-error font-bold">14m</span>
      </div>
      <div className="text-body-sm font-body-sm text-on-surface-variant mb-compact">
                                      Chest pain, shortness of breath.
                                  </div>
      <div className="flex justify-between items-center mb-compact">
      <div className="flex space-x-base">
      <span className="px-1.5 py-0.5 rounded border border-outline-variant text-[10px] font-label-bold text-on-surface-variant uppercase">Ready</span>
      <TriangleAlert className="text-error text-[14px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-data-mono text-[11px] text-on-surface-variant">ID: 8492-A</span>
      </div>
      <div className="flex space-x-base mt-2 border-t border-outline-variant pt-2">
      <button className="flex-1 text-center py-1 bg-surface-container text-on-surface font-label-bold text-[11px] rounded hover:bg-surface-container-high transition-colors" type="button" data-action-id="assign-room-5" onClick={actions?.["assign-room-5"]}>Assign Room</button>
      <button className="px-2 py-1 bg-surface-container text-on-surface rounded hover:bg-surface-container-high transition-colors" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}><Circle className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      {/* High Lane */}
      <div className="w-[320px] flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded-lg shrink-0">
      <div className="p-compact border-b border-outline-variant bg-[#fff8e6] rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
      <span className="w-2 h-2 rounded-full bg-[#d97706] mr-compact"></span>
      <h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">High (Yellow)</h2>
      </div>
      <span className="bg-[#d97706] text-white px-2 py-0.5 rounded font-data-mono text-[11px]">1</span>
      </div>
      <div className="flex-1 overflow-y-auto p-compact space-y-compact">
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-compact shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-[#d97706] transition-colors">
      <div className="flex justify-between items-start mb-base">
      <span className="font-label-bold text-label-bold text-on-surface">Smith, Mary</span>
      <span className="font-data-mono text-data-mono text-[#d97706] font-bold">45m</span>
      </div>
      <div className="text-body-sm font-body-sm text-on-surface-variant mb-compact">
                                      Severe abdominal pain.
                                  </div>
      <div className="flex justify-between items-center mb-compact">
      <div className="flex space-x-base">
      <span className="px-1.5 py-0.5 rounded border border-outline-variant text-[10px] font-label-bold text-on-surface-variant uppercase bg-surface-container-low">Lab Pend</span>
      </div>
      <span className="font-data-mono text-[11px] text-on-surface-variant">ID: 1102-B</span>
      </div>
      <div className="flex space-x-base mt-2 border-t border-outline-variant pt-2">
      <button className="flex-1 text-center py-1 bg-surface-container text-on-surface font-label-bold text-[11px] rounded hover:bg-surface-container-high transition-colors" type="button" data-action-id="check-labs-7" onClick={actions?.["check-labs-7"]}>Check Labs</button>
      <button className="px-2 py-1 bg-surface-container text-on-surface rounded hover:bg-surface-container-high transition-colors" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}><Circle className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      {/* Moderate Lane */}
      <div className="w-[320px] flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded-lg shrink-0">
      <div className="p-compact border-b border-outline-variant bg-[#f0fdf4] rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
      <span className="w-2 h-2 rounded-full bg-[#16a34a] mr-compact"></span>
      <h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Moderate (Green)</h2>
      </div>
      <span className="bg-[#16a34a] text-white px-2 py-0.5 rounded font-data-mono text-[11px]">0</span>
      </div>
      <div className="flex-1 overflow-y-auto p-compact space-y-compact flex items-center justify-center">
      <div className="text-center text-on-surface-variant">
      <Circle className="text-[32px] mb-compact opacity-50" aria-hidden={true} focusable="false" />
      <p className="font-body-sm text-body-sm">No patients in queue</p>
      </div>
      </div>
      </div>
      {/* Low Lane */}
      <div className="w-[320px] flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded-lg shrink-0">
      <div className="p-compact border-b border-outline-variant bg-surface-container-low rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
      <span className="w-2 h-2 rounded-full bg-outline mr-compact"></span>
      <h2 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider">Low (Blue)</h2>
      </div>
      <span className="bg-outline text-white px-2 py-0.5 rounded font-data-mono text-[11px]">0</span>
      </div>
      <div className="flex-1 overflow-y-auto p-compact space-y-compact flex items-center justify-center">
      <div className="text-center text-on-surface-variant">
      <Circle className="text-[32px] mb-compact opacity-50" aria-hidden={true} focusable="false" />
      <p className="font-body-sm text-body-sm">No patients in queue</p>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
