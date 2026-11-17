"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";

export function JobzedHero() {
  const { hero, siteUrl } = jobzedData;
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowLeftY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const glowRightY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  const visitHref = siteUrl.trim() ? siteUrl : "#";

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("challenge");
    if (target) {
      target.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--jz-bg)] px-5 pb-[56px] pt-[104px] lg:px-[120px] lg:pb-[120px] lg:pt-[140px]"
    >
      {/* Subtle radial glows with gentle parallax */}
      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: glowLeftY }}
        className="pointer-events-none absolute -left-[110px] top-[40px] h-[260px] w-[300px] rounded-full opacity-35 blur-[90px] lg:-left-[120px] lg:top-[100px] lg:h-[520px] lg:w-[640px] lg:opacity-30 lg:blur-[130px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(120, 154, 208, 0.7) 0%, rgba(120, 154, 208, 0) 70%)",
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: glowRightY }}
        className="pointer-events-none absolute -right-[90px] top-[20px] h-[240px] w-[280px] rounded-full opacity-35 blur-[90px] lg:-right-[100px] lg:top-[40px] lg:h-[480px] lg:w-[600px] lg:opacity-25 lg:blur-[130px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(178, 202, 53, 0.55) 0%, rgba(178, 202, 53, 0) 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-[24px] lg:gap-[56px]">
        <div className="flex max-w-[880px] flex-col items-center gap-[20px] text-center lg:gap-[22px]">
          {/* Badge */}
          <Reveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--jz-tint)] px-4 py-2 text-[13px] font-medium text-[var(--jz-dark)] lg:px-[18px] lg:text-[14px]">
              <span
                className="h-2 w-2 rounded-full bg-[var(--jz-lime)]"
                aria-hidden="true"
              />
              {hero.badge}
            </span>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.05}>
            <h1 className="text-[34px] font-semibold leading-[48px] text-[var(--jz-ink)] lg:text-[60px] lg:leading-[84px]">
              {hero.titleBefore}
              <span className="text-[var(--jz-primary)]">
                {hero.titleKeyword}
              </span>
              {hero.titleAfter}
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.1}>
            <p className="max-w-[700px] text-[16px] font-normal leading-[28px] text-[var(--jz-muted)] lg:text-[18px] lg:leading-[32px]">
              {hero.description}
            </p>
          </Reveal>

          {/* CTAs — Desktop: "استكشف القصة" (gradient) RIGHT, "زيارة الموقع" (outlined) LEFT */}
          <Reveal delay={0.14} className="w-full lg:w-auto">
            <div className="hidden items-center justify-center gap-[14px] lg:flex">
              <a
                href={hero.exploreHref}
                onClick={handleExploreClick}
                className="inline-flex h-[54px] items-center justify-center rounded-full px-[34px] py-[16px] text-[17px] font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-dark)]"
                style={{ background: "var(--jz-btn-gradient)" }}
              >
                {hero.exploreLabel}
              </a>
              <a
                href={visitHref}
                className="inline-flex h-[54px] items-center justify-center rounded-full border border-[var(--jz-outline)] bg-white px-[34px] py-[16px] text-[17px] font-semibold text-[var(--jz-ink)] transition-colors hover:border-[var(--jz-primary)] hover:text-[var(--jz-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-dark)]"
              >
                {hero.visitLabel}
              </a>
            </div>

            {/* CTAs — Mobile: swap — "زيارة الموقع" (primary gradient) RIGHT, "استكشف القصة" (secondary outlined) LEFT */}
            <div className="flex w-full items-center gap-[12px] lg:hidden">
              <a
                href={visitHref}
                className="inline-flex h-[52px] flex-1 items-center justify-center rounded-full px-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-dark)]"
                style={{ background: "var(--jz-btn-gradient)" }}
              >
                {hero.visitLabel}
              </a>
              <a
                href={hero.exploreHref}
                onClick={handleExploreClick}
                className="inline-flex h-[52px] flex-1 items-center justify-center rounded-full border border-[var(--jz-outline)] bg-white px-3 text-[15px] font-semibold text-[var(--jz-dark)] transition-colors hover:border-[var(--jz-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-dark)]"
              >
                {hero.exploreLabel}
              </a>
            </div>
          </Reveal>

          {/* Fact pills */}
          <Reveal delay={0.18} className="w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-[10px] lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-[14px]">
              {hero.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 shadow-[var(--jz-mobile-shadow)] lg:gap-2.5 lg:px-5 lg:shadow-[var(--jz-card-shadow)]"
                >
                  <span className="text-[18px] font-bold text-[var(--jz-primary)] lg:text-[20px]">
                    {fact.value}
                  </span>
                  <span className="text-[12px] font-normal text-[var(--jz-muted)] lg:hidden">
                    {fact.mobileLabel}
                  </span>
                  <span className="hidden text-[14px] font-normal text-[var(--jz-muted)] lg:inline">
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Browser frame card */}
        <Reveal delay={0.22} className="w-full max-w-[1120px]">
          <div className="rounded-[22px] bg-white p-[10px] shadow-[var(--jz-mobile-shadow)] lg:rounded-[28px] lg:p-[14px] lg:shadow-[var(--jz-card-shadow)]">
            <div className="mb-2.5 flex items-center gap-[6px] px-1.5 lg:mb-3 lg:gap-[7px] lg:px-2">
              <span className="h-2 w-2 rounded-full bg-[var(--jz-border)] lg:h-2.5 lg:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-[var(--jz-border)] lg:h-2.5 lg:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-[var(--jz-border)] lg:h-2.5 lg:w-2.5" />
            </div>
            <div className="relative h-[181px] w-full overflow-hidden rounded-[12px] bg-[var(--jz-bg)] sm:h-[360px] lg:h-[600px] lg:rounded-[16px]">
              <Image
                src={hero.browserImage.src}
                alt={hero.browserImage.alt}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 1120px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
