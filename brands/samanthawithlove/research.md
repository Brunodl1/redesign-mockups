# Samantha with Love — research (home redesign)

**URL:** https://samanthawithlove.com/ · **Page:** home · **Slug:** samanthawithlove
**Niche:** skincare-cosmetics (handcrafted body care + candles) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (English-only store: `Shopify.locale="en"`, only `lang="en"`, no FR/ES alternates).
Montréal brand but English identity → EN.

## Brand
**Samantha with Love** — "handcrafted natural body care + candle brand from Montréal · skincare made
with love." Whipped body butters, soy candles, face creams, body bars — purest scents, rawest
ingredients, **for sensitive skin**, all handcrafted. Story: "what started as an excuse to be girly &
creative turned into a passion for skincare made with love." Playful, feminine, warm, gift-y.

## ICP
Women seeking thoughtful, artisanal, gentle body care (sensitive skin); gift-buyers who love a
handmade origin story; cozy/girly self-care fans. Buy on: handmade-with-love charm + gentle/natural + scents.

## USP / value prop
- **Handcrafted in small batches** in Montréal — made with love.
- **Natural, gentle, for sensitive skin** — purest scents, rawest ingredients.
- **Whipped body butters in 12 scents** + soy candles + face creams + $5 body bars.
- Cozy, giftable, feminine — a personal, artisanal alternative to mass body care.

## Tone
Girly, playful, warm, heartfelt, a little cheeky (product names: "I'm a Princess", "Don't be so
Sensitive", "Love my Face"). Charming, handmade.

## Design tokens (older theme — derived from logo + brand feel)
- **Logo:** "SAMANTHA" bold black sans (uppercase, condensed) + "with ♥ love" in a casual SCRIPT
  with a **pink heart**, in a thin black frame. Black + pink-heart on white/transparent.
- **Palette (warm girly-handcrafted):** warm cream/blush bg, charcoal ink (#2A2422), **rose-pink**
  accent (CTAs), soft blush tints, script charm. Feminine, clean, cozy.
- **Type:** display = **Poppins** (friendly geometric, echoes the bold logo) · script accent =
  **Caveat** (the "with love" charm, for eyebrows/accents) · body = **Nunito Sans** (soft, friendly).
  All Google Fonts. (Older site had no distinctive web font.)

## Real logo (hotlink/local — hard requirement) — viewed; SAVE LOCALLY + verify it renders
`https://samanthawithlove.com/cdn/shop/files/SamanthaWithLove-logo-pink_540x.png?v=1614331550`
(black "SAMANTHA" + script "with ♥ love" + pink heart, framed, transparent, 540×183). Shows on
cream/white header as-is. Download to assets/logo.png; confirm it renders. [[redesign-verify-brand-and-screenshot]]

## Imagery plan — real photos are OLD/weak → hero GENERATED (Flux); products: use few usable reals + color tiles
Hero: generated warm handcrafted Flux (`assets/hero-v1..4.png`) OR a real shot → picker decides → `assets/hero.jpg`.
Real candidates (picker labels): bodyButters-samantha.jpg (butter jars), IMG_0169.jpg, two FB-era photos.
**Products (cute names · ~CAD):** Whipped Body Butter — "I'm a Princess" $22 · "Pretty Vanilla" $22 ·
"I Love Lavender" $22 · "Pumpkin Spice" $22 · Soy Candle $24 · "Love my Face" Cream $28 ·
"Sweet Dreams" Night Cream $30 · Body Bar $5. (Assign images from picker; where reals are weak, use
soft color/blush tiles with the scent name — clean + on-brand rather than low-res photos.)

## Nav (EN)
Butters · Candles · Face · Bars · Gifts · About

## Section order (home — skincare structure, warm girly-handcrafted)
announce (handmade in Montréal · made with love) → header (cream, SAMANTHA logo) → HERO (split, warm,
"skincare made with love", 1 CTA) → trust strip (handcrafted · natural & gentle · sensitive-skin safe ·
made in Montréal) → shop-by-category (Butters / Candles / Face / Bars) → bestsellers grid (butters,
candle, face cream) → "made with love" founder story band (Samantha, girly/creative/handcrafted) →
reviews (★) → gift/values band → newsletter → footer.

## Lessons applied
- Verify real brand (Samantha with Love). Save logo local + confirm it RENDERS centered/left. [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), Flux hero, no floats — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9); reveal class `.in` (not `.is-visible`); hero img path `assets/…` (not `../assets/…`); cap 2-col gaps so columns don't touch.
