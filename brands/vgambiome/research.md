# V*GAM Biome — research (home redesign)

**URL:** https://vgambiome.ca/ · **Page:** home · **Slug:** vgambiome
**Niche:** skincare-cosmetics (microbiome / clean-science) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Bruno-pattern). `.ca`/Québec, bilingual, 514 — BUT loads in English
(`Shopify.locale="en"`), English brand identity ("Nature Makes Science"), English product names.
Built EN (consistent w/ the last English-facing builds); flag to flip FR if Bruno wants.

## Brand
**V*GAM Biome** — science-based **microbiome skincare**, founder-led by **Dr. Mireille Vega**
(chemist, PhD biotechnology, 35 yrs). Positioning: **"Nature Makes Science"** + radical simplicity
— "35 ingredients. 2 products. All year." Clean, vegan, free from BHA/parabens/phthalates/perfume.
Adapts to all skin types/ages/seasons by nourishing the skin's microbiome ("skin flora").
**Made in Canada.**

## ICP
Sensitive-skin, ingredient-conscious, eco-minded buyers (all ages) who want a simple, science-backed
routine they can trust — tired of 10-step regimens. Value transparency + a credible founder/clinical story.

## USP / value prop (lead with these)
- **Microbiome science** — restores & balances skin flora (not stripping it).
- **Radical simplicity** — "35 ingredients, 2 products, all year"; the GO2 Duo covers all skin types.
- **Clean & vegan** — no BHA, parabens, phthalates, synthetic perfume.
- **Adaptive** — one routine for all skin types, ages, seasons.
- **Founder-credible** — Dr. Mireille Vega, chemist/PhD, 35 yrs.
- **Made in Canada.**

## Tone
Authoritative yet warm; science + nature; calm, confident, simple, transparent. Premium-clean.

## Design tokens (from live site)
- **Real fonts:** heading **Montserrat**, body **Outfit** (both Google Fonts, modern geometric sans). Use as-is.
- **Logo:** marine **navy** "V✱GAM" wordmark with a molecular/microbiome motif (the ✱). Clean, scientific.
- **Palette (elevated, faithful):** cool cream/oat bg, **marine navy** ink + buttons (#14304A), a
  **seafoam/sage green** accent (#7FA68C — the "biome/nature" cue) for eyebrows/badges/small accents,
  white surfaces, soft seafoam-tinted alt bands. Clean, fresh, science-meets-nature (NOT cold clinical).

## Real logo (hotlink — hard requirement) — verified, viewed
`https://vgambiome.ca/cdn/shop/files/L_VGAM_Marine.png?height=120` (navy wordmark, transparent).
On the dark/navy footer, invert to white (`filter:brightness(0) invert(1)`).

## Imagery plan — HOTLINK real shots (Shopify CDN, verified 200); hero via picker (real vs generated Flux)
Base `https://vgambiome.ca/cdn/shop/files/<FILE>?width=<N>`
**Hero:** picker chooses among real (V_GAM_HR_duo, V_GAM_HR_1604, MIREILLE_VEGA model, go2 duo) and
3 generated clean-science Flux variants → `assets/hero.jpg` (or hotlink the chosen real URL).
**Bestsellers / products:**
| Product | what | USD | File |
|---|---|---|---|
| The GO2 Duo (cream + mineral serum) | signature, all skin types | $96 | go2-biotik-duo-facial-cream-mineral-serum_1.jpg?v=1692743119 |
| Pure Artik Facial Cleanser | gentle daily cleanser | $38 | pure-artik-facial-cleaner_0439d883-7ff4-4b57-b130-9b824bba55fd.jpg?v=1692743212 |
| Biotik Elements Facial Cream | nourishing face cream | $58 | biotik-elements-facial-cream.jpg?v=1744820337 |
| Komplements Mineral Serum | mineral serum | $56 | go2-biotik-duo-facial-cream-mineral-serum_1.jpg?v=1692743119 |
| Biotik Emprint Hand & Body Cream | hand & body | $32 | hand-cream-biotik-emprint_70a6b8ff-9824-42a1-b899-dd7b28c4b3ce.jpg?v=1692743228 |
| PLUS Boost balm | multi-function balm | $28 | CremePLUS-1.jpg?v=1732748781 |
| The Total Skin Reset Pack | full routine pack | $140 | V_GAM_HR_duo_1_2_copy.jpg?v=1687968369 |
| Nomad Onboarding Routine | starter trio | $45 | vgambiome-go-2-trio-cleanser-nettoyant-creme-cream-sans-odeur-unscented-serum-15-ml-01.jpg?v=1751992199 |

**Founder image:** MIREILLE_VEGA_159510_copy_2.jpg?v=1693337497 (Dr. Mireille Vega).

## Nav (EN)
Shop · The GO2 Duo · One Human Skin · The Science · About · Journal

## Section order (home — skincare structure, clean-science)
announce → header (cream, navy logo) → HERO (split, "Nature Makes Science", 1 CTA) →
trust strip (clean/vegan · made in Canada · all skin types · microbiome) →
**simplicity feature** ("35 ingredients · 2 products · all year") → bestsellers (GO2 Duo + products) →
**microbiome science band** ("One Human Skin" — how it works) → founder story (Dr. Mireille Vega) →
reviews wall (★) → clean-promise / what's-out band (free-from) → newsletter → footer.

## Lessons applied
- Real brand verified (V*GAM Biome, navy molecular logo). Personally screenshot the DEPLOYED page
  before declaring done — [[redesign-verify-brand-and-screenshot]].
- Tooling broken: raw-HTML research, headless-Chrome shots, Flux hero, no floats. [[redesign-tooling-broken]].
