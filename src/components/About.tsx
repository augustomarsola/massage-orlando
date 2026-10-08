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
          <p className="eyebrow">About Lunelle Spa</p>
          <h2 className="display">Personal care. A welcoming space.</h2>
          <p>
            We believe a good massage starts with care and comfort. Every visit
            includes personal attention and a chance to share your pressure preferences.
          </p>
          <p className="about-note">
            You can speak with us in English, Spanish, or Portuguese.
          </p>
          <ContactLink
            className="text-link"
            placement="about"
            desktopLabel={<>Contact Us <span aria-hidden="true">→</span></>}
          >
            Text Us <span aria-hidden="true">→</span>
          </ContactLink>
        </div>
      </div>
    </section>
  );
}
