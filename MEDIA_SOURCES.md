# Real clinic photography — October 18, 2026

## Refinement v3 — October 23, 2026 (local only)

Owner requested further softening of forehead/neck expression lines and neater hair, a more centered hero without the pink appliance, and warmer room lighting with visibly stretched bedding and tidier curtains. Three independent built-in image edits were inspected; no API/CLI fallback. V3 supersedes the v2 assets below in the current preview:

- `lidiane-hero-retouched-v3.webp` — 900×1254 lossless crop (0,0,900,1254) from the edited 1254px square. Appliance and its small leaning sign removed generatively; large wall sign/6023 preserved visually. Face/neck lines further softened; watch remains dark. Framing at 50% 25% places the subject more centrally.
- `lunelle-room-prepared-v3.webp` — 1177×1337, warmer lighting and owner-requested generative fabric cleanup. Existing room/table/shelving retained visually. This is retouched marketing photography, not an untouched documentary record. No additional CSS warmth is stacked on the edited room.
- `lidiane-about-retouched-v3.webp` — 992×1586, further localized line softening and hair tidying, prior appliance-free crop retained. Portraits delivered losslessly without upscaling; generative detail is not recovered native camera resolution.

Masters, exact prompts and exports: marketing `outputs/retouch-2026-10-23/v3/`, `RETOQUES_SITE_2026-10-23.md`. Prior versions/originals preserved. Lint/build passed; both pages checked at seven widths 390–2560px, DPR 2, with no page errors, failed images or horizontal overflow. Screenshots inspected for framing, face/hair, room preparation and warmth; QA in `outputs/retouch-2026-10-23/qa-v3/`. Local preview restarted on port 3102. No publication, commit or PR in this round; owner/Lidiane visual approval pending.

## Portrait retouch and framing revision — October 23, 2026 (local approval pending)

Owner requested subtle portrait retouching, watch screen off, tidier hair, softer facial shadows/neck lines; larger and cohesive service thumbnails; room crop excluding right cabinet; About crop excluding pink appliance. Separate branch `codex/lunelle-photo-retouch`; not deployed.

- `lidiane-hero-retouched-v2.webp`: built-in image-edit result from IMG_0274 native square source; 1254×1254 lossless WebP, no upscaling, direct delivery. Hair tip tidied, watch dark, shadows/lines softened. Unlike the earlier purely photographic crop, this version contains owner-requested generative retouching. Visual approval of likeness remains necessary; no claim of unchanged pixels or recovered native detail.
- `lidiane-about-retouched-v2.webp`: independent built-in edit from corrected IMG_0317; crop (30,60,850,1360) from 1086×1448 output, excluding the pink appliance. Direct lossless delivery. Mobile focal position adjusted to preserve hair/headroom.
- `lunelle-room-focused-v2.webp`: non-generative native crop (90,150,1220,1386) of corrected room photo, excluding the right cabinet/pink appliance and keeping the treatment table/tall left shelving. Applied to home visit section and booking room image/metadata. Display warmth is reversible CSS.
- All four service thumbnails share the same warm-muted filter, 220×150 desktop, 180×150 tablet, existing 190px mobile height. Their underlying lighting/composition still differ; no new procedures inferred from photos.

Original images and prior exports preserved. Final masters, exact built-in prompts, provenance/export scripts and QA are in the marketing repository's `outputs/retouch-2026-10-23/` and `RETOQUES_SITE_2026-10-23.md`. No CLI/API image generation used.

Validation: lint/build passed; both routes checked at 390/768/1024/1440/1602/1920/2560 CSS px, DPR 2, without page errors, failed images or horizontal overflow. Actual screenshots inspected for hero, About, services and room; mobile About headroom corrected and rechecked. Local preview port 3102 restarted; no commit, PR or production deployment for this round.

## Hero revision — October 23, 2026

### Follow-up: native hero delivery and female-model service photo

