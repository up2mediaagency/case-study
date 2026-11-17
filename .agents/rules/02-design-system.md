# Rule 02 — Visual language (dark cinematic glass) and tokens

All case-study pages share ONE visual language. Only colours, screenshots and numbers change per project.

## Global tokens (same for every case study)
- Page background: `#05070F`.
- Section background: vertical gradient `#0A0F2A → #05070F`, plus two small blurred halos (see below), plus a 1px top divider `rgba(255,255,255,.10)`, plus an optional 80px grid at 3.5% white opacity fading out to the edges.
- Glass surface: fill `rgba(255,255,255,.045)`, 1px border `rgba(255,255,255,.14)` (desktop may use a gradient border `rgba(255,255,255,.28 → .05)`), radius 24–32, shadow `0 12px 32px rgba(0,0,0,.35)`. Use `backdrop-filter: blur(...)` lightly.
- Text: primary `#FFFFFF`; secondary `#AAB3C5`; tertiary `#8E98AE`; strong secondary `#C9D1E2` / `#DDE4F2`.
- Illustrative tag colour (amber): `#F5A524` (border/fill at low opacity), text `#FFD38A`.
- Keyword gradient (the highlighted word in each title): `#6FE3F7 → #5B8CFF`, left to right.
- Hero key phrase gradient (SIBA): red `#FF6A75 → #EE2D3D`.
- Section number circle and primary buttons: gradient `#025BCF → #0091BD`.

## Per-project theme (CSS variables on the page wrapper)
Define in `theme/<slug>.ts` and set as inline CSS variables, for example for SIBA:
```
--brand-blue:#303188; --brand-red:#EE2D3D; --brand-aqua:#02B3D2;
--btn-from:#025BCF; --btn-to:#0091BD;
--hero-halo-1:#303188; --hero-halo-2:#EE2D3D; --hero-halo-3:#02B3D2;
```
Components use `var(--brand-…)`, never hard-coded SIBA hex values (except inside the SIBA design-system section, which displays the real tokens on purpose).

## Halos (important — this was a past bug)
Halos are **small** blurred ellipses, not section-size.
- Desktop: about 640–700 × 520 px, `blur(120px)` to `blur(140px)`, opacity .25–.4.
- Mobile: about 300 × 260 px, `blur(90px)`, opacity .25–.4. Hero uses a stronger blue halo (opacity ~.6).
- Two per section (one top-start, one lower-end), colours from the project theme. Never size a halo to the whole section; it makes the section look grey and washed out.

## Section header (same in every section)
1. Badge: pill with a circle at the start (RTL: right) holding the section number ("02"), then the section name. Circle uses the button gradient. Pill: fill white 6%, border white 16%.
2. Title: Tajawal ExtraBold. Desktop 46px, mobile 30px, line-height ~1.3. One key phrase painted with the keyword gradient (the key phrase is given in `content.md` as `keyword`).
3. Description: Tajawal Regular. Desktop 19px, mobile 16px, colour `#AAB3C5`, line-height ~1.6.
Text is right-aligned (`text-start` in RTL).

## Sizing
- Desktop design width 1440. Content max width about 1152 (section side padding 144). Section vertical padding 120, gap between header and content 64.
- Mobile design width 390. Section side padding 20, vertical padding 64, gap 28.
- Breakpoint: mobile layout below `md` (768px), desktop layout from `lg` (1024px); tablet scales the desktop layout down gracefully (single column cards are acceptable).
- Radii used: 12, 14, 16, 18, 20, 24, 28, 32, 999. Spacing scale: 4, 8, 10, 12, 16, 20, 24, 32, 64, 120.

## Screens (real project screenshots)
- They are PNG files in `public/case-studies/<slug>/`. Show with `next/image` (`fill` + `object-cover object-top`, or fixed width/height).
- Wrap desktop screens in a browser frame (top bar with 3 dots: `#FF5F57 #FEBC2E #28C840`, bar fill white 6%, radius 16, border white 20%).
- Never crop in a way that cuts the important top part: always `object-top`.
- Never redraw, restyle, recolour, translate or "improve" a screenshot.

## Do not
- No tilted or 3D device mockups, no spheres/crystals, no stock phone frames in the hero. (Rejected by the owner.)
- No before/after section for SIBA (the site is new).
- No new sections, no invented statistics, no extra marketing copy.
