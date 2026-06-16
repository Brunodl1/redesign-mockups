# LaRocca Skincare — research (home redesign)

## Brand
- **LaRocca Skincare** (laroccaskincare.com) — clean, plant-based, **hibiscus-powered** skincare ("Gentle Renewal"). Shopify. EN.
- Logo (REAL, hotlink): https://www.laroccaskincare.com/cdn/shop/files/LaRocca_logo_png._ad1c26c4-8303-463e-aeda-87eb251ba855.jpg?v=1732320895&width=320 (JPG, white bg baked → fine on white header/light footer; on any dark band sit on a white chip).

## ICP / positioning
Skin-conscious women ~30–60 who want clean, botanical, anti-aging skincare that's gentle. Buying emotion: "natural, plant-powered renewal — firmer, brighter, calmer skin without harshness." Objection: does clean/natural actually work → answer with the hibiscus story (antioxidant + natural AHA, "nature's botox"), ingredient clarity, reviews, before/after-style proof.

## USP / value prop
**Hibiscus-powered botanical skincare — "Gentle Renewal."** Hibiscus flower = natural AHA + antioxidants ("nature's botox") for firmer, brighter, smoother skin; plant-based, cruelty-free, gentle for sensitive skin. Lead the hero with the hibiscus renewal angle.

## Real design tokens (from live site)
- **Fonts:** heading **Oswald** (UPPERCASE, letter-spacing ~.09em, weight 400–500), body **Lato** (400/500). (One section also uses Playfair Display serif — optional elegant accent.)
- **Colors:** ink #000, text-light #4d4d4d, bg #ffffff, bg-accent/grey **#f7f7f7**; **PRIMARY plum/purple #753789** (hover #4b195b); highlight/terracotta **#d2815f** (+ a bright blue #2693cf as a minor accent); announcement bar black; footer bg #f7f7f7; badge plum.
- **Buttons:** SQUARE (radius 0), UPPERCASE, letter-spacing .09em, Lato weight 500.
- Mood: clean botanical apothecary — white + grey + plum, hibiscus. Use skincare-cosmetics conversion structure, La Rocca's plum/Oswald look (per skincare-ref-warm-vs-prestige).

## Hero variant
**Full-bleed** hibiscus skincare scene + contained text card (recent builds: HoliFrog split, VCS full-bleed → full-bleed ok; use a contained LIGHT/dark card + scrim for contrast). Value prop "Gentle renewal, powered by hibiscus."

## Sections (in order)
header → hero (full-bleed) → trust/press strip → shop-by-category tiles → bestsellers grid → hibiscus ingredient/science band (why hibiscus) → sets & routines band → reviews (6+ + summary, marked mockup) → guarantee/value icons strip → newsletter → footer.

## Imagery plan — hotlink real packshots; generate hero + 2 floats (Flux, free → $0)
### Hotlink (real CDN, base https://cdn.shopify.com/s/files/1/0106/5942/files/ , add ?width=600)
Singles (bestsellers + categories):
- Hibiscus Cream Cleanser with AHA $35 — LRS_-_HCC_100x1000_4-29-26.png
- Exfoliating Cream Cleanser with 24K Gold $42 — LRS_-_ECC_1000_x_1000_px_4-29-26.png
- Hibiscus Facial Toner $17 — LRS_-HFT_1000x1000_4-29-26.png
- Regenerating Defense Serum with Hibiscus $45 — LRS_-_HRS_1000x1000_4-29-26.png
- Youth Boost Nightly Oil $45 — (products path) https://cdn.shopify.com/s/files/1/0106/5942/products/YouthBoostNightlyOil.jpg
- Daily Hydrating Moisturizer SPF 15 $55 — LRS-DailyHydratingMoisturizerImage7-7-23.jpg
- Firming Eye Cream $75 — LRS_-_GEC_1000x1000_4-29-26.png
- C-Gold Reparative Primer 15% Vit C $75 — LRS_-_C-Gold_1000x1000_4-29-26.png
- Lightweight Mineral Sunscreen SPF 30 $39 — LRS_-_LMB_1000x1000_4-29-26.png
- Vitamin Repair Mist w/SPF 15 $24 — LRS_-_GVM_1000x1000_4-29-26.png
Sets: Hibiscus Facial Trio $90, Daily Trio $137, Day & Night Trio $120.
- Logo: above.

### Generate (Flux, free)
- `hero` — clean botanical skincare scene: vivid hibiscus flowers + a creamy serum/oil dropper on a soft cream/plum-tinted surface, bright airy, generous negative space, NO faces (16:9 / for full-bleed).
- `float-hibiscus` — a single vivid pink/magenta hibiscus bloom on pure white, photoreal, NO shadow (key out).
- `float-cream` — a thick sculpted dollop/swipe of cream with body on pure white, NO shadow (key out).
