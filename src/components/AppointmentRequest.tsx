"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type MouseEvent } from "react";
import { appointmentPreview, appointmentSiteKey } from "./appointment-preview";
import { earliestAppointmentDate, isFutureAppointmentDate } from "./appointment-date";
import { serviceFamilies, site, skinCareFamilies } from "./site";
import { TrackedLink } from "./TrackedLink";

const requestId = "request-appointment";
const selectServiceEvent = "lunelle:select-request-service";

type Turnstile = {
  render(element: HTMLElement, options: {
    sitekey: string;
    action: string;
    appearance: "interaction-only";
    callback: (token: string) => void;
    "expired-callback": () => void;
    "error-callback": () => void;
  }): string;
  reset(id: string): void;
  remove(id: string): void;
};

function getTurnstile() {
  return (window as Window & { turnstile?: Turnstile }).turnstile;
}

function phoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  return (digits.startsWith("1") ? digits.slice(1) : digits).slice(0, 10);
}

function formatPhone(digits: string) {
  if (digits.length < 4) return digits;
  const prefix = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}`;
  return digits.length > 6 ? `${prefix}-${digits.slice(6)}` : prefix;
}

export function AppointmentLink({ className, service, label = "Request an Appointment", onClick, fromPrivacy }: {
  className?: string;
  service?: string;
  label?: string;
  onClick?: () => void;
  fromPrivacy?: boolean;
}) {
  function openRequest(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    onClick?.();
    if (fromPrivacy) return;
    window.dispatchEvent(new CustomEvent(selectServiceEvent, { detail: service }));
    document.getElementById(requestId)?.focus({ preventScroll: true });
  }

  return (
    <a href={`${fromPrivacy ? "/book" : ""}#${requestId}`} className={className} onClick={openRequest}
      aria-label={service ? `${label}: ${service}` : undefined}>{label}</a>
  );
}

