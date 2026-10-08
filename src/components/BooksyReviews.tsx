import { booksyReviewSummary, site } from "./site";
import { TrackedLink } from "./TrackedLink";

/** Verified public snapshot; the button always opens the current Booksy reviews. */
export function BooksyReviews({ placement }: { placement: string }) {
  return (
    <>
      <p className="review-rating" aria-label={`${booksyReviewSummary.rating} out of 5 on Booksy`}>
        <strong>{booksyReviewSummary.rating}</strong><span> / 5 on Booksy</span>
      </p>
      <p>Read what clients have to say about their visits on Booksy.</p>
      <TrackedLink
        href={site.booksyReviews}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
        eventName="cta_booksy_clicked"
        eventParams={{ placement }}
      >
        Read Reviews <span aria-hidden="true">↗</span>
      </TrackedLink>
    </>
  );
}
