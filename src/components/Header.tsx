"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "./site";
import { AppointmentLink } from "@/components/AppointmentRequest";
import { TrackedLink } from "./TrackedLink";

type HeaderProps = {
  page?: "home" | "book" | "privacy";
  requestEnabled?: boolean;
};

const navigation = [
  { href: "/#services", label: "Services" },
  { href: "/#first-visit", label: "Your Visit" },
  { href: "/#packages", label: "Packages" },
  { href: "/#about", label: "About" },
  { href: "/#location", label: "Location" },
] as const;

export function Header({ page = "home", requestEnabled = false }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Lunelle Spa home">
          <Image
            className="brand-mark"
            src="/lunelle-symbol.svg"
            alt=""
            width={46}
            height={46}
            priority
          />
          <span className="brand-copy">
            <span className="brand-name">Lunelle Spa</span>
            <span className="brand-tagline">Massage &amp; wellness · Orlando</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {requestEnabled ? (
          <AppointmentLink className="button button-primary header-book-button" fromPrivacy={page === "privacy"} />
        ) : (
          <TrackedLink
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary header-book-button"
            eventName="cta_booksy_clicked"
            eventParams={{ placement: page === "home" ? "site_header" : `${page}_header` }}
          >
            Book Now <span className="external-arrow" aria-hidden="true" />
          </TrackedLink>
        )}

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        {requestEnabled ? (
          <AppointmentLink className="button button-primary" fromPrivacy={page === "privacy"} onClick={() => setOpen(false)} />
        ) : (
          <TrackedLink
            href={site.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
            eventName="cta_booksy_clicked"
            eventParams={{ placement: page === "home" ? "mobile_menu" : `${page}_mobile_menu` }}
            onClick={() => setOpen(false)}
          >
            Book Now <span className="external-arrow" aria-hidden="true" />
          </TrackedLink>
        )}
      </nav>
    </header>
  );
}