Owner reported visible softness and clarified that the previous Relaxation image depicts another venue. This supersedes the restoration and initial filter below. At 728 CSS px / DPR 2, the 582×464 hero was delivered as 1080×1080 lossy WebP (273,732 bytes), because the mobile `sizes` estimate was only 480px. At 768px it used 1200px; desktop 1602px used a recompressed native-sized 1536px file. Thus the small-screen delivery could undersample the displayed frame, and all optimized versions introduced another lossy encode.

The hero now uses Next Image `unoptimized` for this asset only, serving the existing native lossless WebP directly (1536×1536, 1,567,536 bytes). Decoded RGB pixels fetched from the browser match the corrected source's square crop exactly (SHA-256 `9397f16e319886941c71baf9a8e3f97fcf52e89360cf95a3c9bb98681740fdbd`). This deliberately increases hero transfer size to preserve source detail; other photographs retain responsive optimization. No upscaling, sharpening or AI enhancement was used. Native source focus/detail remains the limit; larger original captures would be needed to add real detail beyond it.

Both hero and the new service thumbnail use reversible CSS `sepia(.05) saturate(.98) contrast(1.015)` instead of the softer previous grade. `lunelle-massage-model-0354-hq.webp` is a native lossless crop (left 0, top 580, width 1536, height 1050) from IMG_0354, showing hands working at the model's upper shoulders with towel coverage. It replaces `/spa_bg.png`. The alt describes a massage session, not an unconfirmed specific protocol. Only this service thumbnail receives the new grade; other service images remain unchanged.

Lint/build passed. Both routes checked at 390/768/1440/1602/1920/2560px, DPR 2, without page errors, failed capture photos or horizontal overflow; additional delivery/service checks at 728/768/1602px. Hero/service screenshots inspected. Evidence: marketing `outputs/hero-0274-2026-10-23/diagnostic/` and `outputs/site-media-2026-10-18/quality/hero-0274-native-and-model/`. Local preview rebuilt/restarted at port 3102; no production deployment.

Owner selected corrected IMG_0274 for the home hero. `lidiane-hero-0274-hq.webp` is a lossless 1536×1536 crop (0,0,1536,1536) of `A__IMG_0274__retrato_horizontal__telefone-6023.png`, without upscaling. Original face, hands, signs and room pixels are preserved in the crop. A subtle reversible CSS grade (`sepia(.07) saturate(.96) brightness(1.025) contrast(.98)`) warms the display toward cream/taupe while retaining navy. Responsive cover positioning is 30% 50%. No smoothing, sharpening or generative reconstruction is used in the shipped asset.

A built-in image-generation edit was tested with instructions for subtle cream/gold warmth and strict preservation of face, body, room and both 6023 signs. The trial was rejected after inspection because small photographic details changed; no generated image is shipped. No API/CLI fallback was used. Final asset export script and source remain in the marketing repository: `scripts/export_hero_0274_20261023.cjs`, `outputs/hero-0274-2026-10-23/`.

The Relaxation Massage thumbnail is restored to the previous `/spa_bg.png` illustration at the owner's request. Other service images, book hero, copy, booking links and sharing images are unchanged. This supersedes only the home-hero entry below; it does not imply production publication.

Validation: lint, production build and diff whitespace check passed. Both routes returned 200 at 390/768/1440/1602/1920/2560 px (DPR 2), without page JavaScript errors, horizontal overflow or failed capture images. Hero screenshots inspected at 390/768/1602 px; face and hands remain framed. The restored `spa_bg.png` loaded successfully in a separate browser check. Evidence: marketing `outputs/site-media-2026-10-18/quality/hero-0274-warm/`. Preview running at http://localhost:3102/; not deployed to production.

## Quality revision — October 18, 2026

The first exports were downscaled/lossy and then recompressed by Next Image at its default quality. Tall `object-cover` frames also needed more source height than their CSS width alone suggested. The replacement exports are lossless WebP at native dimensions, without sharpening, AI reconstruction or upscaling. The browser still receives optimized responsive images, at quality 95 for the hero/portrait/booking photo and 90 for supporting photographs; it does not download every lossless master at full size.

