import { skinCareService } from "./site";
import { TrackedLink } from "./TrackedLink";

export function SkinCareServices({ placement }: { placement: string }) {
  return (
    <section className="skin-care-services" id="skin-care" aria-labelledby="skin-care-heading">
      <h2 className="skin-care-heading display" id="skin-care-heading">Skin Care</h2>
      <article className="skin-care-service">
        <div>
          <h3 className="service-title">{skinCareService.title}</h3>
          <p className="service-description">{skinCareService.description}</p>
          <p className="service-note">{skinCareService.note}</p>
        </div>
        <div className="skin-care-booking">
          <p>View service details, prices, and available times on Booksy.</p>
          <TrackedLink
            href={skinCareService.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
            aria-label="Book Microneedling on Booksy"
            eventName="cta_booksy_clicked"
            eventParams={{ placement, service: skinCareService.trackingName }}
          >
            Book on Booksy <span aria-hidden="true">↗</span>
          </TrackedLink>
        </div>
      </article>
    </section>
  );
}
