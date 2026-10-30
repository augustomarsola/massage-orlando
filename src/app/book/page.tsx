import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { ProcessSection } from "@/components/Process";
import { faqs, serviceFamilies, site } from "@/components/site";
import { TrackedLink } from "@/components/TrackedLink";
import { ContactLink } from "@/components/ContactLink";
import { BooksyReviews } from "@/components/BooksyReviews";
import { SkinCareServices } from "@/components/SkinCareServices";

const bookDescription =
  "Plan your visit to Lunelle Spa in Orlando. Explore massage and skin care, then view the current menu, prices, and available times on Booksy.";

export const metadata: Metadata = {
  title: "Book Massage & Skin Care in Orlando",
  description: bookDescription,
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book Massage & Skin Care in Orlando | Lunelle Spa",
    description: bookDescription,
    url: `${site.url}/book`,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/capture-2026-10-18/lunelle-room-prepared-v3.webp", width: 1177, height: 1337, alt: "The treatment room at Lunelle Spa in Orlando" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Massage & Skin Care in Orlando | Lunelle Spa",
    description: bookDescription,
    images: ["/images/capture-2026-10-18/lunelle-room-prepared-v3.webp"],
  },
};

export default function BookPage() {
  return (
    <div className="page-shell">
      <Header compact />
      <main>
        <section className="book-hero">
          <div className="container book-hero-layout">
            <div className="book-hero-inner">
              <p className="eyebrow eyebrow-light">Lunelle Spa · Orlando</p>
              <h1 className="display">Book your visit in Orlando.</h1>
              <p>
                Explore massage and facial skin care in a calm, welcoming space.
                View current services, prices, and available times on Booksy.
              </p>
              <div className="button-row">
                <TrackedLink
                  href={site.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-cream"
                  eventName="cta_booksy_clicked"
                  eventParams={{ placement: "book_hero" }}
                >
                  Book Now <span aria-hidden="true">↗</span>
                </TrackedLink>
                <ContactLink
                  className="button button-outline-light"
                  placement="book_hero"
                  desktopLabel="Contact Us"
                >
                  Text Us
                </ContactLink>
              </div>
              <p className="book-microcopy">
                Online booking through Booksy.<br />
                English · <span lang="es">Español</span> · <span lang="pt">Português</span>
              </p>
            </div>
            <figure className="book-room-photo">
              <Image
                src="/images/capture-2026-10-18/lunelle-room-prepared-v3.webp"
                alt="The real treatment room at Lunelle Spa in Orlando"
                fill
                priority
                fetchPriority="high"
                quality={85}
                sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 880px) 560px, (max-width: 1220px) calc(47.6vw - 20px), 560px"
              />
            </figure>
          </div>
        </section>

        <section className="section" id="choose">
          <div className="container">
            <div className="book-services-intro">
              <div>
                <h2 className="section-title display">Massage Services</h2>
                <p className="section-intro">
                  Relaxation, deep tissue, lymphatic drainage, and body sculpting.
                  Explore our services on Booksy.
                </p>
              </div>
              <figure className="book-treatment-photo">
                <Image src="/images/capture-2026-10-18/lunelle-massage-model-0354-hq.webp"
                  alt="A posed massage session with a model at Lunelle Spa" width={1536} height={1050}
                  quality={90} sizes="(max-width: 600px) calc(100vw - 32px), 250px" />
              </figure>
            </div>
            <div className="choice-grid">
              {serviceFamilies.map((service) => (
                <article className="choice-card" key={service.title}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-helper">{service.helper}</p>
                  {service.note && <p className="service-note">{service.note}</p>}
                  <TrackedLink
                    href={site.booksy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    eventName="cta_booksy_clicked"
                    eventParams={{ placement: "book_choice", service: service.trackingName }}
                  >
                    View Services <span aria-hidden="true">↗</span>
                  </TrackedLink>
                </article>
              ))}
            </div>
            <SkinCareServices placement="book_skin_care" presentation="booking" />
            <div className="service-contact">
              Questions about a service?{" "}
              <ContactLink placement="book_services_help" desktopLabel="Contact us">Text us</ContactLink>.
            </div>
          </div>
        </section>

        <ProcessSection />

        <section className="section book-proof">
          <div className="container process-grid">
            <div className="book-proof-heading">
              <h2 className="section-title display">Client Reviews</h2>
              <figure className="book-provider">
                <div className="book-provider-photo">
                  <Image src="/images/capture-2026-10-18/lidiane-about-retouched-v3.webp"
                    alt="Lidiane Fernandes at Lunelle Spa" fill quality={90}
                    sizes="(max-width: 600px) 140px, 280px" />
                </div>
                <figcaption><strong>Lidiane Fernandes</strong><span>Lunelle Spa · Orlando</span></figcaption>
              </figure>
            </div>
            <div className="book-proof-copy">
              <BooksyReviews placement="book_reviews" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container proof-faq-grid">
            <div>
              <h2 className="section-title display">Before You Book</h2>
            </div>
            <div className="faq-list">
              {faqs.slice(0, 4).map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        <section className="book-final">
          <div className="container">
            <h2 className="display">Make time for yourself.</h2>
            <p className="section-intro">View available appointments and book your next visit.</p>
            <div className="button-row">
              <TrackedLink
                href={site.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                eventName="cta_booksy_clicked"
                eventParams={{ placement: "book_final" }}
              >
                Book Now <span aria-hidden="true">↗</span>
              </TrackedLink>
              <ContactLink
                className="button button-outline"
                placement="book_final"
                desktopLabel="Contact Us"
              >
                Text Us
              </ContactLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
