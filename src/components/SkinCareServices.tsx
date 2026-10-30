import Image from "next/image";
import { site, skinCareFamilies, type SkinCareOption } from "./site";
import { TrackedLink } from "./TrackedLink";

function ServiceDetails({ option, placement, grouped = false, showHelper = true }: {
  option: SkinCareOption; placement: string; grouped?: boolean; showHelper?: boolean;
}) {
  return (
    <>
      {grouped && <h4 className="skin-care-option-title">{option.label}</h4>}
      <p className="service-description">{option.description}</p>
      {showHelper && <p className="service-helper">{option.helper}</p>}
      {option.note && <p className="service-note">{option.note}</p>}
      <TrackedLink
        href={site.booksy}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link service-cta"
        aria-label={`View services on Booksy: ${option.title}`}
        eventName="cta_booksy_clicked"
        eventParams={{ placement, service: option.trackingName }}
      >
        View Services <span aria-hidden="true">↗</span>
      </TrackedLink>
    </>
  );
}

export function SkinCareServices({ placement, presentation = "home" }: {
  placement: string; presentation?: "home" | "booking";
}) {
  const booking = presentation === "booking";
  return (
    <section className="skin-care-services" id="skin-care" aria-labelledby="skin-care-heading">
      <div className={booking ? "book-services-intro" : "services-header"}>
        <div>
          <h2 className="section-title display" id="skin-care-heading">Facials &amp; Skin Care</h2>
          {booking && <p className="section-intro">Explore facial cleansing, care for blemish-prone skin, and microneedling options.</p>}
        </div>
        {booking ? (
          <figure className="book-treatment-photo">
            <Image src="/images/skin-care-2026-10-25/facials-section.webp"
              alt="Gentle facial cleansing with a cotton pad" width={1536} height={1024}
              quality={90} sizes="(max-width: 600px) calc(100vw - 32px), 250px" />
          </figure>
        ) : <p className="section-intro">Explore facial cleansing, care for blemish-prone skin, and microneedling options.</p>}
      </div>
      <div className={booking ? "choice-grid" : "service-list"}>
        {skinCareFamilies.map((family) => {
          const grouped = family.options.length > 1;
          return (
            <article className={booking ? `choice-card${grouped ? " skin-care-book-family" : ""}` : "service-row skin-care-family"}
              key={family.id} aria-labelledby={`skin-care-${family.id}`}>
              <span className="service-number" aria-hidden="true">{family.number}</span>
              <div className={booking ? "skin-care-card-copy" : "skin-care-family-copy"}>
                <h3 className="service-title" id={`skin-care-${family.id}`}>{family.title}</h3>
                {!grouped ? (
                  <ServiceDetails option={family.options[0]} placement={placement} showHelper={booking} />
                ) : <p className="service-description">Explore three options for your skin care goals.</p>}
              </div>
              {!booking && <>
                <p className="service-helper">{grouped ? "Texture · Fine lines · Acne scars" : family.options[0].helper}</p>
                <div className="service-thumb">
                  <Image src={family.id === "deep-cleansing" ? "/images/skin-care-2026-10-25/facials-section.webp" : family.image}
                    alt={family.imageAlt} fill quality={90} className="object-cover"
                    sizes="(max-width: 760px) calc(100vw - 32px), (max-width: 1020px) 180px, 220px" />
                </div>
              </>}
              {grouped && (
                <div className="skin-care-options">
                  {family.options.map((option) => (
                    <article className="skin-care-option" key={option.id} aria-label={option.title}>
                      <ServiceDetails option={option} placement={placement} grouped />
                    </article>
                  ))}
                  <p className="skin-care-shared-note">{family.note}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
