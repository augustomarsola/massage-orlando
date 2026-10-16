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
        url: "/spa_bg.png",
        width: 1536,
        height: 1024,
        alt: "Massage room illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massage in Orlando | Lunelle Spa",
    description: site.description,
    images: ["/spa_bg.png"],
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
