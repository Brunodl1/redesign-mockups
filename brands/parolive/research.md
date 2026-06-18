# Par Olive — PEARL Marine Collagen Superpowder (Organic Coconut) — PRODUCT page redesign

## Brand
- **Par Olive** (au.parolive.com) — Australian DTC "beauty-from-within" supplement brand. Dermatologist-developed, clinical-but-warm, "skin longevity system". Shopify. **EN (Australian English)**.
- Logo (REAL, hotlink): `https://au.parolive.com/cdn/shop/files/PO_logo_2025_BLK.png?width=600` — **BLACK logo** → light/white header; on the dark footer invert (`filter:brightness(0) invert(1)`).

## Product (this PDP)
- **PEARL Marine Collagen Superpowder (Organic Coconut)** — a marine collagen peptide powder that doubles as an **organic coconut creamer** (blends into coffee/tea, hot-water soluble).
- Formula: wild-caught **Norwegian marine collagen** + freshwater **pearl powder** + Australian **Kakadu plum** (native Vit C) + **organic coconut**. No fillers, no artificial/'natural' flavourings.
- Specs: **150g / 30 serves**. **Price: AUD $89** jar · **$79** refill pouch · **$159** full "Skin Longevity System" bundle (was $168).
- **Subscribe & Save 15%** every order + free shipping + gift with first purchase.
- Variants/formats: **Jar (150g)** / **Refill Pouch** (same formula).

## ICP / pains / desires
Women 35–60+, health-conscious, already a morning-coffee ritual, want visible skin/hair/nail results without overhauling routine.
- Pains: powders that clump/taste bad/don't dissolve · uncertainty on sourcing/quality · no visible results from past supplements.
- Desires: firmer skin / thicker hair / stronger nails (visible proof) · effortless add to existing coffee ritual · full transparency (where it's from, who made it).

## USP + proof (quote real copy)
**USP:** The marine collagen designed to *replace your coffee creamer* — clinically formulated, single-origin traceable Norwegian collagen + pearl + Kakadu plum, dermatologist-developed.
1. "Clinically formulated. Beauty from within."
2. "Dermatologist-developed clinical collagen peptide formula."
3. "Full supply chain transparency down to the exact boat and catch area in Norway."
4. "Single origin collagen, no fillers, no artificial, or 'natural' flavourings."
5. "Clinically proven, traceable, and sustainably sourced."
- "Each ingredient works in synergy to stimulate collagen production, protect cells from premature ageing, and promote firm skin, thick hair, and strong nails."
- "Effortlessly blends into tea, coffee." / "Start with the jar, stay consistent with refills."

## Reviews
**4.8 ★ / 472 reviews** (sitewide "1000+"). Pull-quotes (real):
- "My skin appears healthier and more moisturized… helping reduce fine lines and wrinkles." — Ramona E.
- "The only collagen I've actually noticed a tangible difference in my skin with." — Jess M.
- "Crazy how much difference this product has made… much brighter and tighter." — Anna G.
- "I love knowing the collagen is absorbed properly bc of the vitamin C from Kakadu plum." — Gabriele K.

## Real design tokens (from live site via `browser styles`)
- **Fonts:** body **Montserrat** (14px, #1c1c1c); headings **"Season"** (custom) — UPPERCASE, letter-spaced (~1.5px), weight 500. Closest Google match → **Fraunces** (modern soft serif, "longevity" warmth, good uppercase) for display, **Montserrat** body.
- **Colors:** ink **#1c1c1c** near-black on **#ffffff** white; dark band **#19080b** (near-black plum); soft grey text **#6a6c77**; light surface **#ededed**; **accent CORAL #F04860**; review stars **yellow #FBCA10**.
- **Buttons:** **SQUARE (border-radius 0)**, Montserrat, minimal. CRO redesign → elevate primary to a filled **dark #1c1c1c** (and a coral accent variant), keep square corners.
- Mood: premium clinical-beauty, white-dominant, generous whitespace, coral accent, elegant serif display. Use `references/supplements.md` conversion structure; PDP (single-product) architecture.

## Hero / page = PRODUCT (PDP)
Top = gallery (real packshots) + buy box with **variant selector (Jar/Refill)** + **subscription toggle** (One-time $89 / Subscribe & Save 15% → ~$75.65) + **dynamic price** + **sticky ATC** card. Real ★4.8/472.

## Sections (in order)
header (white, black logo) → announce (Subscribe & Save 15% · free shipping) → **PDP main** (gallery L + buy box R: name, ★4.8/472, dynamic price, format + subscription selectors, key bullets, ATC, trust icons) → trust strip (Norwegian marine · dermatologist-developed · made in Australia · no fillers) → benefits "Beauty from within" (skin/hair/nails/absorption icons) → ingredients & provenance (marine collagen + pearl + Kakadu plum + coconut, images) → how to use (blend into coffee/tea, 3 steps, lifestyle image) → science/transparency proof (traceable to the boat) → reviews (6 real quotes, ★4.8/472, yellow stars) → bundle/refill upsell ("start with the jar, stay consistent with refills") → FAQ → footer (dark plum #19080b, inverted logo).

## Imagery plan — hotlink real packshots; generate lifestyle + floats
### Hotlink (real CDN, base `https://au.parolive.com/cdn/shop/files/`, add `?width=1200`)
- Gallery packshots: `PDP_MCS_coconut_jar_1.png` … `_jar_6.png` (verified 200)
- Refill: `PDP_MCS_coconut_refill_1.png` · Bundle: `PDP_MCS_coconut_bundle_1.png` · Gift: `PDP_MCS_coconut_jar_gift.png`
- Ingredient composite: `ingredients_mega_menu.png`
- Logo: `PO_logo_2025_BLK.png`

### Generate
- `lifestyle` (Gemini composite, real jar) — morning coffee ritual: the real coconut jar beside a latte, coconut half, soft coral light, warm linen — for the how-to / ritual band. (~$0.08, 2 variants)
- `float-powder` (Flux) — soft cream-white collagen powder scoop / fine powder on pure white, no shadow → key.
- `float-coconut` (Flux) — fresh coconut half + a few drops on pure white, no shadow → key.
