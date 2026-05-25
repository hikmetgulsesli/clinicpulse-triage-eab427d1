// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Patient Editor - ClinicPulse Triage
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, CircleUserRound, Info, Menu, Plus, Save, Settings } from "lucide-react";


export type PatientEditorClinicpulseTriageActionId = "add-patient-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "save-now-6" | "cancel-edit-7" | "save-record-8" | "operations-1" | "triage-board-2" | "settings-3" | "support-4";

export interface PatientEditorClinicpulseTriageProps {
  actions?: Partial<Record<PatientEditorClinicpulseTriageActionId, () => void>>;
}

export function PatientEditorClinicpulseTriage({ actions }: PatientEditorClinicpulseTriageProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low flex flex-col h-screen py-default px-compact fixed left-0 w-[240px] border-r border-outline-variant dark:border-outline-variant z-20 hidden md:flex">
      <div className="mb-relaxed px-compact flex items-center gap-compact">
      <Circle  data-weight="fill" className="text-primary text-display-lg" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface leading-tight">ClinicPulse</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Emergency Triage</p>
      </div>
      </div>
      <ul className="flex flex-col gap-base flex-grow">
      {/* Operations Active */}
      <li>
      <a className="flex items-center gap-compact px-compact py-compact rounded-DEFAULT text-primary dark:text-on-primary-fixed-variant font-bold border-r-2 border-primary dark:border-on-primary-fixed-variant bg-surface-container-highest dark:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle className="fill-icon" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-compact px-compact py-compact rounded-DEFAULT text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="triage-board-2" onClick={actions?.["triage-board-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Triage Board</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto flex flex-col gap-base">
      <button className="w-full flex justify-center items-center gap-compact bg-primary text-on-primary py-compact rounded-lg hover:opacity-90 transition-opacity mb-compact" type="button" data-action-id="add-patient-1" onClick={actions?.["add-patient-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-bold text-label-bold">Add Patient</span>
      </button>
      <ul className="flex flex-col gap-base border-t border-outline-variant pt-compact">
      <li>
      <a className="flex items-center gap-compact px-compact py-compact rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-compact px-compact py-compact rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-200 ease-in-out" href="#" data-action-id="support-4" onClick={actions?.["support-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 md:ml-[240px]">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant flex justify-between items-center h-12 px-margin-desktop z-10 sticky top-0 transition-colors duration-150">
      <div className="flex items-center gap-gutter">
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-low p-1 rounded-DEFAULT transition-colors duration-150" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface">
                          ClinicPulse Triage
                      </div>
      </div>
      <div className="flex items-center gap-compact">
      <button className="text-on-surface-variant hover:bg-surface-container-low p-compact rounded-full transition-colors duration-150 flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-low p-compact rounded-full transition-colors duration-150 flex items-center justify-center" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-low p-compact rounded-full transition-colors duration-150 flex items-center justify-center" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Unsaved Changes Banner */}
      <div className="bg-surface-container-highest border-b border-outline-variant px-margin-desktop py-compact flex justify-between items-center text-on-surface-variant" id="unsaved-banner">
      <div className="flex items-center gap-compact">
      <Info className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">You have unsaved changes.</span>
      </div>
      <button className="font-label-bold text-label-bold text-primary underline" type="button" data-action-id="save-now-6" onClick={actions?.["save-now-6"]}>Save Now</button>
      </div>
      {/* Scrollable Form Area */}
      <div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-background">
      <div className="max-w-3xl mx-auto">
      <div className="mb-gutter flex items-center justify-between">
      <div>
      <h2 className="font-headline-md text-headline-md text-on-surface">Patient Record</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Create or edit patient intake information.</p>
      </div>
      </div>
      <form className="space-y-gutter bg-surface-container-lowest p-margin-desktop rounded-lg border border-outline-variant shadow-sm">
      {/* Form Section: Identity */}
      <div className="border-b border-surface-container pb-gutter">
      <h3 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider mb-compact">Identity</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Full Name */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="fullName">
                                          Full Name <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input className="w-full bg-surface border-error text-on-surface font-body-md text-body-md rounded-DEFAULT px-compact py-2 focus:ring-1 focus:ring-error focus:border-error transition-colors" id="fullName" placeholder="e.g. Jane Doe" type="text" defaultValue="" />
      <div className="absolute inset-y-0 right-0 pr-compact flex items-center pointer-events-none">
      <Circle className="text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <p className="mt-1 font-body-sm text-body-sm text-error flex items-center gap-1">
                                          Full name is required for patient identification.
                                      </p>
      </div>
      {/* Date of Birth */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="dob">
                                          Date of Birth <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input className="w-full bg-surface border-outline-variant text-on-surface font-body-md text-body-md rounded-DEFAULT px-compact py-2 focus:ring-1 focus:ring-primary focus:border-primary transition-colors" id="dob" type="date" />
      </div>
      </div>
      </div>
      </div>
      {/* Form Section: Clinical */}
      <div className="border-b border-surface-container pb-gutter">
      <h3 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider mb-compact">Clinical Assessment</h3>
      {/* Triage Priority */}
      <div className="mb-gutter">
      <label className="block font-label-md text-label-md text-on-surface mb-2">
                                      Triage Priority <span className="text-error">*</span>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-compact">
      <label className="cursor-pointer">
      <input className="peer sr-only" name="priority" type="radio" defaultValue="critical" />
      <div className="rounded-DEFAULT border border-outline-variant py-2 px-compact text-center font-label-md text-label-md text-on-surface-variant peer-checked:bg-error peer-checked:text-on-error peer-checked:border-error transition-colors hover:bg-surface-container-high">
                                              Critical (1)
                                          </div>
      </label>
      <label className="cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="priority" type="radio" defaultValue="urgent" />
      <div className="rounded-DEFAULT border border-outline-variant py-2 px-compact text-center font-label-md text-label-md text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors hover:bg-surface-container-high">
                                              Urgent (2)
                                          </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="priority" type="radio" defaultValue="moderate" />
      <div className="rounded-DEFAULT border border-outline-variant py-2 px-compact text-center font-label-md text-label-md text-on-surface-variant peer-checked:bg-surface-container-highest peer-checked:text-on-surface transition-colors hover:bg-surface-container-high">
                                              Moderate (3)
                                          </div>
      </label>
      <label className="cursor-pointer">
      <input className="peer sr-only" name="priority" type="radio" defaultValue="low" />
      <div className="rounded-DEFAULT border border-outline-variant py-2 px-compact text-center font-label-md text-label-md text-on-surface-variant peer-checked:bg-surface-container-lowest peer-checked:text-on-surface transition-colors hover:bg-surface-container-high">
                                              Low (4)
                                          </div>
      </label>
      </div>
      </div>
      {/* Chief Complaint */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="complaint">
                                      Chief Complaint <span className="text-error">*</span>
      </label>
      <textarea className="w-full bg-surface border-outline-variant text-on-surface font-body-md text-body-md rounded-DEFAULT px-compact py-2 focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none" id="complaint" placeholder="Describe the primary reason for visit..." rows={4}></textarea>
      <div className="flex justify-between mt-1">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Be concise and objective.</span>
      <span className="font-data-mono text-data-mono text-on-surface-variant">0/250</span>
      </div>
      </div>
      </div>
      {/* Form Section: Admin */}
      <div>
      <h3 className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider mb-compact">Administrative</h3>
      {/* Consent Status */}
      <div className="flex items-start gap-compact">
      <div className="flex items-center h-5 mt-1">
      <input className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary focus:ring-2 bg-surface cursor-pointer" id="consent" type="checkbox" />
      </div>
      <div className="text-sm">
      <label className="font-label-md text-label-md text-on-surface cursor-pointer" htmlFor="consent">Consent to Treat Obtained</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Patient or guardian has signed the standard consent form.</p>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="pt-gutter mt-gutter border-t border-surface-container flex flex-col-reverse md:flex-row justify-end gap-compact">
      <button className="px-gutter py-2 rounded-lg font-label-bold text-label-bold text-on-surface bg-surface border border-outline-variant hover:bg-surface-container-highest transition-colors w-full md:w-auto" type="button" data-action-id="cancel-edit-7" onClick={actions?.["cancel-edit-7"]}>
                                  Cancel Edit
                              </button>
      <button className="px-gutter py-2 rounded-lg font-label-bold text-label-bold text-on-primary bg-primary hover:opacity-90 transition-opacity w-full md:w-auto flex items-center justify-center gap-compact" type="submit" data-action-id="save-record-8" onClick={actions?.["save-record-8"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Save Record
                              </button>
      </div>
      </form>
      </div>
      </div>
      </main>
    </>
  );
}
