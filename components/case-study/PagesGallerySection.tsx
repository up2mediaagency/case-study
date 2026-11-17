import type { PagesGalleryData } from "@/data/types";
import { PagesGalleryClient } from "./PagesGalleryClient";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface PagesGallerySectionProps {
  data: PagesGalleryData;
  availableImages: Record<string, boolean>;
}

export function PagesGallerySection({
  data,
  availableImages,
}: PagesGallerySectionProps) {
  return (
    <Section
      id="pages-gallery"
      haloTopColor="var(--brand-blue)"
      haloBottomColor="var(--brand-aqua)"
    >
      <SectionHeader data={data.header} />
      <PagesGalleryClient
        cards={data.cards}
        availableImages={availableImages}
      />
    </Section>
  );
}
