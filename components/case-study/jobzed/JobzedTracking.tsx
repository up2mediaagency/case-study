"use client";

import Image from "next/image";
import { useState } from "react";
import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedLightbox, type JobzedLightboxItem } from "./JobzedLightbox";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedTracking() {
  const { tracking } = jobzedData;
  const [activeItem, setActiveItem] = useState<JobzedLightboxItem | null>(null);

  return (
    <section className="bg-white px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={tracking.badge}
          titleBefore={tracking.titleBefore}
          titleKeyword={tracking.titleKeyword}
          titleAfter={tracking.titleAfter}
          description={tracking.description}
        />

        <div className="flex flex-col gap-[16px] lg:gap-[24px]">
          {/* Top row: 3 notes on right, dashboard screenshot on left */}
          <div className="grid grid-cols-1 items-center gap-[16px] lg:grid-cols-12 lg:gap-[24px]">
            <div className="flex flex-col gap-[12px] lg:col-span-4 lg:gap-[16px]">
              {tracking.notes.map((note, index) => (
                <Reveal key={note.title} delay={index * 0.06}>
                  <div className="flex flex-col gap-[6px] rounded-[20px] bg-[var(--jz-bg)] p-[20px] lg:rounded-[22px] lg:p-[22px]">
                    <h3 className="text-[16px] font-semibold text-[var(--jz-ink)] lg:text-[17px]">
                      {note.title}
                    </h3>
                    <p className="text-[14px] font-normal leading-[24px] text-[var(--jz-muted)]">
                      {note.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="lg:col-span-8">
              <button
                type="button"
                onClick={() =>
                  setActiveItem({
                    title: "لوحة متابعة الباحث",
                    src: tracking.dashboardImage.src,
                    alt: tracking.dashboardImage.alt,
                  })
                }
                className="group w-full rounded-[24px] bg-white p-[12px] shadow-[var(--jz-mobile-shadow)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-primary)] lg:rounded-[28px] lg:p-[16px] lg:shadow-[var(--jz-card-shadow)]"
              >
                <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] bg-[var(--jz-bg)] sm:h-[360px] lg:h-[500px] lg:rounded-[18px]">
                  <Image
                    src={tracking.dashboardImage.src}
                    alt={tracking.dashboardImage.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
              </button>
            </Reveal>
          </div>

          {/* Bottom panel: Form steps */}
          <Reveal delay={0.16}>
            <div className="grid grid-cols-1 items-center gap-[20px] rounded-[24px] bg-[var(--jz-secondary)] p-[20px] lg:grid-cols-12 lg:gap-[48px] lg:rounded-[32px] lg:p-[36px]">
              <div className="flex flex-col gap-[10px] lg:col-span-6 lg:gap-[14px]">
                <h3 className="text-[22px] font-semibold text-[var(--jz-ink)] lg:text-[28px]">
                  {tracking.formCard.title}
                </h3>
                <p className="text-[14px] font-normal leading-[26px] text-[var(--jz-muted)] lg:text-[16px] lg:leading-[28px]">
                  {tracking.formCard.description}
                </p>
              </div>

              <div className="lg:col-span-6">
                <button
                  type="button"
                  onClick={() =>
                    setActiveItem({
                      title: tracking.formCard.title,
                      src: tracking.formCard.src,
                      alt: tracking.formCard.alt,
                    })
                  }
                  className="group w-full rounded-[22px] bg-white p-[12px] shadow-[var(--jz-mobile-shadow)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-primary)] lg:rounded-[28px] lg:p-[14px] lg:shadow-[var(--jz-card-shadow)]"
                >
                  <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] bg-[var(--jz-bg)] sm:h-[280px] lg:h-[340px] lg:rounded-[18px]">
                    <Image
                      src={tracking.formCard.src}
                      alt={tracking.formCard.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <JobzedLightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
