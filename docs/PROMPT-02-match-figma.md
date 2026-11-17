# PROMPT 02 — paste into Antigravity (same project chat or a new one)

---
Read `AGENTS.md` (updated: Figma access is now allowed when your Figma tool works), `docs/siba/figma-reference.md`, and `docs/memo.md`.

The first version of the SIBA page is built, but it does not match the Figma design exactly. Your job now is to make it match, section by section, for both desktop (1440) and mobile (390).

**Step 1 — Check your Figma access.** Open `https://www.figma.com/design/QgqwEGXS0X9frp0Lo0ProL` (fileKey `QgqwEGXS0X9frp0Lo0ProL`) with your Figma tool and take a screenshot of node `4:66`. If it works, continue. If it does not, STOP and tell me exactly what is missing (for example "Figma MCP not connected" or "needs a token") — do not guess the design.

**Step 2 — Pull the real screens as images.** Export these frames from Figma as PNG (2× if possible, else 1×) into `public/case-studies/siba/` with exactly these names: `home.png` (2:167), `about.png` (2:807), `matchmaking.png` (2:1127), `form-step-1.png` (2:1138), `board.png` (2:1296), `contact.png` (2:1464), `experts-network.png` (2:1578), `talent-directory.png` (2:1869), `matchmaking-mobile.png` (2:2451). Check each file opens and has the expected width (1440, except `form-step-1.png` 878 and `matchmaking-mobile.png` 390). Replace the placeholders with them (they should already load automatically by file name).

**Step 3 — Match the design section by section.** For each section, open the desktop node and the mobile node listed in `docs/siba/figma-reference.md`, take a screenshot, read the design context (spacing, sizes, colours, fonts, order), then compare with the running page (`npm run dev`, `http://localhost:3000/our-work/siba`) at 1440px and at 390px, and fix every visible difference. Work in this order and run `npm run build` after each pair:
1. 01 Hero · 02
2. 03 · 04
3. 05 · 06
4. 07 · 08
5. 09 · footer bugs

Apply the "Corrections" list in `figma-reference.md` — these are known mistakes in the written docs and Figma is right. The most important ones:
- Desktop section headers are **centered**; mobile headers stay right-aligned.
- Each section has its **own highlight gradient and its own highlighted words** (list in the corrections).
- Hero desktop: primary button is «استكشف القصة»; title on two lines; stat cards floating around the browser frame; facts row with dividers.
- 03: title «من البيانات إلى القرار:» and the description is a separate line.
- 04: أبو خالد on the right, د. ليلى on the left on desktop; tinted two-column lists with check icons.
- 05: a real tree with connector lines, children order **عن سيبا → اتصل بنا** (right to left), «نموذج الطلب» in red tint, and the critical path as a separate horizontal panel with a dashed group.
- 06: bento of 3 large + 4 small cards with the round arrow icon.
- 07: the overlapping browser + phone composition with the tag labels and markers.
- 08: near-black panel with big colour cards, hex labels inside the grey cells, typography and radius panels side by side, components row.
- 09: stat card order right to left: +$1.5B, +30,000, +2500, 3; centered CTA panel with glows.
- **Glows:** keep the blurred blobs small (rule 02). At the moment sections 02, 03 and 05 look tinted all over compared with Figma; match Figma's darkness.
- Mobile section heights should be close to Figma (Figma mobile heights: hero 1121, 02 1267, 03 1440, 04 1132, 05 1204, 06 2500, 07 1520, 08 1384, 09 1526, footer 711). The page currently is taller in 04 (+138), 05 (+173), 07 (+207) and 08 (+541) — tighten spacing and remove anything that is not in the Figma mobile frame.
- Footer: phone numbers inside `<bdi dir="ltr">`; email right-aligned.

**Step 4 — Verify.** At 1440 and 390, compare each section next to its Figma screenshot. No horizontal scroll, nothing clipped, RTL order right. `npm run build` and `npm run lint` pass. Keep all text from `content.md` except where the corrections change it.

**Finish.** Update `docs/memo.md` Status, commit (`fix(siba): match the Figma design`), and tell me in simple words what you matched, what still differs and why, and anything you need from me. Do not push to GitHub until I say so.
---
