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
      <SectionHeader
        data={data.header}
        titleLine1={data.titleLine1}
        titleLine2={data.titleLine2}
      />

      {/* Mobile: one glass card with 4 rows */}
      <Reveal>
        <GlassCard className="mb-6 divide-y divide-white/10 p-4 lg:hidden">
          {data.methods.map((method) => (
            <div
              key={method.number}
              className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
            >
              <NumberBadge number={method.number} size="sm" />
              <span className="text-sm font-medium text-[#DDE4F2]">
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
              className="glass flex items-center gap-3 rounded-full px-4 py-3"
            >
              <NumberBadge number={method.number} size="sm" />
              <span className="text-sm font-medium text-[#DDE4F2]">
                {method.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 3 insight cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {data.insights.map((insight, index) => (
          <Reveal key={insight.number} delay={index * 0.08}>
            <GlassCard className="flex h-full flex-col justify-between gap-5 p-6 lg:p-7">
              <div className="flex flex-col items-start gap-3">
                {insight.illustrative && (
                  <IllustrativeTag text={data.illustrativeTag} />
                )}
                <p
                  className="bg-clip-text text-[48px] font-extrabold leading-tight text-transparent lg:text-[56px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
                  }}
                >
                  <bdi dir="rtl">{insight.number}</bdi>
                </p>
                <p className="text-base leading-relaxed text-[#DDE4F2]">
                  {insight.sentence}
                </p>
              </div>

              <div className="rounded-[16px] border border-[#02B3D2]/30 bg-[#025BCF]/[0.14] p-4">
                <p
                  className="text-xs font-bold"
                  style={{ color: "var(--brand-aqua)" }}
                >
                  {insight.decisionLabel}
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-white">
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
