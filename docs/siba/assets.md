# SIBA — image assets

All real SIBA screens are PNG files in `public/case-studies/siba/`. They are **screenshots exported from the SIBA design**. Show them as images only.
Use `object-cover object-top` unless noted. Write Arabic `alt` text for each.

| File | Size (px) | What it is | Used in |
|---|---|---|---|
| `home.png` | 1440 × 6708 | Full Home page | Hero browser frame (scrolls inside the frame on desktop; top part only on mobile), 06 card 01 |
| `matchmaking.png` | 1440 × 2582 | منصة التشبيك والدعم page | 06 card 02, 07 desktop |
| `talent-directory.png` | 1440 × 2486 | دليل الكفاءات والخبرات | 06 card 03 |
| `about.png` | 1440 × 4860 | من نحن | 06 card 04 |
| `experts-network.png` | 1440 × 2935 | شبكة الخبراء المعتمدين | 06 card 05 |
| `board.png` | 1440 × 2384 | مجلس الإدارة | 06 card 06 |
| `contact.png` | 1440 × 1580 | تواصل معنا | 06 card 07 |
| `matchmaking-mobile.png` | 390 × 2292 | Mobile version of the matchmaking page | 07 phone container (top part) |
| `form-step-1.png` | 878 × 506 | Form step 1 («البيانات الأساسية») | 07 form detail |

## If a file is missing
Build the component with a neutral placeholder (dark glass box with the page name) and tell the owner which file is missing. Never invent a screenshot.

## Notes
- The owner exports these from the SIBA Figma frames at 1× (or 2× if possible) and drops them into `public/case-studies/siba/` with exactly these names.
- Large images: `home.png` is tall. Show it only inside the hero frame; for other uses crop with `object-top` and the card's aspect ratio.
- For retina quality the desktop frames can be exported at 2× later; keep the same file names and nothing else changes.
