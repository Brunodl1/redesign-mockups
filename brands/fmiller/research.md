# F. Miller — research (home redesign)

**URL:** https://fmillerskincare.com/ · **Page:** home · **Slug:** fmiller
**Niche:** skincare-cosmetics (botanical oils-led, clean-luxe minimal) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** — Toronto-based, `<html lang="en">`, .com, en-CA, NO French anywhere. Build EN. (Toronto, not Québec → EN.)

## Brand
**F. MILLER** (F. Miller) — Toronto botanical skincare, founded 2014 by **Fran Miller**; handcrafted & bottled in Toronto.
A tight, curated oils-led line (not a mass range): Face Oil (flagship, "21 active botanicals"), Support Serum, Cleansing
Oil, Toning Mist, Eye Oil, Body/Hair/Shave Oils, Tinted Balms (Hibiscus/Tomato/Carob), Sculpting Tool, Kits. Positioning:
**clean-luxe minimalist botanical** — quiet luxury, oils-led, sustainability-committed, gender-inclusive, editorial.

## ICP
Design/wellness-adjacent urban professionals 28–45, gender-inclusive (skews female); all skin types incl. sensitive/
reactive; premium/affordable-luxe ($14–$118 individual, kits to $372 CAD). Values: clean-over-clinical, provenance, minimalism, sustainability.

## USP / value prop
- **Minimal edit, maximum efficacy** — "A pared-back roster of select staples, luxurious in their inherent minimalism. All you need, for any time."
- **100% botanical / toxin-free** — "formulated from 100% natural and nature-derived ingredients… toxin-free, biodegradable, handcrafted."
- **Multi-use / versatile** — "Every product is multi-tasking and multi-use, designed for versatility and seamless layering."
- **Handcrafted in Toronto, Canada** — designed, formulated & bottled by hand.
- **Sustainability / circular packaging** — FSC + Rainforest Alliance paper, 100% PCW, TerraCycle, refills. Anti-greenwashing.

## Tone
Quiet, editorial, precise minimalism. No exclamation marks, no hyperbole. Declarative, brief, confident. Architectural
verbs (define, restore, balance, support, sculpt). Values-forward. NOT clinical, NOT chatty, NOT aggressive DTC.

## Design tokens (from live site — faithful, minimal)
- **Real fonts:** custom **basic-commercial** (refined neo-grotesque, Helvetica-adjacent) for everything + **quigong** (calligraphic accent, sparing).
  → display **Hanken Grotesk** (warm grotesque) + body **Inter** (neutral). Both Google Fonts. Minimal, clean.
- **Real palette (2-color system):** PRIMARY **dark olive green #3F4536** (CTAs, footer, dark sections, borders, links); warm
  near-white **#FDFBF6** (page/header/cards); warm cream/tan **#F8F1E1** (alt surface / text on olive); light sage **#F2F4E5**;
  body ink olive-charcoal **#464C3A**. → Elevated: warm near-white bg + olive accent + cream/sage bands + cream text on olive. Earthy, calm, minimal.
- **Buttons:** olive #3F4536 bg, cream #F8F1E1 text, UPPERCASE, bold, TRACKED (~1px), radius ~2px (near-square). Keep.
- **Type:** quiet — headings ~30px (restrained), body 16px, line-height ~1.2 (tight), letter-spacing .4px global; nav/labels UPPERCASE tracked.
- **Shape:** **radius 0–2px (square)** everywhere, **NO shadows**, thin 1px olive borders. Container 1240px. Generous full-bleed edge-to-edge sections.

## Real logo (hard requirement) — INLINE SVG wordmark (no image file)
Logo is an inline-SVG **"F. MILLER" wordmark** (custom lettering, `fill=currentColor` → olive on light, cream on dark).
No PNG/JPG asset exists. → reproduce as a styled TEXT wordmark "F. MILLER" (tracked caps, display font); olive on light header,
cream on dark footer. (Faithful — it's a lettering wordmark.) [[redesign-verify-brand-and-screenshot]]

## Imagery plan — ALL HOTLINK (verified 200; strong still-life/pack shots + oil-drop textures; no generation)
- **HERO (split, editorial right):** serum-in-ceramic-cup `https://fmillerskincare.com/cdn/shop/files/FMiller_Mar24_022.jpg?v=1774468878` (portrait editorial, best owned hero). Alt model skin close-up below.
- **Essentials grid (6, clean cream-bg pack shots):** Face Oil `…/FMiller_FaceOil_10-25.jpg?v=1762293970` · Support Serum `…/Serum-10-25.jpg?v=1762291651` · Cleansing Oil `…/CLEANSINGOIL_100ML_CAP.jpg?v=1762292120` · Toning Mist `…/TONINGMIST_100ML_CAP.jpg?v=1762291314` · Body Oil `…/BODYOIL_100ML_CAP.jpg?v=1762291873` · Sculpting Tool `…/GUASHA_01.jpg?v=1776195004`.
- **Face Oil feature (texture):** golden oil drops `https://cdn.shopify.com/s/files/1/0246/2508/6498/products/221107_FMiller_SHOT1_0135_FaceOil_v2.jpg?v=1762293970` + Face Oil pack shot.
- **Editorial band (only model/skin shot):** `https://fmillerskincare.com/cdn/shop/files/TINT_03_054.jpg?v=1707760862` (glowing skin close-up).
- **Press strip:** text wordmarks (Harper's Bazaar · ELLE · GQ · Architectural Digest · Forbes · Esquire). No images.
- No generation (strong real imagery). Optional: an amber oil-droplet float (matches oils) — skip to stay minimal/fast.

## Products (EN · CAD)
Face Oil $118 · Support Serum $98 · Sculpting Tool $94 · Eye Oil $92 · Body Oil $88 · Cleansing Oil $80 · Toning Mist $60 ·
Hair Oil $58 · Shave Oil $58 · Hand & Body Wash $48 · Tinted Balm $22 · Discovery Kit $62 · Essential Sculpting Duo $194 · The Face Kit $372.

## Nav (EN)
Face · Hair & Body · Kits · Objects · All

## Section order (home — skincare minimal-editorial, EN)
announce (free shipping over $150 · 100% botanical · handcrafted in Toronto) → header (F. MILLER wordmark) → HERO split
("All you need, for any time." + 1 CTA + serum editorial) → ethos/trust strip (100% botanical · toxin-free · handcrafted
in Toronto · circular packaging) → the essentials grid (6 products + prices) → Face Oil feature (21 botanicals + oil-drop
texture + multi-use) → ethos "no / yes" band (No: compromises/cruelty/greenwashing/overcomplication · Yes: efficacy/ethical
sourcing/transparency/sustainability) → editorial band (model skin close-up + "high performance essentials…" quote) → press
strip (as seen in) → reviews (★4.99 Face Oil + believable, mark mockup) → newsletter → footer (dark olive, cream wordmark).

## Lessons applied
- Verify real brand (F. MILLER; logo = inline-SVG wordmark → reproduce as tracked text, olive/cream). [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min — [[headless-chrome-mobile-minwidth]]); no generation — [[redesign-tooling-broken]].
- Define every CSS token; reveal `.in` (not `.is-visible`); hero img path `assets/…`; cap 2-col gaps; strip stray section <link>s on assemble; noscript reveal fallback; logo/contrast check.
