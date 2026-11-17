import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedAudit() {
  const { audit } = jobzedData;

  return (
    <section className="bg-white px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={audit.badge}
          titleBefore={audit.titleBefore}
          titleKeyword={audit.titleKeyword}
          titleAfter={audit.titleAfter}
          description={audit.description}
        />

        <div className="flex flex-col gap-[20px] lg:gap-[24px]">
          <Reveal className="flex flex-wrap items-center justify-center gap-[10px] lg:gap-[12px]">
            {audit.methods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-[var(--jz-border)] bg-[var(--jz-bg)] px-[18px] py-[9px] text-[13px] font-medium text-[var(--jz-body)] lg:px-[20px] lg:py-[10px] lg:text-[14px]"
              >
                {method}
              </span>
            ))}
          </Reveal>

          <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-3 lg:gap-[24px]">
            {audit.insights.map((insight, index) => (
              <Reveal key={insight.title} delay={index * 0.08}>
                <div
                  className={`flex h-full flex-col items-start gap-[10px] rounded-[24px] p-[24px] lg:gap-[12px] lg:rounded-[28px] lg:p-[32px] ${
                    insight.highlighted
                      ? "bg-[var(--jz-primary)] text-white shadow-[var(--jz-mobile-shadow)] lg:shadow-[var(--jz-card-shadow)]"
                      : "bg-[var(--jz-bg)] text-[var(--jz-ink)]"
                  }`}
                >
                  <p
                    className={`text-[48px] font-bold leading-none lg:text-[64px] ${
                      insight.highlighted
                        ? "text-white"
                        : "text-[var(--jz-primary)]"
                    }`}
                  >
                    <bdi dir="ltr">{insight.value}</bdi>
                  </p>
                  <h3
                    className={`text-[18px] font-semibold leading-[28px] lg:text-[19px] lg:leading-[30px] ${
                      insight.highlighted ? "text-white" : "text-[var(--jz-ink)]"
                    }`}
                  >
                    {insight.title}
                  </h3>
                  <p
                    className={`text-[14px] font-normal leading-[24px] lg:leading-[25px] ${
                      insight.highlighted
                        ? "text-[var(--jz-on-primary-muted)]"
                        : "text-[var(--jz-muted)]"
                    }`}
                  >
                    {insight.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
