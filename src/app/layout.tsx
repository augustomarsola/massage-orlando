import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Luxor Day Spa Orlando | Luxury Massage & Aesthetic Treatments in Orlando",
  description:
    "Professional massage, hair removal, and body treatments by Lidiane Fernandes in Orlando. Luxury, care, and wellness.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-beige/40">{children}</body>
    </html>
  );
}
