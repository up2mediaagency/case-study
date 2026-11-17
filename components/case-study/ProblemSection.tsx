import type { ProblemData } from "@/data/types";
import { Chip } from "./Chip";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface ProblemSectionProps {
  data: ProblemData;
}

export function ProblemSection({ data }: ProblemSectionProps) {
  return (
    <Section
      id="problem"
      haloTopColor="var(--brand-red)"
      haloBottomColor="var(--brand-blue)"
    >
      <SectionHeader data={data.header} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {data.cards.map((card, index) => (
          <Reveal key={card.number} delay={index * 0.08}>
            <GlassCard
              variant="red"
              className="flex h-full flex-col gap-3 p-6 lg:p-7"
            >
              <span
                className="bg-clip-text text-[32px] font-extrabold leading-none text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--hero-keyword-from), var(--hero-keyword-to))",
                }}
              >
                {card.number}
              </span>
              <h3 className="text-[22px] font-bold leading-snug text-white">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-[#AAB3C5]">
                {card.description}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <GlassCard className="mt-6 flex flex-col gap-4 p-6 lg:mt-8 lg:flex-row lg:items-center lg:justify-between lg:p-7">
          <h3 className="text-lg font-bold text-white lg:text-xl">
            {data.criteriaTitle}
          </h3>
          <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap">
            {data.criteriaChips.map((chip) => (
              <Chip key={chip} variant="aqua">
                {chip}
              </Chip>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
