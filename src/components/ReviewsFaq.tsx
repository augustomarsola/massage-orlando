import { faqs } from "./site";
import { BooksyReviews } from "./BooksyReviews";

export function ReviewsFaq() {
  return (
    <section className="section">
      <div className="container proof-faq-grid">
        <aside className="proof-card">
          <h2 className="review-title display">Client Reviews</h2>
          <BooksyReviews placement="reviews" />
        </aside>
        <div>
          <h2 className="section-title display">Frequently Asked Questions</h2>
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
