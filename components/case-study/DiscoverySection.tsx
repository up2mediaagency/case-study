import type { DiscoveryData } from "@/data/types";
import { GlassCard } from "./GlassCard";
import { IllustrativeTag } from "./IllustrativeTag";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface DiscoverySectionProps {
  data: DiscoveryData;
}

export function DiscoverySection({ data }: DiscoverySectionProps) {
  return (
    <Section
      id="discovery"
      haloTopColor="var(--brand-aqua)"
      haloBottomColor="var(--brand-blue)"
    >
      <SectionHeader data={data.header} />

      {/* Mobile: one glass card with 4 rows */}
      <Reveal>
        <GlassCard className="mb-6 flex flex-col gap-3.5 p-5 lg:hidden">
          {data.methods.map((method) => (
            <div key={method.number} className="flex items-center gap-3">
              <NumberBadge number={method.number} size="sm" />
              <span className="text-base font-medium text-white">
                {method.label}
              </span>
            </div>
          ))}
        </GlassCard>
      </Reveal>

      {/* Desktop: row of 4 method pills */}
      <Reveal>
        <div className="mb-8 hidden grid-cols-4 gap-4 lg:grid">
          {data.methods.map((method) => (
            <div
              key={method.number}
              className="flex items-center gap-3.5 rounded-[18px] border-[1.2px] border-white/[0.28] bg-white/[0.05] px-4 py-4 shadow-[0_18px_20px_rgba(0,0,0,0.35)]"
            >
              <NumberBadge number={method.number} size="md" />
              <span className="text-[17px] font-bold text-[#F2F6FF]">
                {method.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 3 insight cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {data.insights.map((insight, index) => (
          <Reveal key={insight.number} delay={index * 0.08}>
            <GlassCard
              variant="none"
              shine={{
                colors: ["#02B3D2", "#8FE9F7", "#025BCF"],
                borderWidth: 1.5,
                duration: 10 + ((index + 1) % 4) * 2,
                delay: -(index * 2.7 + 1.2),
              }}
              className="flex h-full flex-col justify-between gap-4 rounded-[24px] bg-white/[0.05] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md lg:rounded-[28px] lg:px-8 lg:pt-[30px] lg:pb-8"
            >
              <div className="relative z-10 flex flex-col items-start gap-2.5 lg:gap-4">
                {insight.illustrative && (
                  <IllustrativeTag text={data.illustrativeTag} />
                )}
                <p
                  className="bg-clip-text text-[44px] font-extrabold leading-tight text-transparent lg:text-[92px] lg:leading-[100px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #6FE3F5, #4976E9)",
                  }}
                >
                  <bdi dir="rtl">{insight.number}</bdi>
                </p>
                <p className="text-[15px] leading-[1.6] text-[#C9D1E2] lg:text-[19px] lg:font-medium lg:leading-[30px] lg:text-[#E6EAF2]">
                  {insight.sentence}
                </p>
              </div>

              {/* Mobile: boxed decision block */}
              <div className="relative z-10 flex flex-col gap-1 rounded-[16px] border border-[#02B3D2]/30 bg-[#025BCF]/[0.14] p-3.5 lg:hidden">
                <p className="text-xs font-bold text-[#7FE7F9]">
                  {insight.decisionLabel}
                </p>
                <p className="text-[15px] font-medium text-white">
                  {insight.decision}
                </p>
              </div>

              {/* Desktop: divider + aqua label + bold white text */}
              <div className="relative z-10 hidden flex-col gap-3 lg:flex">
                <div className="h-px w-full bg-white/[0.14]" />
                <p className="text-[13px] font-bold text-[#02B3D2]">
                  {insight.decisionLabel}
                </p>
                <p className="text-[20px] font-extrabold leading-[30px] text-white">
                  {insight.decision}
                </p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
