import { site } from "./site";
import { TrackedLink } from "./TrackedLink";
import { ContactLink } from "./ContactLink";
import { TrackedSection } from "./TrackedSection";

export function FirstVisit() {
  return (
    <TrackedSection
      id="first-visit"
      className="section first-visit"
      eventName="offer_viewed"
      eventParams={{ offer: "new_client_105" }}
    >
      <div className="container offer-grid">
        <div className="offer-price" aria-label="105 dollars for 50 minutes">
          <strong>$105</strong>
          <span>50 minutes · first visit</span>
        </div>
        <div className="offer-copy">
          <p className="eyebrow eyebrow-light">A simple place to start</p>
          <h2 className="display">Your first visit, without the guesswork.</h2>
          <p>
            Book a New Client Therapeutic Customized Massage when you want a
            balanced first session without having to choose every technique in
            advance. Optional aromatherapy is included at no extra charge.
          </p>
          <div className="offer-points" aria-label="First visit details">
            <div className="offer-point">A brief needs and comfort check-in</div>
            <div className="offer-point">Pressure adjusted during the session</div>
            <div className="offer-point">Aromatherapy is always optional</div>
          </div>
          <div className="button-row">
            <TrackedLink
              href={site.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-cream"
              eventName="cta_booksy_clicked"
              eventParams={{ placement: "first_visit", offer: "new_client_105" }}
            >
              Book Your First Visit <span aria-hidden="true">↗</span>
            </TrackedLink>
            <ContactLink
              className="button button-outline-light"
              placement="first_visit"
            >
              Ask a Question
            </ContactLink>
          </div>
        </div>
      </div>
    </TrackedSection>
  );
}
