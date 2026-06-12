# Nova Coffee — research (home page redesign)

## Brand
- **Nova Coffee** (novacoffee.com) — **Lakeville, Nova Scotia, Canada**. The **longest-established
  coffee company in Nova Scotia**, **family-owned since 1973 (50+ years)**. Roasts & supplies coffee
  to restaurants, cafés, offices + retail. Sub-brand: **Mariners Cove Coffee Co** (300g recyclable tins).
- **What they sell:** single-origin + blend **roasted coffee** (whole/ground), espresso & filter,
  **subscriptions**, teas, Monin syrups, accessories/cleaning, local-makers collection.
- **Real products (bags, $25–28):** Mariners Cove (Light), Black Dog Espresso (Med-Dark), Bella
  Royale, Dragon's Breath (Very Dark), Bella Sera, single origins (Mexican/Colombian/Ethiopian/
  Peruvian/Guatemalan/Sumatran/French/Sumatran), Mountain Water Decaf, 5×1lb Variety Pack ($114),
  Sample Packs 4×90g ($20). Roast levels: **Light · Medium-Dark · Very Dark**.
- **ICP:** NS/Canadian coffee drinkers + gift buyers; wholesale cafés/offices; value heritage,
  freshness, local Nova Scotia roasting, approachable everyday quality (not snobby third-wave).
- **USP / angles:** 50+ years family-owned · roasted in Nova Scotia · longest-established NS roaster ·
  named blends with maritime character · subscription/fresh · wholesale expertise.
- **Tone:** warm, heritage, maritime, friendly, trustworthy — "crafted for every moment."

## Language
- **English.** Lakeville, **Nova Scotia** (not Québec); `lang="en"`; the country-selector is a
  CAD/USD currency switch, NOT a FR toggle. Keep EN.

## Design tokens — TRUE palette read from the RENDERED site (NOT the theme tokens)
- The live site bg = **warm pale butter-cream**; Nova logo = **burnt orange/amber** wordmark + NC
  monogram; CTAs/headings **black**; Mariners Cove sub-logo = golden-yellow + navy fisherman.
  ⚠️ The `#108474` teal in the HTML is an **unused Shopify theme default** — do NOT use it
  (palette-from-real-screenshot rule).
- **Palette to build:** bg warm cream `#f7f2e4`, surface `#fffdf7`, warm band `#f1e7cf` (butter),
  ink near-black `#1a1714`, **accent burnt-orange `#c5701a`** (Nova's real logo color), roast-brown
  `#4a2c1a` (pop / dark bands), maritime **navy `#1f3a4d`** as a sparing support (Mariners Cove).
- **Type:** their real font = **Figtree** (geometric sans) → keep for body/UI. Add a warm heritage
  **display serif "Fraunces"** for headlines (elevates the 1973 craft story — "their brand, elevated").
- **Aesthetic:** warm editorial-premium, lifestyle-first, generous whitespace; NOT discount-grid.

## Imagery plan (coffee ref: lifestyle hero/editorial + white-bg packshot grid; floats = beans)
- **Logo (real):** assets/logo.png (Nova Coffee orange wordmark/monogram). On dark footer → invert.
- **Real bag packshots (hotlink/downloaded):** bag-marinerscove, bag-blackdog, bag-dragonsbreathe,
  bag-mexican, bag-colombian, bag-Ethiopian, bag-french (900×1165 PNG on white) — bestseller grid +
  shop-by-roast tiles.
- **Generate (Flux) the lifestyle the brand lacks:** warm coffee-ritual hero (cup+beans+bag, cozy,
  negative space), roasting/origin editorial (beans from roaster), **Nova Scotia coast** heritage-band
  bg (lighthouse/harbour), **roasted beans on white** for floats (keyable), bean texture.
- NO generated bags (use real packshots — labels carry equity). Picker artifact-checks AI.

## Niche
- **coffee** — reference EXISTS (`references/coffee.md`, exemplar Clive). BUT Clive is an
  **equipment retailer**; Nova is a **ROASTER**. Reinterpret the warm-editorial DNA + imagery rules,
  but swap the section architecture: replace "authorized machine brands / financing" with
  **shop-by-roast-level · single-origins · subscription · heritage(1973)**.

## Hero variant
- **Full-bleed warm lifestyle hero + contained text card** (coffee-ref default; rotates from recent
  split/PDP builds). Mobile → full-bleed image + bottom scrim, text + 1 CTA at bottom.

## Section plan (roaster home)
announce(free ship/since 1973) · header · hero(full-bleed) · trust strip(roasted in NS · since 1973 ·
fresh-roasted · subscribe&save) · shop-by-roast (Light/Med-Dark/Very Dark tiles) · bestseller bags
(grid w/ prices + roast tags) · subscription band (warm) · heritage band (Nova Scotia coast, since
1973 story) · reviews(6) · newsletter · footer.
