# Workflow: /new-case-study <slug>

Use this for every new case study after SIBA. Each case study = one new chat.

1. Read `AGENTS.md`, `.agents/rules/*`, `docs/memo.md`.
2. Confirm these exist (the owner prepares them from the design file; you cannot open Figma):
   - `docs/<slug>/content.md` — all text, numbers, flags for illustrative items.
   - `docs/<slug>/layout.md` — section order and any differences from the SIBA template.
   - `docs/<slug>/assets.md` + images in `public/case-studies/<slug>/`.
   If something is missing, list exactly what and stop.
3. Create `theme/<slug>.ts` (project colours as CSS variables) and `data/<slug>.ts` (typed content).
4. Create `app/our-work/<slug>/page.tsx` composing the shared sections. Reuse components from `components/case-study/`. Only add a new component if the design truly needs a block the template does not have; put it in `components/case-study/` and keep it project-agnostic.
5. Build, lint, check at 1440 and 390 widths, compare with the layout doc.
6. Update `docs/memo.md` (status, decisions, anything the next chat must know).
7. Commit with message `feat(<slug>): add case study page`.
