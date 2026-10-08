import type { Metadata } from "next";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";
import { ProcessSection } from "@/components/Process";
import { faqs, serviceFamilies, site } from "@/components/site";
import { TrackedLink } from "@/components/TrackedLink";
import { ContactLink } from "@/components/ContactLink";

export const metadata: Metadata = {
  title: "Book a Massage in Orlando",
  description:
    "Start with a customized 50-minute massage or compare relaxation, deep tissue, lymphatic and bodywork options at Lunelle Spa in Orlando.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <div className="page-shell">
      <Header compact />
      <main>
        <section className="book-hero">
          <div className="container book-hero-inner">
            <p className="eyebrow eyebrow-light">First visit at Lunelle</p>
            <h1 className="display">Not sure which massage to book? Start here.</h1>
            <p>
              Begin with a 50-minute Therapeutic Customized Massage for $105.
              We will adapt pressure and focus areas to your comfort, with
              optional complimentary aromatherapy.
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
                View Times on Booksy <span aria-hidden="true">↗</span>
              </TrackedLink>
              <ContactLink
                className="button button-outline-light"
                placement="book_hero"
                desktopLabel="Ask Lidiane"
              >
                Text Me for Guidance
              </ContactLink>
            </div>
            <p className="book-microcopy">
              English · <span lang="es">Español</span> · <span lang="pt">Português</span><br />
              Secure scheduling is completed on Booksy. Prices and availability
              shown there are the current source of truth.
            </p>
          </div>
        </section>

        <ProcessSection />

        <section className="section" id="choose">
          <div className="container">
            <p className="eyebrow">Choose by how you feel</p>
            <h2 className="section-title display">A clear starting point for every visit.</h2>
            <div className="choice-grid">
              {serviceFamilies.map((service) => (
                <article className="choice-card" key={service.title}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <TrackedLink
                    href={site.booksy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    eventName="cta_booksy_clicked"
                    eventParams={{ placement: "book_choice", service: service.title }}
                  >
                    Explore on Booksy <span aria-hidden="true">↗</span>
                  </TrackedLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section book-proof">
          <div className="container process-grid">
            <div className="book-proof-heading">
              <p className="eyebrow">Confirmed-client feedback</p>
              <h2 className="section-title display">Read current reviews where appointments are verified.</h2>
            </div>
            <div className="book-proof-copy">
              <p>
                Booksy displays feedback connected to confirmed appointments.
                Visit the profile to read the latest reviews before choosing a time.
              </p>
              <TrackedLink
                href={site.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                eventName="cta_booksy_clicked"
                eventParams={{ placement: "book_reviews" }}
              >
                Read Reviews on Booksy <span aria-hidden="true">↗</span>
              </TrackedLink>
            </div>
          </div>
        </section>

        <ContactSection />

        <section className="section">
          <div className="container proof-faq-grid">
            <div>
              <p className="eyebrow">Before you schedule</p>
              <h2 className="section-title display">Quick answers for your first visit.</h2>
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

        <section className="book-final">
          <div className="container">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="display">Choose a time that works for your body and your week.</h2>
            <div className="button-row">
              <TrackedLink
                href={site.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                eventName="cta_booksy_clicked"
                eventParams={{ placement: "book_final" }}
              >
                View Times on Booksy <span aria-hidden="true">↗</span>
              </TrackedLink>
              <ContactLink
                className="button button-outline"
                placement="book_final"
                desktopLabel="Ask Lidiane"
              >
                Text for Guidance
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
