# SIBA — content (single source of truth)

Use these texts **word for word**. Put them in `data/siba.ts`. Order inside each list is **reading order in RTL (first = rightmost / topmost)**.
`illustrative: true` = placeholder to be replaced by client data; must show the amber tag.
`keyword` = the phrase painted with the keyword gradient inside the title.

Project: سيبا الأردن (SIBA Jordan) — شبكة سيبا للكفاءات المهنية / منصة مؤسسية غير ربحية. The «زيارة الموقع» button needs the real SIBA URL, which is not in these docs: link it to `#` for now and tell the owner it is missing.

---
## 00 Header (placeholder, dev team replaces)
Logo text: Up To Media
Menu: حلولنا · أعمالنا · من نحن · المدونة · الأخبار · تواصل معنا
Buttons: تسجيل الدخول · ابدأ رحلة نموك

## 01 Hero
- badge: دراسة حالة · منصة مؤسسية غير ربحية
- title: سيبا الأردن: من التمكين الاقتصادي
  إلى بناء الجسور المؤسسية   (line break after «الاقتصادي»)
  - keyword (red gradient): بناء الجسور المؤسسية
- description: صممنا منظومة رقمية تفاعلية تدعم وتوحّد مجتمع الأعمال السوري في الأردن: تشبيك، تمويل، ودليل كفاءات في تجربة واحدة واضحة.
- buttons: «زيارة الموقع» (primary gradient) · «استكشف القصة» (glass; scrolls to section 02)
- project facts (label → value):
  - السنة → 2026
  - النطاق → بحث UX · واجهات · نظام تصميم
  - المنصة → ويب متجاوب
  - القطاع → منظمة غير ربحية
- browser frame: image `home.png` (real Home page of SIBA)
- stat cards (real, announced by SIBA):
  - +2500 — منشأة وشركة
  - +30,000 — موظف مباشر
  - +$1.5B — استثمار سوري في الأردن

## 02 المشكلة وسياق العمل
- badge: المشكلة وسياق العمل · number 02
- title: مجتمع أعمال نشط… وبوابة رقمية لا تعكس حجمه — keyword: وبوابة رقمية لا تعكس حجمه
- description: قبل البدء حدّدنا الاحتكاك الحقيقي، وأثره على المنظمة، ومعايير نجاح واضحة نقيس بها كل قرار.
- problem cards (red-tinted glass; number on top):
  1. 01 — ثقة مؤسسية ضعيفة — هوية رقمية لا تنقل حجم الأثر ولا تُطمئن الشركاء والجهات الداعمة.
  2. 02 — مسار طلب غامض — المستفيد لا يعرف أي نوع دعم يناسبه ولا ما الخطوات المطلوبة للتقديم.
  3. 03 — تشتّت المدخل — برامج وخدمات متعددة دون نقطة دخول واحدة، فيضيع الزائر قبل أن يبدأ.
  (Desktop: card 01 on the right, 03 on the left.)
- success criteria panel, title: معايير النجاح المتفق عليها; aqua chips:
  - مدخل واحد واضح لكل خدمة
  - تقديم الطلب في 3 خطوات
  - دليل كفاءات قابل للبحث
  - تجربة جوال كاملة

## 03 الاكتشاف والبحث
- badge: الاكتشاف والبحث · number 03
- title: من البيانات إلى القرار: أربع طرق بحث قادت كل ما صمّمناه لاحقاً. — keyword: أربع طرق بحث
  (Desktop: «من البيانات إلى القرار:» on the first line, «أربع طرق بحث قادت كل ما صمّمناه لاحقاً.» on the second. Mobile: same text flows as one title.)
- research methods (numbered 1→4, 1 is rightmost/topmost):
  1. مراجعة مسار التسجيل
  2. مقارنة منصات مماثلة
  3. تقييم الموقع السابق
  4. مقابلات أصحاب المصلحة
