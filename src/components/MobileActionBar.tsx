import { site } from "./site";
import { TrackedLink } from "./TrackedLink";
import { ContactLink } from "./ContactLink";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick booking actions">
      <TrackedLink
        href={site.booksy}
        target="_blank"
        rel="noopener noreferrer"
        eventName="cta_booksy_clicked"
        eventParams={{ placement: "mobile_action_bar" }}
      >
        Book Now
      </TrackedLink>
      <ContactLink
        placement="mobile_action_bar"
        desktopLabel="Contact Us"
      >
        Text Us
      </ContactLink>
    </div>
  );
}
