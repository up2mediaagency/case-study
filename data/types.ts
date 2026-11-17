export interface SectionHeaderData {
  number: string;
  badge: string;
  title: string;
  keyword: string;
  keywordFrom?: string;
  keywordTo?: string;
  description?: string;
}

export interface StatItem {
  value: string;
  label: string;
  ltr?: boolean;
  tag?: string;
  highlighted?: boolean;
}

export interface HeroData {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  keyword: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  facts: { label: string; value: string }[];
  browserImage: { src: string; alt: string; label: string };
  stats: StatItem[];
}

export interface ProblemData {
  header: SectionHeaderData;
  cards: { number: string; title: string; description: string }[];
  criteriaTitle: string;
  criteriaChips: string[];
}

export interface DiscoveryData {
  header: SectionHeaderData;
  titleLine1?: string;
  titleLine2?: string;
  methods: { number: string; label: string }[];
  illustrativeTag: string;
  insights: {
    illustrative: boolean;
    number: string;
    sentence: string;
    decisionLabel: string;
    decision: string;
  }[];
}

export interface PersonaItem {
  illustrative: boolean;
  avatarLetter: string;
  name: string;
  role: string;
  goalsLabel: string;
  goals: string[];
  painsLabel: string;
  pains: string[];
  chips: string[];
  quote: string;
}

export interface AudienceData {
  header: SectionHeaderData;
  illustrativeTag: string;
  personas: PersonaItem[];
}

export interface ArchitectureData {
  header: SectionHeaderData;
  siteMapTitle: string;
  rootLabel: string;
  pages: string[];
  branchParent: string;
  branchSubPages: string[];
  criticalPathTitle: string;
  criticalPathGroupLabel: string;
  steps: {
    number: string;
    title: string;
    description: string;
    inGroup?: boolean;
  }[];
}

export interface PageCardItem {
  number: string;
  title: string;
  size: "large" | "small";
  src: string;
  alt: string;
}

export interface PagesGalleryData {
  header: SectionHeaderData;
  cards: PageCardItem[];
}

export interface ScreensData {
  header: SectionHeaderData;
  desktopLabel: string;
  desktopImage: { src: string; alt: string; label: string };
  mobileLabel: string;
  mobileImage: { src: string; alt: string; label: string };
  formDetailTitle: string;
  formImage: { src: string; alt: string; label: string };
  formNotes: { number: string; title: string; description: string }[];
}

export interface DesignSystemData {
  header: SectionHeaderData;
  colorSectionLabel: string;
  colorSectionEn: string;
  brandColors: { name: string; hex: string }[];
  buttonGradient: { name: string; from: string; to: string };
  greys: string[];
  lightBlues: string[];
  radiusSpacingLabel: string;
  radiusSpacingEn: string;
  radii: number[];
  spacings: number[];
  typographyLabel: string;
  typographyEn: string;
  fontName: string;
  fontCaption: string;
  weights: string[];
  samples: { label: string; size: "lg" | "md" | "sm" }[];
  componentsLabel: string;
  componentsEn: string;
  sampleButtonLabel: string;
  progressSteps: { number: string; label: string }[];
}

export interface ResultsData {
  header: SectionHeaderData;
  stats: StatItem[];
  cta: {
    chip: string;
    title: string;
    description: string;
    primaryButton: { label: string; href: string };
    secondaryButton: { label: string; href: string };
  };
}

export interface HeaderPlaceholderData {
  logoText: string;
  menu: string[];
  loginLabel: string;
  ctaLabel: string;
}

export interface FooterPlaceholderData {
  brandName: string;
  brandDescription: string;
  contactTitle: string;
  email: string;
  phones: { country: string; number: string }[];
  servicesTitle: string;
  services: string[];
  quickLinksTitle: string;
  quickLinks: string[];
  copyright: string;
}

export interface CaseStudyData {
  slug: string;
  header: HeaderPlaceholderData;
  hero: HeroData;
  problem: ProblemData;
  discovery: DiscoveryData;
  audience: AudienceData;
  architecture: ArchitectureData;
  pagesGallery: PagesGalleryData;
  screens: ScreensData;
  designSystem: DesignSystemData;
  results: ResultsData;
  footer: FooterPlaceholderData;
}
