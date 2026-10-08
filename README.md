# Lunelle Spa Website

Public website for Lunelle Spa, a massage-focused wellness studio in Orlando, Florida. The site presents the brand, helps new clients choose a massage, and directs high-intent visitors to Booksy, SMS, WhatsApp, or phone.

Public copy remains primarily English. The site welcomes clients who communicate in English, Spanish, or Portuguese; it does not yet offer fully translated pages.

- Website: [lunellespa.com](https://lunellespa.com/)
- Guided booking page: [lunellespa.com/book](https://lunellespa.com/book)
- Booking provider: [Booksy](https://booksy.com/en-us/1474517_lunelle-spa_massage_134763_orlando)

## Product Goals

- Communicate warm, professional, massage-first positioning.
- Build trust through clear services, location, provider information, and verified Booksy reviews.
- Reduce first-visit decision friction without discount-led positioning.
- Convert visitors into Booksy appointments or assisted conversations.
- Support local Orlando discovery with metadata, structured data, sitemap, and robots configuration.

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel hosting and production deployments
- Google Analytics 4 through `gtag.js`

## Local Development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and replace placeholder values when local analytics testing is required:

```powershell
Copy-Item .env.example .env.local
```

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Production only | Loads GA4 and enables pageview and custom marketing-event collection. Leave unset to disable analytics locally. |

`NEXT_PUBLIC_` variables are exposed to the browser. Never place passwords, API secrets, or private credentials in them.

## Analytics Events

The site emits the following marketing events when GA4 is configured:

- `cta_booksy_clicked`
- `cta_sms_clicked`
- `cta_email_clicked`
- `contact_options_opened`
- `contact_phone_copied`
- `cta_whatsapp_clicked`
- `cta_phone_clicked`
- `offer_viewed`
- `package_interest_clicked`

Booksy remains the source of truth for completed appointments. Website CTA events measure intent and must be reconciled with Booksy appointment data.

### Contact behavior

`ContactLink` preserves direct `sms:` links for touch-first devices identified by `(pointer: coarse) and (hover: none)`. Other devices show an **Ask Lidiane / Contact** button that opens a native, keyboard-accessible contact dialog with WhatsApp, a selectable/copiable phone number, and email. This is based on input capability, not viewport width, so a narrow desktop window still has a useful contact action. The media query is a practical heuristic, not proof that an SMS handler exists.

The dialog supports Escape, a visible close button, and outside-click dismissal. Phone copying shows success or instructions for manual copying if clipboard access is unavailable. No message is sent automatically. Keep Booksy as the primary booking CTA.

Opening the dialog emits `contact_options_opened`, not `cta_sms_clicked`. The chosen channel keeps its own event; `contact_phone_copied` records a successful copy only. None of these events proves a sent message or completed booking.

## Quality Checks

### Readability

Customer feedback on October 7, 2026 identified small website text. Preserve the Cinzel/Montserrat brand pairing while prioritizing comfortable reading:

- Main copy: approximately 18px or larger (`--text-body`).
- Navigation, support information, and controls: at least 16px (`--text-label`); primary buttons use 17px.
- Secondary captions only: 14px (`--text-caption`).
- Keep strong text contrast, flexible containers, and comfortable line spacing. Reduce copy or rearrange the layout instead of shrinking essential text.
- Review both routes at 320px, 390px, 768px, 1020/1021px, 1440px, 1602px, 1920px, and 2560px, including expanded FAQ/mobile menu and enlarged text. Preserve browser zoom and avoid clipped headings, contact details, or fixed-bar content.
- Keep display headings wrapped at word boundaries. Constrained hero, about, and review headings scale with their text column (`cqi`), not an ever-growing viewport. The custom `.container` explicitly overrides Tailwind breakpoint max-widths; preserve its 1180px content limit on wide screens. Check actual word bounds, not just the page scrollbar, because clipped overflow can conceal layout problems.
- Test the contact dialog from hero, first visit, about, footer, `/book`, and the fixed bar in a narrow desktop window. Check copy feedback, Escape/focus return, and manual selection if clipboard access is unavailable. Confirm direct SMS on a real iPhone/Android after publishing; changing viewport size alone does not simulate a touch-first device.

These are design targets, not a claim of full accessibility compliance.

Run before opening or merging a pull request:

```bash
npm run lint
npm run build
```

Also review the homepage and `/book` at mobile and desktop widths, verify external CTAs, and confirm that no unsupported credentials, testimonials, medical claims, or guaranteed outcomes were introduced.

## Deployment

The Vercel project deploys the `main` branch to [lunellespa.com](https://lunellespa.com/). Configure `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the Vercel **Production** environment and redeploy after changing it because public environment variables are embedded at build time.
