import { AboutSection } from "./About";
import { ContactSection } from "./Contact";
import { Hero } from "./Hero";
import { ServicesSection } from "./Services";

export function PageSections() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
