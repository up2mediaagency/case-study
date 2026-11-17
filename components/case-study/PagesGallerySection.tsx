import type { PagesGalleryData } from "@/data/types";
import { GlassCard } from "./GlassCard";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";
import { ScreenshotBox } from "./ScreenshotBox";
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
  const largeCards = data.cards.filter((c) => c.size === "large");
  const smallCards = data.cards.filter((c) => c.size === "small");

  return (
    <Section
      id="pages-gallery"
      haloTopColor="var(--brand-blue)"
      haloBottomColor="var(--brand-aqua)"
    >
      <SectionHeader data={data.header} />

      <div className="flex flex-col gap-5">
        {/* Row 1: 3 large cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {largeCards.map((card, index) => (
            <Reveal key={card.number} delay={index * 0.08}>
              <GlassCard className="flex h-full flex-col gap-3 p-3 lg:p-4">
                <div className="relative h-[226px] w-full overflow-hidden rounded-[16px] border border-white/10 bg-[#070B19] lg:h-auto lg:aspect-[342/236]">
                  <ScreenshotBox
                    src={card.src}
                    alt={card.alt}
                    label={card.title}
                    available={Boolean(availableImages[card.src])}
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
                <div className="flex items-center gap-3 px-1 pb-1">
                  <NumberBadge number={card.number} size="md" />
                  <h3 className="flex-1 text-base font-bold text-white">
                    {card.title}
                  </h3>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        {/* Row 2: 4 small cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {smallCards.map((card, index) => (
            <Reveal key={card.number} delay={index * 0.08}>
              <GlassCard className="flex h-full flex-col gap-3 p-3 lg:p-3.5">
                <div className="relative h-[200px] w-full overflow-hidden rounded-[16px] border border-white/10 bg-[#070B19] lg:h-auto lg:aspect-[244/170]">
                  <ScreenshotBox
                    src={card.src}
                    alt={card.alt}
                    label={card.title}
                    available={Boolean(availableImages[card.src])}
                    sizes="(max-width: 1024px) 100vw, 270px"
                  />
                </div>
                <div className="flex items-center gap-2.5 px-1 pb-1">
                  <NumberBadge number={card.number} size="md" />
                  <h3 className="flex-1 text-sm font-bold text-white lg:text-base">
                    {card.title}
                  </h3>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
