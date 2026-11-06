import { createHmac } from "node:crypto";
import { isFutureAppointmentDate } from "@/components/appointment-date";
import { serviceFamilies, site, skinCareFamilies } from "@/components/site";

const services = new Set<string>([
  ...serviceFamilies.map(({ title }) => title),
  ...skinCareFamilies.flatMap(({ options }) => options.map(({ title }) => title)),
  "Other / Help me choose",
]);

function reject(status: number) {
  return Response.json({ ok: false }, { status });
}

export async function POST(request: Request) {
  const { TURNSTILE_SECRET_KEY, RESEND_API_KEY, APPOINTMENT_FROM_EMAIL, APPOINTMENT_HOSTS } = process.env;
  if (!TURNSTILE_SECRET_KEY || !RESEND_API_KEY || !APPOINTMENT_FROM_EMAIL || !APPOINTMENT_HOSTS) {
    return reject(503);
  }

  const hosts = APPOINTMENT_HOSTS.split(",").map((host) => host.trim().toLowerCase());
  const origin = request.headers.get("origin");
  const host = new URL(request.url).hostname.toLowerCase();
  if (!hosts.includes(host) || origin !== `https://${host}`) return reject(403);
  if (request.headers.get("content-type")?.split(";")[0] !== "application/json") return reject(415);

  const reader = request.body?.getReader();
  if (!reader) return reject(400);
  let raw = "";
  let size = 0;
  const decoder = new TextDecoder();
  let payload: unknown;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 4096) {
        await reader.cancel();
        return reject(413);
      }
      raw += decoder.decode(value, { stream: true });
    }
    payload = JSON.parse(raw + decoder.decode());
  } catch {
    return reject(400);
  }

  if (!payload || typeof payload !== "object") return reject(400);
  const { name, phone, service, preferredDate = "", preferredTime = "", token } = payload as Record<string, unknown>;
  if (typeof name !== "string" || !name.trim() || name.length > 60 || /[\u0000-\u001f\u007f]/.test(name)
    || typeof phone !== "string" || !/^[2-9]\d{2}[2-9]\d{6}$/.test(phone)
    || typeof service !== "string" || !services.has(service)
    || typeof preferredDate !== "string" || (preferredDate !== "" && !isFutureAppointmentDate(preferredDate))
    || typeof preferredTime !== "string" || (preferredTime !== "" && !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(preferredTime))
    || typeof token !== "string" || !token || token.length > 2048) return reject(400);

  const cleanName = name.trim().replace(/\s+/g, " ");
  const requestDetails = [cleanName, phone, service];
  if (preferredDate || preferredTime) requestDetails.push(preferredDate);
  if (preferredTime) requestDetails.push(preferredTime);

  const details = [`Name: ${cleanName}`, `Phone: +1${phone}`, `Service: ${service}`];
  if (preferredDate) details.push(`Preferred date (Orlando): ${preferredDate}`);
  if (preferredTime) {
    const [hours, minutes] = preferredTime.split(":");
    const hour = Number(hours);
    details.push(`Preferred time (Orlando): ${hour % 12 || 12}:${minutes} ${hour < 12 ? "AM" : "PM"}`);
  }
  try {
    const check = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token }),
      signal: AbortSignal.timeout(5000),
    });
    if (!check.ok) return reject(502);
    const challenge = await check.json();
    if (!challenge.success || challenge.hostname !== host || challenge.action !== "appointment_request") {
      return reject(403);
    }

    // Identical requests share Resend's 24-hour idempotency window.
    const key = createHmac("sha256", TURNSTILE_SECRET_KEY)
      .update(JSON.stringify(requestDetails))
      .digest("hex");
    const email = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `appointment/${key}`,
      },
      body: JSON.stringify({
        from: APPOINTMENT_FROM_EMAIL,
        to: [site.email],
        subject: "New appointment request | Lunelle Spa",
        text: details.join("\n") + "\n\nPlease contact the client to arrange and confirm the appointment.",
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!email.ok) return reject(502);
    return Response.json({ ok: true });
  } catch {
    return reject(502);
  }
}
