# Lunelle Spa Website

Public website for Lunelle Spa, a massage-focused wellness studio in Orlando, Florida. The site presents the brand, helps new clients choose a massage, and directs high-intent visitors to Booksy, SMS, WhatsApp, or phone.

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
- `cta_whatsapp_clicked`
- `cta_phone_clicked`
- `offer_viewed`
- `package_interest_clicked`

Booksy remains the source of truth for completed appointments. Website CTA events measure intent and must be reconciled with Booksy appointment data.

## Quality Checks

Run before opening or merging a pull request:

```bash
npm run lint
npm run build
```

Also review the homepage and `/book` at mobile and desktop widths, verify external CTAs, and confirm that no unsupported credentials, testimonials, medical claims, or guaranteed outcomes were introduced.

## Deployment

The Vercel project deploys the `main` branch to [lunellespa.com](https://lunellespa.com/). Configure `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the Vercel **Production** environment and redeploy after changing it because public environment variables are embedded at build time.
