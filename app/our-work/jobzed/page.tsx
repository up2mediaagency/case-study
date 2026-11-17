import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { JobzedAudit } from "@/components/case-study/jobzed/JobzedAudit";
import { JobzedChallenge } from "@/components/case-study/jobzed/JobzedChallenge";
import { JobzedDesignSystem } from "@/components/case-study/jobzed/JobzedDesignSystem";
import { JobzedHero } from "@/components/case-study/jobzed/JobzedHero";
import { JobzedInternalTools } from "@/components/case-study/jobzed/JobzedInternalTools";
import { JobzedJourney } from "@/components/case-study/jobzed/JobzedJourney";
import { JobzedResults } from "@/components/case-study/jobzed/JobzedResults";
import { JobzedScreens } from "@/components/case-study/jobzed/JobzedScreens";
import { JobzedTracking } from "@/components/case-study/jobzed/JobzedTracking";
import { JobzedUsers } from "@/components/case-study/jobzed/JobzedUsers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { jobzedData } from "@/data/jobzed";
import { jobzedTheme } from "@/theme/jobzed";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "جوب زيد — دراسة حالة | UP TO MEDIA",
  description: jobzedData.hero.description,
};

export default function JobzedCaseStudyPage() {
  return (
    <div
      style={jobzedTheme}
      className={`${alexandria.className} min-h-screen bg-[var(--jz-bg)] text-[var(--jz-ink)]`}
    >
      <SiteHeader data={jobzedData.header} />

      <main>
        <JobzedHero />
        <JobzedChallenge />
        <JobzedAudit />
        <JobzedUsers />
        <JobzedJourney />
        <JobzedScreens />
        <JobzedTracking />
        <JobzedInternalTools />
        <JobzedDesignSystem />
        <JobzedResults />
      </main>

      <SiteFooter data={jobzedData.footer} />
    </div>
  );
}
