# Viva Health Skincare — research (home redesign)

**URL:** https://vivahealthskincare.com/ · **Page:** home · **Slug:** viva
**Niche:** skincare-cosmetics (natural · plant-based · results-driven) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Shopify.locale="en", `locales:[en]` only, no FR toggle; .com; hreflang en-CN/en-US/x-default). Bilingual Canadian product labels only. Bruno confirmed EN.

## Brand
**Viva Health Skincare** — "Founded in Canada and trusted since 2001." Natural, results-driven formulas
that are **plant-based and cruelty-free**; "clean, effective skincare for everyday use." Has a premium
**"Advanced Revitalizing Series — next-level care for mature skin"** (NiaBoost, Niacera, Plunge).
Gold tree-of-life wordmark → premium-natural, heritage, botanical.

## ICP
Skin-conscious women ~30–60 wanting clean/natural skincare that actually works — gentle on skin, plant-based,
cruelty-free, made by a trusted Canadian brand (since 2001). Older segment for the anti-aging Revitalizing
Series. Buy on: clean+natural + real efficacy + heritage/trust + cruelty-free values.

## USP / value prop (EN)
- **Plant-based, clean formulas** — natural ingredients, results-driven.
- **Cruelty-free**, made in **Canada**, **trusted since 2001** (heritage = trust).
- **Advanced Revitalizing Series** for mature skin (NiaBoost Radiance, Niacera Lift, Plunge Recovery).
- Everyday clean skincare + premium actives (hyaluronic acid, niacinamide, vitamin C, collagen).

## Tone
Warm-natural premium, calm, botanical, trustworthy. Heritage confidence ("since 2001"), not loud-DTC.

## Design tokens (REAL brand cues → elevated)
- **Logo (hotlink/local, transparent):** gold gradient **VIVA** wordmark with a **tree-of-life** mark for
  the first "I" (leafy canopy + roots). Saved `assets/logo.png` (transparent, 600×216). Reads on cream AND
  on deep green (no invert needed — it's already gold). [[redesign-verify-brand-and-screenshot]]
- **Real palette read from rendered site + logo** ([[palette-from-real-screenshot]]): GOLD/brass (logo),
  sage/forest GREEN (plant-based, leaf icons), bamboo tan (lids), warm cream/white. (Real site hero was a
  generic aqua-blue — ignore; the brand identity is gold + green + cream.)
- **Elevated palette:** warm cream/ivory bg, deep forest-green ink + primary, **gold/brass accent**
  (eyebrows, CTA, rules), soft sage fills/alt bands, white surfaces, bamboo-tan warm pop. Luxe-botanical.
- **Type:** display = **Cormorant Garamond** (elegant high-contrast serif — matches the thin gold wordmark)
  · body = **Mulish** (clean humanist sans). Both Google Fonts.

## Imagery plan — HOTLINK real packshots (verified 200 at ?width=N); hero = product in designed frame
Real product shots are clean/consistent (white/cream ground, bamboo lids, gold branding) → hotlink them.
No good lifestyle photo + gen tooling dead ([[redesign-tooling-broken]]) → hero = premium product shot in a
designed cream/sage frame (split hero), NOT a generated person. CDN base `https://cdn.shopify.com/s/files/1/2239/9265/`.

| Product | $CAD | image src (use ?width=700/600) |
|---|---|---|
| Amaze Cream | 39.95 | products/amaze_cream_wbox.jpg |
| NiaBoost Radiance Serum | 85.95 | files/Website_pics_4.png |
| Niacera Lift Cream | 65.55 | files/9_8d1a54ac-af8e-4d50-9468-25b813eaa515.png |
| Pure Hyaluronic Acid Serum | 57.95 | files/3_fe894df2-a9a5-451f-9aa7-ee5666fdb4e3.png |
| Plunge Recovery Gel | 62.36 | files/11_2a0831fd-67cc-469e-bac9-4ffaf50f9f4d.png |
| Amaze Exfoliating Gel | 47.95 | files/1_83838336-5f38-4b4d-8719-5ecc4755a1d4.png |
| Bio Brightening C Serum | 56.95 | products/bio_brightening_c_serum_wbox.jpg |
| Daily Glow Moisturizer | 18.95 | products/DailyGlow.jpg |
| Firming Eye Cream | 51.95 | products/FirmingEyeCreamBoth.jpg |

## Nav (EN — converting links only; About/Contact → footer per [[nav-no-utility-links]])
Bestsellers · Serums · Moisturizers · Revitalizing Series · Our Story

## Section order (home — skincare structure, warm-natural premium, EN)
announce (free shipping over $X · cruelty-free · since 2001) → header (cream, gold VIVA logo) →
HERO (split: cream text panel + framed product on sage/cream) → trust strip (plant-based · cruelty-free ·
clean formulas · Canadian since 2001) → bestsellers grid (6, hotlinked, ★+badges) → Advanced Revitalizing
Series feature band (image-led, mature skin) → clean-formulation band (SVG icons: what's in / never) →
"trusted since 2001" heritage story band → reviews wall (6+, 2 rows, ★ summary) → newsletter → footer.

## Lessons applied
- Real brand verified (Viva Health Skincare, gold tree VIVA logo). Screenshot DEPLOYED page before done — [[redesign-verify-brand-and-screenshot]].
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), NO gen/Flux/Gemini, no floats reliance — [[redesign-tooling-broken]].
- Hotlink exact products.json `src` URLs (the /files/ vs /products/ path differs per item; guessing 404s).
- Define every CSS token used; relative asset paths (`assets/…`); all outbound links → google.com placeholder.
