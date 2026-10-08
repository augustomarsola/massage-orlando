import Image from "next/image";
import Link from "next/link";
import { site } from "./site";
import { TrackedLink } from "./TrackedLink";
import { ContactLink } from "./ContactLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <Image src="/lunelle-symbol.svg" alt="" width={58} height={58} />
            <span>
              <strong>Lunelle Spa</strong>
              <span>Massage &amp; Wellness · Orlando</span>
            </span>
          </Link>
          <p className="footer-description">
            Massage, lymphatic drainage, and body sculpting in Orlando.
            Personal care in a calm, welcoming space.
          </p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#first-visit">Your Visit</Link></li>
            <li><Link href="/#packages">Packages</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#location">Location</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Book &amp; contact</h3>
          <ul>
            <li>
              <TrackedLink
                href={site.booksy}
                target="_blank"
                rel="noopener noreferrer"
                eventName="cta_booksy_clicked"
                eventParams={{ placement: "footer" }}
              >
                Book Now ↗
              </TrackedLink>
            </li>
            <li>
              <ContactLink
                placement="footer"
                desktopLabel="Contact Us"
              >
                Text Us
              </ContactLink>
            </li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Lunelle Spa. All rights reserved.</span>
        <span>{site.addressShort}</span>
      </div>
    </footer>
  );
}
