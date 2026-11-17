# PROMPT 01 — paste this into Antigravity (new chat) — bootstrap + SIBA page

---
Read `AGENTS.md`, everything in `.agents/rules/`, `docs/memo.md`, and `docs/siba/content.md`, `docs/siba/layout.md`, `docs/siba/assets.md`. You do not have access to Figma — everything you need is in those files and in `public/case-studies/siba/`.

**Step 0 — Plan (short).** Reply with a plan of 6–10 bullets (what you will create, in what order). Do not start building until the plan is shown. Then continue straight away without waiting unless something blocks you.

**Step 1 — Project setup.**
- This folder already contains docs and rules. Scaffold Next.js (App Router, TypeScript, Tailwind, ESLint, no `src/` folder, import alias `@/*`) in this same folder. If `create-next-app` refuses because the folder is not empty, scaffold into a temporary subfolder and move the files up, keeping `AGENTS.md`, `.agents/`, `docs/` and `public/case-studies/` untouched.
- Install `motion`.
- `app/layout.tsx`: `<html lang="ar" dir="rtl">`, Tajawal (400/500/700/800) and Readex Pro (500/700) via `next/font/google`, body background `#05070F`, text white.
- `app/globals.css`: base styles and two helper classes, `.glass` (glass surface from rule 02) and `.halo` (blurred ellipse).
- `git init`, add remote `https://github.com/up2mediaagency/case-study.git`, first commit. Do not push yet.

**Step 2 — Shared building blocks** in `components/case-study/` exactly as listed in rule 03: `Section`, `SectionHeader`, `GlassCard`, `NumberBadge`, `Chip`, `IllustrativeTag`, `BrowserFrame`, `Reveal`, `CountUp`. Plus `data/types.ts`, `theme/siba.ts`, and `data/siba.ts` filled **word for word** from `docs/siba/content.md`.

**Step 3 — SIBA page**, `app/our-work/siba/page.tsx`, section by section in this order, running `npm run build` after each pair:
1. Hero (`HeroCinematic`) + placeholder `SiteHeader`.
2. Sections 02 and 03.
3. Sections 04 and 05.
4. Sections 06 and 07.
5. Sections 08 and 09 + placeholder `SiteFooter`.
Both layouts (desktop 1440 and mobile 390) must follow `docs/siba/layout.md`. If an image file listed in `assets.md` is missing, use a neutral dark glass placeholder with the page name and tell me which file is missing — do not invent screenshots.

**Step 4 — Motion pass** as described in rule 03, with `prefers-reduced-motion` support.

**Step 5 — Check.** `npm run build` and `npm run lint` pass. Open `http://localhost:3000/our-work/siba` in the browser tool at 1440px and 390px wide, compare with `layout.md`, fix differences (no horizontal scrolling, nothing clipped, RTL order right).

**Finish.** Update `docs/memo.md` (Status), commit (`feat(siba): first version of the SIBA case study page`), and tell me in simple words: what was built, how to open it, what I should check, and what you need from me (for example missing images).

Rules to remember while working: Arabic RTL only; texts word for word from `content.md`; real screens are images only; no new sections or invented numbers; keep «رقم توضيحي» and «شخصية افتراضية» tags; do not push to GitHub yet.
---
