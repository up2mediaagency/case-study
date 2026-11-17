import { jobzedData } from "@/data/jobzed";
import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedResults() {
  const { results } = jobzedData;

  return (
    <section className="bg-white px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={results.badge}
          titleBefore={results.titleBefore}
          titleKeyword={results.titleKeyword}
          titleAfter={results.titleAfter}
        />

        <div className="flex flex-col gap-[16px] lg:gap-[24px]">
          {/* 4 Count-up Stats */}
          <div className="grid grid-cols-2 gap-[12px] lg:grid-cols-4 lg:gap-[20px]">
            {results.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="flex h-full flex-col items-start gap-1.5 rounded-[24px] bg-[var(--jz-bg)] p-[20px] lg:rounded-[28px] lg:p-[28px]">
                  <p className="text-[36px] font-bold leading-tight text-[var(--jz-primary)] lg:text-[52px]">
                    {stat.ltr ? (
                      <bdi dir="ltr">
                        <CountUp value={stat.value} />
                      </bdi>
                    ) : (
                      <CountUp value={stat.value} />
                    )}
                  </p>
                  <p className="text-[13px] font-medium text-[var(--jz-muted)] lg:text-[15px]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA Panel */}
          <Reveal delay={0.18}>
            <div
              className="flex flex-col items-center gap-[18px] rounded-[28px] px-[24px] py-[36px] text-center lg:gap-[22px] lg:rounded-[36px] lg:p-[56px]"
              style={{ background: "var(--jz-gradient)" }}
            >
              <h3 className="max-w-[800px] text-[24px] font-semibold leading-[36px] text-white lg:text-[36px] lg:leading-[52px]">
                {results.cta.title}
              </h3>

              <p className="max-w-[640px] text-[15px] font-normal leading-[26px] text-[var(--jz-on-primary-muted)] lg:text-[17px] lg:leading-[30px]">
                {results.cta.description}
              </p>

              <a
                href={results.cta.buttonHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--jz-lime)] px-[32px] py-[15px] text-[15px] font-semibold text-[var(--jz-ink)] transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-[36px] lg:py-[16px] lg:text-[16px]"
              >
                {results.cta.buttonLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
