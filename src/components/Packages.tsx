import { packages, site } from "./site";
import { TrackedLink } from "./TrackedLink";

export function PackagesSection() {
  return (
    <section id="packages" className="section packages-section">
      <div className="container packages-inner">
        <h2 className="section-title display">Massage Packages</h2>
        <p className="section-intro">
          Plan your next visits and save with 5- or 10-session lymphatic and post-op
          packages. Prefer a single appointment? Individual sessions are available.
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
                  View Packages <span aria-hidden="true">↗</span>
                </TrackedLink>
              </div>
            </article>
          ))}
        </div>
        <p className="package-note">
          Packages are prepaid for one client. View package details on Booksy.
          Post-op services require clearance from your healthcare provider and
          do not replace medical care.
        </p>
      </div>
    </section>
  );
}
