import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

const steps = [
  {
    number: "01",
    title: "Choose a starting point",
    copy: "Select the session that is closest to what you need. It does not have to be perfect.",
  },
  {
    number: "02",
    title: "Share how you feel",
    copy: "At the beginning, talk through comfort, pressure, priorities, and any relevant limitations.",
  },
  {
    number: "03",
    title: "Receive personalized care",
    copy: "Your session is paced and adjusted around your feedback rather than a one-size-fits-all routine.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section">
      <div className="container process-grid">
        <div>
          <p className="eyebrow">What to expect</p>
          <h2 className="section-title display">Booking should feel easy, too.</h2>
          <p className="section-intro">
            Book directly online, or contact Lidiane if two services sound similar.
          </p>
          <div className="button-row process-actions">
            <TrackedLink
              href={site.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              eventName="cta_booksy_clicked"
              eventParams={{ placement: "process" }}
            >
              Open Booksy <span aria-hidden="true">↗</span>
            </TrackedLink>
          </div>
        </div>
        <div className="process-list">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
