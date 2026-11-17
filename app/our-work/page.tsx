import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrowserFrame } from "@/components/case-study/BrowserFrame";
import { Chip } from "@/components/case-study/Chip";
import { GlassCard } from "@/components/case-study/GlassCard";
import { Reveal } from "@/components/case-study/Reveal";
import { Section } from "@/components/case-study/Section";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { caseStudies } from "@/data/case-studies";
import { sibaData } from "@/data/siba";
import { sibaTheme } from "@/theme/siba";

export const metadata: Metadata = {
  title: "أعمالنا — دراسات حالة | UP TO MEDIA",
  description:
    "مختارات من دراسات الحالة والمشاريع الرقمية التي صمّمتها وطوّرتها UP TO MEDIA.",
};

export default function OurWorkIndexPage() {
  const isSingle = caseStudies.length === 1;

  return (
    <div
      style={sibaTheme}
      className="flex min-h-screen flex-col bg-[#05070F] text-white"
    >
      <SiteHeader data={sibaData.header} />

      <main className="flex-1">
        <Section
          showGrid
          haloTopColor="var(--brand-blue)"
          haloBottomColor="var(--brand-aqua)"
          className="pt-28 pb-20 lg:pt-36 lg:pb-[120px]"
        >
          {/* Header block: centered on desktop, right-aligned on mobile */}
          <Reveal className="mb-10 flex max-w-[780px] flex-col items-start gap-4 text-start lg:mx-auto lg:mb-14 lg:items-center lg:text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-[13px] font-bold text-[#E6EAF2] lg:text-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--brand-aqua)" }}
                aria-hidden="true"
              />
              أعمالنا
            </span>

            <h1 className="text-[32px] font-extrabold leading-[1.3] text-white lg:text-[48px] lg:leading-[1.25]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
                }}
              >
                دراسات حالة
              </span>{" "}
              من أعمالنا
            </h1>

            <p className="max-w-[640px] text-base leading-[1.65] text-[#AAB3C5] lg:text-[19px]">
              مختارات من المشاريع الرقمية التي صمّمناها وطوّرناها بتفصيل كامل
              للمشكلة، البحث، والحلول التصميمية.
            </p>
          </Reveal>

          {/* Cards grid */}
          <div
            className={
              isSingle
                ? "mx-auto w-full max-w-[400px]"
                : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            }
          >
            {caseStudies.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <Link
                  href={item.href}
                  className="group block h-full rounded-[24px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:rounded-[28px]"
                >
                  <GlassCard className="flex h-full flex-col justify-between gap-5 rounded-[24px] p-4 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-white/30 lg:rounded-[28px] lg:p-5">
                    <div className="flex flex-col gap-4">
                      <BrowserFrame className="rounded-[14px] border-white/15">
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070B19]">
                          <Image
                            src={item.cover}
                            alt={`لقطة شاشة لمشروع ${item.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover object-top"
                          />
                        </div>
                      </BrowserFrame>

                      <div className="flex flex-col gap-2">
                        <h2 className="text-[22px] font-extrabold text-white">
                          {item.title}
                        </h2>
                        <p className="line-clamp-2 text-sm leading-relaxed text-[#AAB3C5]">
                          {item.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Chip
                            key={tag}
                            variant="neutral"
                            className="px-3 py-1 text-xs"
                          >
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3.5 text-sm font-bold text-[#8CEBFF]">
                      <span>عرض دراسة الحالة</span>
                      <svg
                        viewBox="0 0 20 20"
                        className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          d="M15 10H5M5 10l4.5-4.5M5 10l4.5 4.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>

      <SiteFooter data={sibaData.footer} />
    </div>
  );
}
