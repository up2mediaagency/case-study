# SIBA — layout spec (desktop 1440 and mobile 390)

The design was made in Figma by Claude and approved by the owner. You cannot open Figma, so this file describes it. Visual language and tokens: `.agents/rules/02-design-system.md`. Text: `content.md`.
RTL everywhere: first item is on the right.

Page = header (placeholder) → 9 sections → footer (placeholder). Section backgrounds follow rule 02 (gradient, two small halos, top divider).

## Common section header
Badge (number circle + name) → title (keyword gradient) → description. Right-aligned, stacked, gap 14.
Desktop: the header block sits at the start (right) of the 1152 content width, text right-aligned, max width ~820. Use the same alignment in every section.

## 01 Hero (desktop 1440 × ~1010, mobile 390 × ~1120)
Desktop:
- Background `#05070F`, clipped. Three blurred halos: blue `#303188` (top-start), red `#EE2D3D` (mid-end), aqua `#02B3D2` (bottom-start). Faint 80px grid fading out.
- Centered column: badge pill → title (Tajawal ExtraBold 58, white, key phrase red gradient, centered, 2 lines) → description (≈19px, `#AAB3C5`, centered, max ~720) → two buttons side by side → a row of 4 project facts (label small grey, value bold white).
- Below: browser frame ~1120 wide (aspect ≈ 1120×700), top bar with 3 dots, inside it the Home screenshot. A thin aqua light line on top edge of the frame and a blue glow behind. The frame is cut off by the hero's bottom edge (it bleeds).
- Three glass stat cards overlap the frame's edges (two on one side, one on the other), floating.
Mobile (right-aligned stack, padding 20, gap 24, top 48, bottom 56):
- badge → title (34px, line-height 1.25) → description (16px) → two full-width buttons stacked (primary gradient, glass) → glass card with 4 rows (label at the start/right in grey, value at the end/left in bold) → browser frame full width (top bar + Home screenshot, aspect ≈ 350×204) → row of three small stat cards (equal width and equal height; each: number 19px gradient, label 11px).
- Mobile hero has no phone frame, no tilt.

## 02 المشكلة (desktop ~981 tall)
Desktop: header; row of 3 problem cards (equal width, red tint: fill `rgba(238,45,61,.07)`, border `rgba(238,45,61,.3)`, big red-gradient number, title bold 22, text 16 grey); below a wide glass panel: title + 4 aqua chips in a row.
Mobile: cards stacked, then the panel with chips stacked (right-aligned).

## 03 الاكتشاف (desktop ~1018)
Desktop: header; row of 4 method pills (number circle + label); row of 3 insight glass cards: amber tag, big number (48–56, keyword gradient), sentence, decision block (blue-tinted box `rgba(2,91,207,.14)`, border `rgba(2,179,210,.3)`, label «القرار التصميمي» small aqua bold + decision text).
Mobile: methods as one glass card with 4 rows; 3 insight cards stacked.

## 04 الجمهور (desktop ~988)
Desktop: two persona glass cards side by side. Each: avatar circle (gradient `#303188 → #4976E9`, letter), name 22 bold, role grey, amber tag, two columns (الأهداف | نقاط الألم) with dot bullets, device chips, quote at the bottom.
Mobile: two cards stacked, all single column.

## 05 البنية والمسارات (desktop ~1343)
Desktop: left/right two panels or stacked: (a) site map as a tree with connector lines (root pill at the top, 5 child pills, sub-pages under التشبيك والدعم); (b) critical path as a horizontal 5-step flow (RTL: step 1 on the right) with numbered circles, steps 3–5 inside a dashed aqua group labelled «نموذج الطلب · 3 خطوات فقط». Connectors draw on scroll.
Mobile: site map as a vertical tree (a 2px aqua line on the right edge of each branch, child pills indented); critical path as a vertical list (number circle at the right, text at the left of it), steps 3–5 in a dashed rounded group.

## 06 صفحات المنصة (desktop ~1057)
Desktop: bento grid inside 1152 width: row 1 = three large cards (screenshot ≈342×236 shown larger as needed; number badge + title below), row 2 = four small cards (≈244×170). Order in RTL: 01 at top-right.
Mobile: seven cards stacked. Large: image height ≈226; small: ≈200; padding 12; radius 24; label row = title (grows) + number badge (30px) at the right.

## 07 الواجهات (desktop ~1539)
Desktop: desktop browser frame (≈940×532) with the matchmaking screenshot next to a phone-shaped container (≈252×496, radius ~32) with the mobile screenshot; below, a form-detail card: image (≈620×356) with numbered markers on the left and three numbered notes on the right.
Mobile: glass card «نسخة الديسكتوب» (image width ≈326, height ≈185) → glass card «نسخة الجوال» (phone image ≈200×394, centered, radius 22) → glass card «تفصيل النموذج» (image 326×187 + 3 numbered notes).

## 08 نظام التصميم (desktop ~1669, side padding 64)
One large glass panel (radius 28–32) containing four groups (see content.md). Desktop: 2×2 grid of groups. Mobile: one column; colour swatches as rows (name + hex at start, 44px swatch at end), greys as one strip of 13 equal cells with rounded ends, radius samples as 5 squares, typography stack, component samples.

## 09 النتائج (desktop ~1151)
Desktop: row of 4 stat cards (first one aqua-highlighted); below the CTA panel (gradient `#303188 → #025BCF`, glass border, radius 32): text on the start side, two buttons at the end side.
Mobile: 4 stat cards stacked (number 52px), CTA panel stacked (title 26px, text 15px, two full-width buttons).

## Footer (placeholder)
Desktop: 4 columns (brand · contact · services · quick links) + bottom line. Mobile: single column. Colour `#081C30`.

## Interaction summary
See rule 03 (Motion). Everything respects `prefers-reduced-motion`.
