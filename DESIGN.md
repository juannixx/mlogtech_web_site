---
name: MLogTech
description: Delivery management software for the UK market — route planning, driver app, electronic proof of delivery, live tracking.
colors:
  bg: "#f6f9fb"
  surface: "#ffffff"
  surface-2: "#e9eff4"
  ink: "#0b2740"
  body: "#3d5468"
  muted: "#526679"
  brand: "#11769d"
  accent: "#c9e837"
  accent-ink: "#0b2740"
  accent-text: "#0e6285"
  accent-hover: "#d6f04d"
  ok: "#1b7f3b"
  err: "#c22b2b"
  fixed-dark: "#0b2740"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.55rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, SF Mono, Cascadia Mono, Menlo, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.02em"
  # Supporting scale for body/caption text below the six semantic roles above.
  # These are the rationalized steps used across the pages (Archivo, weight 400
  # unless the element sets otherwise); one canonical value per step, no drift.
  subhead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.15rem"
    lineHeight: 1.3
  bodyLarge:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.02rem"
    lineHeight: 1.55
  bodySmall:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    lineHeight: 1.5
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9rem"
    lineHeight: 1.45
  fine:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.85rem"
    lineHeight: 1.4
  micro:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    lineHeight: 1.35
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.md}"
    padding: "0.82em 1.5em"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.accent-ink}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.82em 1.5em"
  textlink:
    textColor: "{colors.accent-text}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: "28px"
  focal-tile:
    backgroundColor: "{colors.fixed-dark}"
    textColor: "#f2f6f9"
    rounded: "{rounded.md}"
    padding: "40px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.72em 0.85em"
  cta-banner:
    backgroundColor: "{colors.fixed-dark}"
    textColor: "#f2f6f9"
    padding: "clamp(3.5rem, 7vw, 6rem) 0"
---

# Design System: MLogTech

## 1. Overview

**Creative North Star: "The Hi-Vis Signal"**

MLogTech is a delivery management platform for UK fleet operators, and its surface reads like the operation it runs: a calm navy ground with one loud, unmissable signal. The body sits on a cool near-white by day and a deep charcoal-navy by night; the ink and structure are navy and steel blue, lifted straight from the logo. Against that quiet ground, a single hi-vis yellow-green marks every point of action, the way a safety vest or a road marking is the one thing the eye is built to find. Color is not decoration here; it is wayfinding.

The system is deliberately sober and operational. It speaks the operator's language (DVSA, depot, last mile, ePOD), states facts without superlatives, and never shouts except through that one accent. It rejects the two reflexes of its category: the competitor's orange (Track-POD owns that lane) and the generic all-blue SaaS wash that every fleet tool defaults to. The navy carries trust, the steel carries the product, and the hi-vis carries the ask.

Density is comfortable, not dense: generous section rhythm, a single typeface working across the whole scale, and structure held together by hairlines and surface-tone shifts rather than heavy chrome. Every screen should be legible to a logistics manager reading it in daylight on a corporate desktop, and equally clear to a driver glancing at a phone.

**Key Characteristics:**
- One action color (hi-vis `#c9e837`), used only where the user should act.
- Navy + steel identity pulled from the logo; no orange, ever.
- Light theme is the default; dark theme is a true mirror, not an afterthought.
- A single variable typeface (Archivo) plus system mono for tactical data.
- Depth by hairline and tone, not by heavy shadow.

## 2. Colors

A cool navy-and-steel neutral system carrying a single high-visibility action color; restrained by doctrine, with the accent spent sparingly so it never stops meaning "act here."

### Primary
- **Signal Hi-Vis** (`#c9e837`): The one action color. Primary button fills, the focal-tile CTA, selected toggle states, small data markers. Always paired with navy ink on top (`#0b2740`, 10.94:1), never used as text on a light surface (it fails contrast badly, ~1.3:1). This is the "signal" of the North Star.
- **Depot Navy** (`#0b2740`): The ink of the system. All headings and strong text on light; the fill of fixed-dark focal tiles and CTA bands; the text color that sits on the hi-vis. Carries trust and structure.

### Secondary
- **Steel Blue** (`#11769d`): The logo's working blue. Support elements and, in the dark theme, the link color. Available as a text color on light at 4.84:1 (the tightest pass in the system; prefer Link Teal for body-copy links).
- **Link Teal** (`#0e6285`): The light-theme link and small-label color. A darker steel that clears 4.5:1 comfortably (6.40:1 on bg). In the dark theme this token swaps to Steel Blue lightened (`#4fa8cc`, 6.84:1) so links never render in hi-vis.

