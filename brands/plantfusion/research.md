# PlantFusion — Complete Protein (Vegan Protein Powder) — PDP redesign

URL: https://plantfusion.com/products/complete-plant-protein · Page type: **product**
Language: EN · Niche: **supplements** (ref: references/supplements.md) — but PlantFusion = clean plant-based health, NOT bro-megastore. Calm-athletic green.
"Same train of idea" as the HPPY Skin PDP build → reuse the whole PDP architecture + fx.js interaction hooks, adapt content to a protein powder.

## Brand
DTC plant-based protein. USP: **"The most complete plant protein"** — pea + artichoke + amaranth + quinoa blend gives a *complete amino acid profile* (all 9 EAAs + BCAAs) that single-source plant proteins lack; **21g protein, 2g carbs, 120 cal**, easy to digest (no bloat), vegan / non-GMO / gluten-free / dairy-free / soy-free. Press: **Bon Appétit** ("SO FINE… texture, baby" — Amanda Shapiro). Rating **4.8 / 803 reviews**.
ICP: health-conscious / plant-based / active adults who want clean protein that actually tastes good and digests easily.

## Real data (Shopify)
- Flavors: Creamy Vanilla Bean · Rich Chocolate · Red Velvet Cake · Cookies & Cream · Natural (No Stevia)
- Sizes: 15 / 30 / 75 servings → $43.97 / $69.97 / $129.97
- Video: **Vimeo 945030083** → embed `https://player.vimeo.com/video/945030083?background=1&autoplay=1&loop=1&muted=1` (full-bleed ambient)

## Design tokens (real)
- Font: **Figtree** (Google) ≈ brand's Avenir Next. Headings 800.
- Palette: teal-green **#108474** primary · leaf #4d7b54 · gold pop **#ffc000** · ink #20241f · white / soft green-grey surfaces. **Green pill buttons.** (in base.css)

## Assets (brands/plantfusion/assets)
- logo.png (colored: green leaf + wordmark, for light header) · logo-white.png (for dark footer)
- Flavor packshots (tub on green-botanical bg): pack-vanilla / pack-chocolate / pack-redvelvet / pack-natural / pack-cookies .png
- Lifestyle + PRESS (baked Bon Appétit quote): life-vanilla.jpg, life-chocolate.jpg
- taste-vanilla.jpg, taste-chocolate.jpg, uses.jpg · nutrition.jpg (supplement-facts panel) · mostcomplete.png ("most complete" ingredient-circle claim)

## Sections (same train of idea, adapted)
1. Header (logo.png, nav Shop/Why Complete/Reviews/FAQ, cart)
2. **HERO BUY BOX** — gallery w/ flavor-packshot thumbnails LEFT; buy box RIGHT: rating, title, key benefits, **FLAVOR selector (5)**, **SIZE selector (15/30/75)**, **Subscribe & Save widget** (one-time vs subscribe 20% off + benefits), single Add to Cart. **NO qty, NO shop button.** Floating review card on the gallery.
3. **Press / Loved by** carousel (Bon Appétit + lifestyle cards, ★4.8 · 803)
4. **Full-bleed VIDEO band** (Vimeo) — "plant protein that actually works / digests easy"
5. **Most Complete** (setting-the-standard) — complete vs incomplete amino profile, mostcomplete.png + bars
6. **Macros band** — 21g / 2g / 120cal + all 9 EAAs + BCAAs + digestive enzymes (nutrition.jpg panel)
7. **Ingredients** cards — Pea · Artichoke · Amaranth · Quinoa · Fermented Amino/BCAA blend · Digestive enzymes (+ photo)
8. **Testimonials** — Bon Appétit feature + customer quotes
9. **How to use** — "Scoop. Shake. Fuel." (3 steps)
10. **Find your flavor / stock up** — 5-flavor cross-sell + bundle/subscribe CTA (pairing equivalent)
11. **Reviews** — 4.8 / 803 summary + bars + cards
12. FAQ
13. Footer (logo-white on dark green/ink)
14. **Sticky add-to-cart bar** (packshot + flavor + price + Add to Cart)
