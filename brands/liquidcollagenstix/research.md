# Liquid Collagen Stix — research (home redesign)

## Brand
- **Liquid Collagen Stix (LCS)** — liquidcollagenstix.com — the "first ready-to-drink, concentrated **liquid collagen shot**" in single-serve **stix**. Shopify. EN (US/UK).
- Logo (REAL, hotlink): https://www.liquidcollagenstix.com/cdn/shop/files/November_LCS_Content_2.png?v=1762790046&width=600 (alt "Liquid Collagen Stix"; light/white logo → sits on a NAVY header/footer).

## ICP / positioning
Beauty/wellness buyers ~30–60 fighting visible signs of aging (skin lines, hair, joints) who find powder tubs messy/inconvenient and capsules low-absorption. Emotion: "a serious, effortless daily anti-aging ritual that actually absorbs." Objection: does it work + is it worth it → absorption science (hydrolyzed peptides, liquid), 5000mg dose, convenience, reviews.

## USP / value prop
**Ready-to-drink liquid collagen — 5000mg per shot, no mixing, no powder.** Hydrolyzed peptides already dissolved → maximum absorption (Speed · Efficiency · Ease). Fights collagen decline (~1%/yr after your 20s) for skin, hair, joints & bones. Flavors: Peach · Lemon · Orange.

## Real design tokens (from live site — via `browser styles`)
- **Fonts:** heading **Archivo** (700, ls ~0.66px), body **Questrial** (Google fonts both).
- **Colors:** ink/brand **navy #0e1b4d** (rgb 14,27,77), page bg **#eff0f5** (light lavender-grey), white surfaces; button bg navy #0e1b4d / text #eff0f5; header/footer NAVY with light text (link color #eff0f5). Add a warm **peach/coral accent** (flavor-led) for highlights/stars/CTA-hover.
- **Buttons:** PILL (radius ~41px), navy bg, light text, slight letter-spacing, Questrial.
- Mood: clean, modern, premium beauty-supplement (navy + light + white). Use supplements.md conversion structure; single-product (3-flavor) architecture.

## Hero variant
**Split** (text panel + product/splash image) — value prop "Ready-to-drink collagen. 5000mg. No mixing." (Recent home builds full-bleed → split here.) Hero image = generated liquid-collagen scene with the stix + fruit splash (no faces).

## Sections (in order)
header (navy) → hero (split, value prop) → trust strip (5000mg · ready-to-drink · hydrolyzed peptides · no mixing) → shop the flavors (3 real packshots) → why collagen (the aging/1%-per-year problem) → how it works (liquid absorption: Speed/Efficiency/Ease) → benefits (skin/hair/joints icons) → reviews (6+ marked mockup) → subscribe & save / 40FIRST offer band → FAQ → footer (navy).

## Imagery plan — hotlink real packshots; generate hero + floats (Flux, free → $0)
### Hotlink (real CDN, base https://cdn.shopify.com/s/files/1/0653/1917/4295/files/ , add ?width=600)
- Peach: LCSPDPPeach_01.png — $39.99
- Lemon: LCSPDPLemon_01.png — $39.99
- Orange: LCSPDPOrange_01.png — $39.99
- (main set: LCS_PDP_Lemon_01.png)
- Logo: November_LCS_Content_2.png (above).

### Generate (Flux, free)
- `hero` — a premium liquid-collagen scene: a glossy collagen shot / stick sachet with a dynamic splash of peach + citrus juice and fruit, deep-navy + soft-light palette, bright studio, lots of negative space, NO faces, NO text (4:5 / for split right).
- `float-fruit` — fresh peach + lemon + orange slices with juice droplets on pure white, photoreal, NO shadow (key out).
- `float-splash` — a glossy golden-amber liquid splash/droplets on pure white, NO shadow (key out).
