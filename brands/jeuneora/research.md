# Jeuneora — HOME page redesign (jeuneora.co.nz)

## Brand
- **Jeuneora** — NZ-founded (Christchurch, 2016) **B Corp** DTC beauty-wellness brand: clean **skincare + ingestible supplements** ("inside-out beauty"). Founder **Mon (Monique) Kaminski** — built each product because she needed it (collagen in her 30s, sleep, perimenopause/hormone support). 100,000+ women. Ships NZ/AU/US. **EN (NZ English — "bag" not "cart", NZD).**
- Tone: warm, personal, female-first, science-grounded but conversational. Founder-led intimacy.
- Logo (REAL): WHITE wordmark `https://cdn.shopify.com/s/files/1/1182/2184/files/Jeuneora_Logo_x320.png?v=1746500217` → on the cream/light header **invert to black** (`filter:brightness(0)`); on the dark plum footer use as-is (white). Mono black icon: `https://jeuneora.co.nz/cdn/shop/files/Jeuneora_MONO_Icon_63feacdc-9bd8-4058-a306-1f778cac9a8e.png`.

## What they sell / hero products (NZD)
Categories: **Sleep · Skincare · Collagen · Wellness.**
- **Renew+ Marine Collagen Powder** (Mixed Berry) — $99 — ★4.9 (4,917) — flagship.
- **Beauty Sleep Powder** — $79 — ★4.9 (2,110) — award-winning.
- **Naked Collagen** (100% pure) — from $61 — ★4.9 (1,838).
- **GoNightly** Overnight Repair Cream — from $29 — ★4.9 (1,239).
- **GoLightly** Plump+Protect Day Cream — from $28 — ★4.9 (985).
- **Hair Skin Nails** capsules — from $51 — ★4.9 (1,498).
- **Greens+ Super Powder** — $76 — ★4.7 (294). **Hormone Hero** — from $88. **Beauty Brain** nootropic — $99.
- **Starter Bundle** — $175 → **$139** — ★4.9 (6,926) = most-reviewed listing.

## ICP / pains / desires
Women 35–55 (NZ/AU core), perimenopause, demanding careers, sleep issues, aging skin; value science + clean ingredients over price.
- Pains: poor (hormone/stress) sleep draining energy+skin · visible aging (collagen loss, dullness, fine lines) · hormonal shifts (mood, cravings, "not myself").
- Desires: an inside-out routine that actually works (fewer, better products) · clean filler-free formulas they trust (B Corp) · products made *for women like them, by a woman who lived it*.

## USP + proof (quote real copy)
**USP:** Science-backed beauty from the inside out — formulated by a woman who needed it first, trusted by 100,000+ women.
- "Science-backed skincare and supplements, designed by women who needed it first."
- "I built what I needed through my 30s and into my 40s, and 100,000+ women have found they needed it too." — Mon, Founder.
- "We've helped deliver over two million better nights of sleep."
- **B Corp Certified** · "100% natural, free from fillers and binders · cruelty-free skincare, free from the usual nasties" · "We stay close to the science and update our formulations when the evidence demands it."
- Trust marquee: "Trusted by thousands · Backed by science · B Corp Certified".
- Press: Vogue · Denizen · Gritty Pretty · Together Journal · Bride & Groom.

## Real design tokens (from live site via `browser styles`)
- **Fonts:** display **Playfair Display** (serif, weight 400, large editorial — h1 48px, big h2s); body/UI **apercu** sans (weight 300) → Google match **"Inter"** or system sans (apercu not on Google; use a clean geometric sans — **Inter** weight 300/400). Use Playfair for headlines, Inter for body/UI.
- **Colors:** ink near-black **#1a1a1a** on cream **#f9f7f4** / white; warm beige **#e8e5e0**; **deep wine/plum accent #682742**; **deep maroon hero/footer band #4a0c1c**; reviews stars **black**.
- **Buttons:** **SQUARE (radius 0)**, apercu/Inter light weight, minimal/quiet luxe. CRO redesign → primary = filled **plum #682742** (or black) square button + outline variant.
- Mood: luxe editorial beauty — cream + black + deep plum, serif headlines, generous whitespace, big imagery. Use `references/skincare-cosmetics.md` conversion STRUCTURE; pull the LOOK from Jeuneora. Multi-category home (shop-by-goal + bestsellers + founder + inside-out system).

## Hero variant
**Full-bleed editorial** lifestyle image + contained text card (deep-plum scrim for contrast, cream text). Value prop: "Beauty, backed by science. Inside out." Recent builds: LCS split, Parolive PDP, Parolive full-bleed-left → use FULL-BLEED here. Mobile: full-bleed image + bottom scrim text.

## Sections (in order)
header (cream, inverted logo) + announce (B Corp · free NZ shipping · 100,000+ women) → hero (full-bleed editorial) → trust marquee strip → shop by goal (Sleep/Skincare/Collagen/Wellness, 4 tiles) → cult favourites bestsellers grid (Renew+, Beauty Sleep, GoLightly, Greens+, Naked Collagen, Hair Skin Nails — ★4.9 + price + ATC) → founder story (Mon, mon_3.jpg split) → the difference (B Corp / clean-no-fillers / science — icon trio + claims) → Renew+ collagen spotlight band (featured, float) → press strip + reviews (6 cards ★4.9, big counts) → starter bundle offer band ($175→$139) → footer (dark plum #4a0c1c, white logo).

## Imagery plan — hotlink real, generate hero + floats
### Hotlink (jeuneora.co.nz/cdn/shop/files/ — append ?width=1200)
- Packshots: `Jeuneora-Renew-Marine-Collagen-A-MixedBerry.webp`, `Jeuneora-Greens_SuperPowder-A_1_8caf0f94-afd8-4816-88ca-1453239a7682.webp`, `Jeuneora-GoLightly-Plump-Protect-Day-Cream-B.webp`, `Landing_Page_-_Beauty_Sleep_Product_page_reviews_section___14.webp`
- Founder portrait: `mon_3.jpg`. B Corp fern editorial: `blog13_featured_b_corp_ferns.webp`.
- Press logos: `Social_proof_-_vogue_logo_4.png`, `Social_proof_-_denizen_logo_3.png`, `Social_proof_-_gritty_pretty.png`, `Social_proof_-_together_journal_logo_1.png`, `Social_proof_-_bride_and_groom_logo_2.png`.
- Logo + mono icon (above).

### Generate
- `hero` (Gemini composite, real Renew+ collagen jar) — editorial morning scene: the real berry-collagen jar on cream linen/marble with berries + soft NZ light, deep-plum + cream tones, negative space for headline. (~$0.08, 2 variants)
- `float-cream` (Flux) — thick off-white pearlescent cream dollop/swatch on pure white, no shadow → key.
- `float-berry` (Flux) — a small scoop of berry-pink collagen powder + a few fresh berries on pure white, no shadow → key.
