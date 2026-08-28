import { faqs, site } from "./site";
import { TrackedLink } from "./TrackedLink";

export function ReviewsFaq() {
  return (
    <section className="section">
      <div className="container proof-faq-grid">
        <aside className="proof-card">
          <p className="eyebrow">Confirmed-client feedback</p>
          <div className="proof-score proof-score-booksy">Booksy</div>
          <div className="proof-stars" aria-hidden="true">— ◇ —</div>
          <p>
            Visit the Lunelle profile to read the latest feedback connected to
            confirmed appointments.
          </p>
          <TrackedLink
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            eventName="cta_booksy_clicked"
            eventParams={{ placement: "reviews" }}
          >
            Read current reviews <span aria-hidden="true">↗</span>
          </TrackedLink>
        </aside>
        <div>
          <p className="eyebrow">Common questions</p>
          <h2 className="section-title display">A little clarity before you book.</h2>
          <div className="faq-list faq-list-spaced">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
