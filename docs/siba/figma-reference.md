# SIBA — Figma reference (source of truth for visuals)

**Rule: when this file or Figma disagrees with `content.md` / `layout.md`, Figma wins for layout, order, alignment and colours. `content.md` still wins for the exact Arabic wording unless it is listed in "Corrections" below.**

Figma file: https://www.figma.com/design/QgqwEGXS0X9frp0Lo0ProL  (fileKey `QgqwEGXS0X9frp0Lo0ProL`)
Use your Figma tools (MCP / plugin) to open each node: take a screenshot, read the design context (spacing, sizes, colours, fonts), and match it. If you have no working Figma connection, say so and stop — do not guess.

## Page frames
| Layout | Node | Width |
|---|---|---|
| Desktop page | `4:48` | 1440 |
| Mobile page | `31:137` | 390 |

## Sections (desktop / mobile)
| Part | Desktop node | Mobile node |
|---|---|---|
| Header (placeholder) | `4:49` | `31:138` |
| 01 Hero | `4:66` | `31:144` |
| 02 المشكلة | `5:18` | `31:187` |
| 03 الاكتشاف | `5:83` | `31:220` |
| 04 الجمهور | `6:18` | `31:271` |
| 05 البنية والمسارات | `7:18` | `31:339` |
| 06 صفحات المنصة | `11:141` | `32:137` |
| 07 الواجهات الرئيسية | `11:1543` | `32:190` |
| 08 نظام التصميم | `13:235` (inner panel `13:242`) | `32:227` |
| 09 النتائج والأثر | `8:261` | `32:313` |
| Footer (placeholder) | `8:307` | `32:353` |

## Real screens to export as PNG into `public/case-studies/siba/`
Export each frame at 2× if the tool allows (otherwise 1×), exact file names:
| File | Node |
|---|---|
| `home.png` | `2:167` (Home Page, 1440×6708) |
| `about.png` | `2:807` |
| `matchmaking.png` | `2:1127` |
| `form-step-1.png` | `2:1138` |
| `board.png` | `2:1296` |
| `contact.png` | `2:1464` |
| `experts-network.png` | `2:1578` |
| `talent-directory.png` | `2:1869` |
| `matchmaking-mobile.png` | `2:2451` (390×2292) |
Already-cropped versions used in the design (for reference of how each is cropped): hero browser `28:883`, 06 cards `28:2026 28:1381 28:1201 28:2145 28:2321 28:2637 28:2967`, 07 `28:3147 28:3261 28:3310`.

## Corrections to `content.md` / `layout.md` (verified against the Figma desktop frames)
These were wrong in the docs. Figma is right.

**Global (desktop)**
- Section headers are **centered** (badge, title, description centered). On mobile they stay right-aligned.
- Each section's highlighted word has its **own gradient**, not one shared gradient: 01 hero phrase red; 02 red (`#FF6A75→#EE2D3D`) on **«لا تعكس حجمه»** only; 03 aqua→blue on **«القرار:»**; 05 aqua on **«بلا طرق مسدودة»**; 06 blue→aqua on **«منظومة واحدة»**; 08 purple→pink on **«بثلاثة ألوان»**; 09 aqua on **«يمكن قياسه»** (the word «وأثر» stays white). Read exact colours from the Figma nodes.
- Section backgrounds: the glow (halo) blobs are small and soft; the sections must NOT look tinted all over. Compare with Figma: the dark base shows through everywhere, with soft colour only near the blobs.

**01 Hero (desktop)**
- Primary (gradient) button is **«استكشف القصة»** (on the right); the glass button is **«زيارة الموقع»** (on its left). (Mobile keeps «زيارة الموقع» as the primary full-width button, as in the mobile frame.)
- Badge dot is red on desktop.
- Facts row: 4 items with thin vertical dividers between them.
- Three stat cards float around the browser frame: +2500 on the left edge, +30,000 at the top right, +$1.5B at the right below it. Title is 58px on exactly two lines at 1440 (check it does not wrap to three).

