"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { site } from "./site";
import { TrackedLink } from "./TrackedLink";

type ContactLinkProps = {
  children: ReactNode;
  desktopLabel?: ReactNode;
  className?: string;
  placement: string;
};

/** Mobile SMS and a desktop contact fallback share the same placement. */
export function ContactLink({ children, desktopLabel, className = "", placement }: ContactLinkProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const id = useId();
  const [copyStatus, setCopyStatus] = useState("");

  function openContact() {
    setCopyStatus("");
    dialogRef.current?.showModal();
    window.gtag?.("event", "contact_options_opened", { placement });
  }

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(site.phoneInternational);
      setCopyStatus("Phone number copied.");
      window.gtag?.("event", "contact_phone_copied", { placement });
    } catch {
      setCopyStatus("Select the number and copy it manually.");
    }
  }

  return (
    <>
      <TrackedLink
        href={site.smsHref}
        className={`${className} contact-sms-link`}
        eventName="cta_sms_clicked"
        eventParams={{ placement }}
      >
        {children}
      </TrackedLink>
      <button
        type="button"
        className={`${className} contact-trigger`}
        aria-haspopup="dialog"
        aria-controls={`${id}-dialog`}
        onClick={openContact}
      >
        {desktopLabel ?? children}
      </button>
      <dialog
        ref={dialogRef}
        id={`${id}-dialog`}
        className="contact-dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        onClose={() => setCopyStatus("")}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="contact-dialog-heading">
          <p className="eyebrow">Get in Touch</p>
          <button
            type="button"
            className="contact-dialog-close"
            aria-label="Close contact options"
            onClick={() => dialogRef.current?.close()}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <h2 id={`${id}-title`}>Contact Us</h2>
        <p id={`${id}-description`}>
          Questions about your appointment? Message us in English, Spanish, or Portuguese.
        </p>
        <TrackedLink
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary contact-dialog-whatsapp"
          eventName="cta_whatsapp_clicked"
          eventParams={{ placement, surface: "contact_dialog" }}
        >
          Message on WhatsApp <span aria-hidden="true">↗</span>
        </TrackedLink>
        <p className="contact-dialog-help">You may need to sign in to WhatsApp Web.</p>
        <div className="contact-phone-option">
          <label htmlFor={`${id}-phone`}>Prefer to call or text from your phone?</label>
          <div className="contact-phone-row">
            <input
              id={`${id}-phone`}
              value={site.phoneInternational}
              readOnly
              onFocus={(event) => event.currentTarget.select()}
            />
            <button type="button" className="button button-outline" onClick={copyPhone}>
              Copy Number
            </button>
          </div>
          <p className="contact-copy-status" role="status">{copyStatus}</p>
        </div>
        <p className="contact-email-option">
          Or email us at{" "}
          <TrackedLink
            href={`mailto:${site.email}`}
            eventName="cta_email_clicked"
            eventParams={{ placement, surface: "contact_dialog" }}
          >
            {site.email}
          </TrackedLink>
        </p>
      </dialog>
    </>
  );
}
