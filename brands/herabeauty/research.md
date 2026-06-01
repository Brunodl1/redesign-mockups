# Hera Beauté — research (home redesign)

**URL:** https://herabeauty.ca/ · **Page:** home · **Slug:** herabeauty
**Niche:** hair (Black hair & beauty / wigs · braids · weaves · extensions · care)
**Reference:** `references/hair.md` (built this run from Ruka + Pattern + Mielle)
**Language:** **ENGLISH** (Bruno's call). NOTE: strong French signals (brand name "Hera
Beauté", Québec/Laval/Montréal, .ca, CAD, "Panier", "Essence de Beauté") — but product
copy loads EN and product names are EN. Build EN; keep brand/product proper names as-is.

## Brand
**Hera Beauté** — Québec (Laval/Montréal) **Black hair & beauty retailer**. Sells wigs
(lace, human-hair, synthetic, half), **braiding hair** (X-Pression, Outre, Freetress —
their volume driver), weaves/extensions, edge/lace products (Ampro Shine 'n Jam, Wonder
Lace Bond), hair & skin care (ORS, As I Am), K-beauty, **kids braids**, makeup (NK).
Tagline energy: "everything to celebrate your beauty."

## ICP
Black women in Québec/Canada (and their kids) shopping wigs, braiding hair, extensions,
edge/lace + care. Buy on: right texture/length/brand, will-it-look-like-the-model,
quality/trust, and low-risk (rewards, free-ship, bundles). Identity + self-expression.

## USP / value prop
- **Huge curated selection** of the trusted hair brands (X-Pression, Outre, Freetress,
  Sensationnel, ORS, Ampro, As I Am) in one place.
- **Québec-based**, CAD, fast local shipping; ships across Canada.
- **Rewards / points loyalty** program; **free shipping** threshold ("Free Shipping Booster").
- For the **whole family** (kids braids), all textures.
- "Celebrate your beauty" — joyful, inclusive, community.

## Tone
Warm, confident, joyful, celebratory, welcoming. Beauty-insider but inclusive.

## Design tokens (from live site — grepped raw HTML; cdp.py broken)
- **Brand accent: vivid PINK/MAGENTA `#E32A69`** (the logo SVG fill). This is THE brand color.
- Theme greys (#6A6A6A/#292929/#7A7A7A) = stock; white surfaces; amber `#C86800` minor.
- **Fonts:** **Instrument Sans** (headings) + **Inter** (body) — both Google Fonts.
- Elevated build (per `references/hair.md`): warm cream bg + deep ink + bold pink accent +
  bold color blocking + editorial model photography.

## Real logo (hotlink — hard requirement) — verified
`https://herabeauty.ca/cdn/shop/files/Logo_bdd93355-62cf-412d-81f4-6b24fc343bf7.svg?v=1761925608`
(SVG wordmark "Hera Beauté", pink `#E32A69`. Reads on a light/cream header. On the dark
footer, the pink shows fine, or use a white treatment.)

## HERO (Bruno's explicit instruction)
❗ **No 3-image carousel. ONE single image + ONE call-to-action + a brand statement.**
Approach: **bold two-tone color-block SPLIT** — left = pink brand panel with the brand
statement + ONE CTA (legible on solid color, no scrim needed); right = ONE editorial
model image. Hero image (picker-chosen, model on white → pairs cleanly beside a color block):
`sensationnel-lace-front-wig-with-90s-bangs-butta-lace-unit-915-model-front-smile-black-curly.jpg?v=1755630472`
Brand statement options: "Your beauty, celebrated." / "Wigs, braids & care for every crown."
Single CTA: "Shop the collection".

## Imagery plan — HOTLINK real shots (Shopify CDN, verified 200). NO generation needed.
Base: `https://herabeauty.ca/cdn/shop/files/<FILE>?width=<N>`
**Editorial model shots (hero / category tiles / editorial band):**
- sensationnel-...-butta-lace-unit-915-model-front-smile-black-curly.jpg?v=1755630472 (HERO)
- outre-x-pression-springy-afro-twist-...-long-distressed-locs-full-length-model.jpg?v=1756414145
- freetress-...-301-...-model-long-box-braids-ash-blonde-highlights.jpg?v=1756414147
- xpression-pre-stretched-braiding-hair-58-inch-model-side-profile-sleek-cornrow-braids.jpg?v=1756414126
- outre-jumbo-braid-hair-extensions-long-black-braided-woman.jpg?v=1754316411
- dashly-synthetic-afro-curly-wig-unit-19-honey-blonde-front-model-with-packaging.jpg?v=1756222827
**Bestsellers (product/model shots):**
| Name | Brand | type | CAD | File |
|---|---|---|---|---|
| Pre-Stretched Ultra Braid 52" 3X | X-Pression | Braiding hair | $12 | X-Pression-Pre-Stretched-Ultra-Braid-1_73729e62-2c12-47c1-9bae-3438b70c3a4a.png?v=1772743478 |
| Springy Afro Twist | Outre | Extensions | $15 | outre-x-pression-springy-afro-twist-hair-extensions-shoulder-length-model-1b-natural.jpg?v=1756414145 |
| Butta Lace Wig Unit 915 | Sensationnel | Lace wig | $55 | sensationnel-lace-front-wig-with-90s-bangs-butta-lace-unit-915-model-front-smile-black-curly.jpg?v=1755630472 |
| 3X Braid 301 56" | Freetress | Braiding hair | $13 | freetress-freetress-3x-braid-301-hair-extensions-model-long-box-braids-ash-blonde-highlights.jpg?v=1756414147 |
| EveryWear Every44 Lace Wig | Outre | Lace wig | $48 | outre-12-inch-synthetic-lace-front-wig-everywear-every44-deep-auburn-front-smile-model.png?v=1756831168 |
| Olive Oil Moisturizing Hair Lotion | ORS | Hair care | $11 | ORS-Olive-Oil-Moisturizing-Hair-Lotion-for-Strengthening.jpg?v=1757686494 |
| Shine 'n Jam Gel Extra Hold 8oz | Ampro | Edge/styling | $9 | ampro_Shine_N_Jam_Conditioning_Gel_Extra_Hold_8oz.png?v=1772212413 |
| Synthetic Full Wig Cedora | Wigpop | Wig | $42 | Wigpop-Synthetic-Full-Wig-Cedora.jpg?v=1757960682 |

**Category tiles:** Wigs · Braiding Hair · Weaves & Extensions · Hair & Skin Care · Kids · Makeup.
**Brand marquee:** X-Pression · Outre · Sensationnel · Freetress · ORS · Ampro · As I Am · Wonder Lace Bond.

## Nav (real menu, EN)
Wigs · Braiding Hair · Weaves · Hair & Skin Care · Kids · Brands · Sale

## Section order (home — per hair reference)
announce (free-ship + rewards) → header (cream, pink logo) → HERO (color-block split, 1 img,
1 CTA, brand statement) → trusted-brand marquee → shop-by-category tiles → bestsellers grid →
"celebrate your beauty" editorial band (1 model img + statement + CTA) → reviews wall (★) →
rewards/loyalty + value-props strip → newsletter (10% off) → footer.

## Lessons applied
- Real brand verified from logo/meta ("Hera Beauté"). Personally screenshot the DEPLOYED
  page before declaring done — see [[redesign-verify-brand-and-screenshot]].
- Tooling broken: raw-HTML research, headless-Chrome shots, no floats. See [[redesign-tooling-broken]].
