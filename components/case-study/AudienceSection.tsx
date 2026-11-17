import type { AudienceData } from "@/data/types";
import { Chip } from "./Chip";
import { GlassCard } from "./GlassCard";
import { IllustrativeTag } from "./IllustrativeTag";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface AudienceSectionProps {
  data: AudienceData;
}

export function AudienceSection({ data }: AudienceSectionProps) {
  return (
    <Section
      id="audience"
      haloTopColor="var(--brand-blue)"
      haloBottomColor="var(--brand-aqua)"
    >
      <SectionHeader data={data.header} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {data.personas.map((persona, index) => (
          <Reveal key={persona.name} delay={index * 0.1}>
            <GlassCard className="flex h-full flex-col justify-between gap-6 p-6 lg:p-8">
              <div className="flex flex-col gap-5">
                {/* Top: Avatar + Name + Role + Tag */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white shadow-md"
                      style={{
                        background: "linear-gradient(135deg, #303188, #4976E9)",
                      }}
                    >
                      {persona.avatarLetter}
                    </div>
                    <div>
                      <h3 className="text-[22px] font-bold leading-snug text-white">
                        {persona.name}
                      </h3>
                      <p className="text-sm text-[#8E98AE]">{persona.role}</p>
                    </div>
                  </div>
                  {persona.illustrative && (
                    <IllustrativeTag text={data.illustrativeTag} />
                  )}
                </div>

                {/* Two columns: Goals (aqua) | Pains (red) */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2.5 text-sm font-bold text-[#8CEBFF]">
                      {persona.goalsLabel}
                    </h4>
                    <ul className="space-y-2">
                      {persona.goals.map((goal) => (
                        <li
                          key={goal}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#DDE4F2]"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: "var(--brand-aqua)" }}
                            aria-hidden="true"
                          />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2.5 text-sm font-bold text-[#FF8A93]">
                      {persona.painsLabel}
                    </h4>
                    <ul className="space-y-2">
                      {persona.pains.map((pain) => (
                        <li
                          key={pain}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#DDE4F2]"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: "var(--brand-red)" }}
                            aria-hidden="true"
                          />
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Device chips */}
                <div className="flex flex-wrap gap-2">
                  {persona.chips.map((chip) => (
                    <Chip key={chip} variant="neutral">
                      {chip}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-t border-white/10 pt-4 text-base font-medium text-[#C9D1E2]">
                {persona.quote}
              </blockquote>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
