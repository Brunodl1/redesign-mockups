# Kena Skincare — research (home redesign)

## Language — **ENGLISH** (verdict)
`<html lang="en">`, `.com`, generic Shopify country/currency list (Canada CAD $
default but no FR site/toggle), all on-page copy English. A few French *customer
reviews* exist but no French UI/version → English is correct (skill rule: default
FR only for QC/.ca brands that actually offer French; Kena does not).

## ICP
Results-driven skincare buyers (~25–45) with dark spots / uneven tone / sensitive
skin, wanting fast visible clarity from a gentle, lightweight formula. Founder-led,
trust-through-story + reviews.

## What they sell
**ONE product: The Glace Skin Serum** (amber facial serum w/ dropper, ~$138 CAD,
often sold out). No other live SKUs → the redesign must be a single-product story,
NOT a multi-product grid.

## USP / value prop (real copy)
"FAST RESULTS — noticeably clearer skin in just 10 weeks", fades dark spots,
"light and not oily", soft/soothing, hydrating. Emotional layer: "A skincare love
story" / founder origin.

## Tone
Results-driven, warm, aspirational, founder-personal, clean-modern.

## Pains → Desires
Pains: dark spots/uneven tone; irritation from harsh actives; slow/unconvincing results.
Desires: visibly clearer skin fast; lightweight non-greasy feel; gentle enough for sensitive skin.

## Real copy snippets
- "FAST RESULTS"
- "Experience the potential of noticeably clearer skin in just 10 weeks with THE GLACE SKIN SERUM"
- "A skincare love story."
- "The Story Behind The Brand — our founders share the story…"
- "It's light and it's not oily on my face"

## Niche
skincare-cosmetics (→ references/skincare-cosmetics.md). Reinterpreted through
Kena's REAL brand below (teal/black, not warm-sand).

## Kena REAL design tokens (from raw HTML — cdp.py was broken)
- Font: **Montserrat** (display + body).
- Accent/teal **#108474** (deeper #0B6557; bright #07DEBC); ink near-black **#0A0A0A**; white bg.
- Logo (black wordmark): `Kena_logo_LBlackT.jpg`.

## Image plan (Gemini edit + PIL both broken → no compositing)
**Hotlinked real Kena photos (cdn.shopify.com / kenaskincare.com/cdn/shop/files):**
- Serum bottle: `YPT04762.png`
- Lifestyle / before-after skin: `9ACBFD65-E5EE-4EDC-A403-4A89ED12AB43.png` (used in hero.jpg via sips, + science band)
- Founders: `68968AD9-88D1-49D3-B738-9901F97F8EBC.png` (story band)
- Logo: `Kena_logo_LBlackT.jpg` (header black, footer inverted white)
**Generated:** none usable (Gemini edit + Flux-float chroma-key both blocked). Floats dropped.

## Hero variant
etymologie=split, lemustdose=full-bleed → Kena = **centered editorial** (centered
Montserrat promise + 1 CTA, real before/after skin diptych showcase below; mobile
image above fold).
