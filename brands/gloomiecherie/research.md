# Gloomie Chérie — research (home redesign)

**URL:** https://www.gloomiecherie.com/ · **Page:** home · **Slug:** gloomiecherie
**Niche:** skincare-cosmetics (gothic-luxe beauty) · **Reference:** `references/skincare-cosmetics.md` (STRUCTURE only — look is DARK gothic)
**Language:** **ENGLISH** (Bruno-pattern). `.com`/Montréal, FR+ES toggles, BUT loads EN
(`Shopify.locale="en"`), English gothic brand voice. Build EN; flag to flip FR if wanted.

## Brand
**Gloomie Chérie** — **"Apothecary for the darkly inclined · Premium beauty for bold souls."**
Handcrafted **gothic-luxury beauty**: skincare, makeup, lip oils, body, candles. Voice: dark
elegance + playful romance — **"indulgent, rebellious, unapologetically extra"** — witchy gothic-luxe
meets 1920s-starlet glamour with modern clean ingredients. Montréal indie brand (founder Alicia).

## ICP
Dark/alternative-beauty lovers, self-care ritualists, ethical/indie-luxury buyers (~18–45, Canadian-
leaning). They want beauty that's effective AND expresses a gothic/witchy identity — ritual + romance.

## USP / value prop
- **Small-batch, handcrafted**, limited quantities (fresh + potent).
- **Cruelty-free always · vegan** (except where honey enriches) · **carbon-neutral shipping**.
- **Gothic-luxury** positioning — timeless formulas, not trends; each purchase supports communities.
- **"La Voûte" (The Vault)** monthly subscription box (from $20 CAD).
- Offers: **free shipping on Canadian orders $200+**, **10% off first order** (newsletter).

## Tone
Indulgent, rebellious, romantic-macabre, elevated. Witty gothic copy ("darkly inclined", "bold souls").

## Design tokens (from live site)
- **Real fonts:** heading **"Instrument Serif"** (high-contrast editorial serif); body a serif stack
  (New York / Baskerville). Serif-forward gothic-luxe. → Build: **Instrument Serif** (display) +
  **Newsreader** (body serif, readable, editorial) — both Google Fonts. Keep it serif-forward.
- **Logo:** ornate Victorian-gothic **"GLOOMIE CHÉRIE"** wordmark in **bone-cream** (for DARK bg).
- **Real palette:** black/near-black (#000, #2E2C28), **bone/cream #F1E5D3 + #C3B9AB**, warm grey
  #605C54, **cherry-red #C31F43** ("Chérie"/cherry), **muted plum #734A72** + mauves. (#108474 teal = app default, ignore.)
- **Elevated theme = DARK gothic-luxe:** near-black bg, bone/cream text, **cherry-red** primary
  accent (CTAs), **plum** secondary, warm-grey lines. Dramatic, editorial, candlelit. (First DARK build.)

## Real logo (hotlink — hard requirement) — viewed; SAVE LOCALLY + verify it renders
`https://www.gloomiecherie.com/cdn/shop/files/logo_horizontal_bone-white-02_4be7fa75-c003-4d17-9de3-d2271f37b40a.png?width=500`
(bone-cream ornate wordmark, transparent, 500×153). Shows on the DARK header/footer as-is (no invert needed).
Download to assets/logo.png and confirm it renders centered/left (past builds had logo CSS bugs). [[redesign-verify-brand-and-screenshot]]

## Imagery plan — hero (picker: real vs generated dark Flux); products HOTLINK (cryptic names → picker labels)
Base `https://www.gloomiecherie.com/cdn/shop/files/<FILE>?width=<N>`. Named reals: Audrey model
(makeup-look vertical), Fresa-Macabra & Nectar-maudit lip oils, Boo-Box packaging. Plus cryptic
product/lifestyle shots (picker labels). Hero: generated dark `assets/hero-v1..4.png` OR a real
moody shot → picker decides → `assets/hero.jpg`.

**Products (gothic names · ~CAD):** Eternal Serum $54 · Lilith Volcanic Ash Cleanser $38 ·
Dryad Face Moisturizer $42 · Slay to Rest Palette $48 · Fresa Macabra Lip Oil $22 ·
Black Velvet Liquid Eyeliner $24 · Sweet Misery Body Butter $32 · Spellbound Multichrome Lipgloss $20.

## Nav (EN)
The Shop · Face · Makeup · Body · Gifts · La Voûte (Subscription) · Journal

## Section order (home — skincare structure, DARK gothic-luxe)
announce (free ship $200 · 10% off first) → header (dark, bone GLOOMIE CHÉRIE logo) → HERO (full-bleed
moody, "Apothecary for the darkly inclined", 1 CTA) → trust strip (small-batch · cruelty-free & vegan ·
carbon-neutral · handcrafted in Montréal) → bestsellers grid (gothic products) → "La Voûte" subscription
feature (the Vault box) → editorial model/manifesto band ("for bold souls") → clean-promise / values band →
reviews (★) → newsletter (10% off) → footer.

## Lessons applied
- Verify real brand (Gloomie Chérie). Save logo local + confirm it RENDERS. [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), Flux hero, no floats — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9); reveal class `.in` (not `.is-visible`); hero img path `assets/…` (not `../assets/…`); cap 2-col gaps so columns don't touch; DARK theme → ensure ALL text light + legible (contrast pass every band).
