import type { SectionHeaderData } from "@/data/types";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  data: SectionHeaderData;
  titleLine1?: string;
  titleLine2?: string;
}

function renderTitleWithKeyword(text: string, keyword: string) {
  if (!keyword || !text.includes(keyword)) {
    return text;
  }
  const index = text.indexOf(keyword);
  const before = text.slice(0, index);
  const after = text.slice(index + keyword.length);

  return (
    <>
      {before}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--keyword-from), var(--keyword-to))",
        }}
      >
        {keyword}
      </span>
      {after}
    </>
  );
}

export function SectionHeader({
  data,
  titleLine1,
  titleLine2,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-7 flex max-w-[820px] flex-col items-start gap-[14px] text-start lg:mb-16">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.16] bg-white/[0.06] py-1.5 pe-4 ps-1.5">
        <NumberBadge number={data.number} size="md" />
        <span className="text-sm font-medium text-[#DDE4F2]">{data.badge}</span>
      </div>

      <h2 className="text-[30px] font-extrabold leading-[1.3] text-white lg:text-[46px]">
        {titleLine1 && titleLine2 ? (
          <>
            <span className="lg:block">
              {renderTitleWithKeyword(titleLine1, data.keyword)}{" "}
            </span>
            <span className="lg:block">
              {renderTitleWithKeyword(titleLine2, data.keyword)}
            </span>
          </>
        ) : (
          renderTitleWithKeyword(data.title, data.keyword)
        )}
      </h2>

      {data.description && (
        <p className="text-base leading-[1.6] text-[#AAB3C5] lg:text-[19px]">
          {data.description}
        </p>
      )}
    </Reveal>
  );
}
