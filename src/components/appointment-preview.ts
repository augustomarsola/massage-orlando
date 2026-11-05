export const appointmentPreview = process.env.NODE_ENV === "development"
  && process.env.NEXT_PUBLIC_APPOINTMENT_PREVIEW === "1";

export const appointmentSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
export const appointmentEnabled = appointmentPreview || Boolean(appointmentSiteKey);
