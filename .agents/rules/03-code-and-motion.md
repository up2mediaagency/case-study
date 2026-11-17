# Rule 03 — Code structure, components, motion, quality

## Folder layout
```
app/
  layout.tsx                 # <html lang="ar" dir="rtl">, fonts, globals
  globals.css
  our-work/
    siba/page.tsx            # composes the sections; no business logic
components/
  layout/SiteHeader.tsx      # PLACEHOLDER (dev team replaces)
  layout/SiteFooter.tsx      # PLACEHOLDER (dev team replaces)
  case-study/                # shared, project-agnostic blocks
    Section.tsx              # background, halos, top line, paddings
    SectionHeader.tsx        # badge + title(keyword gradient) + description
    GlassCard.tsx
    NumberBadge.tsx          # gradient circle with a number
    Chip.tsx                 # pill; variants: aqua, amber, neutral
    IllustrativeTag.tsx      # amber «رقم توضيحي…» / «شخصية افتراضية…»
    BrowserFrame.tsx
    Reveal.tsx               # fade+translate on scroll
    CountUp.tsx
    HeroCinematic.tsx
    ProblemSection.tsx  DiscoverySection.tsx  AudienceSection.tsx
    ArchitectureSection.tsx  PagesGallerySection.tsx
    ScreensSection.tsx  DesignSystemSection.tsx  ResultsSection.tsx
data/siba.ts                 # ALL text/numbers of the SIBA page (typed)
data/types.ts                # shared types for case-study data
theme/siba.ts                # CSS variables for SIBA colours
public/case-studies/siba/    # screenshots (PNG)
docs/                        # specs (read-only for you, except docs/memo.md)
```
Section components receive their content through props from `data/<slug>.ts`. A second case study should need only a new `data/<slug>.ts`, `theme/<slug>.ts`, images, and a new `page.tsx`.

## Code rules
- TypeScript strict. No `any`. Server components by default; add `"use client"` only for components that use `motion`, hooks or browser APIs.
- Tailwind for styling. Use arbitrary values (`bg-[#05070F]`) sparingly; prefer CSS variables and a few classes in `globals.css` for the glass surface (`.glass`) and halos.
- Accessibility: real headings in order (one `h1` in the hero, `h2` per section), `alt` text in Arabic for every screenshot (describe the page, e.g. «الصفحة الرئيسية لمنصة سيبا»), buttons/links are real `<a>`/`<button>`, visible focus rings, contrast AA on text.
- Performance: use `next/image` with `sizes`; the large `home.png` is used only inside the hero browser frame (`priority` off, lazy). Do not import images as base64.
- Do not create files other than what the task needs. No dead code, no TODO spam.

## Motion (use `motion` package; keep it tasteful)
- Reveal: sections' headers and cards fade + move up 24px, 0.6s ease-out, children staggered by 0.08s, triggered once when 20% visible.
- Hero: sequence badge → title → description → buttons → browser frame (fade + translateY 40px). Browser frame tilts `rotateX` 8° → 0° while scrolling the first screen. The Home screenshot scrolls inside the frame linked to page scroll (translateY of the tall image). Stat cards float with different parallax speeds. Halos drift slowly (20–30s loop).
- 05 Architecture: connector lines draw progressively (`pathLength` 0 → 1) when visible.
- 09 Results: numbers count up once when visible (`CountUp`). Keep the `+`, `$`, `B` and commas exactly as in the content.
- Halos: slight parallax on scroll.
- **Always respect `prefers-reduced-motion`**: no transforms/loops, just show the final state.
- Mobile: same reveals, no rotateX, no parallax floats, no scroll-linked screenshot (show the top of the screenshot).

## Definition of done for any step
1. `npm run build` passes with no type errors.
2. `npm run lint` passes.
3. The page was opened at 1440px and 390px widths (use the browser tool) and compared to `docs/<slug>/layout.md`: spacing, order of content, RTL direction, no horizontal scroll, no clipped text.
4. Text matches `docs/<slug>/content.md` exactly.
5. Summary to the owner in simple words: what changed, what to look at, what is next.

## Token/credit saving
- Plan first (short), then implement one part at a time.
- Do not re-read all docs each turn; re-read only the section you are building.
- Do not rewrite whole files for small edits.
