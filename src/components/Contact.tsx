import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

export function ContactSection() {
  return (
    <section id="location" className="section location-section">
      <div className="container location-grid">
        <div className="map-frame">
          <iframe
            title="Map to Lunelle Spa in Orlando"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="location-copy">
          <p className="eyebrow eyebrow-light">Visit Lunelle Spa</p>
          <h2 className="display">Your calm corner in Orlando.</h2>
          <div className="location-detail">
            <small>Address</small>
            <a href={site.mapsHref} target="_blank" rel="noopener noreferrer">
              5979 Vineland Rd, Suite 304<br />Orlando, FL 32819 ↗
            </a>
          </div>
          <div className="location-detail">
            <small>Hours</small>
            <p>Monday–Saturday · 9:00 AM–7:00 PM<br />Sunday · 10:00 AM–6:00 PM</p>
          </div>
          <div className="location-detail">
            <small>Contact</small>
            <TrackedLink
              href={site.phoneHref}
              eventName="cta_phone_clicked"
              eventParams={{ placement: "location" }}
            >
              {site.phoneDisplay}
            </TrackedLink>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="button-row location-actions">
            <TrackedLink
              href={site.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-cream"
              eventName="cta_booksy_clicked"
              eventParams={{ placement: "location" }}
            >
              View Availability <span aria-hidden="true">↗</span>
            </TrackedLink>
            <TrackedLink
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline-light"
              eventName="cta_whatsapp_clicked"
              eventParams={{ placement: "location" }}
            >
              WhatsApp
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
