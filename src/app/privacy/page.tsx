import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/components/site";

export const metadata: Metadata = {
  title: "Website Privacy Information",
  description: "How Lunelle Spa uses website analytics and optional interaction recording.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <Header compact />
      <main className="section">
        <article className="container" style={{ maxWidth: "50rem" }}>
          <h1 className="section-title display">Website privacy information</h1>
          <p className="section-intro">Updated October 30, 2026</p>
          <h2>Website analytics</h2>
          <p>We use Google Analytics to understand website visits, traffic sources, and interactions
            with links to booking and contact options. A click on a booking link does not tell us
            whether an appointment was completed.</p>
          <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google Privacy Policy</a></p>
          <h2>Optional interaction recording</h2>
          <p>When enabled and with your permission, Microsoft Clarity records interactions on our
            public home and booking pages, including clicks, scrolling, and page navigation.
            We use heatmaps and visit replays to improve the website. Clarity is not loaded until
            you select Accept in the Your privacy notice. This choice applies to Clarity, separately from Google Analytics.</p>
          <p>Page text and images are masked for recording. This does not remove all technical
            information, such as page addresses and links. Please do not include private or medical
            information in website URLs. We do not send names, email addresses, or customer identifiers
            through Clarity&apos;s identification feature.</p>
          <p>You can decline recording or change your choice using Privacy preferences
            in the footer. If you withdraw permission, this website reloads to stop the recording
            script. We store your preference in your browser. Clearing browser storage may reset it.</p>
          <p><a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">
            Microsoft Privacy Statement</a></p>
          <h2>Booking and contact services</h2>
          <p>Booking takes place on Booksy. WhatsApp, email, and phone or text services open outside
            this website. Those services have their own privacy practices; our website recordings
            do not follow you into them. This notice covers the public website, not clinical records
            or Booksy&apos;s appointment records.</p>
          <h2>Questions</h2>
          <p>Contact <a href={`mailto:${site.email}`}>{site.email}</a> with questions about website privacy.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
