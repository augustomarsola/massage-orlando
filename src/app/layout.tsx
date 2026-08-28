import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { site } from "@/components/site";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Therapeutic Massage in Orlando | Lunelle Spa",
    template: "%s | Lunelle Spa",
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: {
    icon: "/lunelle-symbol.svg",
    apple: "/lunelle-symbol.svg",
  },
  openGraph: {
    title: "Therapeutic Massage in Orlando | Lunelle Spa",
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
        alt: "A calm massage room at Lunelle Spa in Orlando",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapeutic Massage in Orlando | Lunelle Spa",
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
