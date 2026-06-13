# Research — Orcé Cosmetics (orcecosmetics.com)

## Page: home · Language: ENGLISH (US-based, no FR) · Niche: skincare-cosmetics (ref: OSEA structure, Orcé look)

## Brand / ICP
- **What they sell:** premium color cosmetics built for Asian skin tones & undertones. Heroes:
  **Come Closer Serum Foundation** ($75, part serum/part foundation), **Cloud Dimensions Multi-Use
  Color Cream** ($38, poetic shade names), **Water Magnet Serum-Infused Lip Tint** ($36). Plus setting
  powder, sponge, bundles.
- **ICP:** Asian women ~18–45 who've never found a foundation that matches (brand's own research:
  "35.9% have never found a foundation that matches their complexion"). Buying emotion: to be
  *seen, matched, celebrated*.
- **USP:** shade-inclusive, dermatologist-tested, research-proven ingredients (Tahitian Pearl,
  Hyaluronic Acid), shades "developed based on real people." Founder **Yu-Chen Shih** — "set a new
  standard of beauty by catering to Asian skin tones."
- **Tone:** aspirational + inclusive, quiet-luxury editorial, italic-accented poetry. Real copy:
  *"MEET your MATCH — Don't settle, your perfect shade exists."* · *"Here, you are celebrated,
  acknowledged, and seen."* · "SHOP YOUR SHADE".
- **Proof:** press (Allure, Vogue, Forbes, Who What Wear). No on-site reviews → invent 6 (mark mockup).
- **Announcement (real):** "Free U.S. shipping on orders $50+".

## Design tokens (REAL — read from rendered screenshot, not CSS token)
- Palette: **bone #F4F3EE** bg · **deep navy #001832** = ink AND accent (single color, double duty) ·
  slate #4D5256 secondary · warm tan product-photo grounds. **No third accent** — navy-on-bone. Foil
  **gold #B08D57** appears only on packaging → use sparingly (eyebrows/stars).
- Type: **Parnaso** (didone/high-contrast serif, italic emphasis) → **Playfair Display**; body
  **Helvetica** → Helvetica Neue/Arial stack.
- Buttons: **SQUARE** (no radius), navy fill, bone text, **UPPERCASE letter-spaced**.
- Logo: real inline SVG wordmark "Orcé" (navy) → saved `assets/logo.svg`. Header: navy on bone (as-is).
  Footer (navy bg): `filter:brightness(0) invert(1)` → bone/white.
- Mood: quiet-luxury, editorial prestige beauty; restrained; full-bleed inclusive close-up portraiture.

## Imagery plan — ALL HOTLINKED (Storyblok CDN, all 200; no generation — never Flux faces)
Host: `https://a-us.storyblok.com/f/1022117/...`
- Hero collage: `977x897/4bd2cf0e4f/model-face-close-up-collage.png/m/960x0`
- Foundation campaign: `1080x1350/566a27d19c/campaign-product-shot-foundation-front-portrait.png/m/1080x0`
- Foundation bottle: `1350x1440/f2f224a0a3/foundation-bottle.webp/m/1280x0`
- Setting powder campaign: `1080x1350/0a0e7b0f88/campaign-setting-powder-front-portrait.png/m/1080x0`
- Lip tint editorial: `x/6116ba898c/lip-tint-collection-editorial.avif/m/2480x0`
- Sponge campaign: `1080x1350/9655ec5a4b/campaign-sponge-threequarter-portrait.png/m/1080x0`
- Cloud Dimensions shades (color story):
  - Quiet Luxury: `1080x1188/7412593afd/quiet_luxury_cloud-dimension-product.jpg/m/1080x0`
  - Bali at Golden Hour: `1080x1188/1e49fe642c/bali_at_golden_hour_cloud-dimension-product.jpg/m/1080x0`
  - Sunset in Jaipur: `1080x1188/926e46b907/sunset_in_jaipur_cloud-dimension.jpg/m/1080x0`
  - Chocolate Diamond: `1080x1188/1469825a46/chocolate_diamond_cloud-dimension-product.jpg/m/1080x0`
  - Famous by Association: `1080x1188/6ba625e4cd/famous_by_association-cloud-dimension.jpg/m/1080x0`
- Press logos: `300x80/09b29067ee/allure-logo-final.png` · `300x80/49df7c9e48/vogue-logo-final.png` ·
  `300x80/470f00fce9/forbes-logo-final.png` · `300x80/687ee7ffcc/who-what-wear-logo-final.png`

## Section order (home) — OSEA conversion structure, Orcé look, adapted for color cosmetics
header(announce+nav) → hero(SPLIT: bone text panel + model collage) → press(as-seen-in) →
bestsellers(4 products + stars/badges) → shadematch(USP band: 35.9% stat, shades on real people,
Find Your Shade CTA) → shades(Cloud Dimensions color story, 5 poetic shade tiles) → story(Yu-Chen Shih
mission) → reviews(6, mockup) → offer(newsletter + free shipping) → footer(navy, inverted logo).
Hero variant = SPLIT (last build Beyond Bathing = full-bleed → alternate). Floats SKIPPED (quiet-luxury restraint).
