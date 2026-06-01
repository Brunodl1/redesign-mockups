# AntidotPro — research (home redesign)

**URL:** https://antidotpro.com/ · **Page:** home · **Slug:** antidotpro
**Niche:** skincare-cosmetics (topical efficacy · pro scalp-protection) · **Reference:** `references/skincare-cosmetics.md` (STRUCTURE only — look is clinical-pro)
**Language:** **ENGLISH** (US/LA-facing, `Shopify.locale="en"`, only `lang="en"`, USD; QC phone but English brand).

## Brand
**AntidotPro®** — a **professional scalp-protection system** that prevents **burning, itching, scabs &
irritation during hair COLOR, BLEACH and relaxer** services. Tagline energy: **"Prevent scalp damage"**
/ "No burning, no sizzling, no scabs." A numbered pro system; discovered via hair shows (Premiere
Orlando); **31,749,298+ applications to date**. Pro colorists + at-home sensitive scalps.

## ICP
PRIMARY: professional colorists & salon owners (need a reliable scalp barrier so clients don't burn).
SECONDARY: at-home colorers/bleachers with sensitive/reactive scalps. Buy on: efficacy + pro-trust + relief.

## USP / value prop
- **Stops the burn** — prevents burning/itching/scabs during bleach, color & relaxer processing.
- **Pro-trusted** — used by colorists; **31.7M+ applications**; before/after proof.
- **A simple system** — 01 Scalp (pre-treatment), 05 Pre-Scalp (pre-bleach/dye), Block (barrier),
  02 Cleanse, 03 Revitalize, + Kits.
- For **both** the salon chair and the home colorer.
- Free shipping $150+; subscriptions.

## Tone
Professional yet approachable, educational, solution-focused, proof-driven (testimonials + before/after). Confident, clinical.

## Design tokens (from live site)
- **Real font:** **Poppins** (geometric sans). → display Poppins (bold) + body Inter (clean).
- **Logo:** bold italic charcoal **"ANTIDOTPRO®"** wordmark + a **RED medical-cross** circle icon.
  (Grey/charcoal horizontal version + a White version for dark.)
- **Palette (clinical-pro):** white / off-white bg, **charcoal ink #232323**, **medical RED #CE1126**
  accent (CTAs, the cross), light-grey surfaces. (Gold #FFC000 is a secondary/promo accent — use sparingly
  or skip.) Bold, clean, trustworthy, clinical.

## Real logo (hotlink/local — hard requirement) — viewed; SAVE LOCALLY + verify it renders
Charcoal: `https://antidotpro.com/cdn/shop/files/Logo_AntidotPro_Grey_Horizontal-01_4.png?width=600` (wide wordmark + red cross, transparent).
White: `Logo_AntidotPro_White_Horizontal-01_2.png` (for the dark footer). Download charcoal → assets/logo.png; white → assets/logo-white.png. Confirm renders. [[redesign-verify-brand-and-screenshot]]

## Imagery plan — hero (picker: real photoshoot vs generated clinical Flux); BEFORE/AFTER = real proof
Base `https://antidotpro.com/cdn/shop/files/<FILE>?width=<N>`. Real (picker labels): BIGLAUR photoshoot
x2, pic_2, test_3. **Before/After scalp proof (real, key):** before_skin_2392c3cd-c6d4-469b-8059-61a457128f0b.jpg
+ after_skin.jpg → use in a RESULTS / before-after band. Hero: generated clinical `assets/hero-v1..4.png`
(black/red bottle or salon application) OR a real photoshoot shot → picker → `assets/hero.jpg`.

## Products (system · ~USD)
01 Scalp (pre-treatment protective lotion, flagship) ~$24/$60 · 05 Pre-Scalp (pre-bleach/dye) ~$28 ·
Block (barrier) ~$26 · 02 Cleanse (post shampoo) ~$32 · 03 Revitalize (recovery) ~$34 · Scalp Treatment Kit ~$89.

## Nav (EN)
Shop · The System · How It Works · For Professionals · Results · About

## Section order (home — skincare structure, clinical problem→solution)
announce (free ship $150+ · 31M+ applications · pro-trusted) → header (white, charcoal logo + red cross) →
HERO (split, "Color without the burn." + 1 CTA + 31M trust) → trust strip (no burning/itching/scabs ·
pro-trusted · 31.7M+ applications · color/bleach/relaxer) → how-it-works (3 steps: apply 01 before · color
as usual · zero irritation) → the system / product grid (01·05·Block·02·03·Kit) → RESULTS before/after
band (real before_skin/after_skin + 31M proof) → pro endorsement / "for the chair & at home" → reviews
(★, relief testimonials) → guarantee/CTA + newsletter → footer.

## Lessons applied
- Verify real brand (AntidotPro, red-cross logo). Save logo local (+ white variant) + confirm it RENDERS. [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), Flux hero, no floats — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9 or --space-*); reveal class `.in` (not `.is-visible`); hero img path `assets/…` (not `../assets/…`); cap 2-col gaps; verify logo renders (white-bg/invert gotchas).
