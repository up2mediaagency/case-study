import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedJourney() {
  const { journey } = jobzedData;

  return (
    <section className="bg-white px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={journey.badge}
          titleBefore={journey.titleBefore}
          titleKeyword={journey.titleKeyword}
          titleAfter={journey.titleAfter}
          description={journey.description}
        />

        <div className="flex flex-col gap-[16px] lg:gap-[24px]">
          <div className="grid grid-cols-1 gap-[12px] lg:grid-cols-5 lg:gap-[16px]">
            {journey.stations.map((station, index) => (
              <Reveal key={station.number} delay={index * 0.06}>
                <div
                  className={`flex h-full flex-row items-center gap-[14px] rounded-[24px] p-[20px] lg:flex-col lg:items-start lg:gap-[12px] lg:p-[24px] ${
                    station.highlighted
                      ? "bg-[var(--jz-primary)] text-white"
                      : "bg-[var(--jz-bg)] text-[var(--jz-ink)]"
                  }`}
                >
                  <div
                    className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full text-[15px] font-bold ${
                      station.highlighted
                        ? "bg-white text-[var(--jz-primary)]"
                        : "bg-[var(--jz-primary)] text-white"
                    }`}
                  >
                    {station.number}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`text-[17px] font-semibold lg:text-[18px] ${
                        station.highlighted ? "text-white" : "text-[var(--jz-ink)]"
                      }`}
                    >
                      {station.title}
                    </h3>
                    <p
                      className={`text-[13px] font-normal leading-[22px] lg:text-[14px] lg:leading-[24px] ${
                        station.highlighted
                          ? "text-[var(--jz-on-primary-muted)]"
                          : "text-[var(--jz-muted)]"
                      }`}
                    >
                      {station.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-start justify-between gap-[14px] rounded-[24px] border border-[var(--jz-border)] p-[20px] lg:flex-row lg:items-center lg:p-[22px]">
              <h3 className="shrink-0 text-[15px] font-semibold text-[var(--jz-ink)]">
                {journey.pagesStripTitle}
              </h3>
              <div className="flex flex-wrap gap-[8px] lg:gap-[10px]">
                {journey.pagesStrip.map((page) => (
                  <span
                    key={page}
                    className="rounded-full bg-[var(--jz-tint)] px-[16px] py-[8px] text-[13px] font-medium text-[var(--jz-dark)]"
                  >
                    {page}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