export function AppointmentRequest({ placement }: { placement: string }) {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [phoneError, setPhoneError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [minimumDate, setMinimumDate] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const [token, setToken] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const submitting = useRef(false);

  useEffect(() => {
    setMinimumDate(earliestAppointmentDate());
  }, []);

  useEffect(() => {
    const api = turnstileReady ? getTurnstile() : undefined;
    if (appointmentPreview || !api || !widgetRef.current || !appointmentSiteKey) return;
    const id = api.render(widgetRef.current, {
      sitekey: appointmentSiteKey,
      action: "appointment_request",
      appearance: "interaction-only",
      callback: (value) => {
        setToken(value);
        setVerificationFailed(false);
      },
      "expired-callback": () => setToken(""),
      "error-callback": () => {
        setToken("");
        setVerificationFailed(true);
      },
    });
    widgetId.current = id;
    return () => {
      api.remove(id);
      widgetId.current = null;
    };
  }, [turnstileReady]);

  useEffect(() => {
    function preselect(event: Event) {
      const selection = (event as CustomEvent<string | undefined>).detail;
      if (selection) {
        setService(selection);
        setStatus((current) => current === "sending" ? current : "idle");
      }
    }
    window.addEventListener(selectServiceEvent, preselect);
    return () => window.removeEventListener(selectServiceEvent, preselect);
  }, []);

  function updatePhone(event: ChangeEvent<HTMLInputElement>) {
    const field = event.currentTarget;
    const digits = phoneDigits(field.value);
    const beforeCaret = phoneDigits(field.value.slice(0, field.selectionStart ?? field.value.length)).length;
    const formatted = formatPhone(digits);
    field.value = formatted;
    let caret = 0;
    let passed = 0;
    while (caret < formatted.length && passed < beforeCaret) {
      if (/\d/.test(formatted[caret])) passed++;
      caret++;
    }
    field.setSelectionRange(caret, caret);
    setPhoneError(false);
  }

  async function sendRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const digits = phoneDigits(phoneRef.current?.value ?? "");
    const preferredDate = dateRef.current?.value ?? "";
    const preferredTime = timeRef.current?.value ?? "";
    if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)) {
      setPhoneError(true);
      phoneRef.current?.focus();
      return;
    }
    if (preferredDate && !isFutureAppointmentDate(preferredDate)) {
      setDateError(true);
      dateRef.current?.focus();
      return;
    }
    if (!appointmentPreview && !token) {
      setVerificationFailed(true);
      return;
    }
    submitting.current = true;
    setStatus("sending");
    try {
      if (appointmentPreview) {
        await new Promise((resolve) => window.setTimeout(resolve, 350));
        if (digits === "2025550100") throw new Error("Preview error");
      } else {
        const response = await fetch("/api/appointment-request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: nameRef.current?.value, phone: digits, service, preferredDate, preferredTime, token }),
          signal: AbortSignal.timeout(15000),
        });
        if (!response.ok) throw new Error("Request failed");
      }
      form.reset();
      setService("");
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
      if (widgetId.current !== null) {
        setToken("");
        getTurnstile()?.reset(widgetId.current);
      }
    }
  }

  return (
    <section className="section appointment-request" id={requestId} tabIndex={-1}
      aria-labelledby="request-heading">
      <div className="container appointment-layout">
        <div>
          <p className="eyebrow">Plan your visit</p>
          <h2 className="display section-title" id="request-heading">Request an Appointment</h2>
          <p className="section-intro">Tell us which service you’re interested in. The Lunelle Spa team will call or text you to arrange a time and confirm your appointment.</p>
          <p className="appointment-alternative">
            Prefer to choose a time yourself?{" "}
            <TrackedLink href={site.booksy} target="_blank" rel="noopener noreferrer"
              className="text-link" eventName="cta_booksy_clicked" eventParams={{ placement }}>
              Book online with Booksy <span aria-hidden="true">↗</span>
            </TrackedLink>
          </p>
        </div>
        <form className="appointment-form" data-clarity-mask="true" onSubmit={sendRequest}>
          {appointmentPreview && <p className="appointment-preview-note">Local preview. Use sample details. No messages are sent.</p>}
          <fieldset disabled={status === "sending"}>
            <div className="appointment-field">
              <label htmlFor="request-name">Name</label>
              <input ref={nameRef} id="request-name" autoComplete="name"
                maxLength={60} pattern=".*\S.*" required />
            </div>
            <div className="appointment-field">
              <label htmlFor="request-phone">Phone number</label>
              <input ref={phoneRef} id="request-phone" type="tel"
                autoComplete="tel-national" inputMode="tel" required aria-invalid={phoneError}
                aria-describedby={phoneError ? "request-phone-error" : undefined}
                onChange={updatePhone} />
              {phoneError && <p id="request-phone-error" className="appointment-error">
                Enter a 10-digit US phone number with its area code.
              </p>}
            </div>
            <div className="appointment-field">
              <label htmlFor="request-service">Service</label>
              <select id="request-service" value={service}
                onChange={(event) => setService(event.target.value)} required>
                <option value="" disabled>Choose a service</option>
                <optgroup label="Massage & Bodywork">
                  {serviceFamilies.map(({ title }) => <option key={title}>{title}</option>)}
                </optgroup>
                <optgroup label="Facials & Skin Care">
                  {skinCareFamilies.flatMap(({ options }) => options).map(({ id, title }) => (
                    <option key={id}>{title}</option>
                  ))}
                </optgroup>
                <option>Other / Help me choose</option>
              </select>
            </div>
            <div className="appointment-field">
              <div className="appointment-date-time">
                <div className="appointment-field">
                  <label htmlFor="request-date">Preferred date (optional)</label>
                  <input ref={dateRef} id="request-date" type="date" min={minimumDate || undefined}
                    aria-invalid={dateError} aria-describedby="request-date-hint"
                    onFocus={() => setMinimumDate(earliestAppointmentDate())}
                    onChange={() => setDateError(false)}
                    onInvalid={() => setDateError(true)} />
                </div>
                <div className="appointment-field">
                  <label htmlFor="request-time">Preferred time (optional)</label>
                  <input ref={timeRef} id="request-time" type="time" aria-describedby="request-date-hint" />
                </div>
              </div>
              <p id="request-date-hint" className={dateError ? "appointment-error" : undefined}>
                {dateError ? "Choose a date starting tomorrow." : "Choose a date starting tomorrow and a time in Orlando local time. We’ll confirm availability when we contact you."}
              </p>
            </div>
            <p className="appointment-privacy">
              We’ll use your number to follow up about this request. <a href="/privacy">Privacy details</a>.
            </p>
            {!appointmentPreview && <div ref={widgetRef} />}
            {verificationFailed && <p className="appointment-error" role="alert">
              Security verification is unavailable or incomplete. Try again or call{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>.
            </p>}
            <button type="submit" className="button button-primary">
              {status === "sending" ? "Sending…" : "Send Appointment Request"}
            </button>
          </fieldset>
          <div role="status">
            {status === "sent" && <p className="appointment-success">
              <strong>Request received.</strong> We’ll call or text you to confirm your appointment.
            </p>}
          </div>
          <div role="alert">
            {status === "error" && <p className="appointment-error">
              We couldn’t send your request. Your details are still here. Try again or call{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>.
            </p>}
          </div>
        </form>
      </div>
      {!appointmentPreview && <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setTurnstileReady(true)}
        onError={() => setVerificationFailed(true)}
      />}
    </section>
  );
}
