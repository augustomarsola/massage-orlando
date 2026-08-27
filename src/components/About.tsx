import Image from "next/image";
import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-panel">
        <div className="about-mark" aria-hidden="true">
          <Image src="/lunelle-symbol.svg" alt="" width={320} height={320} />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Meet your massage therapist</p>
          <h2 className="display">Thoughtful care from the first question to the final minute.</h2>
          <p>
            Lidiane offers one-on-one massage and bodywork in a calm Orlando
            setting. Each visit begins with a brief conversation about how you
            feel, what you want from the session, and the pressure that feels
            right for you.
          </p>
          <p className="about-note">
            Communication is available in English and Portuguese. If you are
            unsure what to select in Booksy, send a text before booking.
          </p>
          <TrackedLink
            href={site.smsHref}
            className="text-link"
            eventName="cta_sms_clicked"
            eventParams={{ placement: "about" }}
          >
            Ask Lidiane <span aria-hidden="true">→</span>
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
