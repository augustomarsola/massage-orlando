import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

const steps = [
  {
    number: "01",
    title: "Choose your service",
    copy: "Browse the menu and select your massage.",
  },
  {
    number: "02",
    title: "Pick a time",
    copy: "View available appointments on Booksy.",
  },
  {
    number: "03",
    title: "Confirm your booking",
    copy: "Follow the steps on Booksy to confirm your appointment.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section">
      <div className="container process-grid">
        <div>
          <h2 className="section-title display">Book in a few simple steps.</h2>
          <div className="button-row process-actions">
            <TrackedLink
              href={site.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              eventName="cta_booksy_clicked"
              eventParams={{ placement: "process" }}
            >
              Book Now <span aria-hidden="true">↗</span>
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
