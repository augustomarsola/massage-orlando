# Lunelle Spa Website

Public website for Lunelle Spa, a massage-focused wellness studio in Orlando, Florida. The site presents recognizable services, packages, client reviews, and location information, then directs visitors to online booking through Booksy. SMS, WhatsApp, and phone are optional contact paths.

Public copy remains primarily English. The site welcomes clients who communicate in English, Spanish, or Portuguese; it does not yet offer fully translated pages.

- Website: [lunellespa.com](https://lunellespa.com/)
- Booking page for bio links, QR codes, and campaigns: [lunellespa.com/book](https://lunellespa.com/book)
- Booking provider: [Booksy](https://booksy.com/en-us/1474517_lunelle-spa_massage_134763_orlando)

## Product Goals

- Communicate warm, professional, massage-first positioning.
- Build trust through clear services, location, provider information, and verified Booksy reviews.
- Make services easy to recognize, with short, friendly English and direct booking.
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
- `package_interest_clicked`

Booksy remains the source of truth for completed appointments. Website CTA events measure intent and must be reconciled with Booksy appointment data.

The October 8 copy revision replaces the `$105` first-visit spotlight with **Your Visit**. It no longer emits `offer_viewed` or `offer: new_client_105`; previous analytics history is unaffected. This does not cancel or reprice the Booksy service. Service-family click parameters retain their previous `service` values through `trackingName`, even though public headings are clearer. Review links keep their existing event/placements (`reviews`, `book_reviews`); distinguish those from booking intent in reporting.

### Client reviews

`booksyReviewSummary` in `src/components/site.ts` records a manually checked public Booksy snapshot: **5.0 / 5 from 2 reviews**, checked October 8, 2026. Both routes display the rating and direct **Read Reviews** link, without displaying a review-count sentence. The count remains internal evidence, not a claim of a larger review base. This is not automatically synchronized: recheck rating and count before future releases. Both links open the actual `#business-reviews` section. Do not invent quotes or add self-serving review markup to the local-business schema.

### Contact behavior

`ContactLink` preserves **Text Us** and direct `sms:` links for touch-first devices identified by `(pointer: coarse) and (hover: none)`. Other devices show a **Contact Us** button that opens a native, keyboard-accessible contact dialog with WhatsApp, a selectable/copiable phone number, and email. This is based on input capability, not viewport width, so a narrow desktop window still has a useful contact action. The media query is a practical heuristic, not proof that an SMS handler exists.

The dialog supports Escape, a visible close button, and outside-click dismissal. Phone copying shows success or instructions for manual copying if clipboard access is unavailable. SMS and WhatsApp prefill: `Hi Lidiane, I would like to book a service. I found you on your website.` No message is sent automatically. Keep Booksy as the primary booking CTA.

Opening the dialog emits `contact_options_opened`, not `cta_sms_clicked`. The chosen channel keeps its own event; `contact_phone_copied` records a successful copy only. None of these events proves a sent message or completed booking.

## Quality Checks

### Readability

Customer feedback on October 7, 2026 identified small website text. Preserve the Cinzel/Montserrat brand pairing while prioritizing comfortable reading:

- Main copy: approximately 18px or larger (`--text-body`).
- Navigation, support information, and controls: at least 16px (`--text-label`); primary buttons use 17px.
- Secondary captions only: 14px (`--text-caption`).
- Keep strong text contrast, flexible containers, and comfortable line spacing. Reduce copy or rearrange the layout instead of shrinking essential text.
- Review both routes at 320px, 390px, 768px, 1020/1021px, 1440px, 1602px, 1920px, and 2560px, including expanded FAQ/mobile menu and enlarged text. Preserve browser zoom and avoid clipped headings, contact details, or fixed-bar content.
- Keep display headings wrapped at word boundaries. Constrained hero, about, review, and location headings scale with their text column (`cqi`), not an ever-growing viewport. The location heading keeps `in Orlando,` and `on Vineland` together to avoid isolated prepositions, without shrinking body copy. The custom `.container` explicitly overrides Tailwind breakpoint max-widths; preserve its 1180px content limit on wide screens. Check actual word bounds, not just the page scrollbar, because clipped overflow can conceal layout problems.
- Test the contact dialog from hero, service help, about, footer, `/book`, and the fixed bar in a narrow desktop window. Check copy feedback, Escape/focus return, and manual selection if clipboard access is unavailable. Confirm direct SMS on a real iPhone/Android after publishing; changing viewport size alone does not simulate a touch-first device.

These are design targets, not a claim of full accessibility compliance.

Run before opening or merging a pull request:

```bash
npm run lint
npm run build
```

Also review the homepage and `/book` at mobile and desktop widths, verify external CTAs, and confirm that no unsupported credentials, testimonials, medical claims, or guaranteed outcomes were introduced.

## Deployment

The Vercel project deploys the `main` branch to [lunellespa.com](https://lunellespa.com/). Configure `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the Vercel **Production** environment and redeploy after changing it because public environment variables are embedded at build time.
