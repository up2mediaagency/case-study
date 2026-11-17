"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number;
  duration?: number;
  delay?: number;
  shineColor?: string | string[];
  pauseWhenOffscreen?: boolean;
}

export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  delay = 0,
  shineColor = "#000000",
  pauseWhenOffscreen = true,
  className,
  style,
  ...props
}: ShineBorderProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState(true);

  React.useEffect(() => {
    if (!pauseWhenOffscreen || typeof IntersectionObserver === "undefined") {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsInView(entry.isIntersecting);
        }
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [pauseWhenOffscreen]);

  return (
    <div
      ref={ref}
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          animationDelay: delay ? `${delay}s` : undefined,
          animationPlayState: pauseWhenOffscreen
            ? isInView
              ? "running"
              : "paused"
            : undefined,
          backgroundImage: `radial-gradient(transparent,transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          },transparent,transparent)`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "animate-shine pointer-events-none absolute inset-0 z-0 size-full rounded-[inherit] will-change-[background-position]",
        className,
      )}
      {...props}
    />
  );
}
