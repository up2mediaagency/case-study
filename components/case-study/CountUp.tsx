"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  value: string;
  className?: string;
}

function parseNumericToken(raw: string) {
  const match = raw.match(/^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) {
    return null;
  }
  const [, prefix, numStr, suffix] = match;
  const hasComma = numStr.includes(",");
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const target = parseFloat(numStr.replace(/,/g, ""));
  return { prefix, target, suffix, hasComma, decimals };
}

function formatNumber(val: number, hasComma: boolean, decimals: number) {
  const fixed = val.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart !== undefined ? `${withCommas}.${decPart}` : withCommas;
}

export function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const parsed = useMemo(() => parseNumericToken(value), [value]);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!parsed || shouldReduceMotion || !isInView) {
      return;
    }

    const duration = 1100;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = Math.max(0, now - startTime);
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.target * eased;
      setDisplay(
        `${parsed.prefix}${formatNumber(current, parsed.hasComma, parsed.decimals)}${parsed.suffix}`,
      );
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, shouldReduceMotion, value, parsed]);

  return (
    <span ref={ref} className={className}>
      {shouldReduceMotion ? value : display}
    </span>
  );
}
