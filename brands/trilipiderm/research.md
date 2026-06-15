# Trilipiderm — research (PRODUCT page redesign)

## Product
- **Youthful Complexion Rosehip Toning Elixir** — an alcohol-free botanical toning mist/toner. Brand: **Trilipiderm**. Shopify. EN.
- Variants: **4 oz $29.99 · 2 oz $16.99 · 1 oz Mini $11.99**.
- Logo (REAL, hotlink): https://trilipiderm.com/cdn/shop/files/Trilipiderm_Logo_3a26b21f-67c3-43f5-b6e9-5061038753f9.png?v=1758431923&width=600
- **0 real reviews** on this product → testimonials are INVENTED and must be marked "illustrative mockup content"; no real-looking review-count claims.

## ICP / positioning
Skin-conscious shoppers (women ~25–55) wanting clean, plant-based, sensitive-skin-friendly skincare. Buying emotion: "gentle, botanical, glass-skin glow without irritation/alcohol." Objection: does a toner actually do something + is it gentle → answer with mechanism (rosehip/rose/glycerin), icons, ingredient clarity, social proof.

## USP (lead + reuse as reminders)
**Alcohol-free botanical toning elixir — rosehip extract + rose powder + kosher vegetable glycerin.** Balances & tones, refines/tightens pores, calms redness, hydrates without irritation, preps skin to absorb serums. **Plant-based · Leaping Bunny cruelty-free · alcohol-free · sensitive-skin safe.**

## Real design tokens (from live site)
- **Fonts:** Montserrat (heading **Montserrat SemiBold** ~600, body **Montserrat Regular** 400). Google Montserrat.
- **Colors:** ink #121212 / #1d1e20, secondary text #4b4d4e, bg #ffffff, surface #faf9f8; **brand peacock-teal #003948**, **yellow-green #8DC63F**, **pear #CBDB2A** (botanical accents); CTA button black #121212 white text.
- **Buttons:** SQUARE (theme buttons-radius 0), 1px border; variant selectors are **pills (radius 40px)**. H1 40px SemiBold, H2 32px, H3 24px.
- Mood: clean botanical / plant-based spa. Use skincare-cosmetics conversion structure, peacock+green brand look (per skincare-ref-warm-vs-prestige).

## Bruno's PDP asks (focus)
The RIGHT column / buy box must NOT be a wall of text → make it scannable:
- short 1–2 line description (NOT the full paragraph), variant **pills**, **icon benefit bullets** (4), add-to-cart (+ subscribe), a **trust-icon row** (plant-based / cruelty-free / alcohol-free / made in USA), a compact **USP reminder** strip, and a small **testimonial** quote.
- Add an **icons** USP band, an **ingredients-with-icons** section, and a **testimonial CAROUSEL/slider** (scroll-snap + arrows). Reinforce USP throughout.

## Sections (PDP order)
header → pdp (gallery left + scannable buy box right) → usp band (icon benefits) → how-to-use (3 steps) → key ingredients (icons) → testimonials CAROUSEL (slider, marked mockup) → complete-your-regimen (3 products) → guarantee/trust strip → FAQ → footer.

## Imagery plan — hotlink real product photos; generate 2 floats (Flux, free → $0)
### Hotlink (CDN base https://cdn.shopify.com/s/files/1/0064/3732/files/ , add ?width=N)
Gallery (PDP):
- YOUTHFULROSEHIP.png (main packshot)
- trilipiderm-rosehip-toning-elixir-overview-glass-skin-glow-barrier-comfort-smoother-texture_png.png
- trilipiderm-rosehip-toning-elixir-vitamin-c-hydrating-facial-mist-glass-skin_jpg.jpg
- rosehip_hero_hydrating_face_mist_for_glowing_hydrated_skin.jpg
- Rosehip_toning_elixir_hydrating_glass_skin_glowing_toner_mist.jpg
- trilipiderm-rosehip-toning-elixir-key-ingredients-glass-skin-barrier-hydration_png.jpg (ingredients)
- howtouse.jpg (how-to band)
Regimen (Complete Your Regimen):
- DewySilk Serum $44.95 — trilipiderm-dewysilk-serum-multi-correctional-peptide-serum-hydrating-brightening-anti-aging-serum-all-skin-typesjpg_medium.jpg
- Rehydration Night Crème $14.95 — rehydrationnightcr_me_500x500.jpg
- Protective Day Crème – Broad Spectrum SPF 30 $19.20 — ProtectiveDayCreme_500x500.png

### Generate (Flux, free)
- `float-rose` — fresh pink rose bloom + a few rosehip berries & petals on pure white, photoreal, NO shadow (key out).
- `float-droplet` — glossy clear water/mist droplets cluster on pure white, photoreal, NO shadow (key out) — toner-mist motif.
