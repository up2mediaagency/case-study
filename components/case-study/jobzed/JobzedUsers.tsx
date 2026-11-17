import { jobzedData } from "@/data/jobzed";
import { Reveal } from "../Reveal";
import { JobzedSectionHeader } from "./JobzedSectionHeader";

export function JobzedUsers() {
  const { users } = jobzedData;

  return (
    <section className="bg-[var(--jz-bg)] px-5 py-[56px] lg:px-[120px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[28px] lg:gap-[56px]">
        <JobzedSectionHeader
          badge={users.badge}
          titleBefore={users.titleBefore}
          titleKeyword={users.titleKeyword}
          titleAfter={users.titleAfter}
          description={users.description}
        />

        <div className="flex flex-col items-center gap-[20px] lg:gap-[24px]">
          <div className="grid w-full grid-cols-1 gap-[14px] lg:grid-cols-2 lg:gap-[24px]">
            {users.cards.map((card, index) => {
              const isTint = card.variant === "tint";
              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <div
                    className={`flex h-full flex-col justify-between gap-[18px] rounded-[24px] p-[24px] shadow-[var(--jz-mobile-shadow)] lg:gap-[20px] lg:rounded-[28px] lg:p-[36px] lg:shadow-[var(--jz-card-shadow)] ${
                      isTint ? "bg-[var(--jz-secondary)]" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col gap-[18px] lg:gap-[20px]">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-[22px] font-semibold text-[var(--jz-ink)] lg:text-[26px]">
                          {card.title}
                        </h3>
                        <span
                          className={`shrink-0 rounded-full px-[14px] py-[6px] text-[12px] font-medium text-[var(--jz-dark)] ${
                            isTint ? "bg-white" : "bg-[var(--jz-tint)]"
                          }`}
                        >
                          {card.badge}
                        </span>
                      </div>

                      <ul className="flex flex-col gap-[12px]">
                        {card.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-[10px] text-[15px] font-normal text-[var(--jz-body)] lg:text-[16px]"
                          >
                            <span
                              className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--jz-primary)]"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`rounded-[16px] p-[16px] lg:rounded-[18px] lg:p-[18px] ${
                        isTint ? "bg-white" : "bg-[var(--jz-bg)]"
                      }`}
                    >
                      <p className="text-[14px] font-medium leading-[24px] text-[var(--jz-dark)] lg:text-[15px] lg:leading-[26px]">
                        {card.need}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.16}>
            <p className="max-w-[700px] text-center text-[12px] font-normal leading-[20px] text-[var(--jz-subtle)] lg:text-[13px]">
              {users.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
