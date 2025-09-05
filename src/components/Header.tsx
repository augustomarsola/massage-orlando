import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-beige/60">
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="#" className="flex items-center gap-3 group grow-1">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/50 shadow-soft">
            <Image
              src="/luxor_logo.jpg"
              alt="Lotus"
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <span className="font-serif text-xl tracking-wide text-ebony">
            <span className="text-yellow-700 text-shadow-xs">
              Luxor Day Spa Orlando
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 font-medium md:grow-1">
          <a href="#services" className="hover:text-gold transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-gold transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-gold transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4 grow-1 justify-end">
          <a
            href="#contact"
            className="hidden sm:inline-block bg-ebony text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide hover:shadow-glow hover:bg-gold hover:text-ebony transition-colors"
          >
            Book Now
          </a>
          <button
            className="md:hidden w-10 h-10 rounded-full border border-ebony/10 flex items-center justify-center hover:border-gold/50"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-ebony block relative">
              <span className="w-6 h-0.5 bg-ebony absolute top-2 left-0"></span>
              <span className="w-6 h-0.5 bg-ebony absolute -top-2 left-0"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