Current assets supersede the initial files below (which remain preserved):

| Current asset | Source | Dimensions / use |
| --- | --- | --- |
| `lunelle-preparing-hero-hq.webp` | IMG_0335 | 1536×1536 native crop, home hero; crop box (200,0,1736,1536) |
| `lunelle-preparing-room-hq.webp` | IMG_0335 | 2048×1536, sharing/business image |
| `lunelle-treatment-room-hq.webp` | Corrected IMG_0254 | 2048×1536, room photos |
| `lidiane-lunelle-portrait-hq.webp` | Corrected IMG_0317 | 1536×2048, About; selected vertical alternative replaces the wide 0291 |
| `studio-plaza-5979-hq.webp` | IMG_0233 | 2048×1536, location |

Responsive source selection accounts for the height-driven cover crop. At 1602 CSS px / DPR 2, the booking image changed from a 1080×810 resource to 1920×1440; hero from 1600×1200 to a native 1536×1536 crop; About from wide 1600×1200 to vertical 1200×1600. Approximate effective pixels per CSS pixel increased from 1.28/1.81/1.72 respectively to 2.27/2.32/2.29. This is resource-density measurement, not a claim to recover missing photographic detail. Encoded image transfer sizes increased deliberately: about 502/321/398 KiB respectively in the DPR-2 test. Native source resolution still limits extreme zoom.

Both pages passed six-width browser checks at DPR 1 and DPR 2; lint/build passed. Evidence is in the marketing project's `outputs/site-media-2026-10-18/quality/`. The local preview was rebuilt/restarted on port 3102. No production deployment was performed.

## Initial selection (superseded export sizes)

The owner authorized applying the selected real clinic photographs to the website and confirmed image permissions for the participants. This records owner confirmation, not an audit of signed releases.

| Website asset | Original capture | Placement |
| --- | --- | --- |
| `public/images/capture-2026-10-18/lunelle-preparing-room.webp` | `IMG_0335.JPEG` | Home hero, home sharing image, business image |
| `public/images/capture-2026-10-18/lunelle-treatment-room.webp` | `IMG_0254.JPEG` | Your Visit, relaxation room thumbnail, booking hero and sharing image |
| `public/images/capture-2026-10-18/lidiane-lunelle-portrait.webp` | `IMG_0291.JPEG` | About |
| `public/images/capture-2026-10-18/studio-plaza-5979.webp` | `IMG_0233.JPEG` | Location on both pages |

The raw source and lossless edited masters remain in the sibling marketing project, under `imagens/gravacoes e fotos/18102026` and `18102026_ORGANIZADO/07_FOTOS_TELEFONE_CORRIGIDO`. WebP derivatives are resized/compressed for the website; no scene generation, face/body retouching or room redesign was used.

The owner confirmed **(407) 868-6023**. The small sign in 0254 and both signs in 0291 had an incorrect 9 in the last four digits. With explicit permission for programmatic retouching, only the incorrect digit rectangles were changed, reusing the photographed 6 from the same sign. Lossless master checks prove all pixels outside those rectangles remain identical to the decoded originals. In 0335 only the area code is visible at the far edge; no incorrect digit is exposed.

Do not replace the remaining technique-specific service thumbnails with unconfirmed procedure photos. Lidiane will confirm the modalities later. Do not change services, prices, durations or booking links from visual assumptions.

Validation: lint and production build passed; both routes checked at 390, 768, 1440, 1602, 1920 and 2560 px. New images loaded, booking links remained available and there was no horizontal document overflow or page JavaScript error. Browser screenshots/results are stored in the marketing project's `outputs/site-media-2026-10-18/qa`. External Google map rendering depends on connectivity and is not certified by these local checks.

Status: local implementation only. No commit, push, PR or production deployment is implied by this document.