### Neutral
- **Day Ground** (`#f6f9fb`): Light-theme body background. A cool near-white tinted toward the brand's own hue, not warm.
- **Surface White** (`#ffffff`): Cards, panels, dropdowns on light.
- **Surface Band** (`#e9eff4`): Alternating section bands and zebra rows on light.
- **Body Ink** (`#3d5468`): Body copy on light (7.45:1 on bg).
- **Muted Ink** (`#526679`): Metadata and captions on light (5.62:1 on bg). Minimum 14px; never for essential text.
- **Night Ground** (`#0a1520`) / **Night Surface** (`#122230`) / **Night Band** (`#071019`): The dark-theme grounds. In dark, body is `#a9bdcb` (9.49:1), muted is `#8299ab` (6.22:1), ink is `#f2f6f9`.
- **Hairlines**: `rgba(11,39,64,0.10)` weak / `rgba(11,39,64,0.22)` strong on light; the inverse in dark. These, not shadows, carry most structure.

### Feedback
- **Confirm Green** (`#1b7f3b` light / `#4cc073` dark): Table checkmarks, positive feedback. Deliberately not the hi-vis, so "done" never reads as "act."
- **Error Red** (`#c22b2b` light / `#ff7a7a` dark): Form errors only.

### Named Rules
**The Signal Rule.** Hi-vis `#c9e837` marks action and nothing else: buttons, the focal CTA, selected states. It is never a link color, never a heading, never a decorative wash. If hi-vis appears on something that is not clickable, it is a bug. Its rarity is what makes it a signal.

**The No-Orange Rule.** Orange is the competitor's color (Track-POD) and is forbidden anywhere in the system. Warmth, energy and urgency are carried by the hi-vis and by imagery, never by orange.

## 3. Typography

**Display / Body / UI Font:** Archivo (variable, self-hosted, weights 100–900), with `system-ui, sans-serif` fallback.
**Tactical Data Font:** system monospace stack (`ui-monospace, SF Mono, Cascadia Mono, Menlo`), zero download.

**Character:** One grotesque family does the entire job, from 3.6rem display down to 0.8rem labels, held together by decisive weight contrast (800 display against 400 body) rather than a second face. The system mono appears only on tactical figures (step markers, "Available now" labels, pricing numerics, effective per-order cost), where a fixed-width, slightly technical texture signals "this is a number to read precisely."

### Hierarchy
- **Display** (800, `clamp(2.3rem, 5vw, 3.6rem)`, 1.05, -0.02em): Page H1 and hero headings only.
- **Headline** (700, `clamp(1.9rem, 3.4vw, 2.75rem)`, 1.1): Section headings.
- **Title** (700, `clamp(1.25rem, 2vw, 1.55rem)`, 1.15): Card and sub-section headings.
- **Lead** (400, 1.125rem, 1.6): Opening paragraph under a heading; max ~58ch.
- **Body** (400, 1.0625rem/17px, 1.6): Running copy; capped 65–75ch.
- **Label** (500 mono, 0.8rem, 0.02em): Tactical data and short markers only.

