import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroCinematic } from "@/components/case-study/HeroCinematic";
import { ProblemSection } from "@/components/case-study/ProblemSection";
import { DiscoverySection } from "@/components/case-study/DiscoverySection";
import { AudienceSection } from "@/components/case-study/AudienceSection";
import { ArchitectureSection } from "@/components/case-study/ArchitectureSection";
import { PagesGallerySection } from "@/components/case-study/PagesGallerySection";
import { ScreensSection } from "@/components/case-study/ScreensSection";
import { DesignSystemSection } from "@/components/case-study/DesignSystemSection";
import { ResultsSection } from "@/components/case-study/ResultsSection";
import { sibaData } from "@/data/siba";
import { sibaTheme } from "@/theme/siba";
import { checkAvailableImages } from "@/lib/assets";

export const metadata: Metadata = {
  title: "سيبا الأردن (SIBA) — دراسة حالة | UP TO MEDIA",
  description: sibaData.hero.description,
};

export default function SibaCaseStudyPage() {
  const imagePaths = [
    sibaData.hero.browserImage.src,
    ...sibaData.pagesGallery.cards.map((c) => c.src),
    sibaData.screens.desktopImage.src,
    sibaData.screens.mobileImage.src,
    sibaData.screens.formImage.src,
  ];
  const availableImages = checkAvailableImages(imagePaths);

  return (
    <div style={sibaTheme} className="min-h-screen bg-[#05070F] text-white">
      <SiteHeader data={sibaData.header} />
      <main>
        <HeroCinematic data={sibaData.hero} availableImages={availableImages} />
        <ProblemSection data={sibaData.problem} />
        <DiscoverySection data={sibaData.discovery} />
        <AudienceSection data={sibaData.audience} />
        <ArchitectureSection data={sibaData.architecture} />
        <PagesGallerySection
          data={sibaData.pagesGallery}
          availableImages={availableImages}
        />
        <ScreensSection
          data={sibaData.screens}
          availableImages={availableImages}
        />
        <DesignSystemSection data={sibaData.designSystem} />
        <ResultsSection data={sibaData.results} />
      </main>
      <SiteFooter data={sibaData.footer} />
    </div>
  );
}
