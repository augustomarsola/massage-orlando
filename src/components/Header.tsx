"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  // Close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header className="px-4 w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-beige/60">
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
          <a
            href="https://www.instagram.com/luxordayspaorlando/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
            aria-label="Open Instagram in new tab"
          >
            Instagram
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`w-6 h-0.5 bg-ebony block relative transition-all ${
                open ? "bg-transparent" : ""
              }`}
            >
              <span
                className={`w-6 h-0.5 bg-ebony absolute top-2 left-0 transition-transform ${
                  open ? "-rotate-45 !top-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-ebony absolute -top-2 left-0 transition-transform ${
                  open ? "rotate-45 top-0" : ""
                }`}
              ></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } md:hidden transition-opacity duration-200`}
      >
        {/* Backdrop */}
        <div
          className={`${
            open ? "opacity-40" : "opacity-0"
          } fixed inset-0 bg-black transition-opacity`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`${
            open ? "translate-y-0" : "-translate-y-3"
          } fixed left-0 right-0 top-20 bg-white/95 backdrop-blur-md border-b border-beige/60 shadow-lg transition-transform`}
        >
          <nav className="px-4 py-4 flex flex-col gap-4 text-ebony font-medium">
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-gold"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-gold"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-gold"
            >
              Contact
            </a>
            <a
              href="https://www.instagram.com/luxordayspaorlando/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:text-gold"
              onClick={() => setOpen(false)}
              aria-label="Open Instagram in new tab"
            >
              Instagram
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block bg-ebony text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide hover:shadow-glow hover:bg-gold hover:text-ebony transition-colors w-max"
            >
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
