---
name: La Ramada
description: The family's own comal, rendered as a website — char, steam, and ember heat.
colors:
  iron-black: "#141210"
  iron-black-deep: "#0b0a09"
  char-umber: "#3a2418"
  char-umber-soft: "#4d3020"
  ember-orange: "#e06a22"
  ember-bright: "#ff8c47"
  ember-dim: "#a8461a"
  lime: "#8faf3e"
  lime-bright: "#a7c957"
  butter: "#f4c244"
  cream: "#f3ead9"
  cream-dim: "#cbbfa8"
  cream-faint: "#8d8375"
typography:
  display:
    fontFamily: "Rye, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 5vw + 1rem, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Rye, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.9rem, 2.6vw + 1rem, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.04
  title:
    fontFamily: "Rye, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.25rem, 1vw + 1rem, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Archivo, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, -apple-system, Helvetica Neue, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
rounded:
  sm: "6px"
  pill: "999px"
spacing:
  1: "0.5rem"
  2: "0.875rem"
  3: "1.5rem"
  4: "2.5rem"
  5: "4rem"
  6: "6.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ember-orange}"
    textColor: "{colors.iron-black-deep}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.ember-bright}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
---

# Design System: La Ramada

## Overview

**Creative North Star: "The Family Comal"**

The site is the restaurant's own cast-iron comal, not a brand built to sit beside it. Everything — ground, dividers, motion, the featured-dish plaque — is drawn from the surface a family actually cooks on: seasoned iron gone near-black, ember heat glowing at the edges, steam rising off whatever is cooking now. This is a Persuade surface for a small-town Mexican family restaurant (Milton-Freewater, OR); the visual language exists to make the food look like it's still sizzling, not to look like a design system.

The system rejects two nearby defaults on purpose: the flag-color-and-clipart "Mexican restaurant" template (red/green/white blocking, stock cactus/sombrero art), and the inverse overcorrection into upscale minimalist "elevated Mexican" branding. Neither belongs to a family-run kitchen in an agricultural valley. Food is shown as authored line-art illustration (steak strips, peppers, onions, steam) rather than stock or placeholder photography — no real photos exist yet, and faking photographic material would be a worse lie than an honest illustration.

**Key Characteristics:**
- Near-black cast-iron ground with ember-orange and butter-yellow as the only saturated colors carrying real surface area
- A display face built for branding, not typesetting — used sparingly, at scale
- Depth from warm radial ember glow and soft blur, never a generic drop shadow
- One recurring signature device: an organic charred/torn edge on plaques, made with an SVG turbulence filter, not a clean rounded rect
- A small papel picado garland of pink/teal/violet/butter beads strung along the section dividers — the system's one deliberate, contained note of festive multi-color, never spent anywhere else
- Motion is ambient and singular — steam rising through the hero headline, plus quiet hover states — never a repeated scroll-reveal on every section

## Colors

Two saturated colors carry the whole system against a near-black iron ground; everything else is warm neutral ink. This is a Committed strategy, not Restrained — the ember accent is allowed to own real surface area (buttons, prices, dividers, glow), not just tint an edge.

