import type { SectionHeaderData } from "@/data/types";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  data: SectionHeaderData;
  titleLine1?: string;
  titleLine2?: string;
}

function renderTitleWithKeyword(
  text: string,
  keyword: string,
  fromColor?: string,
  toColor?: string,
) {
  if (!keyword || !text.includes(keyword)) {
    return text;
  }
  const index = text.indexOf(keyword);
  const before = text.slice(0, index);
  const after = text.slice(index + keyword.length);
  const from = fromColor ?? "var(--keyword-from)";
  const to = toColor ?? "var(--keyword-to)";

  return (
    <>
      {before}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(90deg, ${from}, ${to})`,
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
    <Reveal className="mb-7 flex max-w-[820px] flex-col items-start gap-[14px] text-start lg:mx-auto lg:mb-16 lg:items-center lg:gap-[18px] lg:text-center">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] py-1.5 pe-4 ps-1.5">
        <NumberBadge number={data.number} size="md" />
        <span className="text-[13px] font-bold text-[#E6EAF2] lg:text-sm">
          {data.badge}
        </span>
      </div>

      <h2 className="text-[30px] font-extrabold leading-[1.3] text-white lg:text-[46px] lg:leading-[62px]">
        {titleLine1 && titleLine2 ? (
          <>
            <span className="lg:block">
              {renderTitleWithKeyword(
                titleLine1,
                data.keyword,
                data.keywordFrom,
                data.keywordTo,
              )}{" "}
            </span>
            <span className="lg:block">
              {renderTitleWithKeyword(
                titleLine2,
                data.keyword,
                data.keywordFrom,
                data.keywordTo,
              )}
            </span>
          </>
        ) : (
          renderTitleWithKeyword(
            data.title,
            data.keyword,
            data.keywordFrom,
            data.keywordTo,
          )
        )}
      </h2>

      {data.description && (
        <p className="max-w-[760px] text-base leading-[1.6] text-[#AAB3C5] lg:text-[19px] lg:leading-[32px]">
          {data.description}
        </p>
      )}
    </Reveal>
  );
}
