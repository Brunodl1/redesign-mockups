# TELAN Cosmetics — research (home redesign)

## Brand
- **TELAN Cosmetics** — telancosmetics.com (Shopify). **Language: English** (`/fr` 404s; no French content). CAD / Canada.
- **What they sell:** clean-formula color cosmetics — Foundation, Liquid Blush, Lip Gloss / Tint / Ritual, Lip Balm, Eyeliner, Mascara, Primer, Bundles.
- **USP / positioning:** *makeup that goes beyond aesthetics to prioritize the well-being of your skin* — clean, skin-loving formulas built for an **inclusive, melanin-rich shade range**. Their entire identity celebrates deep & diverse skin tones (hero = TELAN spelled in the full pigment shade range; blush literally handled "for dark-skinned women"; models are predominantly Black). Signature feature: **"Find My Shade."**
- **ICP:** Black & brown / deep-skin-tone women ~22–45 who've been underserved by mainstream makeup, want clean skin-friendly formulas AND a shade that actually matches. Buying emotion: "finally, a brand made for *me*, that's good for my skin." Objection to answer: will the shade match + is "clean" real → answer with shade-finder, inclusive proof, reviews, clean-formula specifics.
- **Niche:** skincare-cosmetics.

## Real design tokens (from live site + screenshot — NOT the teal theme token)
- **Palette (true):** warm **buttermilk/cream** bg, **espresso near-black** ink, **copper / terracotta** pigment pops, black + cream. (Shopify `:root` had a teal #108474 — that's a leftover theme token, NOT the brand. Real brand = warm neutrals.)
- **Type:** logo = elegant wide-tracked serif → display **Cormorant Garamond**; body = real site font **Poppins**.
- Buttons: classic black, minimal radius. Editorial, lots of warm negative space.

## Imagery plan — HOTLINK (brand photography is strong; generation tooling dead in env)
- Logo: `…/files/TELAN_Logonew.png` (serif wordmark on white; invert on dark footer).
- Hero (split, right): `Lana_model.jpg` — deep-skin model holding gloss, warm beige bg.
- Shade-range band (full-bleed): `banner-1.webp` — "TELAN" in pigment shade range on cream.
- Story/mission band: `brand_image.jpg` — group editorial, diverse models.
- Bestsellers (real product shots): Foundation `sand_foundation.jpg`/`FDN-125_sand…`, Liquid Blush `LiquidBlush-01…`, Tint Me Twice (gloss trio) `TC-S50.jpg`, Telan Lip Ritual `TC-S49.jpg`, Eye Liner `Eyeliner_1.jpg`, Mascara `Mascara_1.jpg`.
- All hotlinked from `cdn.shopify.com/s/files/1/0852/5191/6061/files/…` with `?width=` params. No generated assets.

## Catalog (price | handle)
Foundation $44.99 | Liquid Blush $29.99 | Tint Me Twice (gloss trio) $60 | Telan Lip Ritual $58 | Lip Gloss $30.50 | Lip Stain $32.50 | Lip Balm $30.50 | Eye Liner $25.50 | Mascara $29.50 | Primer $35.50.

## Hero variant: SPLIT (cream text panel + portrait). Mobile: full-bleed image + bottom scrim text.
