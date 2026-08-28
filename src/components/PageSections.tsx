import { AboutSection } from "./About";
import { ContactSection } from "./Contact";
import { FirstVisit } from "./FirstVisit";
import { Hero } from "./Hero";
import { PackagesSection } from "./Packages";
import { ProcessSection } from "./Process";
import { ReviewsFaq } from "./ReviewsFaq";
import { ServicesSection } from "./Services";

export function PageSections() {
  return (
    <>
      <Hero />
      <div className="trust-ribbon" aria-label="Lunelle Spa qualities">
        <div className="container trust-ribbon-inner">
          <span className="trust-item">Personalized pressure</span>
          <span className="trust-item">English &amp; Portuguese</span>
          <span className="trust-item">Easy online booking</span>
        </div>
      </div>
      <FirstVisit />
      <ServicesSection />
      <PackagesSection />
      <ProcessSection />
      <AboutSection />
      <ReviewsFaq />
      <ContactSection />
    </>
  );
}
