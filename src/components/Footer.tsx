export function Footer() {
  return (
    <footer className="mt-24 bg-ebony text-white pt-16 pb-12 px-4">
      <div className="container-wide grid gap-12 md:grid-cols-4">
        <div className="space-y-4 col-span-2">
          <h3 className="font-serif text-2xl text-gold">
            Luxor Day Spa Orlando
          </h3>
          <p className="text-sm text-white/80 mt-1">
            Professional: Lidiane Fernandes
          </p>
          <p className="text-sm leading-relaxed text-white/70 max-w-md">
            Dedicated to enhancing wellness, beauty, and confidence through
            personalized massage and aesthetic body treatments in a serene
            luxury setting.
          </p>
          <div>
            <p className="text-sm font-semibold tracking-wide">Phone</p>
            <a
              href="tel:+14078686023"
              className="text-lg font-medium hover:text-gold transition-colors"
            >
              (407) 868-6023
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3 text-gold">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#services" className="hover:text-gold">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gold">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3 text-gold">Connect</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a
                href="https://www.instagram.com/luxordayspaorlando/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold inline-flex items-center gap-2 group"
                aria-label="Instagram - opens in new tab"
              >
                <span>@luxordayspaorlando</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10 group-hover:border-gold/40 group-hover:text-gold tracking-wide">
                  INSTAGRAM
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:lidiane.fernandes@live.com"
                className="hover:text-gold inline-flex items-center gap-2 group"
                aria-label="Send email to Lidiane"
              >
                <span>lidiane.fernandes@live.com</span>
              </a>
            </li>
            <li className="leading-relaxed">
              <a
                href="https://www.google.com/maps?sca_esv=4c8145c9451343a3&output=search&q=5979+Vineland+Rd,+Suite+304,+Orlando,+32819&source=lnms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold block"
                aria-label="Open location on Google Maps in new tab"
              >
                5979 Vineland Rd, Suite 304
                <br />
                Orlando, 32819
                <span className="block mt-1 text-[11px] text-white/50 group-hover:text-gold/70">
                  View on Google Maps
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-wide mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Luxor Day Spa Orlando. All rights
          reserved.
          <br />
          Professional responsible: Lidiane Fernandes
        </p>
        <p className="tracking-wide">Crafted with care and elegance.</p>
      </div>
    </footer>
  );
}
