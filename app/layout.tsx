import type { Metadata } from "next";
import { Readex_Pro, Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const readexPro = Readex_Pro({
  variable: "--font-readex",
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "أعمالنا | UP TO MEDIA",
  description: "دراسات حالة تفاعلية لمشاريع UP TO MEDIA الرقمية.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${readexPro.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#05070F] font-sans text-white selection:bg-[#02B3D2]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
