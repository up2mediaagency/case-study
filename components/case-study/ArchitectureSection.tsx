"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ArchitectureData } from "@/data/types";
import { GlassCard } from "./GlassCard";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface ArchitectureSectionProps {
  data: ArchitectureData;
}

function StepChevron() {
  return (
    <span
      aria-hidden="true"
      className="flex h-6 w-6 shrink-0 items-center justify-center text-[#7FE7F9]/70"
    >
      <svg
        viewBox="0 0 20 20"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12.5 5L7.5 10l5 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function ArchitectureSection({ data }: ArchitectureSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const outsideSteps = data.steps.filter((s) => !s.inGroup);
  const groupSteps = data.steps.filter((s) => s.inGroup);

  const lineTransition = { duration: 0.7, ease: "easeOut" as const };

  return (
    <Section
      id="architecture"
      haloTopColor="var(--brand-aqua)"
      haloBottomColor="var(--brand-blue)"
    >
      <SectionHeader data={data.header} />

      <div className="flex flex-col gap-6 lg:gap-8">
        {/* (a) Site Map outer panel */}
        <Reveal>
          <GlassCard
            variant="none"
            shine={{
              colors: ["#02B3D2", "#8FE9F7", "#025BCF"],
              borderWidth: 1.5,
              duration: 12,
              delay: -2.0,
            }}
            className="rounded-[24px] bg-white/[0.05] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md lg:rounded-[32px] lg:p-8"
          >
            <h3 className="relative z-10 mb-3 text-base font-bold text-[#7FE7F9] lg:mb-6 lg:text-[22px] lg:font-extrabold lg:text-white">
              {data.siteMapTitle}
            </h3>

            {/* Desktop Site Map Tree */}
            <div className="relative z-10 hidden flex-col items-center lg:flex">
              {/* Root pill */}
              <div
                className="flex h-[56px] w-[220px] items-center justify-center rounded-[18px] text-[17px] font-bold text-white shadow-[0_10px_30px_rgba(0,145,189,0.5)]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--btn-from), var(--btn-to))",
                }}
              >
                {data.rootLabel}
              </div>

              {/* Animated SVG connector lines */}
              <svg
                viewBox="0 0 900 64"
                className="h-16 w-full max-w-[920px]"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M450 0 V26 M90 26 H810 M90 26 V64 M270 26 V64 M450 26 V64 M630 26 V64 M810 26 V64"
                  stroke="rgba(159, 179, 255, 0.4)"
                  strokeWidth="2"
                  initial={shouldReduceMotion ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={lineTransition}
                />
              </svg>

              {/* 5 child pages (RTL: عن سيبا right -> اتصل بنا left) */}
              <div className="grid w-full max-w-[1040px] grid-cols-5 gap-4">
                {data.pages.map((page) => {
                  const isBranch = page === data.branchParent;
                  return (
                    <div key={page} className="flex flex-col items-center">
                      <div
                        className={`flex h-[56px] w-full items-center justify-center rounded-[18px] border px-3 text-center text-[17px] font-bold ${
                          isBranch
                            ? "border-[1.4px] border-[#02B3D2]/70 bg-[#02B3D2]/[0.14] text-white shadow-[0_0_20px_rgba(2,179,210,0.3)]"
                            : "border-white/[0.22] bg-white/[0.06] text-white"
                        }`}
                      >
                        {page}
                      </div>

                      {isBranch && (
                        <div className="flex flex-col items-center">
                          <svg
                            viewBox="0 0 2 56"
                            className="h-14 w-0.5"
                            fill="none"
                            aria-hidden="true"
                          >
                            <motion.path
                              d="M1 0 V56"
                              stroke="rgba(159, 179, 255, 0.4)"
                              strokeWidth="2"
                              initial={
                                shouldReduceMotion ? false : { pathLength: 0 }
                              }
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ ...lineTransition, delay: 0.25 }}
                            />
                          </svg>

                          {/* Sub-page 1: منصة التشبيك والدعم */}
                          <div className="flex h-[56px] w-[220px] items-center justify-center rounded-[18px] border-[1.4px] border-[#02B3D2]/70 bg-[#02B3D2]/[0.14] px-4 text-center text-[17px] font-bold text-white shadow-[0_0_20px_rgba(2,179,210,0.3)]">
                            {data.branchSubPages[0]}
                          </div>

                          <svg
                            viewBox="0 0 2 56"
                            className="h-14 w-0.5"
                            fill="none"
                            aria-hidden="true"
                          >
                            <motion.path
                              d="M1 0 V56"
                              stroke="rgba(159, 179, 255, 0.4)"
                              strokeWidth="2"
                              initial={
                                shouldReduceMotion ? false : { pathLength: 0 }
                              }
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ ...lineTransition, delay: 0.4 }}
                            />
                          </svg>

                          {/* Sub-page 2: نموذج الطلب (RED tint) */}
                          <div className="flex h-[56px] w-[190px] items-center justify-center rounded-[18px] border-[1.4px] border-[#FF5A67]/80 bg-[#EE2D3D]/[0.16] px-4 text-center text-[17px] font-bold text-white shadow-[0_0_22px_rgba(238,45,61,0.35)]">
                            {data.branchSubPages[1]}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Site Map Vertical Tree */}
            <div className="relative z-10 flex flex-col items-start gap-2.5 lg:hidden">
              <div
                className="rounded-[14px] px-4 py-[9px] text-[15px] font-bold text-white"
                style={{
                  background:
                    "linear-gradient(90deg, var(--btn-from), var(--btn-to))",
                }}
              >
                {data.rootLabel}
              </div>

              <div className="flex flex-col gap-2 border-s-2 border-[#02B3D2]/50 ps-4">
                {data.pages.map((page) => {
                  const isBranch = page === data.branchParent;
                  return (
                    <div key={page} className="flex flex-col items-start gap-2">
                      <span className="rounded-[14px] border border-white/[0.14] bg-white/[0.06] px-3.5 py-[9px] text-sm font-medium text-white">
                        {page}
                      </span>

                      {isBranch && (
                        <div className="flex flex-col items-start gap-1.5 border-s-2 border-[#02B3D2]/50 ps-4">
                          {data.branchSubPages.map((sub, idx) => (
                            <span
                              key={sub}
                              className={`rounded-[14px] border px-3.5 py-[9px] text-sm font-medium text-white ${
                                idx === data.branchSubPages.length - 1
                                  ? "border-[#FF5A67]/70 bg-[#EE2D3D]/[0.16]"
                                  : "border-[#02B3D2]/50 bg-[#02B3D2]/[0.16]"
                              }`}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        </Reveal>

        {/* (b) Critical Path outer panel */}
        <Reveal delay={0.1}>
          <GlassCard
            variant="none"
            shine={{
              colors: ["#02B3D2", "#8FE9F7", "#025BCF"],
              borderWidth: 1.5,
              duration: 15,
              delay: -5.5,
            }}
            className="rounded-[24px] bg-white/[0.05] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md lg:rounded-[32px] lg:px-10 lg:pt-[34px] lg:pb-10"
          >
            <h3 className="relative z-10 mb-4 text-base font-bold text-[#7FE7F9] lg:mb-[30px] lg:text-[26px] lg:font-extrabold lg:text-white">
              {data.criticalPathTitle}
            </h3>

            {/* Desktop Horizontal 5-step flow (RTL: step 1 on right -> step 5 on left) */}
            <div className="relative z-10 hidden items-center justify-center gap-2 lg:flex">
              {/* Steps 1 and 2 on the right */}
              {outsideSteps.map((step) => (
                <div key={step.number} className="flex items-center gap-2">
                  <div className="flex w-[168px] flex-col items-center gap-2.5 text-center">
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[1.2px] border-white/30 bg-white/[0.08] text-[22px] font-extrabold text-white">
                      {step.number}
                    </div>
                    <h4 className="text-[17px] font-extrabold leading-6 text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm leading-[21px] text-[#AAB3C5]">
                      {step.description}
                    </p>
                  </div>
                  <StepChevron />
                </div>
              ))}

              {/* Steps 3–5 inside dashed aqua group on the left */}
              <div className="flex flex-col items-center gap-3.5 rounded-[26px] border-[1.4px] border-dashed border-[#02B3D2]/60 bg-[#02B3D2]/[0.06] px-4 pt-3.5 pb-[18px]">
                <span className="rounded-full bg-[#02B3D2]/20 px-3.5 py-1 text-[13px] font-extrabold text-[#9FE7F5]">
                  {data.criticalPathGroupLabel}
                </span>

                <div className="flex items-center gap-1">
                  {groupSteps.map((step, idx) => (
                    <div key={step.number} className="flex items-center gap-1">
                      <div className="flex w-[168px] flex-col items-center gap-2.5 text-center">
                        <div
                          className="flex h-[54px] w-[54px] items-center justify-center rounded-full text-[22px] font-extrabold text-white shadow-[0_6px_22px_rgba(2,179,210,0.5)]"
                          style={{
                            background:
                              "linear-gradient(90deg, #02B3D2, #025BCF)",
                          }}
                        >
                          {step.number}
                        </div>
                        <h4 className="text-[17px] font-extrabold leading-6 text-white">
                          {step.title}
                        </h4>
                        <p className="text-sm leading-[21px] text-[#AAB3C5]">
                          {step.description}
                        </p>
                      </div>
                      {idx < groupSteps.length - 1 && <StepChevron />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Vertical 5-step list */}
            <div className="relative z-10 flex flex-col gap-3.5 lg:hidden">
              {outsideSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-3">
                  <NumberBadge
                    number={step.number}
                    size="md"
                    className="mt-0.5"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#AAB3C5]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-3.5 rounded-[20px] border border-dashed border-[#02B3D2]/60 bg-[#02B3D2]/[0.05] p-3.5">
                <span className="self-start text-[13px] font-bold text-[#7FE7F9]">
                  {data.criticalPathGroupLabel}
                </span>
                {groupSteps.map((step) => (
                  <div key={step.number} className="flex items-start gap-3">
                    <NumberBadge
                      number={step.number}
                      size="md"
                      className="mt-0.5"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-[#AAB3C5]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
