"use client";

import Image from "next/image";
import { useState } from "react";
import { jobzedData, type JobzedScreenItem } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedLightbox, type JobzedLightboxItem } from "./JobzedLightbox";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

function ScreenCard({
  item,
  imageHeightClass,
  onSelect,
}: {
  item: JobzedScreenItem;
  imageHeightClass: string;
  onSelect: (item: JobzedScreenItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group flex w-full flex-col gap-[12px] rounded-[24px] bg-white p-[12px] text-start shadow-[var(--jz-mobile-shadow)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-primary)] lg:gap-[16px] lg:rounded-[28px] lg:p-[16px] lg:shadow-[var(--jz-card-shadow)]"
    >
      <div
        className={`relative w-full overflow-hidden rounded-[14px] bg-[var(--jz-bg)] lg:rounded-[18px] ${imageHeightClass}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex w-full items-center justify-between px-1.5 pb-1">
        <span className="text-[15px] font-semibold text-[var(--jz-ink)] lg:text-[16px]">
          {item.title}
        </span>
        <span className="text-[13px] font-bold text-[var(--jz-lime)]">
          {item.number}
        </span>
      </div>
    </button>
  );
}

export function JobzedScreens() {
  const { screens } = jobzedData;
  const [activeItem, setActiveItem] = useState<JobzedLightboxItem | null>(null);

  const byNumber = (num: string) =>
    screens.items.find((item) => item.number === num) ?? screens.items[0];

  const handleSelect = (item: JobzedScreenItem) => {
    setActiveItem({
      title: `${item.number} · ${item.title}`,
      src: item.src,
      alt: item.alt,
    });
  };

  return (
    <section className="bg-[var(--jz-bg)] px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={screens.badge}
          titleBefore={screens.titleBefore}
          titleKeyword={screens.titleKeyword}
          titleAfter={screens.titleAfter}
          description={screens.description}
        />

        {/* Desktop bento layout matching Figma 64:101 */}
        <div className="hidden flex-col gap-[24px] lg:flex">
          <Reveal className="flex gap-[24px]">
            <div className="min-w-0 flex-1">
              <ScreenCard
                item={byNumber("01")}
                imageHeightClass="h-[340px]"
                onSelect={handleSelect}
              />
            </div>
            <div className="w-[416px] shrink-0">
              <ScreenCard
                item={byNumber("02")}
                imageHeightClass="h-[340px]"
                onSelect={handleSelect}
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="grid grid-cols-3 gap-[24px]">
            <ScreenCard
              item={byNumber("03")}
              imageHeightClass="h-[230px]"
              onSelect={handleSelect}
            />
            <ScreenCard
              item={byNumber("06")}
              imageHeightClass="h-[230px]"
              onSelect={handleSelect}
            />
            <ScreenCard
              item={byNumber("07")}
              imageHeightClass="h-[230px]"
              onSelect={handleSelect}
            />
          </Reveal>

          <Reveal delay={0.14} className="grid grid-cols-2 gap-[24px]">
            <ScreenCard
              item={byNumber("04")}
              imageHeightClass="h-[230px]"
              onSelect={handleSelect}
            />
            <ScreenCard
              item={byNumber("05")}
              imageHeightClass="h-[230px]"
              onSelect={handleSelect}
            />
          </Reveal>
        </div>

        {/* Mobile stacked layout 01 -> 07 */}
        <div className="flex flex-col gap-[14px] lg:hidden">
          {screens.items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.04}>
              <ScreenCard
                item={item}
                imageHeightClass="h-[200px]"
                onSelect={handleSelect}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <JobzedLightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
