import type { AudienceData } from "@/data/types";
import { IllustrativeTag } from "./IllustrativeTag";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface AudienceSectionProps {
  data: AudienceData;
}

export function AudienceSection({ data }: AudienceSectionProps) {
  return (
    <Section
      id="audience"
      haloTopColor="var(--brand-blue)"
      haloBottomColor="var(--brand-aqua)"
    >
      <SectionHeader data={data.header} />

      {/* Mobile: د. ليلى (index 0) first, أبو خالد (index 1) second.
          Desktop (RTL): أبو خالد first/right (lg:order-1), د. ليلى second/left (lg:order-2). */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {data.personas.map((persona, index) => {
          const isLayla = index === 0;
          const desktopOrder = isLayla ? "lg:order-2" : "lg:order-1";

          return (
            <Reveal
              key={persona.name}
              delay={index * 0.08}
              className={desktopOrder}
            >
              <div className="flex h-full flex-col justify-between gap-3 rounded-[24px] border border-white/[0.14] bg-white/[0.05] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] lg:gap-[22px] lg:rounded-[32px] lg:border-[1.2px] lg:border-white/[0.28] lg:p-[34px]">
                <div className="flex flex-col gap-3 lg:gap-[22px]">
                  {/* Top: Avatar + Name + Role */}
                  <div className="flex items-center gap-3 lg:gap-[18px]">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 text-2xl font-extrabold text-white lg:h-[76px] lg:w-[76px] lg:text-[34px]"
                      style={{
                        background: isLayla
                          ? "linear-gradient(135deg, #025BCF, #4976E9)"
                          : "linear-gradient(135deg, #0091BD, #02B3D2)",
                        boxShadow: isLayla
                          ? "0 8px 24px rgba(73,118,233,0.45)"
                          : "0 8px 24px rgba(2,179,210,0.45)",
                      }}
                    >
                      {persona.avatarLetter}
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold leading-snug text-white lg:text-[32px] lg:font-extrabold">
                        {persona.name}
                      </h3>
                      <p className="text-sm text-[#AAB3C5] lg:text-[17px] lg:font-medium">
                        {persona.role}
                      </p>
                    </div>
                  </div>

                  {persona.illustrative && (
                    <div>
                      <IllustrativeTag text={data.illustrativeTag} />
                    </div>
                  )}

                  {/* Mobile: compact single-column list (Goals then Pains) */}
                  <div className="flex flex-col gap-2.5 lg:hidden">
                    <p className="text-xs font-bold text-[#7FE7F9]">
                      {persona.goalsLabel}
                    </p>
                    <ul className="space-y-1.5">
                      {persona.goals.map((goal) => (
                        <li
                          key={goal}
                          className="flex items-center gap-2 text-[15px] text-[#DDE4F2]"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#02B3D2]"
                            aria-hidden="true"
                          />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-1 text-xs font-bold text-[#FF8A93]">
                      {persona.painsLabel}
                    </p>
                    <ul className="space-y-1.5">
                      {persona.pains.map((pain) => (
                        <li
                          key={pain}
                          className="flex items-center gap-2 text-[15px] text-[#DDE4F2]"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EE2D3D]"
                            aria-hidden="true"
                          />
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Desktop: two tinted columns (Pains on right/first, Goals on left/second) */}
                  <div className="hidden grid-cols-2 gap-4 lg:grid">
                    {/* Pains (right/first in RTL) */}
                    <div className="flex flex-col gap-3 rounded-[20px] border border-[#FF5A67]/[0.28] bg-[#FF5A67]/[0.08] px-[18px] pt-4 pb-[18px]">
                      <h4 className="text-sm font-extrabold text-[#FF5A67]">
                        {persona.painsLabel}
                      </h4>
                      <ul className="space-y-2.5">
                        {persona.pains.map((pain) => (
                          <li
                            key={pain}
                            className="flex items-start gap-2.5 text-base font-medium leading-6 text-[#E6EAF2]"
                          >
                            <span
                              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF5A67]"
                              aria-hidden="true"
                            />
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Goals (left/second in RTL) */}
                    <div className="flex flex-col gap-3 rounded-[20px] border border-[#02B3D2]/[0.28] bg-[#02B3D2]/[0.08] px-[18px] pt-4 pb-[18px]">
                      <h4 className="text-sm font-extrabold text-[#02B3D2]">
                        {persona.goalsLabel}
                      </h4>
                      <ul className="space-y-2.5">
                        {persona.goals.map((goal) => (
                          <li
                            key={goal}
                            className="flex items-start gap-2.5 text-base font-medium leading-6 text-[#E6EAF2]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-[#02B3D2]"
                            >
                              <svg
                                viewBox="0 0 16 16"
                                className="h-4 w-4"
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
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Device chips */}
                  <div className="flex flex-wrap gap-2">
                    {persona.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.07] px-3 py-1.5 text-[13px] font-medium text-[#DDE4F2] lg:px-4 lg:py-2 lg:text-sm lg:font-bold lg:text-[#E6EAF2]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote: plain on mobile, tinted box on desktop */}
                <blockquote
                  className="text-[15px] font-medium leading-[1.6] text-[#E6ECFA] max-lg:!bg-none lg:rounded-[22px] lg:border lg:border-white/[0.14] lg:px-6 lg:py-[22px] lg:text-[22px] lg:font-extrabold lg:leading-[34px] lg:text-white"
                  style={{
                    backgroundImage: isLayla
                      ? "linear-gradient(90deg, rgba(2,91,207,0.28), rgba(73,118,233,0.08))"
                      : "linear-gradient(90deg, rgba(2,179,210,0.24), rgba(2,91,207,0.08))",
                  }}
                >
                  {persona.quote}
                </blockquote>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