### Primary
- **Ember Orange** (#e06a22): the accent that means "hot" — primary buttons, active nav underline, the grill-seam dividers, price accents on featured items, hover states. Used at 100% saturation, never tinted down.
- **Ember Bright** (#ff8c47): the lit version of Ember Orange — hover/focus state for the primary button, the "La Ramada" logo mark.
- **Ember Dim** (#a8461a): the banked-coal version — borders on charred plaques, quiet accents that shouldn't compete with the primary orange.

### Secondary
- **Butter** (#f4c244): every price, without exception. One color means "this is a number you'll pay," consistently, site-wide.

### Tertiary — the papel picado garland
- **Papel Pink** (#d94f8c), **Papel Teal** (#159e93), **Papel Violet** (#8b5fbf): three accents used nowhere but the small beads strung along the grill-seam section dividers, cycling with Butter to read as a strung papel picado garland rather than a UI accent. This is the system's one deliberate departure from "two saturated colors + neutral ink," and it's confined on purpose — these three never appear on a button, a price, a card, or any interactive element.

### Neutral
- **Iron Black** (#141210): the page ground. Everything sits on this.
- **Iron Black Deep** (#0b0a09): recessed surfaces — cards, the header, the footer, the grill-rack plaque, the illustration's pan.
- **Char Umber** (#3a2418) / **Char Umber Soft** (#4d3020): the char-stripe texture and scrollbar thumb; the "cooked" half of the ground.
- **Cream** (#f3ead9): primary text and headline color.
- **Cream Dim** (#cbbfa8): secondary body text, leads.
- **Cream Faint** (#8d8375): tertiary text — descriptions, captions, muted labels. Verified ≥5:1 contrast against Iron Black at this weight; never go lighter-neutral than this for body copy on the dark ground.

### Named Rules
**The One Price Color Rule.** Butter (#f4c244) is the only color a price is ever set in, on every page, every context. A visitor should be able to find "the number" on any screen without reading.

## Typography

**Display Font:** Rye (self-hosted woff2, with Iowan Old Style/Georgia fallback)
**Body Font:** Archivo (self-hosted variable woff2, weight range 100–900, with -apple-system/Helvetica Neue fallback)

**Character:** Rye is a bold, hand-painted western/branding-iron display face — it carries the "seared/stamped" identity of the whole site and appears on every heading, however small. Archivo is a plain, honest workhorse grotesk with no personality of its own; it exists so the food, prices, and hours read clearly, never competing with Rye.

### Hierarchy
- **Display** (400, clamp(2.6rem, 5vw + 1rem, 5.4rem), line-height 0.98): h1, hero headlines only.
- **Headline** (400, clamp(1.9rem, 2.6vw + 1rem, 3.1rem), line-height 1.04): h2, section titles.
- **Title** (400, clamp(1.25rem, 1vw + 1rem, 1.6rem), line-height 1.15): h3, card/plaque/menu-category titles.
- **Body** (400, 17px, line-height 1.6): all prose. Body measure capped at 68ch.
- **Label** (700, 0.85rem, uppercase where used): nav links, service tags, the "NEW" menu badge. Never used as a kicker/eyebrow above a heading — see Do's and Don'ts.

### Named Rules
**The Rye-Everywhere Rule.** Every heading tag (h1/h2/h3), on both pages, is set in Rye. A page with a mixed display face is off-system.

## Layout

Single centered container, `max-width: 74rem`, `padding-inline` stepping down from 1.5rem to 0.875rem under 640px. Sections use a shared vertical rhythm (`padding-block` 6.5rem desktop, 4rem under 640px) so pacing stays consistent whether a section is dense (the full menu's category lists) or sparse (the review quote).

The menu page (`menu.html`) additionally uses a sticky category jump-nav (horizontally scrollable on mobile, no visible scrollbar) below the site header, and lays out most category item lists in CSS multi-column (`columns: 2`, collapsing to 1 under 780px) rather than a grid, so long real content (the full transcribed menu) reads top-to-bottom per column like a printed list, not a component grid.

Mobile breakpoint is 780px for navigation (hamburger + slide-down panel replaces the inline nav + phone number), and generally 640–980px for content reflow (grids collapse to fewer columns, the hero grid stacks to one column).

## Elevation & Depth

Mostly flat. Depth comes from two sources, never a generic drop shadow: warm radial ember-glow blur (behind the hero, behind CTA buttons) and soft blurred box-shadows tinted with the ember color, always with real offset and blur — never a zero-offset colored halo.

### Shadow Vocabulary
- **Button glow** (`box-shadow: 0 10px 26px -12px rgba(224,106,34,0.65)`, brightening on hover): the primary ember button only.
- **Illustration lift** (`filter: drop-shadow(0 22px 34px rgba(0,0,0,0.5))`): the hero's sizzling-platter SVG.
- **Row hover** (`background: rgba(224,106,34,0.06)`, no shadow): menu rows and grill-rack rows lighten on hover/focus-within instead of lifting — flat surfaces stay flat.

### Named Rules
**The Ember-Only Glow Rule.** Every soft shadow or glow in the system is ember-orange tinted. A neutral gray shadow anywhere on this site is off-system.

## Shapes

Small, consistent 6px corner radius on buttons, inputs, and standard containers (`--radius`) — nothing sharp, nothing pill-shaped except the service tags (999px) and the "NEW" menu badge.

The signature shape is the **charred edge**: an SVG filter (`feTurbulence` + `feDisplacementMap`, `#char-edge`) applied to the background layer of the featured-dish plaque, producing an irregular, torn/burnt border instead of a clean rectangle. This is the one place the system breaks its own corner-radius rule on purpose — a branding-iron mark doesn't have a border-radius.

## Components

### Buttons
- **Shape:** 6px radius, no exceptions.
- **Primary** (`.btn-ember`): ember-orange background, iron-black-deep text, ember-tinted glow shadow. This is the only button style that carries the glow shadow.
- **Secondary** (`.btn-line`): transparent background, 1px `rule-strong` border, cream text; border and text shift to ember on hover/focus.

### Cards / Containers
- **Corner style:** 6px radius; iron-black-deep background; 1px `rule` border at rest.
- **Signature exception — the charred quote:** the hero caption, the Family Dinners featured row, and standalone pull-quotes (About's tagline) all use the charred-edge SVG filter instead of a clean radius — see Shapes. Reused via `.charred-quote` for any future standalone-quote use; kept to pull-quotes and featured-dish plaques, never applied to ordinary containers.
- **Grill-rack:** the Family Dinners section is one shared plaque (not a card grid) containing one larger featured row plus a compact list of standard rows, divided by 1px rules, never repeated as same-size cards.

### Page Hero (interior pages)
A quieter cousin of the homepage hero, used on Catering and About: the same iron-ground/char-stripe material and Rye display headline, but no steam animation and only a small ember-glow accent — that motion stays reserved for the homepage's own first viewport. Pairs a headline/lede/CTA column with a single real photo (`.page-hero-photo`, 6px radius, object-fit: cover). Menu and Gallery instead use the quieter `.menu-page-head` (centered headline, no photo column) since their content itself is the visual.

### Gallery Grid
A lead full-bleed photo (`.gallery-lead`) followed by a 3-column grid (`.gallery-grid`, collapsing to 2 then 1) of real photos, each with a plain factual caption on a gradient scrim. Photos link to their own full-size file rather than opening a lightbox — deliberately simple. Grid tolerates any photo count without redesign.

### Menu Rows (signature component)
The recurring content unit across both pages: a two- or three-column row (name + description on the left, price in Butter on the right, an optional numeral for combination plates), divided by a 1px `rule`, background warming to `rgba(224,106,34,0.06)` on hover/focus-within. No borders, no per-row card shells — density comes from the rule, not a container.

### Navigation
- **Style:** sticky header, `rgba(11,10,9,0.86)` background with `backdrop-filter: blur(10px)`, 1px bottom rule.
- **Default/hover/active:** nav links are Cream Dim, shifting to Cream with an ember-orange 2px underline on hover/focus/active (`.is-active`).
- **Mobile (<780px):** inline links and phone number are replaced by a hamburger button opening a slide-down panel of stacked links, each row divided by a rule.

## Do's and Don'ts

### Do:
- **Do** keep Butter (#f4c244) as the only price color, everywhere, on every page.
- **Do** set every heading in Rye; never substitute a system font as a "temporary" display face.
- **Do** tint every shadow/glow ember-orange; never use a neutral gray shadow.
- **Do** show food as authored line-art/SVG illustration in the system's own palette when no real photography exists — never a stock photo, never a placeholder gray box.
- **Do** keep the charred-edge SVG filter (`#char-edge`) reserved for the one or two plaques that are meant to read as "branded/stamped" — it loses its meaning if applied to every container.

### Don't:
- **Don't** put a kicker or eyebrow label above any heading, anywhere on this site — confirmed hard ban, not a style choice (see craft floor).
- **Don't** build a row of same-size icon+heading+text cards as page structure; use the grill-rack pattern (one featured element + a list) instead.
- **Don't** isolate a price as a giant standalone stat (kicker → heading → big number → caption). Prices sit inline with the dish name at title scale.
- **Don't** repeat the same scroll-triggered fade/slide-up entrance on every section. Motion stays concentrated: the hero's steam and ember glow, one load-time sear-in on the hero illustration, and ordinary hover/focus states — nothing more.
- **Don't** fake photographic material (a CSS gradient or bevel standing in for a photo). Either it's real photography or it's honest illustration.
