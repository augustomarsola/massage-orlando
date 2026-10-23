import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { site } from "@/components/site";
import "./globals.css";

const cinzel = localFont({
  src: "./fonts/Cinzel-latin.woff2",
  variable: "--font-display",
  weight: "500 600",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const montserrat = localFont({
  src: "./fonts/Montserrat-latin.woff2",
  variable: "--font-body",
  weight: "300 600",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Massage in Orlando | Lunelle Spa",
    template: "%s | Lunelle Spa",
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: {
    icon: "/lunelle-symbol.svg",
    apple: "/lunelle-symbol.svg",
  },
  openGraph: {
    title: "Massage in Orlando | Lunelle Spa",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/capture-2026-10-18/lunelle-preparing-room-hq.webp",
        width: 2048,
        height: 1536,
        alt: "Lidiane preparing the massage table at Lunelle Spa in Orlando",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage in Orlando | Lunelle Spa",
    description: site.description,
    images: ["/images/capture-2026-10-18/lunelle-preparing-room-hq.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${montserrat.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
