# Premium Vitamin — research (home redesign)

## Brand
- **Premium Vitamin** (premiumvitamin.com) — US direct-to-consumer supplement store, Shopify.
- **Language: EN** (US, `.com`, "FREE US SHIPPING ON ORDERS OVER $50").
- **Niche:** supplements (use `references/supplements.md`).
- **Logo (REAL, hotlink):** https://premiumvitamin.com/cdn/shop/files/Premium_V_Logo.png?v=1736177143 (960×474, dark mark on transparent/white — invert on dark footer or sit on a cream chip).

## ICP / positioning
Health- and results-driven US shoppers (~25–55): lifters & fitness folks (creatine, BCAA, ZMA, collagen), gut-health & wellness buyers (proprietary probiotics, psyllium, ACV, berberine), and everyday supplement users (omega-3, magnesium, quercetin). They shop **by goal** (fitness / immunity / stress / joint / heart / blood sugar). Buying emotion: "real, clean, well-dosed formulas at a fair price, that actually work." Objections to answer: *is it high quality / well-dosed / trustworthy, is it a good deal, will it ship free.*

## USP / angle
Clean, well-dosed single-ingredient & specialty formulas (incl. a proprietary probiotic blend) — wellness-forward, not a shouty mega-store. Lead with **shop-by-goal**, real bestsellers with visible deals, and **UGC review videos** (a real differentiator — KEEP the video carousel).

## Real design tokens (from live site)
- **Body + display font:** `Outfit` (Google Font) — body weight 500, headings 600–700.
- **Section headers:** UPPERCASE, weight 700, 28px.
- **Hero H2:** ~50px, weight 500, letter-spacing -2px (large, soft).
- **Colors:** primary green **`#015d34`** (links/CTAs/stars/judgeme), hover **`#084f2f`**, ink **`#232323`** / heading `#222`, body bg `#fff`, light fill `#f4f4f2`, border `rgba(34,34,34,.1)`, footer dark with `#f3f2ee` titles + `#999` text.
- **Buttons:** PILL (radius 50px), dark `#232323` bg / white text, UPPERCASE, weight 600, padding 17px 35px. (Elevated build: use brand green as the primary CTA, dark as secondary.)
- Deal/discount color: red `%` badge on sale items.

## Hero variant
**Full-bleed** generated wellness scene (bright, airy, soft sage-green) + contained text card with scrim + one real product floated in. (Recent builds: Étymologie=split, Le Must Dose=full-bleed → this one full-bleed is fine; alternate next time.) Headline echoes their carousel: "Fuel your body. Feel the difference." / shop-by-goal CTA.

## Sections (in order)
announce → header → hero (full-bleed) → shop-by-goal (6 tiles) → bestsellers grid → bundle/offer band (Duo Combo probiotic) → new-arrivals grid → **video carousel (UGC reviews — KEEP)** → reviews (6+ + summary) → why-us trust band (icons) → newsletter (discount) → footer.

## Imagery plan
**Hotlink real products + logo + UGC videos. Generate hero bg + floats (Flux, free → $0).**

### Hotlink (real CDN)
- Logo: Premium_V_Logo.png (above).
- Bestsellers / new arrivals (use `?width=600`):
  - Probiotic Blend `Proprietary_Probiotic_Blend_Front.jpg` $180
  - Duo Combo probiotic `Duo_Combo_Proprietary_Probiotic_Blend_and_Saccharomyces_Boullardii.jpg` $200
  - Creatine `1.jpg?v=1769710574` $13.99 (was $24.99, -26%)
  - Psyllium Husk `Front.jpg?v=1778873228` $13.99 (was $18.99)
  - Multi Collagen Peptides `Front_16ec16b1-...jpg` $43.99 (SOLD OUT)
  - Fish Oil Omega-3 `fish-oil-omega3-1200mg-front.jpg` $14.99 (was $20.99)
  - Apple Cider Vinegar (w/ mother) $14.49 (was $15.99)
  - Berberine 1200mg $35.99
  - Magnesium Glycinate 1000mg `...` $15.99 (was $17.99)
  - BCAA + B6 `BCAA-B6-branched-chain-amino-acid.jpg` $14.99 (was $22.99)
  - Quercetin 1000mg $16.50
  - ZMA / Zinc Magnesium Aspartate `zinc-magnesiam.jpg` $30.99 (was $33.99)
- Bundle banner `Combo-banner4-Photoroom.jpg?v=1736861058`
- **Video carousel (UGC):** mp4 `https://premiumvitamin.com/cdn/shop/videos/c/vp/3c23a63f065f4f03b9de4c50d606b4ae/3c23a63f065f4f03b9de4c50d606b4ae.HD-720p-1.6Mbps-40589011.mp4` + portrait thumbnails: `review_thumbnail1.jpg`, `Multi-collagen-peptides-review1.jpg`, `Multi-collagen-peptides-review2.jpg`, `vitamin-d3-thumbnail.png` (all 480×848).

### Generate (Flux, free)
- `hero-bg` — bright airy wellness/kitchen-counter scene, soft sage green + warm light, lots of negative space (16:9).
- `float-capsules` — cluster of amber + white supplement capsules on pure white, photoreal, no shadow (key out).
- `float-powder` — a scoop of cream collagen/protein powder on pure white, no shadow (key out).
- `band-lifestyle` — bright morning wellness flat-lay (supplements, water, fruit) for trust/why-us band (3:2).
