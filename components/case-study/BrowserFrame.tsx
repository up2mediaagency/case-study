import type { ReactNode } from "react";

interface BrowserFrameProps {
  children: ReactNode;
  className?: string;
  showTopGlow?: boolean;
  overlay?: ReactNode;
}

export function BrowserFrame({
  children,
  className = "",
  showTopGlow = false,
  overlay,
}: BrowserFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[16px] border border-white/20 bg-[#070B19] shadow-[0_20px_60px_rgba(0,0,0,0.55)] ${className}`}
    >
      {overlay}
      {showTopGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, var(--brand-aqua) 50%, transparent 95%)",
          }}
        />
      )}

      {/* Browser chrome top bar */}
      <div className="flex h-8 items-center justify-end gap-1.5 border-b border-white/10 bg-white/[0.06] px-3.5 lg:h-10 lg:px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      </div>

      <div className="relative w-full overflow-hidden">{children}</div>
    </div>
  );
}
