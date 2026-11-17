# memo.md — project memory (for coding agents)

Updated: 2026-11-17. Update the "Status" and "Decisions" sections at the end of every session.

## Goal
Turn UP TO MEDIA's case studies into interactive Arabic RTL web pages for up2media.net under `/our-work/<slug>/`, then hand the repo to the dev team who merge the pages into the real site (Next.js + Tailwind).

## Who does what
- Owner (UP TO MEDIA, not a programmer): approves designs, runs commands you ask for, exports images.
- Claude (separate tool): designs pages in Figma and writes specs/prompts. Its output for you is in `docs/` and `public/`.
- You (Antigravity): write the code in this repo. You have no Figma access.
- Dev team (later): pulls pages from this repo into the site.

## Links
- Repo: https://github.com/up2mediaagency/case-study.git (empty at start)
- Live site (reference for fonts/layout): https://up2media.net
- Preview: Cloudflare, linked to the repo after the first case study works.

## Case studies (order)
1. **SIBA** (`siba`) — design finished (desktop 1440 + mobile 390). BUILD THIS FIRST.
2. Later, each in its own chat: Dukan Fanni (`dukan`), Governorate (`governorate`), Istanbul Academy (`istanbul-academy`), Specialists / Sync Care (`specialists`), Libyano (`libyano`), Sync Care System (`sync-care-system`).
The old pages at those URLs on the live site will be replaced by the new ones (same URLs).

## Decisions made (do not reopen)
- Stack: Next.js App Router + TypeScript + Tailwind + `motion`.
- Long scroll page with animations. Dark cinematic glass look for ALL sections (see rule 02).
- Arabic RTL only. Same header/footer for all pages; ours are placeholders (dev team uses the site's own).
- Project screens are images, never rebuilt in code.
- No before/after in SIBA. Rejected: tilted/3D device mockups, 3D spheres/crystals, phone in the hero.
- Each case study uses its own project colours through CSS variables.
- Header/footer look is not important.

## Site facts (measured on up2media.net)
Next.js (Turbopack) + Tailwind; font Tajawal (+Tangerine decorative); `<html dir="rtl" lang="ar">`; primary text rgb(11,27,53); header fixed 64px; footer `#081C30` with 45px top corners on desktop; dark mode exists.

## Status
- [x] Design (Figma): SIBA desktop + mobile done.
- [x] Specs written: `docs/siba/content.md`, `layout.md`, `assets.md`.
- [x] Images exported into `public/case-studies/siba/` (9 PNGs exported from Figma).
- [x] Bootstrap project (Next.js, fonts, theme, shared components).
- [x] Build SIBA sections 01–09 + placeholders for header/footer.
- [x] Motion pass.
- [x] Match Figma desktop (1440) + mobile (390) across all sections 01–09.
- [x] Fullscreen page viewer in section 06 + Shine Border effect on Hero, 06 large cards, 09 CTA, and FullscreenViewer.
- [ ] Push to GitHub, connect Cloudflare preview.
- [ ] Other case studies.

## Notes for next chats
- Start every chat by reading AGENTS.md, rules, this file, then the case study docs.
- Keep explanations simple; the owner is not a programmer.
