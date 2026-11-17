import Link from "next/link";
import type { HeaderPlaceholderData } from "@/data/types";

interface SiteHeaderProps {
  data: HeaderPlaceholderData;
}

export function SiteHeader({ data }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-[#05070F]/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 lg:px-10">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-white"
          dir="ltr"
        >
          {data.logoText}
        </Link>

        <nav
          aria-label="التنقل الرئيسي"
          className="hidden items-center gap-6 lg:flex"
        >
          {data.menu.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-[#C9D1E2] transition-colors hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="#"
            className="hidden rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-[#DDE4F2] transition-colors hover:bg-white/10 sm:inline-flex"
          >
            {data.loginLabel}
          </Link>
          <Link
            href="#"
            className="rounded-full px-4 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, var(--btn-from, #025BCF), var(--btn-to, #0091BD))",
            }}
          >
            {data.ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
