"use client";

import Image from "next/image";
import { useState } from "react";
import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedLightbox, type JobzedLightboxItem } from "./JobzedLightbox";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedInternalTools() {
  const { internalTools } = jobzedData;
  const [activeItem, setActiveItem] = useState<JobzedLightboxItem | null>(null);

  return (
    <section className="bg-[var(--jz-bg)] px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={internalTools.badge}
          titleBefore={internalTools.titleBefore}
          titleKeyword={internalTools.titleKeyword}
          titleAfter={internalTools.titleAfter}
          description={internalTools.description}
        />

        <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-3 lg:gap-[24px]">
          {internalTools.tools.map((tool, index) => (
            <Reveal key={tool.title} delay={index * 0.08}>
              <button
                type="button"
                onClick={() =>
                  setActiveItem({
                    title: tool.title,
                    src: tool.src,
                    alt: tool.alt,
                  })
                }
                className="group flex h-full w-full flex-col gap-[14px] rounded-[24px] bg-white p-[12px] text-start shadow-[var(--jz-mobile-shadow)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-primary)] lg:gap-[16px] lg:rounded-[28px] lg:p-[16px] lg:shadow-[var(--jz-card-shadow)]"
              >
                <div className="relative h-[210px] w-full overflow-hidden rounded-[14px] bg-[var(--jz-bg)] lg:h-[230px] lg:rounded-[18px]">
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col gap-1 px-1.5 pb-1.5">
                  <h3 className="text-[16px] font-semibold text-[var(--jz-ink)] lg:text-[17px]">
                    {tool.title}
                  </h3>
                  <p className="text-[14px] font-normal text-[var(--jz-muted)]">
                    {tool.description}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <JobzedLightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
