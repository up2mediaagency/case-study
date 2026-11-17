import type { DesignSystemData } from "@/data/types";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface DesignSystemSectionProps {
  data: DesignSystemData;
}

export function DesignSystemSection({ data }: DesignSystemSectionProps) {
  const allStripColors = [...data.greys, ...data.lightBlues];

  return (
    <Section
      id="design-system"
      haloTopColor="var(--brand-blue)"
      haloBottomColor="var(--brand-aqua)"
    >
      <SectionHeader data={data.header} />

      <Reveal>
        <GlassCard className="rounded-[28px] p-5 lg:rounded-[32px] lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {/* 1. COLOR */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white">
                  {data.colorSectionLabel}
                </h3>
                <span className="text-xs font-semibold tracking-wider text-[#8E98AE]" dir="ltr">
                  {data.colorSectionEn}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {data.brandColors.map((color) => (
                  <div
                    key={color.hex}
                    className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/[0.03] px-4 py-2.5"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white" dir="ltr">
                        {color.name}
                      </span>
                      <span className="text-xs text-[#8E98AE]" dir="ltr">
                        {color.hex}
                      </span>
                    </div>
                    <span
                      className="h-11 w-11 shrink-0 rounded-[12px] border border-white/20"
                      style={{ backgroundColor: color.hex }}
                      aria-hidden="true"
                    />
                  </div>
                ))}

                <div className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/[0.03] px-4 py-2.5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">
                      {data.buttonGradient.name}
                    </span>
                    <span className="text-xs text-[#8E98AE]" dir="ltr">
                      {data.buttonGradient.from} → {data.buttonGradient.to}
                    </span>
                  </div>
                  <span
                    className="h-11 w-11 shrink-0 rounded-[12px] border border-white/20"
                    style={{
                      background: `linear-gradient(135deg, ${data.buttonGradient.from}, ${data.buttonGradient.to})`,
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* 13-cell greys & light blues strip */}
              <div className="flex flex-col gap-2">
                <div className="flex h-9 w-full overflow-hidden rounded-full border border-white/15">
                  {allStripColors.map((hex) => (
                    <div
                      key={hex}
                      className="h-full flex-1"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap justify-between gap-1 text-[10px] text-[#8E98AE]">
                  <bdi dir="ltr">{allStripColors[0]}</bdi>
                  <bdi dir="ltr">{allStripColors[allStripColors.length - 1]}</bdi>
                </div>
              </div>
            </div>

            {/* 2. RADIUS & SPACING */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white">
                  {data.radiusSpacingLabel}
                </h3>
                <span className="text-xs font-semibold tracking-wider text-[#8E98AE]" dir="ltr">
                  {data.radiusSpacingEn}
                </span>
              </div>

              {/* Radius samples */}
              <div className="grid grid-cols-4 gap-3">
                {data.radii.map((radius) => (
                  <div
                    key={radius}
                    className="flex flex-col items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.03] p-3"
                  >
                    <div
                      className="h-12 w-12 border-2 border-[#02B3D2]/70 bg-[#02B3D2]/15"
                      style={{ borderRadius: `${radius}px` }}
                    />
                    <span className="text-xs font-medium text-[#C9D1E2]" dir="ltr">
                      {radius}px
                    </span>
                  </div>
                ))}
              </div>

              {/* Spacing samples */}
              <div className="flex flex-col gap-2.5 rounded-[16px] border border-white/10 bg-white/[0.03] p-4">
                {data.spacings.map((space) => (
                  <div key={space} className="flex items-center gap-3">
                    <span
                      className="w-10 shrink-0 text-xs font-medium text-[#8E98AE]"
                      dir="ltr"
                    >
                      {space}px
                    </span>
                    <div
                      className="h-3 rounded-full bg-gradient-to-l from-[#025BCF] to-[#02B3D2]"
                      style={{ width: `${Math.min(space * 5, 220)}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 3. TYPOGRAPHY (Readex Pro) */}
            <div className="flex flex-col gap-5 font-readex">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-sans">
                <h3 className="text-lg font-bold text-white">
                  {data.typographyLabel}
                </h3>
                <span className="text-xs font-semibold tracking-wider text-[#8E98AE]" dir="ltr">
                  {data.typographyEn}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="text-5xl font-bold leading-none text-white"
                  dir="ltr"
                >
                  Aa
                </span>
                <div>
                  <p className="text-xl font-bold text-white" dir="ltr">
                    {data.fontName}
                  </p>
                  <p className="text-xs text-[#8E98AE]">{data.fontCaption}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {data.weights.map((weight) => (
                  <span
                    key={weight}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs text-[#DDE4F2]"
                  >
                    {weight}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] p-4">
                {data.samples.map((sample) => (
                  <p
                    key={sample.label}
                    className={
                      sample.size === "lg"
                        ? "text-2xl font-bold text-white"
                        : sample.size === "md"
                          ? "text-lg font-medium text-[#DDE4F2]"
                          : "text-sm leading-relaxed text-[#AAB3C5]"
                    }
                  >
                    {sample.label}
                  </p>
                ))}
              </div>
            </div>

            {/* 4. COMPONENTS (Readex Pro) */}
            <div className="flex flex-col gap-5 font-readex">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-sans">
                <h3 className="text-lg font-bold text-white">
                  {data.componentsLabel}
                </h3>
                <span className="text-xs font-semibold tracking-wider text-[#8E98AE]" dir="ltr">
                  {data.componentsEn}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                {/* SIBA primary button sample */}
                <div className="flex flex-col items-start gap-3">
                  <button
                    type="button"
                    className="rounded-full px-7 py-3 text-sm font-bold text-white shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #025BCF 0%, #0091BD 100%)",
                    }}
                  >
                    {data.sampleButtonLabel}
                  </button>
                </div>

                {/* 3-step progress indicator */}
                <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
                  {data.progressSteps.map((step, index) => {
                    const isActive = index === 0;
                    return (
                      <div
                        key={step.number}
                        className="flex flex-1 items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.03] px-3 py-2.5"
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            isActive
                              ? "bg-[#025BCF] text-white"
                              : "border border-white/20 bg-white/[0.06] text-[#8E98AE]"
                          }`}
                        >
                          {step.number}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-white" : "text-[#8E98AE]"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
