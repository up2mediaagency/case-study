import Link from "next/link";
import type { FooterPlaceholderData } from "@/data/types";

interface SiteFooterProps {
  data: FooterPlaceholderData;
}

export function SiteFooter({ data }: SiteFooterProps) {
  return (
    <footer className="bg-[#081C30] px-5 py-12 text-[#C9D1E2] lg:rounded-t-[45px] lg:px-[144px] lg:py-16">
      <div className="mx-auto max-w-[1152px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-extrabold text-white" dir="ltr">
              {data.brandName}
            </span>
            <p className="text-sm leading-relaxed text-[#AAB3C5]">
              {data.brandDescription}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-base font-bold text-white">
              {data.contactTitle}
            </h3>
            <a
              href={`mailto:${data.email}`}
              className="text-start text-sm text-[#AAB3C5] hover:text-white"
            >
              <bdi dir="ltr">{data.email}</bdi>
            </a>
            {data.phones.map((phone) => (
              <p key={phone.country} className="text-start text-sm text-[#AAB3C5]">
                <span>{phone.country}: </span>
                <bdi dir="ltr">{phone.number}</bdi>
              </p>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white">
              {data.servicesTitle}
            </h3>
            <ul className="space-y-2 text-sm text-[#AAB3C5]">
              {data.services.map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white">
              {data.quickLinksTitle}
            </h3>
            <ul className="space-y-2 text-sm text-[#AAB3C5]">
              {data.quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#8E98AE]">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}
