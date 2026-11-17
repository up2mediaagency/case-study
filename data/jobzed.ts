import type { FooterPlaceholderData, HeaderPlaceholderData } from "./types";

export interface JobzedScreenItem {
  number: string;
  title: string;
  src: string;
  alt: string;
}

export const jobzedData = {
  slug: "jobzed",
  siteUrl: "",
  header: {
    logoText: "Up To Media",
    menu: [
      "حلولنا",
      "أعمالنا",
      "من نحن",
      "المدونة",
      "الأخبار",
      "تواصل معنا",
    ],
    loginLabel: "تسجيل الدخول",
    ctaLabel: "ابدأ رحلة نموك",
  } satisfies HeaderPlaceholderData,
  hero: {
    badge: "دراسة حالة · منصة خدمات مهنية",
    titleBefore: "جوب زيد: التوظيف الذي ",
    titleKeyword: "يمشي معك",
    titleAfter: " خطوة بخطوة",
    description:
      "منصة عربية تضع مستشاراً وظيفياً حقيقياً بجانب الباحث عن عمل، وتحوّل رحلة التقديم المبعثرة إلى طلب واحد ومتابعة واضحة.",
    exploreLabel: "استكشف القصة",
    exploreHref: "#challenge",
    visitLabel: "زيارة الموقع",
    facts: [
      { value: "4", label: "أدوار على المنصة", mobileLabel: "أدوار على المنصة" },
      {
        value: "9",
        label: "خدمات مهنية إضافية",
        mobileLabel: "خدمات إضافية",
      },
      { value: "3", label: "باقات اشتراك", mobileLabel: "باقات اشتراك" },
      { value: "2026", label: "سنة التنفيذ", mobileLabel: "سنة التنفيذ" },
    ],
    browserImage: {
      src: "/case-studies/jobzed/landing.png",
      alt: "الصفحة الرئيسية لمنصة جوب زيد",
    },
  },
  challenge: {
    badge: "التحدّي",
    titleBefore: "ثلاث عقبات بين الباحث و",
    titleKeyword: "وظيفته",
    titleAfter: "",
    cards: [
      {
        number: "01",
        title: "بحث بلا خريطة",
        description:
          "فرص موزّعة على منصات كثيرة، ولا مكان واحد يجمعها ويرتّبها له.",
      },
      {
        number: "02",
        title: "اختيار بلا معيار",
        description:
          "كيف يعرف الباحث أن الفرصة تناسبه فعلاً؟ غالباً يخمّن وحده.",
      },
      {
        number: "03",
        title: "طلبات بلا متابعة",
        description:
          "يُرسل الطلب ثم يغيب الرد، ولا يعرف أين وصل أو ماذا ينقصه.",
      },
    ],
    commitmentsTitle: "ما التزمنا به في التصميم",
    commitments: [
      "خدمة تُفهم من أول نظرة",
      "طلب بخطوات قليلة",
      "حالة الرحلة دائماً ظاهرة",
      "مستشار حاضر بوضوح",
    ],
  },
  audit: {
    badge: "قبل الرسم",
    titleBefore: "",
    titleKeyword: "دقّقنا الرحلة",
    titleAfter: " كما هي، ثم صمّمناها كما يجب",
    description:
      "أربع مراجعات قصيرة أعطتنا أرقاماً حقيقية نبني عليها كل قرار.",
    methods: [
      "تدقيق النموذج الأولي",
      "تعريف المنتج والمستخدمين",
      "مقارنة منصات التوظيف",
      "المحتوى والثقة والتسعير",
    ],
    insights: [
      {
        value: "9",
        title: "مراحل في رحلة الباحث",
        description: "من أول زيارة إلى متابعة الطلب.",
        highlighted: false,
      },
      {
        value: "5",
        title: "خطوات في نموذج الطلب الأولي",
        description: "قسّمناه لاحقاً إلى مراحل أخف وأوضح.",
        highlighted: true,
      },
      {
        value: "3 / 6",
        title: "عدد خطوات الخدمة اختلف بين الصفحات",
        description: "تباين رصدناه في المحتوى فوحّدناه في رواية واحدة.",
        highlighted: false,
      },
    ],
  },
  users: {
    badge: "المستخدمون",
    titleBefore: "وجهان لتجربة ",
    titleKeyword: "واحدة",
    titleAfter: "",
    description: "الواجهة تخدم الباحث، والأدوات الداخلية تخدم من يرافقه.",
    cards: [
      {
        title: "الباحث عن عمل",
        badge: "المستخدم الأساسي",
        variant: "white" as const,
        bullets: [
          "يفهم الخدمة بسرعة",
          "يطلب دون تعقيد",
          "يعرف أين وصل طلبه",
        ],
        need: "حاجته: من يبحث معه بدل أن يبحث وحده.",
      },
      {
        title: "المستشار الوظيفي",
        badge: "مستخدم داخلي",
        variant: "tint" as const,
        bullets: [
          "يرى الطلبات المسندة إليه",
          "يتابع حالة كل عميل",
          "يوثّق توصياته",
        ],
        need: "حاجته: صورة كاملة عن العميل قبل أن يبدأ.",
      },
    ],
    note: "نوع مستخدم أولي مبني على الأدوار والاحتياجات، وليس شخصية بحثية موثّقة.",
  },
  journey: {
    badge: "المسار",
    titleBefore: "من الزيارة الأولى إلى ",
    titleKeyword: "إرسال الطلب",
    titleAfter: "",
    description: "خمس محطات واضحة، وكل محطة تسأل سؤالاً واحداً فقط.",
    stations: [
      {
        number: "01",
        title: "الوصول",
        description: "صفحة رئيسية تشرح الفكرة",
        highlighted: false,
      },
      {
        number: "02",
        title: "فهم الخدمة",
        description: "ماذا يقدّم المستشار؟",
        highlighted: false,
      },
      {
        number: "03",
        title: "المعلومات والخلفية",
        description: "بيانات الباحث وخبرته",
        highlighted: false,
      },
      {
        number: "04",
        title: "الوظيفة والباقة",
        description: "اختيار الهدف والخدمات",
        highlighted: false,
      },
      {
        number: "05",
        title: "المراجعة والإرسال",
        description: "تأكيد أخير ثم طلب واحد",
        highlighted: true,
      },
    ],
    pagesStripTitle: "صفحات الموقع",
    pagesStrip: [
      "الرئيسية",
      "الخدمات",
      "الباقات",
      "التجارب",
      "كيف نساعدك",
      "الأسئلة الشائعة",
      "تسجيل الدخول",
    ],
  },
  screens: {
    badge: "الشاشات",
    titleBefore: "الصفحات التي ",
    titleKeyword: "يلمسها الباحث",
    titleAfter: "",
    description: "من الصفحة الرئيسية حتى الباقة والخلفية المهنية.",
    items: [
      {
        number: "01",
        title: "الصفحة الرئيسية",
        src: "/case-studies/jobzed/landing.png",
        alt: "الصفحة الرئيسية لمنصة جوب زيد",
      },
      {
        number: "02",
        title: "الخدمات",
        src: "/case-studies/jobzed/services.png",
        alt: "صفحة الخدمات في منصة جوب زيد",
      },
      {
        number: "03",
        title: "الباقة والخدمات",
        src: "/case-studies/jobzed/package.png",
        alt: "صفحة اختيار الباقة والخدمات في جوب زيد",
      },
      {
        number: "04",
        title: "تسجيل الدخول",
        src: "/case-studies/jobzed/login.png",
        alt: "صفحة تسجيل الدخول في منصة جوب زيد",
      },
      {
        number: "05",
        title: "حساب جديد",
        src: "/case-studies/jobzed/signup.png",
        alt: "صفحة إنشاء حساب جديد في منصة جوب زيد",
      },
      {
        number: "06",
        title: "المعلومات الشخصية",
        src: "/case-studies/jobzed/onboarding-1.png",
        alt: "نموذج المعلومات الشخصية في جوب زيد",
      },
      {
        number: "07",
        title: "الخلفية المهنية",
        src: "/case-studies/jobzed/onboarding-2.png",
        alt: "نموذج الخلفية المهنية في جوب زيد",
      },
    ] satisfies JobzedScreenItem[],
  },
  tracking: {
    badge: "المتابعة",
    titleBefore: "لوحة تُظهر ",
    titleKeyword: "حالة الرحلة",
    titleAfter: " بنظرة واحدة",
    description:
      "بعد الإرسال لا يغيب الباحث في الانتظار: يرى أين وصل طلبه، وماذا بعده.",
    notes: [
      {
        title: "مرحلة واضحة",
        description: "كل طلب له حالة مكتوبة بالعربية.",
      },
      {
        title: "مستشار ظاهر",
        description: "اسم المستشار ورسالته في مكان ثابت.",
      },
      {
        title: "خطوة تالية واحدة",
        description: "زر رئيسي واحد لما يجب فعله الآن.",
      },
    ],
    dashboardImage: {
      src: "/case-studies/jobzed/dashboard.png",
      alt: "لوحة متابعة الباحث عن عمل في جوب زيد",
    },
    formCard: {
      title: "نموذج طلب بخطوات مرقّمة",
      description:
        "الطلب يُقسَّم إلى مراحل قصيرة: حقول مجمّعة بعناوين، وتقدّم ظاهر، وزر رئيسي واحد في كل خطوة.",
      src: "/case-studies/jobzed/onboarding-1.png",
      alt: "نموذج طلب بخطوات مرقّمة في جوب زيد",
    },
  },
  internalTools: {
    badge: "خلف الكواليس",
    titleBefore: "أدوات الفريق التي ",
    titleKeyword: "تصنع التجربة",
    titleAfter: "",
    description: "ثلاث لوحات داخلية يعمل عليها فريق جوب زيد كل يوم.",
    tools: [
      {
        title: "إدارة الطلبات",
        description: "كل طلب وحالته ومستشاره المسؤول",
        src: "/case-studies/jobzed/orders.png",
        alt: "لوحة إدارة الطلبات في جوب زيد",
      },
      {
        title: "لوحة التحكم الإدارية",
        description: "الأرقام والحسابات في مكان واحد",
        src: "/case-studies/jobzed/admin.png",
        alt: "لوحة التحكم الإدارية في جوب زيد",
      },
      {
        title: "مساحة المستشار",
        description: "ملف العميل والتوصيات",
        src: "/case-studies/jobzed/consultant.png",
        alt: "مساحة المستشار الوظيفي في جوب زيد",
      },
    ],
  },
  designSystem: {
    badge: "لغة التصميم",
    titleBefore: "هوية هادئة ",
    titleKeyword: "بلمسة ليمونية",
    titleAfter: "",
    description: "أزرق يبعث الثقة، وليموني يضيء ما يجب الانتباه له.",
    brandColors: [
      { name: "الأزرق الأساسي", hex: "#4A71B3", darkText: false },
      { name: "الأزرق الداكن", hex: "#34548C", darkText: false },
      { name: "الأزرق الفاتح", hex: "#789AD0", darkText: false },
      { name: "الليموني", hex: "#B2CA35", darkText: true },
    ],
    logoCard: {
      title: "الشعار",
      items: [
        {
          src: "/case-studies/jobzed/logo-3d-2.png",
          alt: "شعار جوب زيد ثلاثي الأبعاد — زاوية يمين",
          width: 94,
          height: 102,
        },
        {
          src: "/case-studies/jobzed/logo-3d-1.png",
          alt: "شعار جوب زيد ثلاثي الأبعاد — زاوية يسار",
          width: 85,
          height: 102,
        },
        {
          src: "/case-studies/jobzed/logo-flat.svg",
          alt: "شعار جوب زيد المسطّح",
          width: 100,
          height: 102,
        },
      ],
    },
    fontCard: {
      title: "الخط: Alexandria",
      specimen: "Aa أبجد",
      weights: "Regular · Medium · SemiBold · Bold",
      samples: [
        { text: "عنوان كبير · 38/57", className: "text-[24px] font-semibold lg:text-[26px]" },
        { text: "عنوان فرعي · 22/33", className: "text-[18px] font-semibold lg:text-[20px]" },
        { text: "نص أساسي · 16/28", className: "text-[15px] font-normal lg:text-[16px]" },
      ],
    },
    neutralsCard: {
      title: "الألوان المحايدة",
      colors: [
        "#162038",
        "#1D2F55",
        "#5B6880",
        "#E2E8F1",
        "#E6EDF8",
        "#EEF3FA",
        "#F4F6F1",
        "#FFFFFF",
      ],
    },
    componentsCard: {
      title: "المكوّنات",
      badgeLabel: "جوب زيد",
      primaryBtnLabel: "ابدأ طلبك",
      secondaryBtnLabel: "تواصل معنا",
      inputLabel: "الاسم الكامل",
      inputPlaceholder: "مثال: أحمد خالد",
    },
  },
  results: {
    badge: "الأثر",
    titleBefore: "رحلة أقصر وصورة ",
    titleKeyword: "أوضح",
    titleAfter: "",
    stats: [
      { value: "67%", label: "وقت أقل في البحث", ltr: false },
      { value: "+140", label: "تقييم من المستخدمين", ltr: true },
      { value: "4.9", label: "متوسط التقييم", ltr: false },
      { value: "6", label: "خطوات واضحة للطلب", ltr: false },
    ],
    cta: {
      title: "عندك منصة خدمات تحتاج رحلة أوضح؟",
      description: "نصمّم تجربة تُفهم من النظرة الأولى وتُكمَل بثقة.",
      buttonLabel: "تحدّث مع UP TO MEDIA",
      buttonHref: "mailto:info@up2media.net",
    },
  },
  footer: {
    brandName: "UP TO MEDIA",
    brandDescription:
      "وكالة تسويق وإعلام وتصميم وإنتاج تساعد العلامات التجارية على النمو بحلول رقمية متكاملة.",
    contactTitle: "تواصل معنا",
    email: "info@up2media.net",
    phones: [
      { country: "الأردن", number: "+962 79 121 4158" },
      { country: "المملكة العربية السعودية", number: "+966 56 364 0983" },
    ],
    servicesTitle: "الخدمات",
    services: [
      "تصميم واجهات وتجربة المستخدم",
      "تطوير المواقع والمنصات",
      "الهوية البصرية ونظم التصميم",
      "الإنتاج والمحتوى الإبداعي",
    ],
    quickLinksTitle: "روابط سريعة",
    quickLinks: ["الرئيسية", "أعمالنا", "من نحن", "تواصل معنا"],
    copyright: "© 2026 UP TO MEDIA. جميع الحقوق محفوظة.",
  } satisfies FooterPlaceholderData,
};
