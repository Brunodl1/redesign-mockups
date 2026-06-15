# HoliFrog — research (home redesign)

## Brand
- **HoliFrog** — holifrog.com — "**Situational Skincare™**" — clean, clinically-effective cleansers, serums & moisturizers. Shopify. EN.
- **Logo (REAL, hotlink):** https://holifrog.com/cdn/shop/files/Holifrog_New.webp?v=1778614826 (alt "HoliFrog"; dark wordmark → on green footer use a cream chip).

## ICP / positioning
Skin-conscious women ~25–50 who are into ingredients + routines. They don't want a one-size "skin type" — they want a routine for what their skin is doing *right now*. Buying emotion: "smart, effective, gentle skincare that adapts to me." Objection to answer: *does it work + is it gentle?* → reviews, press (Hailey Bieber), ingredient specifics, situation-based guidance.

## USP / VALUE PROP (Bruno: show it at the TOP)
**"Skin strategy over skin type™"** — *Build a routine around what your skin is doing right now — this week, this season, this stage of your life.* CTA: "Shop your situation". Also: Situational Skincare™, For Every Skin-Situation™, #SituationalSkincare. Lead the hero with this value prop, and reinforce with a 3-pillar value strip immediately under the hero.

## Real design tokens (from live site)
- **Font:** `new-hero` (clean neo-grotesque) → Google equivalent **"Hanken Grotesk"** (display weight 500–600, body 400). **Italic** used for emphasis/highlight words.
- **Colors:** ink/heading **#282928**, body **#454645**, bg **#ffffff**, secondary/cream **#fffcf2**, **brand green #215732** (buttons/links/footer), **mint #9fd8ca** (hover/footer links), rust **#a94600** (sale), rating tan **#a67f63**, hairline #e1e3e1.
- **Buttons:** PILL (radius 100px), green #215732 bg, white text, NOT uppercase, weight ~500, pad ~10–12px × 24–28px.
- **H1** ~3.44rem weight ~600, tight tracking; H2 ~2rem. Headings sentence-case with occasional italic emphasis.
- **Mood:** clean-fresh natural (not warm-sand-serif OSEA, not clinical-cold). Use skincare-cosmetics.md CONVERSION STRUCTURE but HoliFrog's own clean green/cream + sans look (per skincare-ref-warm-vs-prestige rule).

## Hero variant
**Split** (text panel + image) — left = the value prop ("Skin strategy over skin type™" + subhead + "Shop your situation" CTA), right = clean skincare scene (generated, no faces). (Recent builds full-bleed → split for variety.)

## Sections (in order) — includes Bruno's 3 asks
header → hero (split, VALUE PROP at top) → value-prop strip (3 pillars, reinforce) → shop-by-situation tiles → bestsellers grid → category bands (cleansers/serums/moisturizers) → **community favorites VIDEO section (3 real videos + product cards)** ← Bruno → **testimonials (DISTINCT layout: big featured Hailey Bieber press quote + asymmetric supporting quotes + "Featured in" logos)** ← Bruno → trust/guarantee strip → newsletter → footer.

## Imagery plan — hotlink real packshots + 3 real videos; generate hero + floats (Flux, free → $0)
### Hotlink (real CDN, base https://cdn.shopify.com/s/files/1/0081/7797/5377/files/ , add ?width=600)
- Tashmoo Amino Hydrating Milky Cleanser $39 — TashmooMilkyCleanser_c36e9dd6-2061-4375-afdf-ea9e42fb1f5f.png
- Kissimmee Vitamin F Cleansing Balm $39 — KissimmeeCleanser_af578dfd-455f-4ed8-8227-4a05bc050129.png
- Shasta AHA Exfoliating Daily Cleanser $39 — ShastaCleanser_2d5bda10-d396-472a-81d8-c51bd03ea2d8.png
- Superior Probiotic Purifying Gel Cleanser $39 — SuperiorGelCleanser_2b9fd18c-be7e-4431-b1b5-d46efeb2b2c9.png
- Galilee Antioxidant Dewy Drop $54 — GalileeSerum_1154b738-92fa-4589-a589-1c0ac310fd5d.png
- Grand Amino Cushion Cream $67 — Grand.png
- Sunnyside 15% Vitamin C Brightening Day Serum $79 — SunnysideSerum.png
- Moonbeam Retinaldehyde Age-Defying Serum $79 — MoonbeamSerum_35bd8414-c3a9-43fb-8b63-4bc27f70c292.png
- Halo AHA + BHA Evening Serum $69 — HaloSerum_47536ca5-98a9-4042-92bc-b5f317662044.png
- Utopia Microflora Toner $48 — Utopia.png
- Logo: Holifrog_New.webp (above).

### Real community-favorite VIDEOS (hotlink, 1080p mp4) — Bruno's ask
1. https://holifrog.com/cdn/shop/videos/c/vp/71905f421b5645f8bca927456b0d3bc2/71905f421b5645f8bca927456b0d3bc2.HD-1080p-7.2Mbps-83527759.mp4
2. https://holifrog.com/cdn/shop/videos/c/vp/0eeda350c5f449e28822ba31af9db80e/0eeda350c5f449e28822ba31af9db80e.HD-1080p-4.8Mbps-85437728.mp4
3. https://holifrog.com/cdn/shop/videos/c/vp/5530cce4503141199d161c2712e621cc/5530cce4503141199d161c2712e621cc.HD-1080p-3.3Mbps-26233295.mp4

### Real press quote (for testimonials)
Hailey Bieber on HoliFrog Tashmoo Water Lily Nourishing Milky Wash: "I like cleansers that don't get super foamy. I prefer something that's a milkier, hydrating, nourishing wash. I never like for my skin to feel dry and stripped at night after I wash it." (Press: Hailey Bieber breaks down her skincare routine.)

### Generate (Flux, free)
- `hero` — clean fresh skincare scene: a milky cleanser + dewy serum dropper on a soft cream/ivory surface with a few green leaves + water droplets, bright airy, negative space, NO faces (split-hero right side, 4:5/1:1).
- `float-cream` — a thick sculpted dollop/swatch of milky white cleanser on pure white, photoreal, NO shadow (key out).
- `float-dew` — a fresh green leaf with glossy dew droplets on pure white, photoreal, NO shadow (key out) — frog/water motif.
