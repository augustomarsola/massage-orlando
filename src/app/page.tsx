import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { PageSections } from "@/components/PageSections";
import { serviceFamilies, site } from "@/components/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  image: `${site.url}/lidiane-fernandes.webp`,
  logo: `${site.url}/lunelle-symbol.svg`,
  telephone: "+1-407-868-6023",
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5979 Vineland Rd Suite 304",
    addressLocality: "Orlando",
    addressRegion: "FL",
    postalCode: "32819",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.48342,
    longitude: -81.46206,
  },
  knowsLanguage: site.languages,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [site.booksy],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Massage Services",
    itemListElement: serviceFamilies.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: "Orlando, Florida",
      },
    })),
  },
};

export default function Home() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <PageSections />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
