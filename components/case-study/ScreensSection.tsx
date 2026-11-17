import type { ScreensData } from "@/data/types";
import { BrowserFrame } from "./BrowserFrame";
import { GlassCard } from "./GlassCard";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";
import { ScreenshotBox } from "./ScreenshotBox";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface ScreensSectionProps {
  data: ScreensData;
  availableImages: Record<string, boolean>;
}

export function ScreensSection({ data, availableImages }: ScreensSectionProps) {
  return (
    <Section
      id="screens"
      haloTopColor="var(--brand-aqua)"
      haloBottomColor="var(--brand-red)"
    >
      <SectionHeader data={data.header} />

      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Desktop + Mobile preview row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Desktop browser frame */}
          <Reveal className="lg:col-span-9">
            <GlassCard className="flex flex-col gap-3 p-4 lg:p-5">
              <span className="text-sm font-bold text-[#DDE4F2]">
                {data.desktopLabel}
              </span>
              <BrowserFrame>
                <div className="relative aspect-[326/185] w-full lg:aspect-[940/532]">
                  <ScreenshotBox
                    src={data.desktopImage.src}
                    alt={data.desktopImage.alt}
                    label={data.desktopImage.label}
                    available={Boolean(availableImages[data.desktopImage.src])}
                    sizes="(max-width: 1024px) 100vw, 860px"
                  />
                </div>
              </BrowserFrame>
            </GlassCard>
          </Reveal>

          {/* Mobile phone container */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <GlassCard className="flex flex-col items-center gap-3 p-4 lg:p-5">
              <span className="self-start text-sm font-bold text-[#DDE4F2]">
                {data.mobileLabel}
              </span>
              <div className="w-[200px] rounded-[28px] border border-white/20 bg-[#070B19] p-2 shadow-xl lg:w-full lg:max-w-[252px] lg:rounded-[32px] lg:p-2.5">
                <div className="relative aspect-[200/394] w-full overflow-hidden rounded-[22px] lg:aspect-[252/496]">
                  <ScreenshotBox
                    src={data.mobileImage.src}
                    alt={data.mobileImage.alt}
                    label={data.mobileImage.label}
                    available={Boolean(availableImages[data.mobileImage.src])}
                    sizes="(max-width: 1024px) 200px, 252px"
                  />
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>

        {/* Form detail card */}
        <Reveal delay={0.15}>
          <GlassCard className="flex flex-col gap-6 p-5 lg:p-8">
            <h3 className="text-lg font-bold text-white lg:text-[22px]">
              {data.formDetailTitle}
            </h3>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              {/* Notes on the right (start in RTL) on desktop, below image on mobile */}
              <div className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-5">
                {data.formNotes.map((note) => (
                  <div
                    key={note.number}
                    className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] p-4"
                  >
                    <NumberBadge
                      number={note.number}
                      size="sm"
                      className="mt-0.5"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {note.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-[#AAB3C5]">
                        {note.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form image on the left (end in RTL) on desktop */}
              <div className="order-1 lg:order-2 lg:col-span-7">
                <div className="relative aspect-[326/187] w-full overflow-hidden rounded-[18px] border border-white/15 bg-[#070B19] lg:aspect-[620/356]">
                  <ScreenshotBox
                    src={data.formImage.src}
                    alt={data.formImage.alt}
                    label={data.formImage.label}
                    available={Boolean(availableImages[data.formImage.src])}
                    sizes="(max-width: 1024px) 100vw, 620px"
                  />

                  {/* Numbered markers 1/2/3 on desktop */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none hidden lg:block"
                  >
                    <span className="absolute top-[14%] start-[22%] flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-[#025BCF] text-xs font-bold text-white shadow-lg">
                      1
                    </span>
                    <span className="absolute top-[48%] start-[16%] flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-[#025BCF] text-xs font-bold text-white shadow-lg">
                      2
                    </span>
                    <span className="absolute bottom-[12%] end-[16%] flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-[#025BCF] text-xs font-bold text-white shadow-lg">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
