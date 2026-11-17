import type { ProblemData } from "@/data/types";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface ProblemSectionProps {
  data: ProblemData;
}

export function ProblemSection({ data }: ProblemSectionProps) {
  return (
    <Section
      id="problem"
      haloTopColor="var(--brand-blue)"
      haloBottomColor="var(--brand-red)"
    >
      <SectionHeader data={data.header} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {data.cards.map((card, index) => (
          <Reveal key={card.number} delay={index * 0.08}>
            <GlassCard
              variant="none"
              shine={{
                colors: ["#EE2D3D", "#FF8A94", "#02B3D2"],
                borderWidth: 1.5,
                duration: 10 + (index % 4) * 2,
                delay: -(index * 2.5),
              }}
              className="flex h-full flex-col justify-between gap-3 rounded-[24px] border border-[#EE2D3D]/30 bg-[#EE2D3D]/[0.07] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] lg:rounded-[28px] lg:border-[1.2px] lg:border-[#EE2D3D]/55 lg:bg-white/[0.05] lg:px-8 lg:pt-[30px] lg:pb-[34px]"
            >
              <div className="relative z-10 flex flex-col gap-2 lg:gap-3.5">
                <span
                  className="bg-clip-text text-[34px] font-extrabold leading-tight text-transparent lg:text-[64px] lg:leading-[70px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #FF6A75 0%, rgba(238,45,61,0.22) 100%)",
                  }}
                >
                  {card.number}
                </span>
                <h3 className="text-[20px] font-extrabold leading-snug text-white lg:text-[26px]">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#AAB3C5] lg:text-[17px] lg:leading-[28px]">
                  {card.description}
                </p>
              </div>

              {/* Short red underline bar at bottom (desktop) */}
              <div
                aria-hidden="true"
                className="relative z-10 mt-2 hidden h-1 w-14 rounded-[2px] lg:block"
                style={{
                  background: "linear-gradient(90deg, #EE2D3D, #FF6A75)",
                }}
              />
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Success criteria panel */}
      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-col gap-3 rounded-[24px] border border-white/[0.14] bg-white/[0.05] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] lg:mt-8 lg:gap-[22px] lg:rounded-[28px] lg:border-[1.2px] lg:border-[#02B3D2]/55 lg:px-9 lg:pt-[30px] lg:pb-8">
          <h3 className="text-base font-bold text-[#7FE7F9] lg:text-2xl lg:font-extrabold lg:text-white">
            {data.criteriaTitle}
          </h3>

          {/* Mobile: stacked pills */}
          <div className="flex flex-col items-start gap-2.5 lg:hidden">
            {data.criteriaChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-[#02B3D2]/40 bg-[#02B3D2]/[0.14] px-3 py-[7px] text-[13px] font-medium text-[#BDEFF8]"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Desktop: 4 equal-width cards with check icons */}
          <div className="hidden grid-cols-4 gap-4 lg:grid">
            {data.criteriaChips.map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-3 rounded-[16px] border border-[#02B3D2]/35 bg-[#02B3D2]/10 px-[18px] py-4"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#02B3D2]/20 text-[#02B3D2]"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path
                      d="M3.5 8.5l3 3 6-6.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[17px] font-bold text-[#F2F6FF]">
                  {chip}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
