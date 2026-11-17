"use client";

import { useState } from "react";
import Image from "next/image";

interface ScreenshotBoxProps {
  src: string;
  alt: string;
  label: string;
  available?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
}

export function ScreenshotBox({
  src,
  alt,
  label,
  available = true,
  sizes = "(max-width: 768px) 100vw, 1120px",
  className = "",
  imageClassName = "",
}: ScreenshotBoxProps) {
  const [failed, setFailed] = useState(false);

  if (available && !failed) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          onError={() => setFailed(true)}
          className={`object-cover object-top ${imageClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`glass flex h-full w-full flex-col items-center justify-center gap-2 rounded-none border-0 bg-[#0A0F2A]/70 p-4 text-center ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="h-8 w-8 rounded-full border border-white/15 bg-white/[0.06]" />
      <p className="text-sm font-bold text-[#DDE4F2]">{label}</p>
      <p className="text-xs text-[#8E98AE]" dir="ltr">
        {src.split("/").pop()}
      </p>
    </div>
  );
}
