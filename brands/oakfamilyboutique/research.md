# Oak Family Boutique — research (home redesign)

**URL:** https://oakfamilyboutique.com/ · **Page:** home · **Slug:** oakfamilyboutique
**Niche:** flooring (engineered hardwood + SPC vinyl + eco laminate) · **Language:** EN
**Language call:** CA/CAD store BUT Ontario-based, English-only (no FR toggle/copy, `lang="en"`,
"Delivered Across Canada"). Ontario ≠ Québec, zero French. → Build in **English**.

## What they sell
Primary = **engineered hardwood & vinyl/laminate flooring**, shipped across Canada.
Secondary = a warm home-decor range (ceramics, baskets, cashmere, wall art) — cross-sell only.
Tagline (real): **"Design with Confidence. Impress with Quality."**
Flooring lines (real, with $/sqft where known — others illustrative):
- **American Oak** (engineered hardwood): Black Brown, Macaroon, Naked Oak
- **European White Oak** (engineered hardwood): Banff, Burgundy, Lagom, **Pando $8.29/sqft**
- **European SPC Vinyl** – Vienna $3.00/sqft · **Eco Laminate** (Pebble Beach, Dessert Sand,
  Natural Elm, Windsor Oak, Terracotta Dream, Coastal Wash) $2.99/sqft
- Decor accents: ceramic vases/pitchers, baskets, cashmere — optional cross-sell band

## ICP / USP / tone
- ICP: Canadian homeowners + renovators 30–60 doing a considered, high-ticket reno; want the
  floor to "look right in my room", last, and install without regret.
- USP: premium engineered oak, designer-grade tones, delivered across Canada, confidence +
  quality. Free samples should be the hero conversion device (currently buried).
- Tone: warm, design-led, boutique-premium (NOT big-box).

## True palette (from rendered screenshot — NOT the leftover #108474 teal token)
- bg: warm cream / white `#F6F1E9`–`#FFFFFF`
- top banner: soft taupe-blush `#D9CEC9`
- ink: warm near-black `#26221E`
- CTA button: dark charcoal `#23303D`/`#2B2622`
- the real "colour" = the WOOD tones (light oak → walnut). Warm, natural, slightly muted.
- (ignore `#108474` teal — leftover theme token, doesn't render as the brand)

## Type
- Real headline = a serif (elegant but generic). Keep serif DNA → **Fraunces** (warm editorial).
- Body/spec → **Inter** (clean humanist sans).

## Real assets (HOTLINK — Shopify CDN, oakfamilyboutique.com/cdn/shop/files/…)
- Logo: `assets/logo.png` (acorn, 270px, saved local)
- Rooms: `Lagom_Kitchen`, `Kitchen_cabinets_with_Macoroon_flooring`,
  `a_modern_farmhouse_kitchen_with_light_colored_vinyl…` (decent, warm — hotlink best)
- Planks (top-down swatches): `American_Oak_6_Collection-Black_Brown`, `American_Oak_MACAROON_2`,
  `AMERICANOAKNAKEDOAK`, `EuroepanWhiteOakCollection_Banff2`, `BURGUNDY`, `PANDO`
- Decor: `CERAMIC_PITCHER_Olivia`, `CERAMIC_VASE_*`, baskets

## Gap the redesign fixes
Current site = ONE room photo above the fold, washed-out serif text, **zero swatch/product
merchandising, no $/sqft, no free-sample CTA, no proof**. Redesign = real-room hero + trust strip
+ named-plank swatch grid ($/sqft + "Order free sample" chip) + room inspiration + why-engineered
+ sample-box CTA + reviews — the Stuga playbook (reference: flooring.md).

## Generated (free Flux, $0)
- `_gen-room-v*` — warm Scandi kitchen w/ wide oak floor → hero option (picker: real vs gen)
- `_gen-plankL-v*` / `_gen-plankD-v*` — angled oak/walnut plank floats (keyed)

## Hero variant
Recent builds: Maater=full-bleed dark. Use **split** (warm serif promise panel + real room photo)
OR full-bleed warm room + contained cream card. Lean **split editorial** (fits the boutique serif).
