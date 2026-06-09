# Oresta — research (home redesign)

**URL:** https://oresta.ca/ · **Page:** home · **Slug:** oresta
**Niche:** skincare-cosmetics (CURATED multi-brand CLEAN-BEAUTY boutique + skin services) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Shopify.locale="en", lang="en", no FR toggle/hreflang). .ca + Ottawa, but English-only store & wholly English brand voice → EN (skill's FR default applies only to .ca that OFFER French; Oresta doesn't). Bruno's analogous Viva call = EN.

## Brand
**Oresta — "Mindful Beauty"** (Ottawa). A curated CLEAN-BEAUTY BOUTIQUE + skin-expert studio (facials, courses).
"We understand skin, ingredients and how to achieve a healthy, radiant complexion, naturally. Our clean
beauty boutique carries a unique selection of superior, result-oriented organic beauty products." Not a single
line — a tastefully curated multi-brand edit by skin experts. Signature flowing-script wordmark = editorial,
minimal, warm, mindful.

## ICP
Skin-conscious women ~30–55 who want EFFECTIVE clean/green beauty without decoding labels — they trust
Oresta's expert curation. Buy on: clean/non-toxic + expertly vetted + real results + indie/organic brands +
boutique trust & skin expertise.

## USP / value prop (EN)
- **Expertly curated clean beauty** — skin experts vet every brand; no decoding labels.
- **Clean, non-toxic, organic, cruelty-free** — results-oriented green beauty.
- **A multi-brand edit**: Eminence, Ere Perez, Rahua, Laurel Skin, Living Libations, Josh Rosebrook,
  FitGlow, Kahina, Blissoma, Wonderblush, Bathorium, Kaia Naturals + Oresta's own services.
- **Real skin expertise** — facials, holistic skin courses, mindful-beauty philosophy.

## Tone
Minimal, editorial, warm, calm, "mindful." Premium-but-approachable. Confident skin-expert voice; lots of
white space; signature script flourish. NOT loud-DTC, NOT clinical.

## Design tokens (REAL site + logo → elevated editorial)
- **Logo (local, transparent):** flowing signature script **"Oresta"** + tracked caps **"MINDFUL BEAUTY"**,
  charcoal/near-black. Saved `assets/logo.png`; `assets/logo-white.png` = white version for the dark footer.
- **Palette read from rendered site** ([[palette-from-real-screenshot]]): warm off-white, charcoal/near-black ink,
  soft blush/nude (the peachy promo band), black CTA pills, touches of botanical green. Minimal warm-neutral.
- **Elevated palette:** warm off-white bg, charcoal ink, soft blush/nude alt band, warm-clay accent
  (eyebrows/rules), CHARCOAL primary buttons (matches their black "SHOP NOW"), sage green tint for botanical
  accents, white surfaces. Editorial, calm, premium.
- **Type:** display = **Marcellus** (elegant editorial serif, airy — distinct from Viva's Cormorant) ·
  body = **Jost** (clean geometric sans, fashion-editorial). Both Google Fonts. (Logo script carries the
  signature flourish; eyebrows = Jost tracked caps like "MINDFUL BEAUTY".)

## Imagery plan — HOTLINK real packshots + the real boutique photo; hero = curated product trio
Homepage lazy-loads imgs (raw HTML has none) → use products.json `src` URLs (verified) + the og boutique photo.
NO generation (tooling dead — [[redesign-tooling-broken]]).
- **HERO (split editorial):** text panel left + a CURATED TRIO of real products right on a blush ground
  (says "the edit"): Laurel Rose Geranium Hydrosol (black), Eminence Mangosteen Body Lotion (white), HUNA
  Nail + Cuticle Oil (amber). CDN base `https://cdn.shopify.com/s/files/1/0001/1845/`.
- **STORY band:** hotlink the real boutique interior photo (has "Oresta · Mindful Beauty" script baked in —
  ideal for a story/about band): `https://oresta.ca/cdn/shop/files/SEO_social_sharing.jpg?width=1400`.
- **BESTSELLERS (multi-brand, hotlink, ?width=600):**
  | Brand | Product | $CAD | src |
  |---|---|---|---|
  | Eminence Organics | Mangosteen Body Lotion | 47 | products/eminence-organics-eminence-mangosteen-body-lotion-920362.jpg |
  | Laurel Skin | Rose Geranium Hydrosol | 69 | products/laurel-skin-laurel-rose-geranium-hydrosol-5971833.jpg |
  | Rahua | Defining Hair Spray | 78 | files/rahua-rahua-defining-hair-spray-9781153.webp |
  | Ere Perez | Rice Powder Bronzer – Tulum | 58 | products/ere-perez-ere-perez-rice-powder-bronzer-tulum-955927.jpg |
  | Wonderblush | Le Fondant Cream Blush | 46 | files/wonderblush-wonderblush-le-fondant-cream-blush-3045722.jpg |
  | HUNA | Nail + Cuticle Oil | 34 | products/huna-huna-nail-cuticle-oil-1588340.png |
  | Blissoma | Lavish Recovery Mask | 113 | files/blissoma-blissoma-lavish-recovery-beta-glucan-mask-blissomalavish-377058.jpg |
  | Bathorium | Hinoki Magnesium Bath Soak | 40 | files/bathorium-bathorium-hinoki-magnesium-bath-soak-bathoriumhinoki-1-4015149.jpg |

## Categories (real collections) & Brands carried
Cats: New · Cleansers · Toners · Serums · Moisturizers · Exfoliants · Masques · Sunscreen · Tools · Sets · Gift cards.
Brands: Eminence Organics · Ere Perez · Rahua · Laurel Skin · Living Libations · Josh Rosebrook · FitGlow Beauty ·
Kahina · Blissoma · Wonderblush · Bathorium · Kaia Naturals.

## Nav (EN — converting links; About/Contact → footer per [[nav-no-utility-links]])
New · Cleansers · Serums · Moisturizers · Shop by Brand · Our Story

## Section order (home — curated clean-beauty boutique, editorial, EN)
announce (free shipping over $X · clean & non-toxic · expertly curated) → header (off-white, script logo) →
HERO (split editorial: "Clean beauty, expertly curated" + curated product trio) → values strip (clean &
non-toxic · cruelty-free · expertly curated · independent brands — SVG icons) → shop-by-category tiles
(routine) → bestsellers grid (multi-brand, ★+badges) → "Brands we love" strip (typographic brand names) →
editorial STORY band (real boutique photo + skin-expert/mindful-beauty curation copy) → reviews wall (6, ★
summary) → newsletter → footer (dark, white logo).

## Lessons applied
- Real brand verified (Oresta Mindful Beauty, Ottawa, script logo). Screenshot DEPLOYED page before done — [[redesign-verify-brand-and-screenshot]].
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min — [[headless-chrome-mobile-minwidth]]), NO gen — [[redesign-tooling-broken]].
- Boutique og photo has baked script → use in STORY band, NOT hero (no clean wide text-free crop).
- Hotlink exact products.json `src` URLs (/files/ vs /products/ path differs per item). Define every CSS token; relative asset paths; outbound links → google.com.
