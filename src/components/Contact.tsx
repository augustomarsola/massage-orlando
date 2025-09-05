export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-ebony text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full gradient-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full gradient-gold blur-3xl" />
      </div>
      <div className="container-wide relative z-10 max-w-5xl">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gold leading-tight">
            Book Your Session
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            Ready to relax, renew, or sculpt? Reach out to schedule an
            appointment or ask any questions about available services.
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/60 mb-1">
                Phone & Messaging
              </p>
              <p className="text-2xl font-medium mb-4">
                <a
                  href="tel:+14078686023"
                  className="hover:text-gold transition-colors"
                >
                  +1 (407) 868-6023
                </a>
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+14078686023"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium hover:bg-gold hover:text-ebony hover:border-gold/60 transition tracking-wide"
                  aria-label="Call Luxor Day Spa Orlando"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/14078686023?text=Hello,+I+would+like+to+book+a+massage+at+Luxor+Day+Spa+Orlando+with+Lidiane."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium hover:bg-green-400 hover:text-ebony hover:border-green-400/60 transition tracking-wide"
                  aria-label="Open WhatsApp chat"
                >
                  WhatsApp
                </a>
                <a
                  href="sms:+14078686023?&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20spa%20services."
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium hover:bg-blue-300 hover:text-ebony hover:border-blue-300/60 transition tracking-wide"
                  aria-label="Send SMS message"
                >
                  SMS
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/60">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/luxordayspaorlando/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
                aria-label="Open Instagram profile in new tab"
              >
                @luxordayspaorlando
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/60">
                Email
              </p>
              <a
                href="mailto:lidiane.fernandes@live.com"
                className="text-white/80 hover:text-gold transition-colors break-all"
                aria-label="Send email to Lidiane"
              >
                lidiane.fernandes@live.com
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/60">
                Location
              </p>
              <a
                href="https://www.google.com/maps?sca_esv=4c8145c9451343a3&output=search&q=5979+Vineland+Rd,+Suite+304,+Orlando,+32819&source=lnms"
                target="_blank"
                rel="noopener noreferrer"
                className="block not-italic text-white/80 hover:text-gold leading-relaxed"
                aria-label="Open address on Google Maps in new tab"
              >
                5979 Vineland Rd, Suite 304
                <br />
                Orlando, 32819
                <span className="block mt-1 text-[11px] text-white/50">
                  View on Google Maps
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
