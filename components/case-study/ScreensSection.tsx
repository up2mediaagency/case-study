import type { ScreensData } from "@/data/types";
import { BrowserFrame } from "./BrowserFrame";
import { NumberBadge } from "./NumberBadge";
import { Reveal } from "./Reveal";
import { ScreenshotBox } from "./ScreenshotBox";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface ScreensSectionProps {
  data: ScreensData;
  availableImages: Record<string, boolean>;
}

export function ScreensSection({ data, availableImages }: ScreensSectionProps) {
  return (
    <Section
      id="screens"
      haloTopColor="var(--brand-aqua)"
      haloBottomColor="var(--brand-red)"
    >
      <SectionHeader data={data.header} />

      {/* Mobile layout (compact, matches Figma mobile 32:190) */}
      <div className="flex flex-col gap-5 lg:hidden">
        {/* Mobile: Desktop version card */}
        <Reveal>
          <div className="flex flex-col gap-3 rounded-[24px] border border-white/[0.14] bg-white/[0.05] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
            <span className="text-sm font-bold text-[#7FE7F9]">
              {data.desktopLabel}
            </span>
            <div className="relative h-[185px] w-full overflow-hidden rounded-[12px] bg-[#070B19]">
              <ScreenshotBox
                src={data.desktopImage.src}
                alt={data.desktopImage.alt}
                label={data.desktopImage.label}
                available={Boolean(availableImages[data.desktopImage.src])}
                sizes="100vw"
              />
            </div>
          </div>
        </Reveal>

        {/* Mobile: Mobile version card */}
        <Reveal delay={0.08}>
          <div className="flex flex-col items-center gap-3 rounded-[24px] border border-white/[0.14] bg-white/[0.05] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
            <span className="self-start text-sm font-bold text-[#7FE7F9]">
              {data.mobileLabel}
            </span>
            <div className="relative h-[394px] w-[200px] overflow-hidden rounded-[22px] bg-[#0A0A0A]">
              <ScreenshotBox
                src={data.mobileImage.src}
                alt={data.mobileImage.alt}
                label={data.mobileImage.label}
                available={Boolean(availableImages[data.mobileImage.src])}
                sizes="200px"
              />
            </div>
          </div>
        </Reveal>

        {/* Mobile: Form detail card */}
        <Reveal delay={0.12}>
          <div className="flex flex-col gap-3 rounded-[24px] border border-white/[0.14] bg-white/[0.05] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
            <h3 className="text-[17px] font-bold text-white">
              {data.formDetailTitle}
            </h3>
            <div className="relative h-[187px] w-full overflow-hidden rounded-[12px] bg-[#0A0A0A]">
              <ScreenshotBox
                src={data.formImage.src}
                alt={data.formImage.alt}
                label={data.formImage.label}
                available={Boolean(availableImages[data.formImage.src])}
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col gap-3 px-1 pb-1">
              {data.formNotes.map((note) => (
                <div key={note.number} className="flex items-start gap-3">
                  <NumberBadge
                    number={note.number}
                    size="sm"
                    className="mt-0.5 !h-7 !w-7"
                  />
                  <div>
                    <h4 className="text-[15px] font-bold text-white">
                      {note.title}
                    </h4>
                    <p className="text-sm leading-snug text-[#AAB3C5]">
                      {note.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Desktop layout (overlapping browser + phone composition, matches Figma 11:1543) */}
      <div className="hidden flex-col gap-16 lg:flex">
        {/* Stage: Overlapping Browser (right/start) + Phone (left/end) */}
        <Reveal>
          <div className="relative mx-auto min-h-[650px] w-full max-w-[1152px]">
            {/* Stage blue glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[400px] start-1/2 h-[280px] w-[720px] -translate-x-1/2 rounded-full bg-[#025BCF]/25 blur-[110px]"
            />

            {/* Browser frame on right/start side */}
            <div className="relative w-[940px]">
              <BrowserFrame className="rounded-[20px] border-[1.5px] border-white/45 shadow-[0_30px_50px_rgba(0,0,0,0.5),0_20px_70px_rgba(2,91,207,0.35)]">
                <div className="relative h-[532px] w-[940px]">
                  <ScreenshotBox
                    src={data.desktopImage.src}
                    alt={data.desktopImage.alt}
                    label={data.desktopImage.label}
                    available={Boolean(availableImages[data.desktopImage.src])}
                    sizes="940px"
                  />
                </div>
              </BrowserFrame>

              {/* Tag: نسخة الديسكتوب */}
              <div className="absolute -top-4 start-6 z-20 inline-flex items-center gap-2 rounded-full border border-[#02B3D2]/60 bg-[#0B1030]/75 px-3.5 py-2 backdrop-blur-md">
                <span
                  className="h-2 w-2 rounded-full bg-[#02B3D2]"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-white">
                  {data.desktopLabel}
                </span>
              </div>
            </div>

            {/* Phone mock overlapping left (end) edge */}
            <div className="absolute top-[124px] end-[16px] z-20 w-[266px]">
              {/* Tag: نسخة الجوال */}
              <div className="absolute -top-8 end-[-20px] z-30 inline-flex items-center gap-2 rounded-full border border-[#FF5A67]/60 bg-[#0B1030]/75 px-3.5 py-2 backdrop-blur-md">
                <span
                  className="h-2 w-2 rounded-full bg-[#FF5A67]"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-white">
                  {data.mobileLabel}
                </span>
              </div>

              <div className="relative h-[526px] w-[266px] overflow-hidden rounded-[44px] border-2 border-white/60 bg-[#0A0A0A] p-[5px] shadow-[0_0_40px_rgba(2,179,210,0.25),0_30px_60px_rgba(0,0,0,0.6)]">
                {/* Dynamic island pill */}
                <div
                  aria-hidden="true"
                  className="absolute top-[14px] left-1/2 z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-[11px] bg-black"
                />
                <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">
                  <ScreenshotBox
                    src={data.mobileImage.src}
                    alt={data.mobileImage.alt}
                    label={data.mobileImage.label}
                    available={Boolean(availableImages[data.mobileImage.src])}
                    sizes="252px"
                  />
                </div>
              </div>

              {/* Marker 1 on phone */}
              <div
                aria-hidden="true"
                className="absolute top-[236px] start-[-16px] z-30 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white/95 text-[15px] font-extrabold text-white shadow-[0_0_0_6px_rgba(2,179,210,0.22)]"
                style={{
                  background: "linear-gradient(90deg, #02B3D2, #025BCF)",
                }}
              >
                1
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form detail row: Form close-up on right (start), Annotations on left (end) */}
        <Reveal delay={0.12}>
          <div className="flex items-center gap-10">
            {/* Form close-up card (right/start in RTL) */}
            <div className="relative w-[660px] shrink-0 rounded-[28px] border-[1.2px] border-[#02B3D2]/55 bg-white/[0.05] p-[18px] shadow-[0_18px_20px_rgba(0,0,0,0.35)]">
              <div className="relative h-[357px] w-[620px] overflow-hidden rounded-[14px] bg-[#0A0A0A]">
                <ScreenshotBox
                  src={data.formImage.src}
                  alt={data.formImage.alt}
                  label={data.formImage.label}
                  available={Boolean(availableImages[data.formImage.src])}
                  sizes="620px"
                />
              </div>

              {/* Marker 2 */}
              <div
                aria-hidden="true"
                className="absolute top-[59px] start-[26px] z-20 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white/95 text-[15px] font-extrabold text-white shadow-[0_0_0_6px_rgba(2,179,210,0.22)]"
                style={{
                  background: "linear-gradient(90deg, #02B3D2, #025BCF)",
                }}
              >
                2
              </div>

              {/* Marker 3 */}
              <div
                aria-hidden="true"
                className="absolute bottom-[50px] start-[180px] z-20 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white/95 text-[15px] font-extrabold text-white shadow-[0_0_0_6px_rgba(2,179,210,0.22)]"
                style={{
                  background: "linear-gradient(90deg, #02B3D2, #025BCF)",
                }}
              >
                3
              </div>
            </div>

            {/* Annotations (left/end in RTL) */}
            <div className="flex flex-1 flex-col gap-4">
              <h3 className="text-[26px] font-extrabold text-white">
                {data.formDetailTitle}
              </h3>

              {data.formNotes.map((note) => (
                <div
                  key={note.number}
                  className="flex items-center gap-4 rounded-[22px] border-[1.2px] border-white/[0.28] bg-white/[0.05] py-5 pe-[22px] ps-5 shadow-[0_18px_20px_rgba(0,0,0,0.35)]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white shadow-[0_4px_16px_rgba(2,179,210,0.45)]"
                    style={{
                      background: "linear-gradient(90deg, #02B3D2, #025BCF)",
                    }}
                  >
                    {note.number}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-[20px] font-extrabold text-white">
                      {note.title}
                    </h4>
                    <p className="text-base leading-[25px] text-[#AAB3C5]">
                      {note.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
