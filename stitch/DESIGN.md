---
name: Clinical Determinism
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  compact: 8px
  default: 16px
  relaxed: 24px
  margin-mobile: 12px
  margin-desktop: 24px
  gutter: 16px
---

## Brand & Style
The design system is engineered for high-stakes medical environments where speed of data ingestion and accuracy of decision-making are paramount. The brand personality is rooted in **Clinical Determinism**: it is authoritative, quiet, and utterly reliable. 

The aesthetic follows a **Corporate/Modern** movement with heavy influences from **Minimalism**. By removing all decorative elements, the design system ensures that the only vibrant elements in the UI are those carrying critical medical information (priority statuses, alerts, and vitals). The UI remains "calm under pressure" by using a systematic approach to density—maximizing information per square inch without causing cognitive overload through the use of strict alignment and a cold, professional palette.

## Colors
This design system utilizes a foundation of **Deep Slate** and **Clinical Blues** to establish a professional, grounded atmosphere. The primary navigation and headers use slate to provide a strong structural frame. 

The background is a crisp, clean white (`#FFFFFF`) or an off-white neutral (`#F8FAFC`) to minimize eye strain during long shifts. Semantic colors are strictly reserved for triage priority:
- **Urgent:** A high-visibility red for immediate life-threats.
- **High:** A vivid orange for acute conditions.
- **Moderate:** A focused yellow for stable but serious cases.
- **Low:** A calm green for non-urgent care.

Avoid using these semantic colors for any purpose other than triage status to prevent "alert fatigue."

## Typography
The design system relies on **Inter** for its exceptional legibility and neutral tone. The typographic scale is built for density, prioritizing `body-md` and `body-sm` for most table-based data. 

To aid in quick scanning:
- Patient names should use `headline-sm`.
- Priority levels and room numbers use `label-bold` for immediate recognition.
- Time-stamps and numeric vitals use a monospaced font (JetBrains Mono) to ensure tabular alignment and prevent digit-shifting during live updates.
- All headings should use a tight letter-spacing to maintain a structured, clinical feel.

## Layout & Spacing
The layout uses a **Fluid Grid** model with high-density vertical rhythm. On desktop, the primary workspace is a multi-pane layout: a persistent left navigation (64px collapsed/240px expanded) and a main content area that expands to fill the screen.

Key layout principles:
- **Density:** Use 8px (`compact`) increments for internal component spacing to maximize data visibility.
- **Drawers:** Patient details are surfaced via side-drawers (480px width) that overlay the right side of the screen, allowing the clinician to maintain context of the triage list.
- **Breakpoints:**
  - **Mobile (<600px):** Single column. Side-drawers become full-screen modals.
  - **Tablet (600px - 1024px):** 2-column grid. Side-drawers occupy 50% width.
  - **Desktop (>1024px):** Dashboard-style layout with persistent headers and collapsible side-drawers.

## Elevation & Depth
In this design system, depth is used sparingly to signify interactivity and layer hierarchy without adding visual clutter.

- **Tonal Layers:** The primary interface is flat. Hierarchy is established by shifting background colors: `#FFFFFF` for the primary work surface, `#F1F5F9` for secondary sidebars.
- **Low-Contrast Outlines:** Instead of heavy shadows, use 1px borders (`#E2E8F0`) to define containers.
- **Ambient Shadows:** Reserve shadows only for temporary elevated elements like side-drawers or dropdown menus. Use a subtle, diffused shadow: `0 4px 12px rgba(0, 0, 0, 0.05)`. 
- **Backdrop Blurs:** Use a 4px blur on drawer backdrops to focus attention on the patient record while keeping the triage list visible in a defocused state.

## Shapes
The design system adopts a **Soft (1)** shape language. The subtle 4px (0.25rem) radius provides a modern touch while maintaining a disciplined, architectural feel. 

- **Containers & Tables:** 0px or 4px radius.
- **Buttons & Inputs:** 4px radius.
- **Status Badges:** 4px radius (avoid pill shapes to keep the professional, rectangular grid intact).
- **Icons:** Use sharp or slightly rounded functional icons (e.g., Lucide or Phosphor) to match the clinical aesthetic.

## Components
- **Tables:** The core of the product. Rows must have a fixed height (48px) to maximize data density. Use alternating row stripes or subtle hover states to guide the eye.
- **Priority Badges:** High-contrast background with white text for "Urgent" and "High"; low-contrast background with dark text for "Moderate" and "Low."
- **Status Chips:** Small, rectangular badges with neutral borders for room status (e.g., "In-Progress," "Cleaning," "Available").
- **Input Fields:** Use "Quiet" styling—thin borders that darken on focus. Label placement should be top-aligned and small to minimize vertical space.
- **Side-Drawers:** Fixed to the right. Should include a header with a "Close" action and the patient's primary ID and triage level pinned to the top.
- **Multi-step Forms:** Use a vertical progress stepper in the drawer's left rail to show triage completion progress.
- **Empty States:** Center-aligned, using `body-md` text in slate-400. No illustrations; use functional icons only if necessary.