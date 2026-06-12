# ACE Brewer — research (home redesign)

**URL:** https://acebrewer.com/ · **Page:** home · **Slug:** acebrewer
**Niche:** coffee (single-product brewing gear) · **Language:** EN (CA/CAD, Toronto/Ontario, no FR)
**Reference:** coffee.md (Clive Coffee DNA) — REINTERPRET for a single-product eco brewer
(coffee.md is tuned for multi-product high-AOV machine retailers; reuse its warm-editorial visual
DNA + tokens, but the section architecture is single-product DTC, not a machine grid).

## What they sell
A **reusable organic-cotton coffee filter / pour-over brewer** — a cream cotton cone held open by
a steel spiral coil on a tripod ring stand over your mug. Made in Canada, zero-waste, plastic-free,
compostable grounds, "full-flavour, low-waste, built to last." Just **2 SKUs**:
- **ACE Brewer** $45 CAD (the brewer)
- **Organic Cotton Filter** $35 CAD (replacement cloth)
→ This is a SINGLE HERO-PRODUCT brand. Architecture = hero → benefits → how-it-works →
sustainability story → bundle/subscription (brewer + spare filter) → reviews → FAQ → newsletter.

## ICP / USP / tone
- ICP: eco-conscious home coffee drinkers + outdoorsy/camping types 25–50 who want better coffee
  with less waste (no paper filters, no plastic), value craft + made-in-Canada + durability.
- USP: reusable organic cotton = fuller flavour (cloth lets oils through) + zero paper waste +
  compostable + made in Canada + built to last (vs single-use paper / plastic pour-overs).
- Tone: earthy, craft, calm-ritual, sustainable, a little rugged/outdoors.

## True palette (from rendered screenshot — the #108474 teal token does NOT render)
- real site = timid black/white/cream/natural-cotton; ONE black band; no ownable brand color
- only real color = small dark-green felt tags on the product (#0E5C44-ish)
- → ELEVATE to warm editorial: cream base + deep espresso ink + an OWNABLE **pine-green** accent
  (from the green tags + eco/outdoor story) + warm caramel/kraft pop. Keep primary buttons espresso
  (faithful to their black buttons). Green = sustainability moments, eyebrows, icons, eco band.

## Type
- Real font = **Assistant** (clean humanist sans, all-sans Dawn theme, uppercase tracked headings).
- Elevate: display = **Bricolage Grotesque** (warm characterful grotesk — keeps their sans DNA but
  adds personality, not a serif) + body = **Assistant** (their real font). Eyebrows uppercase tracked.

## Logo
Real logo image: `assets/logo.png` (saved) — a bullseye/target icon (concentric circles = the
spiral filter top-down) + "ACE BREWER" sans. Monochrome. Use as-is (dark on cream header; invert on
dark footer/band).

## Imagery — load-bearing GAP
Real photos are amateur: hero lakeside shot flat/underexposed, product PNGs show crumpled greige
cotton, and the how-it-works graphics are CHEAP CLIP-ART (biggest liability — REPLACE with clean
inline-SVG icons). Plan:
- **Hero → pick best of:** real lifestyle (camping/lakeside) graded warm, OR a generated warm
  coffee-pour scene (Flux). Picker decides. Product shape is complex → don't AI-composite the real
  brewer; use real product PNGs in product/bundle sections.
- **How-it-works → clean inline-SVG icons** (no clip-art).
- **Floats → coffee beans** (generate+key) + maybe real product cutout.
- Real product PNGs (brewer, filter) → hotlink in bundle/product cards on warm backgrounds.

## Generated (free Flux, $0)
- `_gen-hero-v*` warm coffee-pour/outdoor scenes → hero option (vs real)
- `_gen-beans-v*` coffee beans on white → float

## Hero variant
Recent: Maater=full-bleed dark, Oak=split, PoW=full-bleed. Use **split editorial** (warm text panel
+ real/graded lifestyle photo) OR full-bleed graded lifestyle + contained card. Lean split editorial
(fits warm coffee.md DNA + lets the headline breathe).
