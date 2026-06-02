# Soniaz Cosmetics — research (home redesign)

**URL:** https://soniazcosmetics.com/ · **Page:** home · **Slug:** soniaz
**Niche:** skincare-cosmetics (makeup / colour cosmetics — lip + cheek) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** — `<html lang="en">`, .com, en-CA, zero French, ships CA/UK/US. Build EN. (CA-based but English-only → EN.)

## Brand
**Soniaz Cosmetics** — indie makeup brand (lip + cheek) **made for South-Asian / melanin-rich skin**. Proudly South-Asian
owned, **Halal-certified**, vegan, cruelty-free, high-pigment so colour reads vibrant (not ashy) on deeper/warm tones.
Founder-led origin story (gap in mainstream beauty for South-Asian skin). Modern glam, accessible price. Early-stage (3 SKUs).
Tone: warm, empowering, celebratory, a touch poetic ("Colors whisper secrets…"). NOT clinical, NOT quirky.

## ICP
South-Asian / melanin-rich women (diaspora: Canada primary + UK/US), 18–35, digital-native (TikTok/IG), underserved by
mainstream (blushes/lipsticks read ashy on them). Values: representation, Halal, vegan, cruelty-free. Also aspiring creators (ambassadors).

## USP / value prop
- **Made for South-Asian skin** — higher pigment load so colour shows up vibrant, not ashy, on melanin-rich tones.
- **Halal-certified** — no alcohol, no animal-derived ingredients. "Beauty that aligns with your values."
- **Vegan & cruelty-free** — "Tested on lips, never on animals."
- **South-Asian owned, founder-led** — celebrates the culture & skin tones of the heritage, "without clichés."
- **Modern glam + performance** — rich pigments, melanin-friendly, quality without compromise. Accessible ($27–47 CAD).

## Tone
Warm, personal, empowerment-led, celebratory, lightly poetic. Founder first-person authenticity. Modern glam (not hyper-luxe).

## Design tokens (from live site — faithful, then elevated)
- **Real fonts:** **Ovo** (elegant old-style serif, 400 — headings) + **Instrument Sans** (clean sans — body). Both Google Fonts.
  → display Ovo serif (editorial-fashion), body Instrument Sans.
- **Real palette (rich jewel tones):** PRIMARY accent **magenta-burgundy #710F39** (buttons/links); crimson **#761322**
  (ink/footer/badges); dusty wine mauve **#67373C** (card/section bg); deep mahogany **#491508** (dark band); pale sage
  cream **#F4F7F3**; off-white **#F5F4F0**; white. → Elevated: warm white/blush-cream bg + near-black-plum ink (legible) +
  **burgundy #710F39** primary + crimson/wine/mahogany jewel accents + soft gold for stars. Glam, warm, editorial, premium.
- **Buttons:** real = near-SQUARE (radius 2px), mixed-case, slight tracking, FLAT (no shadow). → keep near-square; elevate to
  UPPERCASE tracked (beauty convention). Inputs pill (40px).
- **Type:** Ovo h1 large (400 wt). Body Instrument Sans ~16px, letter-spacing .06rem. No uppercase on real headings.
- **Shape:** cards 12–18px radius, images 18px, FLAT/shadow-free (add subtle hover shadow for pitch). Container very wide 1470px → tighten to ~1320px.

## Real logo (hotlink/local — hard requirement) — saved local + verify renders
Header wordmark "Soniaz Cosmetics" (screenshot, **baked WHITE bg**, 900×116): `https://soniazcosmetics.com/cdn/shop/files/Screenshot_2025-05-01_at_8.32.47_PM.png?v=1746146024&width=900`
→ assets/logo.png (saved; white-bg baked, corner pixel = solid white). USE ON A WHITE HEADER (blends). No transparent/dark
variant. FOOTER (dark): render "SONIAZ COSMETICS" as an Ovo serif TEXT wordmark in cream (the logo IS just text — faithful & clean). [[redesign-verify-brand-and-screenshot]]

## Imagery plan — ALL HOTLINK (verified 200; brand imagery is mostly AI/stock — pick the most flattering, no generation)
Products host `https://cdn.shopify.com/s/files/1/0931/3071/9527/files/` · site host `https://soniazcosmetics.com/cdn/shop/files/`.
- **HERO (split, model RIGHT):** AI portrait, glowing result, on-brand — `…/Portrait_avec_maquillage_eclatant.png?v=1746459203` (1024×1536). Alt close-up bold-lips `…/ChatGPT_Image_Apr_9_2025_at_03_22_04_PM.png?v=1746325097`.
- **Bestsellers (3 SKUs):** Pillow-Blush `…/11.png?v=1746459203` · Velvet-Matte Lipstick `…/SONIAZ_WEBSITE_1.png?v=1746325109` (or model `…/ChatGPT_Image_Apr_9_2025_at_03_22_04_PM.png`) · Glow Bundle `…/Untitleddesign_9.png?v=1778952386`.
- **Shades band:** lip swatches `…/lip_swatches_315c590e-5c0d-44ef-b213-007b304515d6.png?v=1746483734` (1600×1600, best swatch asset).
- **Representation / "made for your skin" band:** AI lifestyle `…/portrait_doux_et_lumineux.png?v=1746459203` OR real editorial `https://soniazcosmetics.com/cdn/shop/files/shayan-rostami-qrjURG1nW78-unsplash.jpg?v=1745990833` (real, highest quality).
- **Founder/story band:** real editorial `…/pexels-khezez-23490216.jpg?v=1746071923` OR AI lifestyle `…/Apr_27_2025_at_02_28_38_AM_7a29530d-4e9b-4325-a6c7-9f71f60a817c.png?v=1746071801`.
- **Before/after:** NONE → do NOT fabricate; build a "why high-pigment / made-for-your-skin" + shades story instead.
- No generation (avoid AI-on-AI artifacts). Floats: skip (consistent w/ recent clean builds).

## Products (EN · CAD)
Velvet-Matte Lipstick 27,99 $ (Scarlet Letter · Fresh Fig · Burnt Chai · Oriental Rose) · Pillow-Blush 29,99 $ (Turkish
Delight · Peach Spritz · Moonlit Rose) · Soniaz Glow Bundle 46,99 $ (lipstick + blush; was sold out → show as bundle).

## Nav (EN)
Shop · Lipstick · Blush · About · Ambassadors

## Section order (home — skincare/cosmetics structure, glam editorial, EN; representation-led)
announce (Halal-certified · vegan & cruelty-free · made for melanin-rich skin) → header (white, logo) → HERO split
("Makeup made for South-Asian skin." + high-pigment + 1 CTA + model) → values strip (South-Asian owned · Halal-certified ·
vegan & cruelty-free · high-pigment) → shop the collection (3 SKUs + prices + shades) → "made for your skin" representation
band (high pigment reads vibrant not ashy + image) → the shades (lip swatch image + evocative shade names) → our story /
founder (South-Asian owned, gap-in-market, representation + image) → reviews/UGC (6 mockup reviews — fills the social-proof
gap) → become a Soniaz Muse (ambassador band) → newsletter (10% off first) → footer (crimson, Ovo wordmark).

## Lessons applied
- Verify real brand (Soniaz Cosmetics; logo = white-bg screenshot wordmark → white header; footer = Ovo text wordmark). [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), no generation — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9 or --space-*); reveal `.in` (not `.is-visible`); hero img path `assets/…`; cap 2-col gaps; strip stray section <link>s on assemble; logo/contrast check.
