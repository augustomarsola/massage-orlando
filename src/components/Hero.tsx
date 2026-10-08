import Image from "next/image";
import { site } from "./site";
import { TrackedLink } from "./TrackedLink";
import { ContactLink } from "./ContactLink";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Lunelle Spa · Orlando</p>
          <h1 className="display">
            Massage in Orlando. Relax and recharge.
          </h1>
          <p className="hero-lede">
            Take a break from stress and muscle tension. Explore our massage,
            lymphatic drainage, and body sculpting services in a calm, welcoming space.
          </p>
          <div className="button-row">
            <TrackedLink
              href={site.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              eventName="cta_booksy_clicked"
              eventParams={{ placement: "hero" }}
            >
              Book Now <span aria-hidden="true">↗</span>
            </TrackedLink>
            <ContactLink
              className="button button-outline"
              placement="hero"
              desktopLabel="Contact Us"
            >
              Text Us
            </ContactLink>
          </div>
          <p className="booking-support">Online booking through Booksy.</p>
          <p className="hero-trust">
            English · <span lang="es">Español</span> · <span lang="pt">Português</span>
            <br />5979 Vineland Rd · By appointment
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/spa_bg.png"
              alt="Massage room illustration"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="hero-orbit" aria-hidden="true">
            Time<br />for you
          </div>
        </div>
      </div>
    </section>
  );
}
