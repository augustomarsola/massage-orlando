import Image from "next/image";
import { ContactLink } from "./ContactLink";

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-panel">
        <div className="about-mark">
          <Image
            src="/lidiane-fernandes.webp"
            alt="Lidiane Fernandes at Lunelle Spa in Orlando"
            fill
            sizes="(max-width: 860px) 100vw, 38vw"
            className="about-portrait"
          />
          <p className="about-photo-label">
            Lidiane Fernandes <span>Lunelle Spa</span>
          </p>
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
            Communication is available in English, Spanish, and Portuguese. If you
            are unsure what to select in Booksy, contact Lidiane before booking.
          </p>
          <ContactLink
            className="text-link"
            placement="about"
          >
            Ask Lidiane <span aria-hidden="true">→</span>
          </ContactLink>
        </div>
      </div>
    </section>
  );
}
