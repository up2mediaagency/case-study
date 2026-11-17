import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  showGrid?: boolean;
  haloTopColor?: string;
  haloBottomColor?: string;
  className?: string;
}

export function Section({
  id,
  children,
  showGrid = false,
  haloTopColor = "var(--brand-blue)",
  haloBottomColor = "var(--brand-aqua)",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-t border-white/10 px-5 py-16 lg:px-[144px] lg:py-[120px] ${className}`}
      style={{
        background: "linear-gradient(180deg, #0A0F2A 0%, #05070F 100%)",
      }}
    >
      {/* Optional faint 80px grid fading out to the edges */}
      {showGrid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 35%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 35%, transparent 100%)",
          }}
        />
      )}

      {/* Two small blurred halos (top-start & lower-end) */}
      <div
        aria-hidden="true"
        className="halo -top-24 start-[-80px] opacity-30"
        style={{ backgroundColor: haloTopColor }}
      />
      <div
        aria-hidden="true"
        className="halo -bottom-24 end-[-80px] opacity-25"
        style={{ backgroundColor: haloBottomColor }}
      />

      <div className="relative z-10 mx-auto max-w-[1152px]">{children}</div>
    </section>
  );
}
