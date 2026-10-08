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
          <h2 className="display">
            Massage <span className="location-title-phrase">in Orlando,</span>{" "}
            <span className="location-title-phrase">on Vineland</span> Road.
          </h2>
          <p className="location-intro">Appointments available throughout the week. View available times on Booksy.</p>
          <div className="location-detail">
            <small>Address</small>
            <a href={site.mapsHref} target="_blank" rel="noopener noreferrer">
              5979 Vineland Rd, Suite 304<br />Orlando, FL 32819 ↗
            </a>
          </div>
          <div className="location-detail">
            <small>Hours — By appointment</small>
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
              Book Now <span aria-hidden="true">↗</span>
            </TrackedLink>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline-light"
            >
              Get Directions <span aria-hidden="true">↗</span>
            </a>
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
