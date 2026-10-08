"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type MarketingEvent =
  | "cta_booksy_clicked"
  | "cta_sms_clicked"
  | "cta_whatsapp_clicked"
  | "cta_phone_clicked"
  | "cta_email_clicked"
  | "package_interest_clicked";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: MarketingEvent;
  eventParams?: Record<string, string | number | boolean>;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function TrackedLink({ eventName, eventParams, onClick, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.gtag?.("event", eventName, eventParams ?? {});
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}

