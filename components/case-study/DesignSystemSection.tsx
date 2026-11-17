import type { DesignSystemData } from "@/data/types";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface DesignSystemSectionProps {
  data: DesignSystemData;
}

const LIGHT_HEX_CELLS = new Set([
  "#BCBCBC",
  "#D6DBDC",
  "#F2F2F2",
  "#BDE2FF",
  "#E9F5FF",
]);

export function DesignSystemSection({ data }: DesignSystemSectionProps) {
  const allStripColors = [...data.greys, ...data.lightBlues];

  return (
    <Section
      id="design-system"
      haloTopColor="var(--brand-blue)"
      haloBottomColor="var(--brand-aqua)"
    >
      <SectionHeader data={data.header} />

      {/* Mobile compact panel (matches Figma mobile 32:235) */}
      <Reveal className="lg:hidden">
        <div className="flex flex-col gap-6 rounded-[28px] border border-white/[0.14] bg-white/[0.05] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
          {/* Color */}
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {data.colorSectionLabel}
              </h3>
              <span className="text-[11px] text-[#8E98AE]" dir="ltr">
                {data.colorSectionEn}
              </span>
            </div>

            {data.brandColors.map((color) => (
              <div
                key={color.hex}
                className="flex items-center justify-between gap-3"
              >
                <div>
                  <p className="text-[15px] font-bold text-white" dir="ltr">
                    {color.name}
                  </p>
                  <p className="text-xs text-[#8E98AE]" dir="ltr">
                    {color.hex}
                  </p>
                </div>
                <span
                  className="h-11 w-11 shrink-0 rounded-[12px] border border-white/20"
                  style={{ backgroundColor: color.hex }}
                />
              </div>
            ))}

            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[15px] font-bold text-white">
                  {data.buttonGradient.name}
                </p>
                <p className="text-xs text-[#8E98AE]" dir="ltr">
                  {data.buttonGradient.from} → {data.buttonGradient.to}
                </p>
              </div>
              <span
                className="h-11 w-11 shrink-0 rounded-[12px] border border-white/20"
                style={{
                  background: `linear-gradient(135deg, ${data.buttonGradient.from}, ${data.buttonGradient.to})`,
                }}
              />
            </div>

            <div className="flex h-9 w-full overflow-hidden rounded-[12px]">
              {allStripColors.map((hex) => (
                <div
                  key={hex}
                  className="h-full flex-1"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          </div>

          {/* Radius & Spacing */}
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {data.radiusSpacingLabel}
              </h3>
              <span className="text-[11px] text-[#8E98AE]" dir="ltr">
                {data.radiusSpacingEn}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              {[4, 12, 16, 20, 999].map((r) => (
                <div
                  key={r}
                  className="h-10 w-10 border-[1.5px] border-[#02B3D2]/70 bg-white/[0.06]"
                  style={{ borderRadius: `${r}px` }}
                />
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="flex flex-col gap-1.5 font-readex">
            <div className="font-sans">
              <h3 className="text-lg font-bold text-white">
                {data.typographyLabel}
              </h3>
              <span className="text-[11px] text-[#8E98AE]" dir="ltr">
                {data.typographyEn}
              </span>
            </div>
            <p
              className="bg-clip-text text-[56px] font-bold leading-[1.2] text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #6FE3F7, #5B8CFF)",
              }}
              dir="ltr"
            >
              Aa
            </p>
            <p className="text-lg font-bold text-white" dir="ltr">
              {data.fontName}
            </p>
            <p className="font-sans text-sm text-[#AAB3C5]">
              {data.fontCaption}
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              {data.samples[0]?.label}
            </p>
            <p className="text-sm leading-relaxed text-[#AAB3C5]">
              {data.samples[2]?.label}
            </p>
          </div>

          {/* Components */}
          <div className="flex flex-col gap-3 font-readex">
            <div className="font-sans">
              <h3 className="text-lg font-bold text-white">
                {data.componentsLabel}
              </h3>
              <span className="text-[11px] text-[#8E98AE]" dir="ltr">
                {data.componentsEn}
              </span>
            </div>
            <button
              type="button"
              className="w-full rounded-full py-[13px] text-[15px] font-bold text-white"
              style={{
                background: "linear-gradient(90deg, #025BCF, #0091BD)",
              }}
            >
              المراجعة
            </button>
            <div className="flex flex-wrap items-center gap-2 font-sans">
              {data.progressSteps.map((step) => (
                <div
                  key={step.number}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.16] bg-white/[0.06] py-[5px] pe-2.5 ps-1.5"
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{
                      background: "linear-gradient(90deg, #025BCF, #0091BD)",
                    }}
                  >
                    {step.number}
                  </span>
                  <span className="text-xs font-medium text-white">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Desktop near-black panel (matches Figma desktop 13:242) */}
      <Reveal className="hidden lg:block">
        <div className="flex flex-col gap-10 rounded-[32px] border-[1.2px] border-white/30 bg-[#0A0A0A] p-12 font-readex shadow-[0_0_80px_rgba(48,49,136,0.3),0_24px_60px_rgba(0,0,0,0.4)]">
          {/* 1. COLOR */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h3 className="text-[22px] font-semibold text-white">
                {data.colorSectionLabel}
              </h3>
              <span className="text-[13px] font-medium text-[#636363]" dir="ltr">
                {data.colorSectionEn}
              </span>
            </div>

            {/* 4 big colour cards (Brand Blue right -> تدرج الأزرار left) */}
            <div className="grid grid-cols-4 gap-5">
              {data.brandColors.map((color) => {
                const isAqua = color.hex === "#02B3D2";
                return (
                  <div
                    key={color.hex}
                    className={`flex h-[170px] flex-col justify-end gap-1 rounded-[24px] p-5 ${
                      isAqua ? "text-[#0A0A0A]" : "text-white"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="text-lg font-semibold" dir="ltr">
                      {color.name}
                    </span>
                    <span className="text-sm opacity-90" dir="ltr">
                      {color.hex}
                    </span>
                  </div>
                );
              })}

              <div
                className="flex h-[170px] flex-col justify-end gap-1 rounded-[24px] p-5 text-white"
                style={{
                  background: `linear-gradient(90deg, ${data.buttonGradient.from}, ${data.buttonGradient.to})`,
                }}
              >
                <span className="text-lg font-semibold">
                  {data.buttonGradient.name}
                </span>
                <span className="text-sm opacity-90" dir="ltr">
                  {data.buttonGradient.from} → {data.buttonGradient.to}
                </span>
              </div>
            </div>

            {/* 13-cell strip with hex labels inside each cell */}
            <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-2">
              {allStripColors.map((hex) => {
                const isLight = LIGHT_HEX_CELLS.has(hex);
                return (
                  <div
                    key={hex}
                    className={`flex h-[76px] items-end justify-center rounded-[14px] pb-2.5 ${
                      isLight
                        ? "text-[#0A0A0A]"
                        : "border border-white/[0.14] text-white"
                    }`}
                    style={{ backgroundColor: hex }}
                  >
                    <span className="text-[11px]" dir="ltr">
                      {hex.replace("#", "")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Typography (right/start) + Radius/Spacing (left/end) */}
          <div className="grid grid-cols-12 gap-6">
            {/* Typography (right/start) */}
            <div className="col-span-7 flex flex-col gap-4 rounded-[28px] bg-[#141414] p-8">
              <div className="flex items-center gap-3">
                <h3 className="text-[22px] font-semibold text-white">
                  {data.typographyLabel}
                </h3>
                <span
                  className="text-[13px] font-medium text-[#636363]"
                  dir="ltr"
                >
                  {data.typographyEn}
                </span>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-[104px] font-bold leading-none text-white" dir="ltr">
                  Aa
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-[26px] font-semibold text-white" dir="ltr">
                    {data.fontName}
                  </p>
                  <p className="text-sm text-[#818181]">{data.fontCaption}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 text-lg text-white">
                {data.weights.map((w, idx) => (
                  <span
                    key={w}
                    className={
                      idx === 0
                        ? "font-light"
                        : idx === 1
                          ? "font-normal"
                          : idx === 2
                            ? "font-medium"
                            : idx === 3
                              ? "font-semibold"
                              : "font-bold"
                    }
                  >
                    {w}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <p className="text-[44px] font-bold leading-tight text-white">
                  {data.samples[0]?.label}
                </p>
                <p className="text-[28px] font-semibold leading-snug text-white">
                  {data.samples[1]?.label}
                </p>
                <p className="text-base text-[#BCBCBC]">
                  {data.samples[2]?.label}
                </p>
              </div>
            </div>

            {/* Radius & Spacing (left/end) */}
            <div className="col-span-5 flex flex-col justify-between gap-5 rounded-[28px] bg-[#141414] p-8">
              <div className="flex items-center gap-3">
                <h3 className="text-[22px] font-semibold text-white">
                  {data.radiusSpacingLabel}
                </h3>
                <span
                  className="text-[13px] font-medium text-[#636363]"
                  dir="ltr"
                >
                  {data.radiusSpacingEn}
                </span>
              </div>

              {/* 4 outlined radius squares/circle: 12, 16, 25, 999 */}
              <div className="flex items-end gap-4">
                {[12, 16, 25, 999].map((radius) => (
                  <div
                    key={radius}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="h-[76px] w-[76px] border-2 border-[#02B3D2] bg-[#1A1A1A]"
                      style={{ borderRadius: `${radius}px` }}
                    />
                    <span className="text-[13px] text-[#818181]" dir="ltr">
                      {radius}
                    </span>
                  </div>
                ))}
              </div>

              {/* 5 spacing blocks: 32, 20, 10, 8, 4 */}
              <div className="flex items-end gap-3.5">
                {[
                  { size: 32, w: 40 },
                  { size: 20, w: 28 },
                  { size: 10, w: 18 },
                  { size: 8, w: 16 },
                  { size: 4, w: 12 },
                ].map((sp) => (
                  <div
                    key={sp.size}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="rounded-[4px] bg-[#303188]"
                      style={{ width: `${sp.w}px`, height: `${sp.size}px` }}
                    />
                    <span className="text-[13px] text-[#818181]" dir="ltr">
                      {sp.size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. COMPONENTS */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h3 className="text-[22px] font-semibold text-white">
                {data.componentsLabel}
              </h3>
              <span className="text-[13px] font-medium text-[#636363]" dir="ltr">
                {data.componentsEn}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-[#141414] p-8">
              {/* Gradient button «المتابعة» */}
              <button
                type="button"
                className="rounded-[12px] px-9 py-3.5 text-base font-semibold text-white"
                style={{
                  background: "linear-gradient(90deg, #025BCF, #0091BD)",
                }}
              >
                المتابعة
              </button>

              {/* Blue button «اتصل بنا» */}
              <button
                type="button"
                className="rounded-[12px] bg-[#303188] px-9 py-3.5 text-base font-semibold text-white"
              >
                اتصل بنا
              </button>

              {/* Labelled input «الاسم كامل» */}
              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-white">
                  الاسم كامل
                </span>
                <div className="flex h-12 w-[230px] items-center rounded-[12px] bg-[#282828] px-4 text-[13px] text-[#636363]">
                  مثال: أحمد سعيد
                </div>
              </div>

              {/* 3-step progress */}
              <div className="flex items-center gap-2">
                {data.progressSteps.map((step, idx) => (
                  <div key={step.number} className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-[8px] text-[13px] font-semibold text-white ${
                        idx === 0 ? "bg-[#025BCF]" : "bg-[#282828]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-xs ${
                        idx === 0 ? "text-white" : "text-[#818181]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Small blue SIBA tag */}
              <span
                className="rounded-[6px] bg-[#025BCF] px-3 py-1.5 text-xs font-bold text-white"
                dir="ltr"
              >
                SIBA
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
