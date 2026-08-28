import Image from "next/image";
import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Massage &amp; bodywork in Orlando</p>
          <h1 className="display">
            Therapeutic massage, personalized to how you feel today.
          </h1>
          <p className="hero-lede">
            Relaxation, focused muscle work, lymphatic bodywork, and calm
            personal care in a welcoming Orlando studio.
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
              Book on Booksy <span aria-hidden="true">↗</span>
            </TrackedLink>
            <TrackedLink
              href={site.smsHref}
              className="button button-outline"
              eventName="cta_sms_clicked"
              eventParams={{ placement: "hero" }}
            >
              Text Us for Guidance
            </TrackedLink>
          </div>
          <p className="hero-trust">
            English + Português · 5979 Vineland Rd · Open 7 days by appointment
          </p>
          <p className="hero-transition">Lunelle Spa was formerly Luxor Day Spa Orlando.</p>
        </div>

        <div className="hero-visual" aria-label="A calm treatment room prepared for a massage">
          <div className="hero-image-frame">
            <Image
              src="/spa_bg.png"
              alt="Calm massage room prepared for a personalized session"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="hero-orbit" aria-hidden="true">
            Care<br />at your<br />pace
          </div>
          <span className="hero-scroll-note" aria-hidden="true">Explore Lunelle —</span>
        </div>
      </div>
    </section>
  );
}
