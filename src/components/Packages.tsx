import { packages, site } from "./site";
import { TrackedLink } from "./TrackedLink";

export function PackagesSection() {
  return (
    <section id="packages" className="section packages-section">
      <div className="container packages-inner">
        <p className="eyebrow eyebrow-light">For consistent care</p>
        <h2 className="section-title display">Packages that reward a planned series.</h2>
        <p className="section-intro">
          These prepaid options are for clients who already know they want a
          sequence of lymphatic or post-op sessions. Individual visits remain available.
        </p>

        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.title}>
              <h3>{item.title}</h3>
              <div className="package-option">
                <div>
                  <small>5 sessions</small>
                  <strong>{item.five}</strong>
                </div>
                <span className="package-saving">{item.fiveSaving}</span>
              </div>
              <div className="package-option featured">
                <div>
                  <small>10 sessions</small>
                  <strong>{item.ten}</strong>
                </div>
                <span className="package-saving">{item.tenSaving}</span>
              </div>
              <div className="package-actions">
                <TrackedLink
                  href={site.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  eventName="package_interest_clicked"
                  eventParams={{ placement: "package_card", package: item.title }}
                >
                  View in Booksy <span aria-hidden="true">↗</span>
                </TrackedLink>
              </div>
            </article>
          ))}
        </div>
        <p className="package-note">
          Packages are prepaid and intended for one client. Ask before purchase
          if you are unsure which series fits your needs. Post-op services require
          clearance from your healthcare provider and do not replace medical care.
        </p>
      </div>
    </section>
  );
}
