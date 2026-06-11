# Pehr — research (home page redesign)

## Brand
- **Pehr** (pehr.com) — Toronto-based premium **organic-cotton baby & kids** brand. GOTS-certified, hand-painted prints, design-led nursery.
- **Hero categories:** signature **canvas storage bins** (huge pattern range), **crib sheets / nursery bedding**, baby + kids **apparel** (rompers, sleepers, sets), swim, shoes, **diaper & weekender bags**, mobiles, blankets, gifts.
- **ICP:** design-conscious new & expecting parents + gift-givers (grandparents, baby showers); value organic/non-tox materials, a coordinated "designed nursery", and heirloom quality. Higher AOV, aesthetic-driven.
- **USP / angles:** GOTS organic cotton · hand-painted exclusive prints · everything coordinates (bin + sheet + mobile in matching print) · giftable · safe/non-toxic for baby.
- **Tone:** warm, soft, calm, elevated-but-friendly. Not loud, not clinical.

## Language
- **English.** `lang="en"`, `.com`, Toronto/Ontario (not Québec), no FR toggle or FR copy. Keep EN.

## Design tokens (from raw HTML)
- **Fonts:** display = **Quincy** (warm serif) → Google stand-in **Fraunces** (soft serif, optical). Body = **Brown / Jost** geometric sans → **Jost** (already a Google font; Pehr literally loads Jost).
- **Colors:** sage-teal `#597C7C` (dominant brand color), lighter sage `#829C9C`, muted green `#95a194`, slate `#5e6a7d`, warm cream `#f0ebe3`, off-white `#f2f2f2`, ink `#222222`/`#3D4246`, white. Soft, warm-neutral, low-saturation.
- **Aesthetic:** airy, lots of negative space, soft lifestyle photography, hand-painted print swatches as signature texture, rounded-soft, calm.

## Imagery plan
- **Logo (hotlink):** `//pehr.com/cdn/shop/files/Pehr_Logo.png?width=480` (dark wordmark) + `whitelogo.webp` for dark footer.
- **Real lifestyle hero available:** `AugustMedia_RHNursery_Lifestyle_web__13__original_...jpg?width=2000` (HTTP 200, real nursery interior). Candidate hero or gallery.
- **Real product/pattern swatches (hotlink):** many `*_small.png` print swatches (baa-baa-sheep, bunny-hop, busy-bee, blossom-stripe, celestial, chambray, checkmate-*, botanica…) — perfect for a "shop by print" signature module.
- **Real product photos (hotlink):** rompers, polos, sandals, sneakers, diaper bags, weekender bags, swim — on white/lifestyle.
- **Generate (Flux):** warm nursery lifestyle scenes for hero/gallery if real ones are thin (soft morning light, organic textiles, neutral nursery, baby items in matching prints), texture/flat-lay of folded organic cotton in sage/cream. NO dark grade — this is a LIGHT, warm brand.

## Niche
- **baby-nursery** — NO reference file exists. Needs exemplar approval (Step 2 side-step) before build.

## NOT dark-cinematic
The `dark-cinematic-standard` memory does NOT apply here. Pehr is light, warm, soft. Art direction = airy editorial, warm cream/sage canvas, elegant serif headlines, generous whitespace, soft photography, print-swatch signature module. Apply `gallery-padded-staggered` + `nav-no-utility-links`.
