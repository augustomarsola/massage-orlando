# Microsoft Clarity integration

Owner approved production publication on 2026-10-30 after reviewing the compact notice.

## Project and controls

- Lunelle Spa, https://lunellespa.com/, Health & Wellness, public Project ID `z5w0d639mb` (verified against the project snippet).
- Owner completed the applicable project terms. Strict masking and Settings > Setup > Cookies Off (Consent Mode) saved; Bot detection On.
- No additional GA4, Google Ads or Microsoft Ads connection. No Identify calls.
- Public project ID is the approved code default. `NEXT_PUBLIC_CLARITY_PROJECT_ID` can override it; explicitly empty disables collector and notice. Environment changes require a rebuild.
- Script loads only after Accept on `/` or `/book`. Decline blocks insertion; closing with Close or the X does not grant permission. Existing GA4 behavior is unchanged.
- Consent API queues analytics permission and denied advertising storage before loading the collector.
- Body has `data-clarity-mask="true"`. Masking does not sanitize page URLs; private data must not be placed in URLs.
- Privacy preferences in the footer reopen the notice. Withdrawal sends denied consent and reloads to stop the collector. Another-tab preference changes also reload.
- Initial Global Privacy Control is treated as refusal.
- `/privacy` does not load the collector, even with permission. Leaving an allowed route after loading the collector reloads the excluded route to stop collection.

## Approved notice

Bottom-right compact card; title Your privacy; text: With your permission, we use optional cookies and session recordings to improve this site. Learn more.

Actions: Close (when reopening a saved choice), Decline, Accept. Accept uses navy with light text; upper-right X closes without granting permission. Details about Microsoft Clarity remain disclosed in `/privacy`.

## Scope and validation

Release contains only the integration, privacy page, footer links and environment example. Other local Skin Care, image and copy edits are excluded.

- ESLint, TypeScript and standard production build passed during preparation; clean release build is checked again before merging.
- Browser verified: no tag before a choice, refusal persists after refresh, footer reopens, Accept loads correct project tag, withdrawal reloads with no tag, `/privacy` excluded, one tag on homepage.
- Compact notice checked on desktop and 390x844. X closes correctly and does not insert a tag after refusal.
- DOM-based script checks do not prove absence of every network request or cookie deletion. Cookie/metadata inspection, blocked-storage/GPC cases, masking of a processed recording and performance with collection still need verification.
- Synthetic localhost sessions were generated during testing. Exclude these from business analysis.
- First recordings and heatmaps may take time to process; do not interpret an empty dashboard as proof of failed consent.

Official references:
- https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-consent-api-v2
- https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-mode
