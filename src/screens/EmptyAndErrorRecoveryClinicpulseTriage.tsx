// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - ClinicPulse Triage
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Info, Menu, Plus, RefreshCw, Search, Settings } from "lucide-react";


export type EmptyAndErrorRecoveryClinicpulseTriageActionId = "add-patient-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "retry-load-6" | "create-patient-7" | "clear-all-filters-8" | "operations-1" | "triage-board-2" | "settings-3" | "support-4";

export interface EmptyAndErrorRecoveryClinicpulseTriageProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryClinicpulseTriageActionId, () => void>>;
}

export function EmptyAndErrorRecoveryClinicpulseTriage({ actions }: EmptyAndErrorRecoveryClinicpulseTriageProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen py-default px-compact bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-on-primary-fixed-variant fixed left-0 w-[240px] border-r border-outline-variant dark:border-outline-variant transition-colors duration-200 ease-in-out z-20">
      <div className="mb-relaxed flex items-center gap-compact px-compact py-compact">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">ClinicPulse</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Emergency Triage</p>
      </div>
      </div>
      <button className="bg-primary text-on-primary rounded-lg py-compact px-default flex items-center justify-center gap-compact mb-default hover:bg-inverse-surface transition-colors duration-200" type="button" data-action-id="add-patient-1" onClick={actions?.["add-patient-1"]}>
      <Plus className="font-label-md text-label-md" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md font-bold">Add Patient</span>
      </button>
      <div className="flex-1 flex flex-col gap-base">
      <a className="flex items-center gap-compact px-compact py-compact rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="font-label-md text-label-md" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      <a className="flex items-center gap-compact px-compact py-compact rounded-lg text-primary dark:text-on-primary-fixed-variant font-bold border-r-2 border-primary dark:border-on-primary-fixed-variant bg-surface-container-highest dark:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="triage-board-2" onClick={actions?.["triage-board-2"]}>
      <Circle className="font-label-md text-label-md" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Triage Board</span>
      </a>
      </div>
      <div className="mt-auto flex flex-col gap-base border-t border-outline-variant pt-default">
      <a className="flex items-center gap-compact px-compact py-compact rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="font-label-md text-label-md" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-compact px-compact py-compact rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="support-4" onClick={actions?.["support-4"]}>
      <Circle className="font-label-md text-label-md" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[240px] h-screen overflow-hidden">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-12 px-margin-desktop bg-surface dark:bg-surface text-primary dark:text-on-primary-fixed-variant border-b border-outline-variant dark:border-outline-variant transition-colors duration-150 z-10">
      <div className="flex items-center gap-compact">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface hidden md:block">ClinicPulse Triage</span>
      {/* Mobile Menu Button */}
      <button className="md:hidden p-compact rounded-lg hover:bg-surface-container-low transition-colors text-on-surface-variant" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex items-center gap-compact">
      <div className="relative hidden sm:block">
      <Search className="absolute left-compact top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="pl-8 pr-compact py-1 bg-surface-container-low border border-outline-variant rounded-lg font-body-sm text-body-sm focus:outline-none focus:border-primary transition-colors w-64" placeholder="Search Patients..." type="text" />
      </div>
      <button className="p-compact rounded-full text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-150 relative" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="p-compact rounded-full text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-150" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-compact rounded-full text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-150" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Canvas (Empty State) */}
      <main className="flex-1 overflow-y-auto p-margin-desktop sm:p-relaxed flex items-center justify-center bg-background">
      <div className="max-w-md w-full flex flex-col items-center text-center">
      {/* Icon/Illustration Area (Functional, minimal) */}
      <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-relaxed border border-outline-variant border-dashed">
      <Circle  style={{fontVariationSettings: "'FILL' 0", fontSize: "48px"}} className="text-4xl text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      {/* Text Content */}
      <h2 className="font-headline-md text-headline-md text-on-surface mb-compact">No Patients Found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-default max-w-sm">
                          Your current active filters are hiding all patient records from the Triage Board. 
                      </p>
      <div className="bg-surface-container-low rounded-lg p-compact border border-outline-variant mb-relaxed w-full">
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-center gap-compact">
      <Info className="text-sm" aria-hidden={true} focusable="false" />
                              Register a new patient to get started or try refreshing the board.
                          </p>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-compact w-full justify-center">
      <button className="w-full sm:w-auto bg-primary text-on-primary font-label-md text-label-md font-bold py-compact px-default rounded-lg hover:bg-inverse-surface transition-colors flex items-center justify-center gap-compact" type="button" data-action-id="retry-load-6" onClick={actions?.["retry-load-6"]}>
      <RefreshCw className="text-sm" aria-hidden={true} focusable="false" />
                              Retry Load
                          </button>
      <button className="w-full sm:w-auto bg-surface text-primary border border-primary font-label-md text-label-md font-bold py-compact px-default rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-compact" type="button" data-action-id="create-patient-7" onClick={actions?.["create-patient-7"]}>
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
                              Create Patient
                          </button>
      </div>
      <button className="mt-default font-label-md text-label-md text-primary hover:underline flex items-center gap-compact transition-colors" type="button" data-action-id="clear-all-filters-8" onClick={actions?.["clear-all-filters-8"]}>
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
                          Clear All Filters
                      </button>
      </div>
      </main>
      </div>
    </>
  );
}
