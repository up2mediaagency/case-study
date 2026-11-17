import type { CSSProperties, ReactNode } from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";

export interface GlassCardShine {
  colors: string[];
  borderWidth?: number;
  duration?: number;
  delay?: number;
}

interface GlassCardProps {
  children: ReactNode;
  variant?: "default" | "red" | "aqua" | "none";
  shine?: GlassCardShine;
  style?: CSSProperties;
  className?: string;
}

export function GlassCard({
  children,
  variant = "default",
  shine,
  style,
  className = "",
}: GlassCardProps) {
  const variantClasses = {
    default: "glass",
    red: "border border-[#EE2D3D]/30 bg-[#EE2D3D]/[0.07] shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md",
    aqua: "border border-[#02B3D2]/40 bg-[#02B3D2]/[0.10] shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md",
    none: "",
  }[variant];

  return (
    <div
      style={style}
      className={cn("relative rounded-[24px]", variantClasses, className)}
    >
      {shine && (
        <ShineBorder
          shineColor={shine.colors}
          borderWidth={shine.borderWidth ?? 1.5}
          duration={shine.duration ?? 12}
          delay={shine.delay ?? 0}
        />
      )}
      {children}
    </div>
  );
}
