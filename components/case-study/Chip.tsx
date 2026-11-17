import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  variant?: "aqua" | "amber" | "neutral";
  className?: string;
}

export function Chip({
  children,
  variant = "neutral",
  className = "",
}: ChipProps) {
  const variantStyles = {
    aqua: "border-[#02B3D2]/35 bg-[#02B3D2]/12 text-[#8CEBFF]",
    amber: "border-[#F5A524]/40 bg-[#F5A524]/12 text-[#FFD38A]",
    neutral: "border-white/15 bg-white/[0.06] text-[#C9D1E2]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
