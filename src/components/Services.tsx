import Image from "next/image";
import { serviceFamilies, site } from "./site";
import { TrackedLink } from "./TrackedLink";
import { ContactLink } from "./ContactLink";

export function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-header">
          <div>
            <h2 className="section-title display">Massage Services</h2>
          </div>
          <p className="section-intro">
            Explore relaxation, deep tissue, lymphatic drainage, and body sculpting.
            View the full menu, prices, and available times on Booksy.
          </p>
        </div>

        <div className="service-list">
          {serviceFamilies.map((service) => (
            <article className="service-row" key={service.title}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                {service.note && <p className="service-note">{service.note}</p>}
                <TrackedLink
                  href={site.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link service-cta"
                  eventName="cta_booksy_clicked"
                  eventParams={{ placement: "service_family", service: service.trackingName }}
                >
                  View Services <span aria-hidden="true">↗</span>
                </TrackedLink>
              </div>
              <p className="service-helper">{service.helper}</p>
              <div className="service-thumb">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 190px"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
        <div className="service-contact">
          Questions about a service?{" "}
          <ContactLink placement="services_help" desktopLabel="Contact us">Text us</ContactLink>.
        </div>
      </div>
    </section>
  );
}
