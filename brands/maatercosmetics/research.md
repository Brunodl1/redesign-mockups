# Maater Cosmetics — research (home redesign)

**URL:** https://maatercosmetics.com/ · **Page:** home · **Slug:** maatercosmetics
**Niche:** skincare-cosmetics (face & body oils) · **Language:** EN
**Language call:** CA/CAD store BUT English-only (no FR toggle, no FR copy, `lang="en"`,
cosmic/space brand voice is core to identity). Top geo signal is Vancouver BC, not Québec.
→ Build in **English** (translating would break the brand voice).

## What they sell
All-natural, vegan, cruelty-free **face & body oils**, "Cosmic Aesthetics" positioning.
Product lines (real, hotlinked):
- **Space Face** (face oil): **Alpha** $60, **Kappa** $60, **Kappa Roller** $30
- **Celestial Bodies** (body oil): **Beta** $60, **Gamma** $60
- **Sets:** Star Set $110, Essentials Set $110

## ICP / USP / tone
- ICP: skin-conscious 25–45, clean-beauty + design-led, wants natural actives without
  the boring "wellness beige" look. Buys on aesthetic + values + glow result.
- USP: active plant-based ingredients + organic pure essential oils; vegan, cruelty-free,
  all-natural; "made on planet earth" cosmic brand voice.
- Tone: bold, cosmic, editorial-edgy, a little playful ("Free shipping to earth over $75").

## True palette (from rendered screenshot — NOT the CSS focus-glow token)
- bg: near-black `#0A0A0A` / `#000`
- text: white `#FFFFFF`; muted grey `#8A8A8A`
- **accent: burnt orange / rust `#C8501E`** (press logos, stars, line-art) — the real brand accent
- secondary glow (sparingly): teal-mint `#A8E8E2` (their `--color-shadow` token; use only as faint cosmic glow)
- product glass: clear/frosted dropper bottles, minimal label

## Type
- Headlines: bold condensed all-caps gothic (brand uses NickelGothic) → **Anton / Oswald** (Google)
- Body: **Assistant** (their real body font, on Google)
- Mono accent (cosmic/techy labels, eyebrows, prices): **Space Mono** (≈ their Akkurat Mono)

## Real assets (HOTLINK — Shopify CDN)
- Logo SVG (light, for dark header): saved local `assets/logo.svg`
- Bottles: `Matter-Alpha-0996_3.jpg`, `Matter-Kappa-Bottle-Front-0997.jpg`,
  `Matter-Beta-Bottle-Front-0998.jpg`, `Matter-Gamma-Bottle-Front-0999.jpg`
- Drips (dramatic dropper): `Matter-Alpha-Drip-1263.jpg`, `Matter-Beta-Drip-1289.jpg`
- Sets: `Matter-Bundle-Star.jpg`
- Lifestyle: `MAATER_face_*.jpg` (glowy skin), `MAATER_body_*.jpg`, `MAATER_feature_*.jpg`
- Press logos: `Maater_press-01..10.png` (DailyHive, Toronto Sun, Calgary Herald, Financial Post…)

## Gap the redesign fixes
Real site shows **ZERO product imagery** above the fold — pure stock models. Redesign leads
with the actual cosmic dropper bottles + drips + a real bestseller grid with prices & ratings.

## Generated (free Flux, decorative depth)
- `gen-droplet-v*` — amber/gold oil droplets → floating elements (keyed)
- `gen-nebula-v*` — deep-space band texture for a cosmic section background

## Hero variant
Recent builds: Étymologie=split, Le Must Dose=full-bleed → use **full-bleed cosmic image +
contained text card with dark scrim** (fits the dark space theme), real product visible.