- insight cards (all `illustrative: true`; amber tag text «رقم توضيحي — يُستبدل ببيانات العميل»). Each has: big number, sentence, then a block labelled «القرار التصميمي» with the decision:
  1. 3 من 4 — من الزوار لا يميّزون نوع الدعم المناسب لهم من القائمة الرئيسية. — القرار: تقسيم المسارات إلى بطاقات واضحة بأيقونات
  2. +60% — يتخلّون عن النموذج الطويل قبل إكماله. — القرار: نموذج من 3 خطوات مع مؤشّر تقدّم
  3. 70% — من الزيارات من الجوال. — القرار: تصميم متجاوب يبدأ من الجوال
  (Order: 3 من 4 first, then +60%, then 70%. Desktop: first card on the right. Mobile: stacked top to bottom.)

## 04 الجمهور المستهدف
- badge: الجمهور المستهدف · number 04
- title: شخصيتان تقودان كل شاشة — keyword: تقودان كل شاشة
- personas (both `illustrative: true`; amber tag «شخصية افتراضية مبنية على فهم الجمهور»):
  1. avatar letter ل — name: د. ليلى — role: ممثلة جهة شريكة
     - الأهداف: تتحقق من مصداقية المنظمة · تتابع الأثر بأرقام واضحة
     - نقاط الألم: معلومات متفرقة · هوية لا تعكس الحجم
     - chips: سطح مكتب · عمل
     - quote: “أحتاج صورة مؤسسية واضحة قبل أي شراكة.”
  2. avatar letter خ — name: أبو خالد — role: صاحب مشروع صغير في عمّان
     - الأهداف: يجد الدعم المناسب بسرعة · يتعرّف إلى شركاء وأعضاء
     - نقاط الألم: لا يعرف من أين يبدأ · نماذج طويلة ومعقّدة
     - chips: جوال · عربي فقط
     - quote: “أريد أن أعرف ما الذي يناسبني خلال دقيقة.”
  Goals bullets use aqua dots; pains use red dots.

## 05 بنية المعلومات والمسارات
- badge: بنية المعلومات والمسارات · number 05
- title: خريطة واضحة… ومسار بلا طرق مسدودة — keyword: ومسار بلا طرق مسدودة
- site map (title: خريطة الموقع). Root: الرئيسية (gradient pill). Pages under it: اتصل بنا · المركز الإعلامي · التشبيك والدعم · العضوية والشراكات · عن سيبا. Under «التشبيك والدعم»: منصة التشبيك والدعم → نموذج الطلب (aqua highlight).
- critical path (title: المسار الحرج: من الزيارة إلى الطلب). Steps, numbered 1→5:
  1. الوصول — صفحة رئيسية تعرّف بسيبا ومسارات الدخول
  2. فهم المنصة — عنوان واضح وخطوات ثلاث
  3. البيانات الأساسية — اسم، صفة، تواصل
  4. نوع الطلب والاحتياج — تحديد الاحتياج أو نوع الدعم
  5. المراجعة والتحقق — مراجعة البيانات ثم الإرسال
  Steps 3–5 sit inside one dashed aqua group labelled: نموذج الطلب · 3 خطوات فقط

## 06 صفحات المنصة
- badge: صفحات المنصة · number 06
- title: سبع صفحات… منظومة واحدة متماسكة — keyword: منظومة واحدة متماسكة
- description: كل صفحة بنفس اللغة البصرية: خلفية داكنة، تدرجات هادئة، وبطاقات واضحة.
- 7 page cards (number badge + title + screenshot):
  1. 01 — الصفحة الرئيسية — large — `home.png`
  2. 02 — منصة التشبيك والدعم — large — `matchmaking.png`
  3. 03 — دليل الكفاءات والخبرات — large — `talent-directory.png`
  4. 04 — من نحن — small — `about.png`
  5. 05 — شبكة الخبراء المعتمدين — small — `experts-network.png`
  6. 06 — مجلس الإدارة — small — `board.png`
  7. 07 — تواصل معنا — small — `contact.png`
- Show the TOP of each screenshot (`object-top`).

