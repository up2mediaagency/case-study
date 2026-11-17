import Image from "next/image";
import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedDesignSystem() {
  const { designSystem } = jobzedData;

  return (
    <section className="bg-[var(--jz-bg)] px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={designSystem.badge}
          titleBefore={designSystem.titleBefore}
          titleKeyword={designSystem.titleKeyword}
          titleAfter={designSystem.titleAfter}
          description={designSystem.description}
        />

        <div className="flex flex-col gap-[16px] lg:gap-[24px]">
          {/* 4 Brand Colors */}
          <Reveal className="grid grid-cols-2 gap-[12px] lg:grid-cols-4 lg:gap-[16px]">
            {designSystem.brandColors.map((color) => (
              <div
                key={color.hex}
                className={`flex h-[140px] flex-col justify-end gap-1 rounded-[24px] p-[20px] lg:h-[160px] lg:rounded-[28px] lg:p-[24px] ${
                  color.darkText ? "text-[var(--jz-ink)]" : "text-white"
                }`}
                style={{ backgroundColor: color.hex }}
              >
                <span className="text-[16px] font-semibold lg:text-[17px]">
                  {color.name}
                </span>
                <span className="text-[13px] font-medium opacity-90 lg:text-[14px]">
                  <bdi dir="ltr">{color.hex}</bdi>
                </span>
              </div>
            ))}
          </Reveal>

          {/* Font Card (Right in RTL) & Logo Card (Left in RTL) */}
          <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2 lg:gap-[24px]">
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col gap-[16px] rounded-[24px] bg-white p-[24px] shadow-[var(--jz-mobile-shadow)] lg:gap-[20px] lg:rounded-[28px] lg:p-[32px] lg:shadow-[var(--jz-card-shadow)]">
                <h3 className="text-[17px] font-semibold text-[var(--jz-ink)] lg:text-[18px]">
                  {designSystem.fontCard.title}
                </h3>

                <p className="text-[52px] font-semibold leading-tight text-[var(--jz-primary)] lg:text-[72px]">
                  {designSystem.fontCard.specimen}
                </p>

                <p className="text-[13px] font-normal text-[var(--jz-muted)] lg:text-[14px]">
                  <bdi dir="ltr">{designSystem.fontCard.weights}</bdi>
                </p>

                <div className="flex flex-col gap-2 text-[var(--jz-ink)]">
                  {designSystem.fontCard.samples.map((sample) => (
                    <p key={sample.text} className={sample.className}>
                      {sample.text}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex h-full flex-col gap-[16px] rounded-[24px] bg-white p-[24px] shadow-[var(--jz-mobile-shadow)] lg:gap-[20px] lg:rounded-[28px] lg:p-[32px] lg:shadow-[var(--jz-card-shadow)]">
                <h3 className="text-[17px] font-semibold text-[var(--jz-ink)] lg:text-[18px]">
                  {designSystem.logoCard.title}
                </h3>

                <div className="grid flex-1 grid-cols-3 gap-[10px] lg:gap-[16px]">
                  {designSystem.logoCard.items.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex aspect-square items-center justify-center rounded-[18px] bg-[var(--jz-bg)] p-3 lg:rounded-[24px] lg:p-4"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        unoptimized
                        className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Neutrals Card (Right in RTL) & Components Card (Left in RTL) */}
          <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-2 lg:gap-[24px]">
            <Reveal delay={0.16}>
              <div className="flex h-full flex-col gap-[16px] rounded-[24px] bg-white p-[24px] shadow-[var(--jz-mobile-shadow)] lg:gap-[20px] lg:rounded-[28px] lg:p-[32px] lg:shadow-[var(--jz-card-shadow)]">
                <h3 className="text-[17px] font-semibold text-[var(--jz-ink)] lg:text-[18px]">
                  {designSystem.neutralsCard.title}
                </h3>

                <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                  {designSystem.neutralsCard.colors.map((hex) => (
                    <div
                      key={hex}
                      title={hex}
                      aria-label={hex}
                      className="aspect-square w-full rounded-[12px] border border-[var(--jz-border)] lg:rounded-[14px]"
                      style={{ backgroundColor: hex }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex h-full flex-col gap-[16px] rounded-[24px] bg-white p-[24px] shadow-[var(--jz-mobile-shadow)] lg:gap-[20px] lg:rounded-[28px] lg:p-[32px] lg:shadow-[var(--jz-card-shadow)]">
                <h3 className="text-[17px] font-semibold text-[var(--jz-ink)] lg:text-[18px]">
                  {designSystem.componentsCard.title}
                </h3>

                <div className="flex flex-wrap items-center gap-[10px] lg:gap-[12px]">
                  <span className="rounded-full bg-[var(--jz-tint)] px-[16px] py-[8px] text-[13px] font-medium text-[var(--jz-dark)]">
                    {designSystem.componentsCard.badgeLabel}
                  </span>

                  <button
                    type="button"
                    className="rounded-full bg-[var(--jz-primary)] px-[22px] py-[11px] text-[14px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-dark)]"
                  >
                    {designSystem.componentsCard.primaryBtnLabel}
                  </button>

                  <button
                    type="button"
                    className="rounded-full border border-[var(--jz-primary)] bg-white px-[22px] py-[11px] text-[14px] font-medium text-[var(--jz-primary)] transition-colors hover:bg-[var(--jz-tint)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--jz-dark)]"
                  >
                    {designSystem.componentsCard.secondaryBtnLabel}
                  </button>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="jobzed-sample-name"
                    className="text-[13px] font-medium text-[var(--jz-muted)]"
                  >
                    {designSystem.componentsCard.inputLabel}
                  </label>
                  <input
                    id="jobzed-sample-name"
                    type="text"
                    readOnly
                    placeholder={designSystem.componentsCard.inputPlaceholder}
                    className="w-full rounded-[14px] border border-[var(--jz-border)] bg-white px-[18px] py-[14px] text-[14px] font-normal text-[var(--jz-ink)] placeholder:text-[var(--jz-subtle)] focus:border-[var(--jz-primary)] focus:outline-none"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
