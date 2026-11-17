import { Reveal } from "../Reveal";

interface JobzedSectionHeaderProps {
  badge: string;
  titleBefore: string;
  titleKeyword: string;
  titleAfter: string;
  description?: string;
}

export function JobzedSectionHeader({
  badge,
  titleBefore,
  titleKeyword,
  titleAfter,
  description,
}: JobzedSectionHeaderProps) {
  return (
    <Reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-[14px] text-center lg:gap-[16px]">
      <span className="inline-flex items-center justify-center rounded-full bg-[var(--jz-tint)] px-4 py-[7px] text-[13px] font-medium text-[var(--jz-dark)]">
        {badge}
      </span>

      <h2 className="text-[28px] font-semibold leading-[40px] text-[var(--jz-ink)] lg:text-[42px] lg:leading-[60px]">
        {titleBefore}
        <span className="text-[var(--jz-primary)]">{titleKeyword}</span>
        {titleAfter}
      </h2>

      {description && (
        <p className="max-w-[680px] text-[15px] font-normal leading-[26px] text-[var(--jz-muted)] lg:text-[17px] lg:leading-[30px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