## 07 الواجهات الرئيسية
- badge: الواجهات الرئيسية · number 07
- title: منصة التشبيك والدعم: نموذج بسيط في ثلاث خطوات — keyword: نموذج بسيط في ثلاث خطوات
- labels: نسخة الديسكتوب (image `matchmaking.png`, top part) · نسخة الجوال (image `matchmaking-mobile.png`, top part, inside a phone-shaped rounded container, radius ~22–32) 
- form detail card, title: تفصيل النموذج: كل خطوة بقرار — image `form-step-1.png` — numbered notes 1→3:
  1. مؤشّر تقدّم واضح — ثلاث خطوات مرقّمة يعرف الزائر بها أين وصل.
  2. حقول مجمّعة بعناوين — معلومات أساسية فقط في الخطوة الأولى لتخفيف الجهد.
  3. إجراء رئيسي واحد — زر واحد بارز للانتقال للخطوة التالية.
  On the desktop, the form image has small numbered markers 1/2/3 placed over the progress bar, the field groups and the main button.

## 08 نظام التصميم
- badge: نظام التصميم · number 08
- title: نظام تصميم داكن… بثلاثة ألوان — keyword: بثلاثة ألوان
- description: مأخوذ مباشرة من تصميم سيبا الفعلي: خط Readex Pro، زوايا ناعمة، وتدرجات زرقاء هادئة على خلفية داكنة.
- This section is **drawn in code** (token swatches), not a screenshot. Inside one glass panel, four groups:
  - ألوان العلامة (COLOR): Brand Blue #303188 · Brand Red #EE2D3D · Brand Aqua #02B3D2 · تدرج الأزرار #025BCF → #0091BD · greys strip: #0A0A0A #141414 #1A1A1A #282828 #3B3B3B #4F4F4F #636363 #818181 #BCBCBC #D6DBDC #F2F2F2 · light blues #BDE2FF #E9F5FF
  - الزوايا والمسافات (RADIUS · SPACING): radii 999, 25, 16, 12 · spacing 32, 20, 10, 8, 4
  - الخط (TYPOGRAPHY): big «Aa», name Readex Pro, caption الخط الأساسي لكل الواجهات, weights labels خفيف · عادي · متوسط · شبه عريض · عريض, samples: عنوان رئيسي كبير · عنوان فرعي واضح · نص الفقرة بحجم مريح للقراءة على الخلفيات الداكنة
  - مكوّنات الواجهة (COMPONENTS): a SIBA-style primary button, and a 3-step progress indicator with labels البيانات (1) · الاحتياج (2) · المراجعة (3).
- Use Readex Pro for the typography samples and component samples.

## 09 النتائج والأثر
- badge: النتائج والأثر · number 09
- title: منظومة واحدة… وأثر يمكن قياسه — keyword: وأثر يمكن قياسه
- description: أرقام سيبا الأردن المعلنة، وما غيّرناه في تجربة التقديم.
- 4 stat cards (count-up):
  1. 3 — خطوات فقط لتقديم الطلب — tag: نتيجة التصميم (highlighted aqua card)
  2. +2500 — منشأة وشركة — tag: مُعلَن من سيبا الأردن
  3. +30,000 — موظف مباشر — tag: مُعلَن من سيبا الأردن
  4. +$1.5B — استثمار سوري في الأردن — tag: مُعلَن من سيبا الأردن
- CTA panel (gradient `#303188 → #025BCF`, glass border):
  - chip: UP TO MEDIA
  - title: لنصنع الفارق في مشروعك القادم
  - text: فريق UP TO MEDIA يحوّل فكرتك إلى تجربة رقمية واضحة وقابلة للقياس.
  - buttons: «ابدأ رحلة نموك» (white, dark text) · «شاهد المزيد من الأعمال» (transparent, white border; links to `/our-work`)

## 10 Footer (placeholder, dev team replaces)
- brand: Up To Media — وكالة تسويق وإعلام وتصميم وإنتاج تساعد العلامات التجارية على النمو بحلول رقمية متكاملة.
- تواصل معنا: info@up2media.net · الأردن: +962 79 121 4158 · سوريا: +963 968 925 523
- خدماتنا: تحسين محركات البحث · بناء المواقع الإلكترونية · التسويق وإدارة الحملات · تصميم الجرافيك
- روابط سريعة: من نحن · الخدمات · أعمالنا · المدونة · الأخبار · فحص موقعك مجاناً
- bottom: جميع الحقوق محفوظة © 2026 Up To Media
- Footer background `#081C30`, top corners radius 45px on desktop (none on mobile).
