"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrowserFrame } from "./BrowserFrame";
import { ShineBorder } from "@/components/ui/shine-border";

export interface FullscreenViewerItem {
  title: string;
  src: string;
  alt: string;
  available: boolean;
  isMobile?: boolean;
}

interface FullscreenViewerProps {
  item: FullscreenViewerItem | null;
  onClose: () => void;
}

export function FullscreenViewer({ item, onClose }: FullscreenViewerProps) {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!item) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 10);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [item, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070F]/[0.92] p-3 backdrop-blur-md sm:p-6"
        >
          {/* Top bar: title on right (start), close X on left (end) */}
          <div className="mb-3 flex w-full max-w-[1440px] items-center justify-between gap-4 px-1">
            <h2 className="text-start text-base font-bold text-white sm:text-lg">
              {item.title}
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="إغلاق العرض الكامل"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M5 5l10 10M15 5L5 15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Frame container */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96 }
            }
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`relative w-full ${
              item.isMobile ? "max-w-[390px]" : "max-w-[1440px]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {item.isMobile ? (
              <div className="relative rounded-[36px] border-2 border-white/40 bg-[#0A0A0A] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
                <ShineBorder
                  shineColor={["#02B3D2", "#025BCF"]}
                  borderWidth={1}
                  duration={12}
                  className="z-20"
                />
                <div
                  ref={scrollAreaRef}
                  tabIndex={0}
                  className="max-h-[82vh] overflow-y-auto overflow-x-hidden rounded-[26px] bg-black focus:outline-none"
                >
                  {item.available ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={390}
                      height={2292}
                      unoptimized
                      className="h-auto w-full object-top"
                    />
                  ) : (
                    <div className="flex min-h-[420px] flex-col items-center justify-center gap-2 p-6 text-center">
                      <p className="text-base font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#8E98AE]">
                        الصورة غير متوفرة حالياً
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <BrowserFrame
                showTopGlow
                overlay={
                  <ShineBorder
                    shineColor={["#02B3D2", "#025BCF"]}
                    borderWidth={1}
                    duration={12}
                    className="z-30"
                  />
                }
                className="relative w-full"
              >
                <div
                  ref={scrollAreaRef}
                  tabIndex={0}
                  className="max-h-[82vh] overflow-y-auto overflow-x-hidden bg-[#070B19] focus:outline-none"
                >
                  {item.available ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1440}
                      height={2600}
                      unoptimized
                      className="h-auto w-full object-top"
                    />
                  ) : (
                    <div className="flex min-h-[420px] flex-col items-center justify-center gap-2 p-6 text-center">
                      <p className="text-base font-bold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#8E98AE]">
                        الصورة غير متوفرة حالياً
                      </p>
                    </div>
                  )}
                </div>
              </BrowserFrame>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
