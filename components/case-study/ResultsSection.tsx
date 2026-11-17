import Link from "next/link";
import type { ResultsData } from "@/data/types";
import { Chip } from "./Chip";
import { CountUp } from "./CountUp";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface ResultsSectionProps {
  data: ResultsData;
}

export function ResultsSection({ data }: ResultsSectionProps) {
  return (
    <Section
      id="results"
      haloTopColor="var(--brand-aqua)"
      haloBottomColor="var(--brand-blue)"
    >
      <SectionHeader data={data.header} />

      {/* 4 stat cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <GlassCard
              variant={stat.highlighted ? "aqua" : "default"}
              className="flex h-full flex-col justify-between gap-4 p-6"
            >
              <div>
                <p
                  className="bg-clip-text text-[52px] font-extrabold leading-none text-transparent lg:text-[46px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
                  }}
                >
                  <bdi dir={stat.ltr ? "ltr" : "rtl"}>
                    <CountUp value={stat.value} />
                  </bdi>
                </p>
                <p className="mt-3 text-base font-medium text-white">
                  {stat.label}
                </p>
              </div>
              {stat.tag && (
                <div>
                  <Chip variant={stat.highlighted ? "aqua" : "neutral"}>
                    {stat.tag}
                  </Chip>
                </div>
              )}
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* CTA panel */}
      <Reveal delay={0.2}>
        <div
          className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/20 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:mt-10 lg:flex-row lg:items-center lg:rounded-[32px] lg:p-12"
          style={{
            background: "linear-gradient(135deg, #303188 0%, #025BCF 100%)",
          }}
        >
          <div className="flex max-w-[600px] flex-col items-start gap-3">
            <span
              className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-white"
              dir="ltr"
            >
              {data.cta.chip}
            </span>
            <h3 className="text-[26px] font-extrabold leading-snug text-white lg:text-[34px]">
              {data.cta.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[#DDE4F2] lg:text-base">
              {data.cta.description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
            <Link
              href={data.cta.primaryButton.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0B1B35] transition-opacity hover:opacity-90 sm:w-auto lg:text-base"
            >
              {data.cta.primaryButton.label}
            </Link>
            <Link
              href={data.cta.secondaryButton.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto lg:text-base"
            >
              {data.cta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
