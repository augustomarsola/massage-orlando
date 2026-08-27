"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

type TrackedSectionProps = HTMLAttributes<HTMLElement> & {
  eventName: "offer_viewed";
  eventParams?: Record<string, string | number | boolean>;
};

export function TrackedSection({ eventName, eventParams, children, ...props }: TrackedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.gtag?.("event", eventName, eventParams ?? {});
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [eventName, eventParams]);

  return <section ref={ref} {...props}>{children}</section>;
}

