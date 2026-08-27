import Image from "next/image";
import { serviceFamilies, site } from "./site";
import { TrackedLink } from "./TrackedLink";

export function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-header">
          <div>
            <p className="eyebrow">Choose by what you need</p>
            <h2 className="section-title display">Four clear paths to feeling cared for.</h2>
          </div>
          <p className="section-intro">
            You do not need to know the perfect technique before booking. Start
            with the outcome you want, then Lidiane can adapt the session.
          </p>
        </div>

        <div className="service-list">
          {serviceFamilies.map((service) => (
            <article className="service-row" key={service.title}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
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
              <TrackedLink
                href={site.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link service-cta"
                eventName="cta_booksy_clicked"
                eventParams={{ placement: "service_family", service: service.title }}
              >
                See sessions <span aria-hidden="true">↗</span>
              </TrackedLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
