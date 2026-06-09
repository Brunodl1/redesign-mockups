# Bella Aura Skincare — research (home redesign)

**URL:** https://www.bellaaura.com/ · **Page:** home · **Slug:** bellaaura
**Niche:** skincare-cosmetics (LUXURY · clinical-science · botanical actives) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Shopify.locale="en", hreflang en-CA/en-AT/en/x-default — NO French). en-CA (Canadian) but English-only store & English luxury voice → EN (consistent w/ prior calls; skill FR default applies only to .ca that OFFER French).

## Brand
**Bella Aura Skincare** — luxury, science-forward skincare. "Advanced skin **absorption technology** with
**clinically proven botanical actives** — luxurious moisturizers, serums & eye creams that **protect, repair &
revitalize**." Formulas target **ROS, pollution** (anti-aging/anti-pollution). Sleek **black bottles** with a
gold **BA monogram**. Editorial glowing-skin photography. Premium pricing ($82–$270). Refined, clinical-luxe.

## ICP
Affluent skin-conscious women ~30–60 who want clinical RESULTS in a luxurious experience — anti-aging,
anti-pollution, barrier repair, radiance. Buy on: proven efficacy + advanced tech + botanical/clean + luxury feel
+ ritual/regimen. Objection to answer: "is it worth the premium price?" → science, proof, results, reviews, kits.

## USP / value prop (EN)
- **Advanced absorption technology** — actives delivered deeper for real results.
- **Clinically proven botanical actives** — protect, repair, revitalize; target ROS & pollution.
- **Luxury ritual** — serums, essences, eye, masque, moisturizers; curated duos/rituals/kits.
- **Results-driven, elegant, clean botanical luxury.**

## Tone
Luxurious, refined, confident, science-credible but elegant (not cold-clinical). Editorial, minimal, premium.

## Design tokens (REAL site DOM-dump → elevated)
- **Logo (local, transparent):** circular **BA monogram** + "BELLA AURA SKINCARE™" wordmark, BLACK line-art.
  Real PNG had WHITE bg → stripped to transparent `assets/logo.png` (579×568); `assets/logo-white.png` = white
  (also use CSS `filter:brightness(0) invert(1)` on dark). Shows black on ivory header; white on dark footer/hero.
- **Real type:** **Optima** (classic luxury-cosmetics flared humanist) + Poppins (popup). → display = **Marcellus**
  (closest free Optima-alike, elegant flared), body = **Mulish** (clean, refined). Both Google Fonts.
- **Real palette (DOM + screenshot):** black/charcoal #303030/#000, white, greys; GOLD accent (BA monogram + gold
  bottle text). Editorial warm skin tones. → **Elevated:** warm IVORY bg, warm near-BLACK ink, **champagne-GOLD**
  accent (eyebrows/rules/fine details), near-black primary CTAs, deep charcoal dark bands/hero/footer, champagne-grey
  alt band. Luxe-clinical minimal.

## Imagery plan — HOTLINK real packshots (black bottles, verified 200); hero = product on dark (no model img avail)
Homepage JS-rendered + glowing-skin hero is a JS slider/video (URL not extractable); gen tooling dead
([[redesign-tooling-broken]]) → hero = the black hero bottle on a luxe DARK ground (elegant, on-brand), NOT a model.
CDN base `https://cdn.shopify.com/s/files/1/0022/3929/9653/files/`.
- **HERO (split, dark-luxe):** dark charcoal section; left = elegant light text; right = Pure Radiance Essence
  black bottle on a light champagne card (black bottle pops on light, card pops on dark). `essence1_8c8fc85d-1dc3-49b9-918c-9f451b08b8a3.png`
- **BESTSELLERS (hotlink, ?width=600) — black bottles:**
  | Product | $CAD | src file |
  |---|---|---|
  | Pure Radiance Essence | 82 | essence1_8c8fc85d-1dc3-49b9-918c-9f451b08b8a3.png |
  | Skin Barrier+ | 108 | 41_7d25da4f-93b8-4ccf-88ab-bd1165694abf.png |
  | Rapid Repair Clarifying Elixir | 96 | 42.png |
  | Hydra Revive Treatment | 99 | hydra_product.png |
  | Multi Repair Rescue Masque | 102 | 54_eeee6788-c6c3-4f02-92ca-680e34156d9a.png |
  | Night Cellular Renewal | 90 | 31_4fa5ea77-8029-4fc8-ba03-03e39d724506.png |
  | Antioxidant Booster | 86 | 10_7ae90b74-431b-41f7-9a75-5b9a84f4adb7.png |
  | Instant Lifting Eye Contour | 94 | 28_77d89c75-22ec-4b5d-806e-69b82be3e3c2.png |
- **RITUALS band (duos/kits, hotlink):** Essential Radiance Duo $175 (6_5c3cb241...png) · Soothe & Clarify Duo $180
  (24_1eec0fab...png) · Hydra & Strength Ritual $225 (10_b33d5161...png) · Discovery Kit $270 (DISCOVERY_KIT25.png).

## Categories & Nav
Cats: Serums · Moisturizers · Essences · Eye · Masques · Rituals/Sets · Fragrance (Exalté).
Nav (EN, converting links; About/Contact → footer per [[nav-no-utility-links]]): Bestsellers · Serums · Moisturizers · Rituals · Our Science

## Section order (home — luxury clinical skincare, EN)
announce (free shipping · clinically proven · luxe) → header (ivory, BA logo) → HERO (split dark-luxe: elegant
promise + black hero bottle) → trust/values strip (clinically proven · advanced absorption · botanical actives ·
anti-pollution — SVG icons) → bestsellers grid (8 black bottles, ★+price) → "the science" technology band (dark:
advanced absorption + targets ROS/pollution) → rituals/regimen band (duos & kits upsell) → brand story band
(luxury, science + botanicals) → reviews wall (6, ★ summary) → newsletter → footer (dark, white logo).

## Lessons applied
- Real brand verified (Bella Aura Skincare, BA monogram). Screenshot DEPLOYED page before done — [[redesign-verify-brand-and-screenshot]].
- Tooling broken: DOM-dump for JS site, headless-Chrome shots (~500px min — [[headless-chrome-mobile-minwidth]]), NO gen — [[redesign-tooling-broken]].
- Logo had white bg → stripped transparent (+ white variant) — [[styles-css-is-concatenated]]-style care.
- Hotlink exact products.json `src` URLs. Define every CSS token; relative asset paths; outbound links → google.com.
