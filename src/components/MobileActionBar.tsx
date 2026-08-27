import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

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
        Book
      </TrackedLink>
      <TrackedLink
        href={site.smsHref}
        eventName="cta_sms_clicked"
        eventParams={{ placement: "mobile_action_bar" }}
      >
        Text
      </TrackedLink>
    </div>
  );
}
