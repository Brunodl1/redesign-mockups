# Momenti Botanicals — research (home redesign)

**URL:** https://www.momentibotanicals.com/ · **Page:** home · **Slug:** momentibotanicals
**Niche:** skincare-cosmetics (handmade botanical soap) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Bruno-pattern). `.com`/Canada, FR toggle exists, BUT loads EN
(`Shopify.locale="en"`), English brand identity. Build EN; flag to flip FR if wanted.

## Brand
**Momenti Botanicals** — handmade **botanical soap** in small batches, Canada. Tagline **"Pure
essences. Delicate practices."** / "Less clutter, more calm. Embrace the simplicity. This is your
moment." Virgin olive oil, shea butter, fresh botanicals; kind to sensitive skin; **palm-oil-free,
cruelty-free, minimal packaging**. Elegant, meditative, ritualistic — slowing down on purpose.

## ICP
Wellness-focused, design-conscious buyers seeking luxe natural skincare + intentional ritual;
value sustainability, minimalism, quality ingredients. Buy on: clean/gentle + the calm ritual + beauty.

## USP / value prop
- **Handmade, small-batch, made in Canada.**
- **Botanical & gentle** — virgin olive oil, shea, fresh botanicals; kind to sensitive skin.
- **Palm-oil-free · cruelty-free · minimal packaging.**
- **A ritual, not a routine** — "this is your moment."
- Social proof **5.0★**; free ship CA $65+ / US $100+; 15% off first; up to 20% bundle savings.

## Tone
Elegant, calm, meditative, minimal, intentional. Quiet luxury.

## Design tokens (from live site)
- **Real font:** **Literata** (elegant editorial serif). → display Literata + body Inter (clean sans, readable).
- **Logo:** charcoal **"M" monogram** of organic botanical blob shapes (no separate wordmark file →
  pair monogram image + "Momenti Botanicals" in Literata serif as the header/footer lockup).
- **Real palette:** warm cream **#FAF6E6 / #FCFAF2**, charcoal **#2F3035 / #202223**, white.
  (#108474 teal + #9d4edd purple = app/defaults, ignore.) Minimal cream + charcoal.
- **Elevated palette:** warm cream bg, charcoal ink + charcoal buttons, a muted **sage/olive** botanical
  accent (eyebrows/icons), soft greige alt bands. Quiet, elegant, botanical.

## Real logo (hotlink/local — hard requirement) — viewed; SAVE LOCALLY + verify it renders
Monogram: `https://www.momentibotanicals.com/cdn/shop/files/Momenti_monogram-01.png?height=200`
(charcoal organic-blob "M", transparent, 200×200). Also a crest: `Crest_900x900_charcoal.png`.
Download monogram to assets/logo.png; pair with "Momenti Botanicals" serif wordmark. On dark footer
invert to cream (brightness(0) invert) OR use cream variant. Confirm it renders. [[redesign-verify-brand-and-screenshot]]

## Imagery plan — HERO = GENERATED "using the soap" (Bruno's request); products HOTLINK (real, good, verified)
HERO: per Bruno — someone USING the soap with the bar visible → generated Flux `assets/hero-v1..4.png`
(hands lathering a soap bar) → picker picks best (reject AI-hand artifacts) → `assets/hero.jpg`.
Base `https://www.momentibotanicals.com/cdn/shop/files/<FILE>?width=<N>` (all verified, clean named shots):
**Soap bars (bestsellers):** Eden (Eden-soap-bar-2-web.jpg) · Angeletto (Angeletto-soap-bar-1-web.jpg,
fragrance-free) · Solstice (Solstice-soap-bar-04-web.jpg) · Aura (aura-soap-bar-1858345.jpg) ·
Costiera (Momenti-costiera-soap-bar-1.jpg) · Rosemary Garden (Momenti-rosemary-natural-soap-bar.jpg).
**Group / category:** Momenti_6-soaps.jpg (six soaps), Lotion-2-WEB.jpg (body milk), gift bag
(Momenti-organic-cotton-gift-bag.jpg), Angeletto_banner.jpg.

## Products (names · ~CAD)
Botanical Soap Bars ~$14 each (Moon Milk, Glow, Rosemary Garden, Solstice, Eclipse, Aura, Costiera,
Angeletto [fragrance-free], Eden, Rainfall) · Body Milk ~$28 · Soap Sets ~$48 · Gift Bag.

## Nav (EN)
Shop · Soap Bars · Body Milk · Sets & Gifts · Our Story · The Ritual Journal

## Section order (home — skincare structure, elegant minimal botanical)
announce (free ship $65+ · 15% off first · made in Canada) → header (cream, monogram + serif wordmark) →
HERO (full-bleed, someone USING the soap, "Pure essences. Delicate practices.", 1 CTA) → trust strip
(handmade in Canada · palm-free · cruelty-free · for sensitive skin) → bestsellers grid (soap bars) →
"the ritual" editorial band (slow-down/intentional, group soaps image) → ingredient/clean-promise band
(olive oil · shea · botanicals · palm-free) → reviews (★5.0) → sets & gifting band → newsletter → footer.

## Lessons applied
- Verify real brand (Momenti Botanicals). Save logo local + confirm it RENDERS. [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), Flux hero, no floats — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9); reveal class `.in` (not `.is-visible`); hero img path `assets/…` (not `../assets/…`); cap 2-col gaps; logo-with-white-bg → use a chip not invert.
