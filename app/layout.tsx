import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { Navbar } from "@/components/layout/navbar";
import { SITE_NAME } from "@/lib/constants";

import "./globals.css";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap"
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primenora.com"),
  title: {
    default: `${SITE_NAME} | Premium Foodstuff & Essential Goods`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Prime Nora Global Services Limited supplies premium foodstuff and everyday essentials across Nigeria with trusted service, elegant presentation, and WhatsApp ordering convenience.",
  keywords: [
    "Prime Nora Global Services Limited",
    "Nigeria foodstuff supplier",
    "premium household goods",
    "WhatsApp ordering",
    "ecommerce Nigeria"
  ],
  openGraph: {
    title: `${SITE_NAME} | Premium Foodstuff & Essential Goods`,
    description:
      "Trusted quality goods for every home. Browse premium foodstuff and essential products with a professional ordering experience.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable}`}>
        <div className="relative min-h-screen overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}
