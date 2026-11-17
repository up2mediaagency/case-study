import { sibaData } from "./siba";

export interface CaseStudyCardItem {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  tags: string[];
  href: string;
}

export const caseStudies: CaseStudyCardItem[] = [
  {
    slug: "siba",
    title: "سيبا الأردن",
    summary: sibaData.hero.description,
    cover: "/case-studies/siba/home.png",
    tags: ["منظمة غير ربحية", "ويب متجاوب", "نظام تصميم"],
    href: "/our-work/siba",
  },
];