**02** Success criteria chips (desktop, right to left): تجربة جوال كاملة · دليل كفاءات قابل للبحث · تقديم الطلب في 3 خطوات · مدخل واحد واضح لكل خدمة; each chip has a small check icon. Problem cards have a short red underline bar at the bottom.

**03** Desktop title is **«من البيانات إلى القرار:»** and the description under it is **«أربع طرق بحث قادت كل ما صمّمناه لاحقاً.»** (not one merged title; same on mobile). Insight cards right to left: 70%, +60%, 3 من 4; the decision part is a divider line + small aqua label «القرار التصميمي» + bold white text (not a boxed block). Numbers use an aqua→blue gradient.

**04** Persona cards right to left: **أبو خالد first (right), then د. ليلى (left)**. Inside each card the lists are two tinted columns side by side: «نقاط الألم» (red tint, red dot bullets) on the right and «الأهداف» (aqua tint, check-icon bullets) on its left. Quote sits in a tinted box (aqua for أبو خالد, blue for د. ليلى). Avatar gradient: aqua for أبو خالد, blue/indigo for د. ليلى. (On mobile the order stays د. ليلى then أبو خالد, as in the mobile frame.)

**05** Site map is a real tree with connector lines: root «الرئيسية» (gradient, glowing) on top; children in one row, right to left: **عن سيبا · العضوية والشراكات · التشبيك والدعم · المركز الإعلامي · اتصل بنا**; under «التشبيك والدعم» a vertical chain: «منصة التشبيك والدعم» then «نموذج الطلب» (red tint, not aqua). Critical path is a separate full-width panel with a horizontal flow and chevrons: steps 1 and 2 on the right, steps 3–5 inside a dashed aqua group on the left with the label «نموذج الطلب · 3 خطوات فقط» on its top edge; step 5 is at the far left.

**06** Bento: row 1 = three large cards, 01 الصفحة الرئيسية at the right and 03 دليل الكفاءات والخبرات at the left; row 2 = four small cards, 04 من نحن at the right … 07 تواصل معنا at the left. Each card: screenshot thumbnail on top (top of the page, cropped), below it the title + number at the right and a small round arrow icon at the left.

**07** Composition (desktop): browser frame with «نسخة الديسكتوب» tag (dot) on the right; a phone mock with «نسخة الجوال» tag overlapping its left edge; a small numbered marker (1) on the phone. Below: form-detail image card on the right with markers 2 and 3 over it, and on the left the heading «تفصيل النموذج: كل خطوة بقرار» with the three numbered notes.

**08** Desktop: one large near-black panel (not glass): row of 4 big colour cards (right to left: Brand Blue, Brand Red, Brand Aqua, تدرج الأزرار — name and hex inside the card at bottom-start), then a strip of 13 grey/light-blue cells with the hex written inside each, then two panels side by side (Typography on the right, Radius/Spacing on the left: 4 outlined radius squares/circle labelled 12, 16, 25, 999 and 5 spacing blocks labelled 32, 20, 10, 8, 4), then a Components row with: gradient button «المتابعة», blue (`#303188`) button «اتصل بنا», a labelled input «الاسم الكامل», the 3-step progress, and a small blue «SIBA» tag.

**09** Stat cards right to left: +$1.5B (red gradient number), +30,000 (blue), +2500 (blue-violet), 3 (aqua, teal-outlined card, tag «نتيجة التصميم»). Each card: number, label, thin divider, small grey tag at the bottom. CTA panel: centered content, big blue + red glows inside the panel, chip «UP TO MEDIA», title with «الفارق» in aqua, text, two centered buttons.

**Footer / header** are placeholders; do not spend time matching them. But fix these bugs: phone numbers must be `dir="ltr"` inside `<bdi>` (they currently show reversed, e.g. "4158 121 79 962+"), and the email must be right-aligned like the other lines.