### Named Rules
**The One Family Rule.** Archivo carries the whole hierarchy; contrast comes from weight and size, not from a second typeface. The only other face allowed is the system mono, and only for tactical figures. (The prototype's IBM Plex Mono labels were removed for exactly this reason.)

**The Balanced Heading Rule.** H1–H3 use `text-wrap: balance`; long prose uses `text-wrap: pretty`. Display letter-spacing never tightens past -0.02em.

## 4. Elevation

Depth is carried primarily by hairlines and surface-tone shifts, not by shadow. In the light theme a restrained three-step shadow scale lifts only the elements that genuinely float (cards on hover, the demo form panel, product mockups). In the dark theme shadows are switched off entirely (they do not read on a near-black ground); separation there comes from surface-tone steps (`#0a1520` ground → `#122230` surface) plus hairlines.

### Shadow Vocabulary (light theme only)
- **Shadow SM** (`0 1px 2px rgba(11,39,64,0.06)`): Barely-there lift for resting cards.
- **Shadow MD** (`0 4px 16px rgba(11,39,64,0.08)`): Form panels, mockups, emphasized cards.
- **Shadow LG** (`0 12px 40px rgba(11,39,64,0.12)`): Dropdown menus escaping the header.

### Named Rules
**The Hairline-First Rule.** Reach for a `1px` hairline or a surface-tone shift before a shadow. Shadows are for things that float; everything else is separated by line and tone. In dark mode there are no shadows at all.

## 5. Components

The character across all components is **sober and operational**: factual, unfussy, built for a logistics manager to read in daylight. Discreet borders, one decisive accent, nothing decorative.

### Buttons
- **Shape:** Gently rounded (12px, `--r`).
- **Primary:** Hi-vis fill (`#c9e837`) with navy ink (`#0b2740`); padding `0.82em 1.5em`, weight 600. The only hi-vis-filled element class.
- **Ghost:** Transparent on a `1px` strong hairline, navy/ink text; border shifts toward steel on hover.
- **Hover / Focus:** Both lift `translateY(-2px)` on the `--ease` curve (`cubic-bezier(0.16,1,0.3,1)`); focus-visible is a 2px `accent-text` outline at 3px offset. Reduced-motion removes the lift.

### Cards / Containers
- **Corner Style:** 12px (`--r`); large panels 20px (`--r-lg`).
- **Background:** Surface White on light / Night Surface on dark; alternating sections sit on Surface Band.
- **Border:** `1px` weak hairline. This, plus the surface-tone shift, is the separation; shadow only on hover or for floating panels.
- **Internal Padding:** 24–28px (`--space-lg` and up).

### Focal Tile (signature)
- The asymmetric bento's emphasis panel: a **fixed navy tile** (`#0b2740`) that stays navy in both themes (literal color, not a theme-swapped token), with light heading (`#f2f6f9`), 82%-white body, and a hi-vis CTA link. A `1px` hairline defines its edge against the near-black dark ground. Used to anchor a section that would otherwise be an even card row.

### Inputs / Fields
- **Style:** Surface background, `1px` strong hairline, 8px radius (`--r-sm`), `font-size: 1rem` (never below 16px, to stop iOS zoom).
- **Focus:** 2px `accent-text` outline, 3px offset.
- **Error:** `#c22b2b` message text; native validation drives required/format.

### Navigation
- **Style:** Sticky header, translucent bg with light blur, `1px` bottom hairline; theme-swapped logo image (blue on light, white on dark). Dropdowns for Solutions/Features are keyboard-accessible (arrow/Esc), open on click.
- **States:** Nav links are body-color, shifting to ink on hover; the primary CTA ("Try for free") is the one hi-vis button in the bar.

### CTA Banner (signature)
- The one **drenched** moment per page: a full-bleed fixed-navy band (`#0b2740`, both themes) with light text and a hi-vis primary button. Closes long pages.

### FAQ
- Native `<details>/<summary>` accordion (no JS), `1px` hairline dividers, a hi-vis-colored plus glyph that rotates on open. Emits FAQPage schema.

## 6. Do's and Don'ts

### Do:
- **Do** spend hi-vis (`#c9e837`) only on action: buttons, the focal-tile CTA, selected states. Keep it under a small fraction of any screen.
- **Do** use navy (`#0b2740`) for ink and steel/teal for links; in dark mode links are steel (`#4fa8cc`), never hi-vis.
- **Do** carry one typeface (Archivo) across the whole scale; use system mono only for tactical figures.
- **Do** separate with hairlines and surface tone first; add shadow only for things that float, and never in dark mode.
- **Do** keep fixed-dark bands and the focal tile literal navy in both themes (they are drenched moments, not theme-swapped surfaces).
- **Do** keep body ≥16px inputs, body copy 65–75ch, and every text/background pair at WCAG AA (validated: 27/27 pairs pass).
- **Do** number a section only when the order carries real information (the 4-step how-it-works). Parallel items get no numbers.

### Don't:
- **Don't** use orange anywhere. It is the competitor's color; the No-Orange Rule is absolute.
- **Don't** render hi-vis as a text color on a light surface (fails ~1.3:1), and don't let hi-vis land on non-interactive elements; that breaks the Signal Rule.
- **Don't** introduce a second typeface for "contrast"; weight and size carry the hierarchy (the prototype's mono labels were removed for this reason).
- **Don't** stack identical card grids section after section; break the meter with an asymmetric bento, an alternating image/text row, or a single panel (see the home mid-page).
- **Don't** scaffold with `01 / 02 / 03` eyebrows on parallel content; numbers are for genuine sequences only.
- **Don't** rely on shadows for structure, and never ship shadows in dark mode.
- **Don't** publish invented trust signals: no fabricated client logos, testimonials, or metrics. Real proof or none.
