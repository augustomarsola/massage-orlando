import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="section missing-page">
      <div className="container missing-page-inner">
        <Image src="/lunelle-symbol.svg" alt="Lunelle Spa" width={72} height={72} />
        <p className="eyebrow">Lunelle Spa · Orlando</p>
        <h1 className="display section-title">Page not found</h1>
        <p>The page you’re looking for may have moved. You can return home or plan your visit.</p>
        <div className="button-row">
          <Link href="/" className="button button-primary">Back to Home</Link>
          <Link href="/book" className="button button-outline">Plan Your Visit</Link>
        </div>
      </div>
    </main>
  );
}
