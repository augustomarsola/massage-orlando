"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./HeatmapAnalytics.module.css";

const preferenceKey = "lunelle-clarity-consent-v1";
const preferenceEvent = "lunelle:clarity-preferences";
// Public project ID, approved for production. Set the environment variable to
// an empty string to disable the collector and notice without changing code.
const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "z5w0d639mb";
const configured = Boolean(projectId && /^[a-z0-9]+$/i.test(projectId));
type Choice = "granted" | "denied";
type ClarityQueue = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityQueue;
  }
}

function savedChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(preferenceKey);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function sendConsent(choice: Choice) {
  window.clarity?.("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: choice,
  });
}

function startClarity() {
  if (document.getElementById("lunelle-clarity")) return;
  const queue: ClarityQueue = (...args) => {
    (queue.q ??= []).push(args);
  };
  window.clarity = window.clarity ?? queue;
  // Queue the visitor's choice before the external collector can execute.
  sendConsent("granted");
  const script = document.createElement("script");
  script.id = "lunelle-clarity";
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${projectId}`;
  document.head.appendChild(script);
}

export function HeatmapPreferences() {
  if (!configured) return null;
  return (
    <li>
      <button type="button" className={styles.preferenceLink}
        onClick={() => window.dispatchEvent(new Event(preferenceEvent))}>
        Privacy preferences
      </button>
    </li>
  );
}

export function HeatmapAnalytics() {
  const pathname = usePathname();
  const allowedPage = pathname === "/" || pathname === "/book";
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!configured) return;
    const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl;
    const initial = privacySignal ? "denied" : savedChoice();
    setChoice(initial);
    setReady(true);
    setOpen(initial === null && allowedPage);
    const showPreferences = () => setOpen(true);
    window.addEventListener(preferenceEvent, showPreferences);
    const syncPreference = (event: StorageEvent) => {
      if (event.key === preferenceKey) window.location.reload();
    };
    window.addEventListener("storage", syncPreference);
    return () => {
      window.removeEventListener(preferenceEvent, showPreferences);
      window.removeEventListener("storage", syncPreference);
    };
  }, [allowedPage]);

  useEffect(() => {
    if (!configured || !ready) return;
    if (allowedPage && choice === "granted") startClarity();
    else if (document.getElementById("lunelle-clarity")) {
      // Removing the script element alone cannot stop an already running collector.
      sendConsent("denied");
      window.location.reload();
    }
  }, [allowedPage, choice, ready]);

  function choose(next: Choice) {
    try {
      window.localStorage.setItem(preferenceKey, next);
    } catch {
      // The current page can still respect the choice when storage is unavailable.
    }
    setChoice(next);
    setOpen(false);
  }

  if (!configured || !ready || !open) return null;
  return (
    <section className={styles.notice} aria-labelledby="interaction-recording-title"
      data-clarity-mask="true">
      <button type="button" className={styles.dismiss} aria-label="Close privacy notice"
        onClick={() => setOpen(false)}>×</button>
      <h2 id="interaction-recording-title">Your privacy</h2>
      <p>With your permission, we use optional cookies and session recordings to improve this site.{" "}
        <a href="/privacy">Privacy details</a></p>
      <div className={styles.actions}>
        {choice !== null && <button type="button" onClick={() => setOpen(false)}>Close</button>}
        <button type="button" onClick={() => choose("denied")}>Decline</button>
        <button type="button" className={styles.accept} onClick={() => choose("granted")}>Accept</button>
      </div>
    </section>
  );
}
