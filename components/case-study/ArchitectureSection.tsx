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
        {/* (a) Site Map */}
        <Reveal>
          <GlassCard className="p-6 lg:p-8">
            <h3 className="mb-6 text-lg font-bold text-white lg:text-xl">
              {data.siteMapTitle}
            </h3>

            {/* Desktop Site Map Tree */}
            <div className="hidden flex-col items-center lg:flex">
              {/* Root pill */}
              <div
                className="rounded-full px-7 py-2.5 text-sm font-bold text-white shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, var(--btn-from), var(--btn-to))",
                }}
              >
                {data.rootLabel}
              </div>

              {/* Animated SVG connector lines */}
              <svg
                viewBox="0 0 900 56"
                className="h-14 w-full max-w-[900px]"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M450 0 V28 M90 28 H810 M90 28 V56 M270 28 V56 M450 28 V56 M630 28 V56 M810 28 V56"
                  stroke="rgba(2, 179, 210, 0.45)"
                  strokeWidth="2"
                  initial={shouldReduceMotion ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={lineTransition}
                />
              </svg>

              {/* 5 child pages */}
              <div className="grid w-full max-w-[960px] grid-cols-5 gap-3">
                {data.pages.map((page) => {
                  const isBranch = page === data.branchParent;
                  return (
                    <div key={page} className="flex flex-col items-center">
                      <div
                        className={`w-full rounded-full border px-3 py-2.5 text-center text-sm font-medium ${
                          isBranch
                            ? "border-[#02B3D2]/50 bg-[#02B3D2]/12 text-[#8CEBFF]"
                            : "border-white/15 bg-white/[0.05] text-[#DDE4F2]"
                        }`}
                      >
                        {page}
                      </div>

                      {isBranch && (
                        <div className="flex flex-col items-center">
                          <svg
                            viewBox="0 0 2 28"
                            className="h-7 w-0.5"
                            fill="none"
                            aria-hidden="true"
                          >
                            <motion.path
                              d="M1 0 V28"
                              stroke="rgba(2, 179, 210, 0.55)"
                              strokeWidth="2"
                              initial={
                                shouldReduceMotion ? false : { pathLength: 0 }
                              }
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ ...lineTransition, delay: 0.25 }}
                            />
                          </svg>
                          <div className="flex flex-col items-center gap-2">
                            {data.branchSubPages.map((sub, idx) => (
                              <div
                                key={sub}
                                className="flex flex-col items-center gap-2"
                              >
                                {idx > 0 && (
                                  <span className="text-xs text-[#02B3D2]">
                                    ↓
                                  </span>
                                )}
                                <span
                                  className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-bold ${
                                    idx === data.branchSubPages.length - 1
                                      ? "border-[#02B3D2]/60 bg-[#02B3D2]/20 text-white"
                                      : "border-white/15 bg-white/[0.06] text-[#DDE4F2]"
                                  }`}
                                >
                                  {sub}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Site Map Vertical Tree */}
            <div className="flex flex-col items-start gap-3 lg:hidden">
              <div
                className="rounded-full px-5 py-2 text-sm font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--btn-from), var(--btn-to))",
                }}
              >
                {data.rootLabel}
              </div>

              <div className="ms-3 flex flex-col gap-3 border-s-2 border-[#02B3D2]/50 ps-4">
                {data.pages.map((page) => {
                  const isBranch = page === data.branchParent;
                  return (
                    <div key={page} className="flex flex-col items-start gap-2">
                      <span
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                          isBranch
                            ? "border-[#02B3D2]/50 bg-[#02B3D2]/12 text-[#8CEBFF]"
                            : "border-white/15 bg-white/[0.05] text-[#DDE4F2]"
                        }`}
                      >
                        {page}
                      </span>

                      {isBranch && (
                        <div className="ms-3 flex flex-col items-start gap-2 border-s-2 border-[#02B3D2]/40 ps-4">
                          {data.branchSubPages.map((sub, idx) => (
                            <span
                              key={sub}
                              className={`rounded-full border px-3.5 py-1.5 text-xs font-bold ${
                                idx === data.branchSubPages.length - 1
                                  ? "border-[#02B3D2]/60 bg-[#02B3D2]/20 text-white"
                                  : "border-white/15 bg-white/[0.06] text-[#DDE4F2]"
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

        {/* (b) Critical Path */}
        <Reveal delay={0.1}>
          <GlassCard className="p-6 lg:p-8">
            <h3 className="mb-6 text-lg font-bold text-white lg:text-xl">
              {data.criticalPathTitle}
            </h3>

            {/* Desktop Horizontal 5-step flow (RTL: step 1 on right) */}
            <div className="hidden items-stretch gap-3 lg:flex">
              {/* Steps 1–2 outside group */}
              <div className="grid flex-[2] grid-cols-2 gap-3 pt-7">
                {outsideSteps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col gap-2.5 rounded-[18px] border border-white/12 bg-white/[0.04] p-4"
                  >
                    <NumberBadge number={step.number} size="sm" />
                    <h4 className="text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#AAB3C5]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Connector arrow between step 2 and group */}
              <div className="flex items-center pt-7 text-[#02B3D2]">
                <span className="text-lg font-bold rtl:rotate-180" aria-hidden="true">
                  →
                </span>
              </div>

              {/* Steps 3–5 inside dashed aqua group */}
              <div className="flex flex-[3] flex-col gap-2">
                <span className="self-start rounded-full border border-[#02B3D2]/40 bg-[#02B3D2]/12 px-3 py-0.5 text-xs font-bold text-[#8CEBFF]">
                  {data.criticalPathGroupLabel}
                </span>
                <div className="grid flex-1 grid-cols-3 gap-3 rounded-[20px] border-2 border-dashed border-[#02B3D2]/50 bg-[#02B3D2]/[0.04] p-3">
                  {groupSteps.map((step) => (
                    <div
                      key={step.number}
                      className="flex flex-col gap-2.5 rounded-[14px] border border-white/12 bg-white/[0.04] p-4"
                    >
                      <NumberBadge number={step.number} size="sm" />
                      <h4 className="text-base font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#AAB3C5]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Vertical 5-step list */}
            <div className="flex flex-col gap-3 lg:hidden">
              {outsideSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-3 rounded-[16px] border border-white/12 bg-white/[0.04] p-4"
                >
                  <NumberBadge number={step.number} size="sm" className="mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#AAB3C5]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-1 flex flex-col gap-3 rounded-[20px] border-2 border-dashed border-[#02B3D2]/50 bg-[#02B3D2]/[0.04] p-3.5">
                <span className="self-start rounded-full border border-[#02B3D2]/40 bg-[#02B3D2]/12 px-3 py-0.5 text-xs font-bold text-[#8CEBFF]">
                  {data.criticalPathGroupLabel}
                </span>
                {groupSteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-3 rounded-[14px] border border-white/12 bg-white/[0.04] p-3.5"
                  >
                    <NumberBadge number={step.number} size="sm" className="mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-[#AAB3C5]">
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
