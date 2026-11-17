import Link from "next/link";
import type { ResultsData } from "@/data/types";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { ShineBorder } from "@/components/ui/shine-border";

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

      {/* 4 stat cards:
          Mobile: 3 (0), +2500 (1), +30,000 (2), +$1.5B (3)
          Desktop (RTL right to left): +$1.5B (lg:order-1), +30,000 (lg:order-2), +2500 (lg:order-3), 3 (lg:order-4) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {data.stats.map((stat, index) => {
          const desktopOrder =
            index === 3
              ? "lg:order-1"
              : index === 2
                ? "lg:order-2"
                : index === 1
                  ? "lg:order-3"
                  : "lg:order-4";

          const isAqua = index === 0;
          const isRed = index === 3;

          const cardBorder = isAqua
            ? "border-[#02B3D2]/45 bg-[#025BCF]/[0.14] lg:border-[1.2px] lg:border-[#02B3D2]/55 lg:bg-white/[0.05]"
            : isRed
              ? "border-white/[0.14] bg-white/[0.05] lg:border-[1.2px] lg:border-[#EE2D3D]/55"
              : "border-white/[0.14] bg-white/[0.05] lg:border-[1.2px] lg:border-[#4976E9]/55";

          const numGradient = isAqua
            ? "linear-gradient(90deg, #6FE3F5, #02B3D2)"
            : isRed
              ? "linear-gradient(90deg, #FF8A93, #EE2D3D)"
              : "linear-gradient(90deg, #8FB0FF, #4976E9)";

          return (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className={desktopOrder}
            >
              <div
                className={`flex h-full flex-col justify-between gap-2.5 rounded-[24px] border p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] lg:rounded-[28px] lg:px-[26px] lg:pt-[30px] lg:pb-7 ${cardBorder}`}
              >
                {/* Mobile tag on top */}
                {stat.tag && (
                  <div className="lg:hidden">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[13px] font-medium ${
                        isAqua
                          ? "border-[#02B3D2]/40 bg-[#02B3D2]/[0.14] text-[#BDEFF8]"
                          : "border-[#8E98AE]/40 bg-[#8E98AE]/[0.14] text-[#DDE4F2]"
                      }`}
                    >
                      {stat.tag}
                    </span>
                  </div>
                )}

                <div>
                  <p
                    className={`bg-clip-text text-[52px] font-extrabold leading-[1.3] lg:text-[58px] lg:leading-[66px] ${
                      isAqua
                        ? "text-transparent"
                        : "text-white lg:text-transparent"
                    }`}
                    style={{ backgroundImage: numGradient }}
                  >
                    <bdi dir={stat.ltr ? "ltr" : "rtl"}>
                      <CountUp value={stat.value} />
                    </bdi>
                  </p>
                  <p className="mt-1 text-base font-medium text-[#C9D1E2] lg:mt-2 lg:text-[19px] lg:font-extrabold lg:leading-[28px] lg:text-white">
                    {stat.label}
                  </p>
                </div>

                {/* Desktop divider + grey tag at bottom */}
                {stat.tag && (
                  <div className="mt-2 hidden flex-col gap-2.5 lg:flex">
                    <div className="h-px w-full bg-white/[0.16]" />
                    <p className="text-[13px] font-medium text-[#8E98AE]">
                      {stat.tag}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* CTA panel */}
      <Reveal delay={0.2}>
        <div
          className="relative mt-6 overflow-hidden rounded-[28px] border border-white/30 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.35)] lg:mt-10 lg:flex lg:min-h-[380px] lg:flex-col lg:items-center lg:justify-center lg:rounded-[40px] lg:border-[1.4px] lg:border-white/40 lg:p-12 lg:text-center lg:shadow-[0_20px_80px_rgba(2,91,207,0.35)]"
          style={{
            background:
              "linear-gradient(180deg, #0E1A5C 0%, #0A1240 55%, #12091F 100%)",
          }}
        >
          <ShineBorder
            shineColor={["#02B3D2", "#025BCF", "#0091BD"]}
            borderWidth={1.5}
            duration={12}
            className="z-20"
          />
          {/* Blue + red glows inside CTA panel (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 start-[-80px] hidden h-[360px] w-[460px] rounded-full bg-[#025BCF]/35 blur-[110px] lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 end-[-80px] hidden h-[360px] w-[460px] rounded-full bg-[#EE2D3D]/25 blur-[110px] lg:block"
          />

          <div className="relative z-10 flex flex-col items-start gap-3.5 lg:items-center lg:gap-5">
            <span
              className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[13px] font-extrabold text-white"
              dir="ltr"
            >
              {data.cta.chip}
            </span>

            <h3 className="text-[26px] font-extrabold leading-[1.3] text-white lg:text-[52px] lg:leading-[66px]">
              {data.cta.title.includes("الفارق") ? (
                <>
                  <span>لنصنع </span>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #6FE3F5, #02B3D2)",
                    }}
                  >
                    الفارق
                  </span>
                  <span> في مشروعك القادم</span>
                </>
              ) : (
                data.cta.title
              )}
            </h3>

            <p className="max-w-[700px] text-[15px] leading-[1.6] text-[#DDE8FF] lg:text-[20px] lg:leading-[32px] lg:text-[#C5CDE0]">
              {data.cta.description}
            </p>

            <div className="mt-1 flex w-full flex-col gap-3 lg:mt-2 lg:w-auto lg:flex-row lg:gap-3.5">
              <Link
                href={data.cta.primaryButton.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-white py-3.5 text-base font-extrabold text-[#0A1240] transition-opacity hover:opacity-90 lg:w-auto lg:px-9 lg:py-[17px] lg:text-lg"
              >
                {data.cta.primaryButton.label}
              </Link>
              <Link
                href={data.cta.secondaryButton.href}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/[0.08] py-3.5 text-base font-bold text-white transition-colors hover:bg-white/15 lg:w-auto lg:px-9 lg:py-[17px] lg:text-lg"
              >
                {data.cta.secondaryButton.label}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
