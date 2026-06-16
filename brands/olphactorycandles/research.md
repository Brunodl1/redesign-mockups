# Olphactory Candles — research (home redesign)

## Brand
- **OLPHACTORY CANDLES** (olphactorycandles.com) — Black-owned, **jazz-inspired luxury coconut-wax candles**. "The art of scent, paired with the art of jazz." Shopify. EN.
- Logo (REAL, hotlink): https://olphactorycandles.com/cdn/shop/files/White_OPHC_Logo_190x.PNG?v=1615923798 — **WHITE logo** (designed for a BLACK header). Use on black bands; on any light surface it would vanish → keep header/footer BLACK (faithful) so the white logo reads.

## Bruno's instruction
**Keep the old black-and-white vibe while SHOWING the candle.** The brand is already monochrome (black + white + grey, black header/footer). Preserve that B&W aesthetic; make the candle product the visual hero (generated moody B&W hero + grayscale-filtered product shots for a cohesive monochrome look).

## ICP / positioning
Scent-led, design-conscious buyers + gift shoppers who treat candles as identity, mood & ritual — drawn to the jazz/heritage story, Black-owned craft, and a clean coconut-wax burn. Objections to answer: what does it smell like (scent notes), is it well-made (coconut wax, hand-poured, clean burn), which to pick / gift (collections, bundles, bestsellers).

## USP / value prop
**Jazz-inspired, hand-poured coconut-wax candles — scent as a soundtrack.** Each candle is named for a jazz mood/legend (Heritage, Cole's Trane, Kemet Silk, Intimacy Calling, Zulu Embers…). Black-owned, clean coconut wax, evocative monochrome luxury.

## Real design tokens (from live site)
- **Fonts:** headings render in "Intro_Black" (heavy geometric UPPERCASE, big letter-spacing 2.6–4.4px) → use **Montserrat** (their :root heading font) at weight 700–800, UPPERCASE, tracked. Body "DM Sans" (their :root text font).
- **Colors (MONOCHROME — keep B&W):** bg #efefef (light grey), light-bg #fff, heading #000, text #1c1b1b, text-light #6a6a6a, border #cfcfcf; **header/footer/nav = BLACK #000 with white text**; button #1c1b1b bg / white text; sale red #f94c43 (use sparingly or not at all — keep B&W).
- **Buttons:** SQUARE (radius 0), near-black bg, white text, uppercase.
- Mood: high-contrast monochrome, editorial, moody/jazzy. Use candles.md conversion structure, Olphactory's B&W jazz look.

## Hero variant
**Full-bleed** moody B&W candle scene (lit black candle + smoke, jazz-lounge mood) + contained text block + scrim, light text. Show the candle prominently. (Recent builds: LaRocca full-bleed, HoliFrog split → full-bleed dark is on-brand here.)

## Sections (in order)
header (black) → hero (full-bleed B&W candle) → trust strip (coconut wax · hand-poured · clean burn · Black-owned) → bestsellers candle grid (signature line, grayscale) → jazz/heritage story band (the differentiator) → Quartet Discovery Collection promo band → craft/why band (icons) → reviews (6+ + summary, marked mockup) → newsletter (black band) → footer (black).

## Imagery plan — hotlink real candle packshots (grayscale-filtered) + generate B&W hero/floats (Flux, free → $0)
### Hotlink (real CDN, base https://cdn.shopify.com/s/files/1/0013/0668/9582/products/) — signature line $34, consistent batch
- Heritage — Heritage.jpg
- Intimacy Calling — IntimacyCalling.jpg
- Cole's Trane — Cole_sTrane.jpg
- Kemet Silk — KemetSilk.jpg
- Zulu Embers — ZuluEmbers.jpg
- Remnants of Lace — RemnantsOfLace.jpg
- (others: Notes From Azul, Jones' Love, Interlude, Scratched Vinyl — all $34)
Quartet Discovery Collection ($40 ea, /files/): The Mingus — Mingus.png; The Ellington/Monk/Miles (GUID files).
- Apply CSS `filter:grayscale(1)` to product imgs to enforce the B&W vibe + unify any inconsistent shots (optional subtle color on hover).
- Logo: White_OPHC_Logo (above).

### Generate (Flux, free) — all BLACK & WHITE / monochrome
- `hero` — moody high-contrast B&W: a matte-black candle in a black glass jar, lit with soft flame + a wisp of smoke, dark jazz-lounge atmosphere, dramatic light, generous negative space, no text (16:9).
- `float-candle` — a single black candle jar (lit) on pure white, photoreal monochrome, NO shadow (key out).
- `float-record` — a black vinyl record (jazz motif) on pure white, NO shadow (key out).
