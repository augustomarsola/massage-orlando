import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

const visitDetails = [
  { title: "Your comfort", copy: "Let us know what feels comfortable during your massage." },
  { title: "Personal attention", copy: "Your selected service, with care focused on you." },
  { title: "A welcoming space", copy: "A calm setting for a break from your busy day." },
] as const;

export function YourVisit() {
  return (
    // Retain the old anchor so existing #first-visit links still reach this section.
    <section id="first-visit" className="section your-visit">
      <div className="container visit-grid">
        <div className="visit-copy">
          <p className="eyebrow eyebrow-light">Your Visit</p>
          <h2 className="display">Comfort comes first.</h2>
          <p className="visit-intro">
            At Lunelle Spa, your visit is time for you. Settle into a calm space
            and enjoy a massage with personal attention.
          </p>
          <TrackedLink
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-cream"
            eventName="cta_booksy_clicked"
            eventParams={{ placement: "your_visit" }}
          >
            Book Now <span aria-hidden="true">↗</span>
          </TrackedLink>
        </div>
        <div className="visit-details">
          {visitDetails.map((detail) => (
            <article className="visit-detail" key={detail.title}>
              <h3>{detail.title}</h3>
              <p>{detail.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
