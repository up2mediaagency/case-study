import type { PagesGalleryData } from "@/data/types";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";
import { ScreenshotBox } from "./ScreenshotBox";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface PagesGallerySectionProps {
  data: PagesGalleryData;
  availableImages: Record<string, boolean>;
}

function RoundArrowIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-[#9FE7F5]"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M11.5 11.5L4.5 4.5M4.5 4.5H10M4.5 4.5V10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
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

      <div className="flex flex-col gap-5 lg:gap-6">
        {/* Row 1: 3 large cards (01 right, 02 middle, 03 left) */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {largeCards.map((card, index) => (
            <Reveal key={card.number} delay={index * 0.08}>
              <div
                className={`flex h-full flex-col gap-3 rounded-[24px] border bg-white/[0.05] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)] lg:gap-3.5 lg:rounded-[26px] lg:border-[1.2px] lg:px-3 lg:pt-3 lg:pb-4 ${
                  index === 0
                    ? "border-white/[0.14] lg:border-[#02B3D2]/55"
                    : "border-white/[0.14] lg:border-white/[0.28]"
                }`}
              >
                <div className="relative h-[226px] w-full overflow-hidden rounded-[14px] border border-white/[0.12] bg-black lg:h-[236px] lg:rounded-[16px]">
                  <ScreenshotBox
                    src={card.src}
                    alt={card.alt}
                    label={card.title}
                    available={Boolean(availableImages[card.src])}
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>

                {/* Mobile label row: title right, NumberBadge left */}
                <div className="flex items-center gap-2.5 px-1 pb-1 lg:hidden">
                  <h3 className="flex-1 text-[17px] font-bold text-white">
                    {card.title}
                  </h3>
                  <NumberBadge number={card.number} size="md" />
                </div>

                {/* Desktop label row: number + title right (start), round arrow icon left (end) */}
                <div className="hidden items-center justify-between px-2 lg:flex">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[13px] font-extrabold text-[#6F86C9]">
                      {card.number}
                    </span>
                    <h3 className="text-[21px] font-extrabold text-white">
                      {card.title}
                    </h3>
                  </div>
                  <RoundArrowIcon />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Row 2: 4 small cards (04 right .. 07 left) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {smallCards.map((card, index) => (
            <Reveal key={card.number} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-3 rounded-[24px] border border-white/[0.14] bg-white/[0.05] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)] lg:gap-3.5 lg:rounded-[26px] lg:border-[1.2px] lg:border-white/[0.28] lg:px-3 lg:pt-3 lg:pb-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-[14px] border border-white/[0.12] bg-black lg:h-[170px] lg:rounded-[16px]">
                  <ScreenshotBox
                    src={card.src}
                    alt={card.alt}
                    label={card.title}
                    available={Boolean(availableImages[card.src])}
                    sizes="(max-width: 1024px) 100vw, 270px"
                  />
                </div>

                {/* Mobile label row */}
                <div className="flex items-center gap-2.5 px-1 pb-1 lg:hidden">
                  <h3 className="flex-1 text-[17px] font-bold text-white">
                    {card.title}
                  </h3>
                  <NumberBadge number={card.number} size="md" />
                </div>

                {/* Desktop label row */}
                <div className="hidden items-center justify-between px-2 lg:flex">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[13px] font-extrabold text-[#6F86C9]">
                      {card.number}
                    </span>
                    <h3 className="text-[18px] font-extrabold text-white">
                      {card.title}
                    </h3>
                  </div>
                  <RoundArrowIcon />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
