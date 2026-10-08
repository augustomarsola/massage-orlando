import { AboutSection } from "./About";
import { ContactSection } from "./Contact";
import { YourVisit } from "./YourVisit";
import { Hero } from "./Hero";
import { PackagesSection } from "./Packages";
import { ReviewsFaq } from "./ReviewsFaq";
import { ServicesSection } from "./Services";

export function PageSections() {
  return (
    <>
      <Hero />
      <div className="trust-ribbon" aria-label="Lunelle Spa qualities">
        <div className="container trust-ribbon-inner">
          <span className="trust-item">Personalized Care</span>
          <span className="trust-item">English · <span lang="es">Español</span> · <span lang="pt">Português</span></span>
          <span className="trust-item">Online Booking</span>
        </div>
      </div>
      <ServicesSection />
      <YourVisit />
      <PackagesSection />
      <AboutSection />
      <ReviewsFaq />
      <ContactSection />
    </>
  );
}
