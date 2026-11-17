import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedChallenge() {
  const { challenge } = jobzedData;

  return (
    <section
      id="challenge"
      className="bg-[var(--jz-bg)] px-5 py-[56px] lg:px-[120px] lg:py-[110px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={challenge.badge}
          titleBefore={challenge.titleBefore}
          titleKeyword={challenge.titleKeyword}
          titleAfter={challenge.titleAfter}
        />

        <div className="flex flex-col gap-[14px] lg:gap-[24px]">
          <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-3 lg:gap-[24px]">
            {challenge.cards.map((card, index) => (
              <Reveal key={card.number} delay={index * 0.08}>
                <div className="flex h-full flex-col items-start gap-[12px] rounded-[24px] bg-white p-[24px] shadow-[var(--jz-mobile-shadow)] lg:gap-[14px] lg:rounded-[28px] lg:p-[32px] lg:shadow-[var(--jz-card-shadow)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[var(--jz-tint)] lg:h-14 lg:w-14 lg:rounded-[18px]">
                    <span className="text-[18px] font-bold text-[var(--jz-primary)] lg:text-[20px]">
                      {card.number}
                    </span>
                  </div>
                  <h3 className="text-[19px] font-semibold text-[var(--jz-ink)] lg:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] font-normal leading-[24px] text-[var(--jz-muted)] lg:text-[15px] lg:leading-[27px]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div
              className="flex flex-col items-center gap-[16px] rounded-[24px] p-[24px] lg:gap-[22px] lg:rounded-[32px] lg:p-[36px]"
              style={{ background: "var(--jz-gradient)" }}
            >
              <h3 className="text-center text-[18px] font-semibold text-white lg:text-[22px]">
                {challenge.commitmentsTitle}
              </h3>

              <div className="flex w-full flex-col gap-[10px] lg:w-auto lg:flex-row lg:flex-wrap lg:justify-center lg:gap-[12px]">
                {challenge.commitments.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-2 rounded-full bg-white px-[18px] py-[12px] lg:justify-center lg:px-[22px]"
                  >
                    <span className="text-[14px] font-medium text-[var(--jz-ink)] lg:text-[15px]">
                      {item}
                    </span>
                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-[var(--jz-lime)]"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
