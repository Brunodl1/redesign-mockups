# Vitamin C Solutions — research (home redesign)

## Brand
- **Vitamin C Solutions LLC** — vitamincsolutions.com — "**Vita C® After Swim™**" line + **Miracle Foam**. Shopify. Minnesota, USA.
- **Language: EN** (US).
- **Niche:** science-haircare (use NEW `references/science-haircare.md`, K18 DNA). NOT hair.md (wig/braids).
- **Logo (REAL, hotlink):** https://vitamincsolutions.com/cdn/shop/files/afterswimandsun_250x.png?v=1769458334 (alt "vitamincsolutions"; "After Swim & Sun" mark).

## ICP / positioning
Swimmers (competitive + recreational), parents of kids who swim, frequent pool/resort
vacationers, and **swim programs / pros** ("For Professionals"). Pain: chlorine wrecks
hair & skin — dryness, brittleness, green/brassy hair, that chlorine smell, irritation.
Emotion: *"finally something that actually removes the chlorine, not just covers it."*

## USP / angle (the mechanism — lead with it)
**Patented Vitamin C formula that chemically NEUTRALIZES chlorine on contact** — unlike
traditional "swimmer shampoos" that just mask it. Vitamin C (ascorbic acid) reacts with
and neutralizes chlorine. Clean (Yuka-scored), made in USA. This is a single-mechanism,
proof-forward science brand → K18 playbook fits exactly.

## Real design tokens (from live site)
- **Font:** `Assistant` (Google Font), body+heading. Real site uses weight 400 (light) —
  for the elevated K18-style build use Assistant at HEAVY weights (700/800), **lowercase
  oversized headlines**, to get biotech-confidence while staying THEIR font.
- **Buttons:** SQUARE (radius 0), black `#121212` fill, white text, ~10–15px × 33–40px pad.
- **Colors (real):** ink `#121212`; white bg; brand accents = **pink `#fe6292`**, **yellow
  `#fadc36`**, **blue `#334fb4`**; review/teal `#108474` (judge.me). Gradients
  yellow→pink→yellow. → playful, bright. Maps to K18's color-block system.
- **Redesign palette (VCS × K18 DNA):** white base + black ink + SQUARE black CTAs;
  **hero block = pool blue**, **science/proof block = citrus orange** (vitamin C),
  accent = pink `#fe6292` (stars/links), pop = yellow `#fadc36`. Owns "pool + vitamin C".

## Hero variant
**Full-bleed COLOR band** (pool blue) — signature of the science-haircare ref. Oversized
lowercase headline "remove chlorine from your hair in seconds", 1-line mechanism subhead,
ONE square black CTA, real shampoo/conditioner packshots floated on the band (product is
hero, no lifestyle photo needed).

## Sections (in order)
announce (trust) → header → hero (full-bleed pool-blue band) → bestsellers grid (inline
ADD TO BAG) → SCIENCE band (citrus, molecule line-art + clinical claim + mechanism) →
use-case tabs (neutralize chlorine / repair dryness / stop green hair / after-sun) →
For-Professionals + credibility (swim programs, patented, Yuka, made in USA) → reviews
(6+ + summary) → founders/mission band (Jon & Brian, Minnesota) → newsletter (10% off) → footer.

## Imagery plan — hotlink real packshots; generate floats + one pool band (Flux, free → $0)
### Hotlink (real cdn.shopify.com, add ?width=600)
- Shampoo $17.99 — files/VitaC_Product_Shots_shampoo.png
- Conditioner $17.99 — files/VitaCProductShots_conditioner.png
- Detangler $17.99 — files/VitaCProductShots_Detangler.jpg
- Lotion $19.99 — files/VitaCProductShots_lotion_44aa7855-c2cf-45a6-8c81-e0ff11de8bc3.jpg
- Miracle Foam Body Wash $9.99 — files/VitaC-TransparentCap_Miracle-Foam_Orange.jpg
- Ultimate Hair Care Triple Pack $49.99 — files/2_9b7178ac-5ca9-4b75-a0ae-e8bcc03c2f70.png
- Shampoo+Conditioner Combo $33.99 — files/1_862dd5bf-4a9b-495d-84ab-e90a2c1f5a83.png
- Shampoo-Detangler Duo $33.99 — files/5_236c31a0-828d-42be-a786-f789bba45d27.png
  (CDN base: https://cdn.shopify.com/s/files/1/0613/3946/7997/files/)
- Logo: afterswimandsun_250x.png (above).

### Generate (Flux, free)
- `float-citrus` — orange/lemon slice + water droplets on pure white, photoreal, no shadow (key out) — vitamin C motif at science-band seam.
- `float-droplet` — clear/blue water droplets cluster on pure white, glossy, no shadow (key out) — pool motif.
- `band-pool` — bright sunlit swimming-pool water surface, turquoise, sparkling, no people (3:2) — For-Professionals / mission band bg.
