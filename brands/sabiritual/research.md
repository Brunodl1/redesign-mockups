# SABI RITUAL — research (home redesign)

**URL:** https://www.sabiritual.com/ · **Page:** home · **Slug:** sabiritual
**Niche:** skincare-cosmetics (clean · botanical · luxe · "ritual") · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Bruno-pattern). `.com`/Canadian, FR toggle exists, BUT loads EN
(`Shopify.locale="en"`), English brand identity + positioning. Build EN; flag to flip FR if wanted.

## Brand
**SABI RITUAL** — premium, minimal, intentional **clean botanical skincare**. Tagline **"A nourishing
skincare ritual for radiant skin"**; philosophy **"RAW. NATURAL. TIMELESS."** Botanical formulas paired
with sculptural stone **"ritual objects"** (The Base N°1/N°2 in Onyx) — "a foundation for intentional
living." **Proudly made in Canada.** Voice: mindful, meditative, botanical-healing (NOT clinical).

## ICP
Wellness-conscious, intentional-living, clean-beauty buyers at a **premium price point** who value
sustainability, mindfulness, and ritual. They buy the *experience* + the values, not just the product.

## USP / value prop
- **100% natural · no toxins · no fillers · vegan · cruelty-free · sustainable (FSC) packaging.**
- **Botanical, nutrient-dense formulas** — certified organic / ethically wildcrafted.
- **The "ritual"** — skincare + sculptural stone objects as anchors for intentional daily practice.
- **Proudly made in Canada** · free shipping across Canada · 15% bundle savings (Ritual + Object).
- Social proof: **5.0★** (verified reviews).

## Tone
Calm, intentional, elevated, earthy. Sparse poetic copy. Premium editorial.

## Design tokens (from live site)
- **Real fonts:** **IBM Plex Sans** (heading + body). Use as-is for UI/body; add a refined serif
  display (Fraunces) for large headings to elevate the editorial-botanical feel.
- **Logo:** "SABI RITUAL" wordmark (refined transitional letterforms). Black variant +
  a **Sienna** variant. Horizontal, ~400×49.
- **Real brand palette:** emerald-green **#108474**, sienna/terracotta **#853A1C**, warm cream
  **#FDF9F5**, warm taupe **#6B6456**, near-black, white. Earthy botanical luxe.
- **Elevated palette:** warm cream bg, deep ink, **emerald** accent + **sienna** secondary pop,
  taupe neutrals. Calm, premium, botanical.

## Real logo (hotlink — hard requirement) — verified, viewed
Black: `https://www.sabiritual.com/cdn/shop/files/Logo_Black_website.png?width=400`
Sienna: `https://www.sabiritual.com/cdn/shop/files/Logo_2_-_Sienna.png?width=400`
(Horizontal black wordmark; on a dark footer invert to white or use the sienna/light variant.)
NOTE: download the logo LOCALLY (assets/logo.png) to avoid any hotlink/headless issues — and verify
it actually renders in the header (past builds: logo CSS bugs hid it). See [[redesign-verify-brand-and-screenshot]].

## Imagery plan — hero (picker: real vs generated Flux); products HOTLINK (verified 200, cryptic names → labeled by picker)
Base `https://www.sabiritual.com/cdn/shop/files/<FILE>?width=<N>`. Real candidates (picker labels them):
Trio-06858_revues.jpg · 6990_FULL_c029cd10-….jpg · 7129_FULL.jpg · DSC02839_1.jpg ·
DSC02849_….jpg · DSC02897_1.jpg · IMG_4708.jpg
Hero: generated `assets/hero-v1..4.png` OR a real lifestyle shot → picker decides → `assets/hero.jpg`.

**Products (name · ~price CAD):** The Botanical Ritual (3-piece) $245 · The Glow Duo $185 ·
Serum (Vitamins-boost) ~$95 · Cleansing Oil ~$68 · Flower Water Mist ~$58 · Ritual Object N°1 — The
Base (Onyx) ~$120. (Assign images from picker's labels/suggested map.)

## Nav (EN)
Shop All · Skincare · Objects · Rituals & Bundles · Our World · Story

## Section order (home — skincare structure, clean-botanical-luxe)
announce (free ship Canada · 100% natural) → header (cream, SABI RITUAL logo) → HERO (split, "A nourishing
ritual…", 1 CTA) → trust strip (100% natural · no toxins · vegan · made in Canada) → flagship "The Botanical
Ritual" feature → bestsellers grid → the "ritual object" editorial band (stones / intentional living) →
clean-promise / what's-out band (no toxins/fillers) → reviews (★5.0) → brand-story/sustainability band →
newsletter → footer.

## Lessons applied
- Verify real brand (SABI RITUAL). Download logo local + confirm it RENDERS centered. [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), Flux hero, no floats — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9); reveal class must be `.in` (not `.is-visible`); hero img path `assets/…` (not `../assets/…`); cap founder/2-col gaps so columns don't touch.
