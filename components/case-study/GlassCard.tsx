import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  variant?: "default" | "red" | "aqua";
  className?: string;
}

export function GlassCard({
  children,
  variant = "default",
  className = "",
}: GlassCardProps) {
  const variantClasses = {
    default: "glass",
    red: "border border-[#EE2D3D]/30 bg-[#EE2D3D]/[0.07] shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md",
    aqua: "border border-[#02B3D2]/40 bg-[#02B3D2]/[0.10] shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md",
  }[variant];

  return (
    <div className={`rounded-[24px] ${variantClasses} ${className}`}>
      {children}
    </div>
  );
}
