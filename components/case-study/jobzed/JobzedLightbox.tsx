"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export interface JobzedLightboxItem {
  title: string;
  src: string;
  alt: string;
}

interface JobzedLightboxProps {
  item: JobzedLightboxItem | null;
  onClose: () => void;
}

export function JobzedLightbox({ item, onClose }: JobzedLightboxProps) {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!item) return;

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

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#162038]/80 p-3 backdrop-blur-md sm:p-6"
        >
          <div className="mb-3 flex w-full max-w-[1200px] items-center justify-between gap-4 px-1">
            <h3 className="text-start text-base font-semibold text-white sm:text-lg">
              {item.title}
            </h3>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="إغلاق العرض الكامل"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[1200px] rounded-[24px] bg-white p-3 shadow-[0_24px_60px_rgba(22,32,56,0.35)] lg:rounded-[28px] lg:p-4"
          >
            <div className="mb-2.5 flex items-center gap-1.5 px-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F1]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F1]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F1]" />
            </div>
            <div
              tabIndex={0}
              className="max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-[16px] border border-[#E2E8F1] bg-[#F4F6F1] focus:outline-none"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1440}
                height={2400}
                unoptimized
                className="h-auto w-full object-top"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
