"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { HeroData } from "@/data/types";
import { BrowserFrame } from "./BrowserFrame";
import { GlassCard } from "./GlassCard";
import { ScreenshotBox } from "./ScreenshotBox";
import { ShineBorder } from "@/components/ui/shine-border";

interface HeroCinematicProps {
  data: HeroData;
  availableImages: Record<string, boolean>;
}

function renderHeroTitleLine(line: string, keyword: string) {
  if (!keyword || !line.includes(keyword)) {
    return line;
  }
  const index = line.indexOf(keyword);
  const before = line.slice(0, index);
  const after = line.slice(index + keyword.length);
  return (
    <>
      {before}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--hero-keyword-from), var(--hero-keyword-to))",
        }}
      >
        {keyword}
      </span>
      {after}
    </>
  );
}

export function HeroCinematic({ data, availableImages }: HeroCinematicProps) {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const hasHomeImage = Boolean(availableImages[data.browserImage.src]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const frameRotateX = useTransform(scrollYProgress, [0, 0.45], [8, 0]);
  const screenshotY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const statY1 = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const statY2 = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const statY3 = useTransform(scrollYProgress, [0, 1], [0, -24]);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
        };

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#05070F] px-5 pt-24 pb-14 lg:px-[144px] lg:pt-28 lg:pb-0"
    >
      {/* Subtle dark-blue top gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0B1030 0%, #070B16 45%, #05070F 100%)",
        }}
      />

      {/* Faint 80px grid fading out */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, black 35%, transparent 100%)",
        }}
      />

      {/* Three blurred halos */}
      <motion.div
        aria-hidden="true"
        className="halo -top-36 start-1/2 -translate-x-1/2 opacity-50"
        style={{ backgroundColor: "var(--hero-halo-1)" }}
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 18, -10, 0], y: [0, 12, -8, 0] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="halo top-[320px] end-[-120px] opacity-25"
        style={{ backgroundColor: "var(--hero-halo-2)" }}
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -16, 12, 0], y: [0, -14, 10, 0] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="halo top-[280px] start-[-120px] opacity-25"
        style={{ backgroundColor: "var(--hero-halo-3)" }}
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 14, -14, 0], y: [0, -10, 14, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-[1152px]">
        {/* Header / Copy block */}
        <div className="flex flex-col items-start gap-6 text-start lg:items-center lg:gap-[22px] lg:text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-[18px] py-[9px] text-[13px] font-bold text-[#7FE7F9] lg:text-sm lg:text-[#E6EAF2]">
              <span
                className="hidden h-2 w-2 rounded-full lg:inline-block"
                style={{ backgroundColor: "var(--brand-red)" }}
                aria-hidden="true"
              />
              {data.badge}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-[34px] font-extrabold leading-[1.25] text-white lg:text-[58px] lg:leading-[78px]"
          >
            <span className="block">
              {renderHeroTitleLine(data.titleLine1, data.keyword)}
            </span>
            <span className="block">
              {renderHeroTitleLine(data.titleLine2, data.keyword)}
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="max-w-[720px] text-base leading-[1.65] text-[#AAB3C5] lg:text-[20px] lg:leading-[34px]"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons:
              Mobile: Primary = زيارة الموقع (top), Secondary = استكشف القصة (bottom)
              Desktop (RTL): Primary = استكشف القصة (right/first), Secondary = زيارة الموقع (left/second) */}
          <motion.div {...fadeUp(0.24)} className="w-full lg:w-auto">
            {/* Mobile CTAs */}
            <div className="flex w-full flex-col gap-3 lg:hidden">
              <a
                href={data.primaryCta.href}
                className="inline-flex w-full items-center justify-center rounded-full py-[15px] text-base font-bold text-white shadow-lg transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, var(--btn-from), var(--btn-to))",
                }}
              >
                {data.primaryCta.label}
              </a>
              <a
                href={data.secondaryCta.href}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/[0.06] py-[15px] text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                {data.secondaryCta.label}
              </a>
            </div>

            {/* Desktop CTAs (استكشف القصة first/right, زيارة الموقع second/left) */}
            <div className="hidden items-center justify-center gap-[14px] lg:flex">
              <a
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-[34px] py-4 text-[17px] font-bold text-white shadow-lg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{
                  background:
                    "linear-gradient(90deg, var(--btn-from), var(--btn-to))",
                }}
              >
                {data.secondaryCta.label}
              </a>
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/[0.06] px-[34px] py-4 text-[17px] font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {data.primaryCta.label}
              </a>
            </div>
          </motion.div>

          {/* Project facts: mobile glass card rows vs desktop inline row with dividers */}
          <motion.div {...fadeUp(0.3)} className="w-full lg:pt-1.5">
            {/* Mobile facts card */}
            <GlassCard className="divide-y divide-white/10 p-4 lg:hidden">
              {data.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
                >
                  <span className="text-[13px] text-[#8E98AE]">
                    {fact.label}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {fact.value}
                  </span>
                </div>
              ))}
            </GlassCard>

            {/* Desktop facts row with vertical dividers */}
            <div className="hidden items-center justify-center gap-[30px] lg:flex">
              {data.facts.map((fact, idx) => (
                <div key={fact.label} className="flex items-center gap-[30px]">
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-[13px] text-[#9EABC2]">
                      {fact.label}
                    </span>
                    <span className="text-[15px] font-bold text-[#F2F2F2]">
                      {fact.value}
                    </span>
                  </div>
                  {idx < data.facts.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="h-[30px] w-px bg-white/[0.16]"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Browser Frame + Stat Cards */}
        <div className="relative mt-6 lg:mt-12">
          {/* Blue glow behind frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full opacity-40 blur-[80px]"
            style={{ backgroundColor: "var(--brand-blue)" }}
          />

          {/* Desktop animated perspective wrapper */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            style={shouldReduceMotion ? undefined : { perspective: 1200 }}
          >
            <motion.div
              className="mx-auto max-w-[1120px]"
              style={
                shouldReduceMotion
                  ? undefined
                  : { rotateX: frameRotateX, transformOrigin: "top center" }
              }
            >
              <BrowserFrame
                showTopGlow
                overlay={
                  <ShineBorder
                    shineColor={["#02B3D2", "#025BCF", "#0091BD"]}
                    borderWidth={1.5}
                    duration={10}
                    className="z-30"
                  />
                }
                className="lg:rounded-t-[22px] lg:rounded-b-none lg:border-[1.5px] lg:border-white/50 lg:border-b-0"
              >
                <div className="relative aspect-[350/204] w-full overflow-hidden lg:aspect-[1120/520]">
                  {hasHomeImage ? (
                    <>
                      {/* Mobile: top part only */}
                      <div className="relative h-full w-full lg:hidden">
                        <Image
                          src={data.browserImage.src}
                          alt={data.browserImage.alt}
                          fill
                          sizes="100vw"
                          className="object-cover object-top"
                        />
                      </div>
                      {/* Desktop: tall image scrolls inside frame */}
                      <motion.div
                        className="relative hidden h-[260%] w-full lg:block"
                        style={
                          shouldReduceMotion ? undefined : { y: screenshotY }
                        }
                      >
                        <Image
                          src={data.browserImage.src}
                          alt={data.browserImage.alt}
                          fill
                          sizes="1120px"
                          className="object-cover object-top"
                        />
                      </motion.div>
                    </>
                  ) : (
                    <ScreenshotBox
                      src={data.browserImage.src}
                      alt={data.browserImage.alt}
                      label={data.browserImage.label}
                      available={false}
                    />
                  )}
                </div>
              </BrowserFrame>
            </motion.div>
          </motion.div>

          {/* Desktop floating stat cards:
              +30,000 top right (start), +$1.5B right below it (start), +2500 on the left edge (end) */}
          <div className="hidden lg:block">
            {data.stats[1] && (
              <motion.div
                style={shouldReduceMotion ? undefined : { y: statY2 }}
                className="absolute top-[28px] start-[-42px] z-20 rounded-[20px] border-[1.2px] border-white/40 bg-[#0B1030]/60 px-[22px] py-4 shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
              >
                <p className="text-[32px] font-extrabold leading-tight text-white">
                  <bdi dir={data.stats[1].ltr ? "ltr" : "rtl"}>
                    {data.stats[1].value}
                  </bdi>
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#FF8A93]">
                  {data.stats[1].label}
                </p>
              </motion.div>
            )}

            {data.stats[2] && (
              <motion.div
                style={shouldReduceMotion ? undefined : { y: statY3 }}
                className="absolute top-[220px] start-[-56px] z-20 rounded-[20px] border-[1.2px] border-white/40 bg-[#0B1030]/60 px-[22px] py-4 shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
              >
                <p className="text-[32px] font-extrabold leading-tight text-white">
                  <bdi dir={data.stats[2].ltr ? "ltr" : "rtl"}>
                    {data.stats[2].value}
                  </bdi>
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#9FE7F5]">
                  {data.stats[2].label}
                </p>
              </motion.div>
            )}

            {data.stats[0] && (
              <motion.div
                style={shouldReduceMotion ? undefined : { y: statY1 }}
                className="absolute top-[76px] end-[-42px] z-20 rounded-[20px] border-[1.2px] border-white/40 bg-[#0B1030]/60 px-[22px] py-4 shadow-[0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
              >
                <p className="text-[32px] font-extrabold leading-tight text-white">
                  <bdi dir={data.stats[0].ltr ? "ltr" : "rtl"}>
                    {data.stats[0].value}
                  </bdi>
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#9FE7F5]">
                  {data.stats[0].label}
                </p>
              </motion.div>
            )}
          </div>

          {/* Mobile 3 stat cards row */}
          <div className="mt-6 grid grid-cols-3 gap-2 lg:hidden">
            {data.stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="flex flex-col items-start justify-center rounded-[18px] p-3 text-start"
              >
                <p
                  className="bg-clip-text text-[19px] font-extrabold text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #6FE3F7, #5B8CFF)",
                  }}
                >
                  <bdi dir={stat.ltr ? "ltr" : "rtl"}>{stat.value}</bdi>
                </p>
                <p className="mt-1 text-[11px] leading-[1.3] text-[#AAB3C5]">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
