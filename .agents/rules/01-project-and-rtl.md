# Rule 01 — Project, language, RTL, handoff

## What this repo is
A set of long, scroll-driven, animated case-study pages for UP TO MEDIA's portfolio. One page per client project. First one: **SIBA** (`/our-work/siba`). Later: Dukan Fanni (`dukan`), Governorate (`governorate`), Istanbul Academy (`istanbul-academy`), Specialists/Sync Care (`specialists`), Libyano (`libyano`), Sync Care System (`sync-care-system`).

## Language and direction
- `<html lang="ar" dir="rtl">`. Every page and component is RTL.
- Use **logical** Tailwind utilities so RTL works without hacks: `ps-*`, `pe-*`, `ms-*`, `me-*`, `text-start`, `text-end`, `start-*`, `end-*`. Avoid `pl-*`, `pr-*`, `ml-*`, `mr-*`, `left-*`, `right-*`, `text-left`, `text-right` unless the design really needs a physical side (for example a number like +962 that must stay left-to-right, wrap it in `<bdi>` or `dir="ltr"`).
- Flex rows already flow right-to-left in RTL: the **first child is on the right**. Write children in reading order (right to left). Do not reverse arrays to "fix" order.
- Icons that show direction (arrows, chevrons) must point the RTL way (flip with `rtl:rotate-180` or `rtl:-scale-x-100`).
- Numbers: Western digits (0-9), as in the content file. Phone numbers and `+2500`, `+30,000`, `+$1.5B` are LTR strings: wrap in `<bdi dir="ltr">`.
- No English words in the UI. Allowed Latin text: SIBA, UP TO MEDIA, Readex Pro, hex colour codes, `#025BCF`-style tokens, `RADIUS · SPACING`-style tiny labels that exist in the content file.

## Fonts
- Case-study page titles/body: **Tajawal** (weights 400, 500, 700, 800). Load with `next/font/google`.
- SIBA interface samples inside the "design system" section: **Readex Pro** (500, 700). Load with `next/font/google` too, only used in that section.

## Handoff to the dev team
- The real site has its own Header and Footer. Ours are **placeholders** in `components/layout/` (`SiteHeader.tsx`, `SiteFooter.tsx`). Keep them isolated so the dev team can delete them and use the site's own. Do not spend time polishing them.
- Each case study is self-contained: `app/our-work/<slug>/page.tsx`, `data/<slug>.ts` (content), `theme/<slug>.ts` or CSS variables scoped to a wrapper, and `public/case-studies/<slug>/` (images).
- Shared building blocks live in `components/case-study/` and must not contain SIBA-specific text or colours. Colours come from CSS variables set on the page wrapper (see rule 02).
- No server code, no API calls, no database, no env vars. Static pages only.
- Do not add heavy dependencies. Allowed: `next`, `react`, `tailwindcss`, `motion`, and what `create-next-app` adds.

## Illustrative content
Some numbers and personas are placeholders to be replaced by client data. They are marked in `content.md` with `illustrative: true`. In the UI they must show the amber tag «رقم توضيحي — يُستبدل ببيانات العميل» (numbers) or «شخصية افتراضية مبنية على فهم الجمهور» (personas). Never remove those tags and never present those numbers as real facts.
