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
      className="relative overflow-hidden bg-[#05070F] px-5 pt-28 pb-14 lg:px-[144px] lg:pt-36 lg:pb-0"
    >
      {/* Faint 80px grid fading out */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
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
        className="halo -top-24 start-[-100px] opacity-55"
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
        className="halo top-1/3 end-[-120px] opacity-30"
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
        className="halo bottom-0 start-1/4 opacity-25"
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
        <div className="flex flex-col items-start gap-6 text-start lg:items-center lg:text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-[#DDE4F2] lg:text-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--brand-aqua)" }}
                aria-hidden="true"
              />
              {data.badge}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-[34px] font-extrabold leading-[1.25] text-white lg:text-[58px] lg:leading-[1.2]"
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
            className="max-w-[720px] text-base leading-[1.65] text-[#AAB3C5] lg:text-[19px]"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.24)}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <a
              href={data.primaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto lg:text-base"
              style={{
                background:
                  "linear-gradient(135deg, var(--btn-from), var(--btn-to))",
              }}
            >
              {data.primaryCta.label}
            </a>
            <a
              href={data.secondaryCta.href}
              className="glass inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto lg:text-base"
            >
              {data.secondaryCta.label}
            </a>
          </motion.div>

          {/* Project facts: mobile glass card rows vs desktop inline row */}
          <motion.div {...fadeUp(0.3)} className="w-full lg:mt-2">
            {/* Mobile facts card */}
            <GlassCard className="divide-y divide-white/10 p-4 lg:hidden">
              {data.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
                >
                  <span className="text-xs text-[#8E98AE]">{fact.label}</span>
                  <span className="text-sm font-bold text-white">
                    {fact.value}
                  </span>
                </div>
              ))}
            </GlassCard>

            {/* Desktop facts row */}
            <div className="hidden items-center justify-center gap-10 border-t border-white/10 pt-6 lg:flex">
              {data.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col items-center gap-1">
                  <span className="text-xs text-[#8E98AE]">{fact.label}</span>
                  <span className="text-sm font-bold text-white">
                    {fact.value}
                  </span>
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
            className="pointer-events-none absolute -top-8 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full opacity-35 blur-[80px]"
            style={{ backgroundColor: "var(--brand-blue)" }}
          />

          {/* Desktop animated perspective wrapper */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            style={
              shouldReduceMotion
                ? undefined
                : { perspective: 1200 }
            }
          >
            <motion.div
              className="mx-auto max-w-[1120px]"
              style={
                shouldReduceMotion
                  ? undefined
                  : { rotateX: frameRotateX, transformOrigin: "top center" }
              }
            >
              <BrowserFrame showTopGlow className="lg:rounded-b-none lg:border-b-0">
                <div className="relative aspect-[350/204] w-full overflow-hidden lg:aspect-[1120/560]">
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

          {/* Desktop floating stat cards (2 on start/right, 1 on end/left) */}
          <div className="hidden lg:block">
            {data.stats[0] && (
              <motion.div
                style={shouldReduceMotion ? undefined : { y: statY1 }}
                className="glass absolute -top-6 start-[-24px] z-20 rounded-[20px] px-5 py-4"
              >
                <p
                  className="bg-clip-text text-2xl font-extrabold text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
                  }}
                >
                  <bdi dir={data.stats[0].ltr ? "ltr" : "rtl"}>
                    {data.stats[0].value}
                  </bdi>
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#C9D1E2]">
                  {data.stats[0].label}
                </p>
              </motion.div>
            )}

            {data.stats[1] && (
              <motion.div
                style={shouldReduceMotion ? undefined : { y: statY2 }}
                className="glass absolute bottom-14 start-[-32px] z-20 rounded-[20px] px-5 py-4"
              >
                <p
                  className="bg-clip-text text-2xl font-extrabold text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
                  }}
                >
                  <bdi dir={data.stats[1].ltr ? "ltr" : "rtl"}>
                    {data.stats[1].value}
                  </bdi>
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#C9D1E2]">
                  {data.stats[1].label}
                </p>
              </motion.div>
            )}

            {data.stats[2] && (
              <motion.div
                style={shouldReduceMotion ? undefined : { y: statY3 }}
                className="glass absolute top-1/3 end-[-28px] z-20 rounded-[20px] px-5 py-4"
              >
                <p
                  className="bg-clip-text text-2xl font-extrabold text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
                  }}
                >
                  <bdi dir={data.stats[2].ltr ? "ltr" : "rtl"}>
                    {data.stats[2].value}
                  </bdi>
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#C9D1E2]">
                  {data.stats[2].label}
                </p>
              </motion.div>
            )}
          </div>

          {/* Mobile 3 stat cards row */}
          <div className="mt-6 grid grid-cols-3 gap-2.5 lg:hidden">
            {data.stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-[16px] p-3 text-center"
              >
                <p
                  className="bg-clip-text text-[19px] font-extrabold text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
                  }}
                >
                  <bdi dir={stat.ltr ? "ltr" : "rtl"}>{stat.value}</bdi>
                </p>
                <p className="mt-1 text-[11px] leading-tight text-[#C9D1E2]">
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
