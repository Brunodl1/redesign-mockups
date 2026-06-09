# Hipbees — research (home redesign)

**URL:** https://www.hipbees.com/ · **Page:** home · **Slug:** hipbees
**Niche:** skincare-cosmetics (natural · honey/hemp/terpene · playful · multi-category: face/body/bath/pet) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Shopify.locale="en", lang="en", no FR toggle/hreflang). .com, ships CAD/Canada. EN.

## Brand
**Hipbees** — "Mindful and practical skincare infused with **hemp, honey and terpenes**." Playful, warm,
eco/natural personal-care brand: soaps, beeswax lip balm, bath soaks, whipped body butter, solid face
cleanser, serum, powder mask, candles + **pet care** (paw wax) & home. Bee/honey identity, hand-lettered
green wordmark, punny voice ("Bee-utiful Finds", "The Buzz", "JOMO Mask™", "Pore Hustler™", "Groovy Glow™").
Cruelty-free, eco, made in Canada. Their real site = video hero + weak SEO (title "Facebook icon", no og
image) → strong redesign candidate.

## ICP
Eco-conscious women ~25–45 who want fun, natural, low-tox skincare that doesn't take itself too seriously —
honey/hemp/plant-based, plastic-conscious, cruelty-free, multi-use (face, body, bath, even the dog). Buy on:
natural+effective + playful personality + honey/hemp story + eco values + giftable bundles.

## USP / value prop (EN)
- **Hemp + honey + terpenes** — mindful, practical, naturally effective skincare.
- **Cruelty-free, eco/low-waste, made in Canada.**
- **For all of you** — face, body, bath & home, even **pet care** (Paw Wax).
- **Playful & giftable** — fun named products + value bundles.

## Tone
Playful, warm, cheeky-but-caring, upbeat, friendly. Bee/honey puns. Approachable natural beauty, not clinical.

## Design tokens (REAL site DOM-dump → elevated)
- **Logo (local, transparent):** hand-lettered **green "Hipbees"** wordmark + honeycomb-heart/hands mark.
  Saved `assets/logo.png` (transparent, 700×270); `assets/logo-white.png` = white version for dark footer.
- **Real palette (from DOM):** brand GREEN **#108474** (logo/primary), CORAL **#F7A093** (announce/promo),
  HONEY-GOLD **#FBCD0A** (bee pop), warm cream **#F6F2EB** bg, warm-brown text **#695F4E**, blush #FCD9D4.
- **Real type:** **Montserrat** (their actual font) + Chivo. → display = Montserrat (700/800, friendly geometric),
  body = Nunito Sans (soft, warm, readable). Both Google Fonts.
- **Elevated palette:** warm cream bg, deep warm-brown/green ink, GREEN primary CTAs (pill), CORAL + HONEY-GOLD
  playful accents/badges, blush + sage tints for alt bands, deep green footer. Honeycomb/hexagon motif accents.

## Imagery plan — HOTLINK real packshots (verified 200 at ?width=N); hero = featured product
Homepage is JS-rendered (no img URLs in raw HTML) + a video hero (can't capture); lifestyle shots have baked
promo text → use products.json `src` URLs. Product shots are a consistent warm honey/bamboo-lid style (mix of
real + AI, all on-brand). NO generation (tooling dead — [[redesign-tooling-broken]]). CDN base `https://cdn.shopify.com/s/files/1/0487/6229/`.
- **HERO (split, playful):** Touch & Glow™ Whipped Body Butter on a warm coral/honey panel w/ hexagon accents.
  `products/touch-glow-whipped-body-butter-517123.jpg`
- **BESTSELLERS (hotlink, ?width=600) — mix face/body/bath/pet:**
  | Product (playful ™ names) | $CAD | src |
  |---|---|---|
  | Touch & Glow™ Whipped Body Butter | 25 | products/touch-glow-whipped-body-butter-517123.jpg |
  | Pore Hustler™ Solid Face Cleanser | 38 | products/pore-hustler-solid-face-cleanser-680443.jpg |
  | JOMO Mask™ Powder Face Mask | 20 | products/jomo-mask-powder-face-mask-341335.jpg |
  | Groovy Glow™ Face Serum | 42 | files/gps_generated_71495f76-aef0-451e-a519-651091874d01.png |
  | Exfoliating Milk & Honey Soap | 6.50 | files/HBExfoliatingMilk_HoneySoap-withOatmeal_5.png |
  | Beeswax Lip Balm | 6 | files/Untitleddesign_12.png |
  | Milk + Honey Bath Soak | 8 | files/gps_generated_1b84fd94-3330-441a-aefc-533e3cae9324.png |
  | Paw Wax (for pets) | 18 | files/gps_generated_8a4d932a-deee-4990-9daa-c2ad9aa2e825.png |
  (NOTE: exact serum filename — re-confirm `gps_generated_71495f76-...d01.png` from products.json before build.)
- **STORY / lifestyle:** Milk+Honey Bath Soak flatlay (honey, honeycomb) or the coral-ground Hipbees soap.

## Categories (real) & Nav
Cats: Face · Body · Bath & Home · Pets · Bundles · Soap.
Nav (EN, converting links; About/Contact → footer per [[nav-no-utility-links]]): Shop All · Face · Body · Bath & Home · Pets · Our Story

## Section order (home — playful natural multi-category, EN)
announce (free shipping over $50 CAD · cruelty-free · made in Canada) → header (cream, green Hipbees logo) →
HERO (split playful: "Clean skincare, naturally sweet" + body butter, honey/coral, hexagon accents) → values
strip (hemp+honey+terpenes · cruelty-free · eco/low-waste · made in Canada — SVG icons) → shop-by-category
tiles (Face / Body / Bath & Home / Pets) → bestsellers grid (8, playful names, ★+badges) → "hemp + honey +
terpenes" ingredient/difference band (honey-gold/green) → story band ("Meet the Hipbees", warm lifestyle) →
reviews wall (6, ★ summary) → newsletter (20% off first order) → footer (deep green, white logo).

## Lessons applied
- Real brand verified (Hipbees, green hand-lettered logo). Screenshot DEPLOYED page before done — [[redesign-verify-brand-and-screenshot]].
- Tooling broken: DOM-dump for JS-rendered site, headless-Chrome shots (~500px min — [[headless-chrome-mobile-minwidth]]), NO gen — [[redesign-tooling-broken]].
- Hotlink exact products.json `src` URLs (/files/ vs /products/ path differs per item; guessing 404s).
- Define every CSS token; relative asset paths (`assets/…`); outbound links → google.com; nav = converting links only.
