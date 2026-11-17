# AGENTS.md — UP TO MEDIA Case Studies

You are building interactive Arabic (RTL) case-study web pages for **up2media.net**.
Pages live under `/our-work/<slug>/`. This repo will be handed to the dev team, who pull the pages into the real website. So the code must be clean, self-contained and use the **same stack as the site**.

## Read first (in this order, every new chat)
1. This file.
2. `.agents/rules/*.md` (always on; they are short).
3. `docs/memo.md` — project state and decisions.
4. `docs/<slug>/content.md`, `docs/<slug>/layout.md`, `docs/<slug>/assets.md` for the case study you are working on (first one: `docs/siba/`).

## The person you work with
- The owner is **not a programmer**. Explain what you do and what you need in simple language, in English (they read Arabic too, but explanations in plain English are fine). Keep explanations short.
- Do the work yourself. Ask only when something truly blocks you. When you need the owner to do something (export an image, run a command, approve a step) say exactly what and where.

## Hard constraints (summary — details in rules)
- **Figma:** the design lives in Figma (see `docs/siba/figma-reference.md` for the file and node IDs). You may use your Figma tool to read designs and export the real screens as images, but only if it works in your environment. If it does not work, say exactly what is missing and fall back to `docs/` and `public/`. Never guess a design.
- When Figma and the written docs disagree on layout/order/colours, **Figma wins** (see the corrections in `docs/siba/figma-reference.md`).
- Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. Animation: the `motion` package (formerly Framer Motion). No other UI kits.
- Arabic RTL only. No English UI text (except brand names such as SIBA and "UP TO MEDIA").
- Real project screens are **images** (`next/image`). Never rebuild or redesign them in HTML/CSS.
- Content text comes **word for word** from `docs/<slug>/content.md`. Do not rewrite, translate or add copy.
- Work in small steps: plan first, then build one part at a time, then run `npm run build` to check.
- Keep each rule file under 12,000 characters.

## Commands
- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:3000/our-work/siba)
- Check: `npm run build` and `npm run lint` before saying a step is done.

## Git
- Remote: `https://github.com/up2mediaagency/case-study.git` (empty at start).
- Commit after each finished step with a clear message. Do not push until the owner says so, unless the step is "push to GitHub".
