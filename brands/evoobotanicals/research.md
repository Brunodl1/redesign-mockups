# EVOO Botanicals — "Aura" PRODUCT page redesign (evoobotanicals.com)

## Brand
- **EVOO Botanicals** — premium **waterless botanical skincare**, Akaroa **New Zealand**. EVOO = NZ **extra virgin olive oil** as the base of every product, slow-infused with botanicals (skinimalism / clean luxury). Range: Aura (day oil), Nuit (night oil), Halo (hair oil), Lumière (blush balm), Lip Treatment, Radiance Set, Gua Sha. Tagline: **"Infused by nature for elevated skin."** Free shipping NZ + AU. **EN (NZ — "moisturiser").** Tone: editorial-calm, unhurried, education-forward.
- Logo (REAL): black wordmark on transparent `https://www.evoobotanicals.com/cdn/shop/files/Black_Text_on_Transparant.png?height=200&v=1773051210` → light/white header as-is; on a dark footer put on a cream chip (don't invert) OR keep footer light.

## Product — Aura (this PDP)
- **Aura** — a **glow-enhancing radiance face oil-serum** for daily AM use. "NZ extra virgin olive oil slowly infused with a curated blend of botanicals to nourish, soften and support naturally radiant skin." Lightweight, absorbs fully → "balanced, supple, softly illuminated."
- **Price: $64.00 NZD** (single SKU). Scent: "fresh, green, softly herbal — spearmint, lemongrass, green tea, pandan; naturally scented, FREE FROM SYNTHETIC FRAGRANCE."
- Key botanicals: NZ **olive oil** + jojoba, **kawakawa** (native Māori medicinal), green tea, rosehip, turmeric, cacao, ginkgo, marshmallow leaf, vitamin E.
- How to use: "Warm 1–2 pumps between palms and press into clean skin, face + neck. Each morning, then moisturiser + SPF."
- Cross-sell: **The Radiance Set** (Aura + Nuit) $88 (RRP $124) — "day & night work in synergy for complete barrier support + radiance." Siblings: Nuit $68, Halo $48, Lumière $38, Lip $34, Gua Sha $24.

## ICP / pains / desires
Women 30–55, clean/conscious beauty, NZ/AU, dry/sensitive/barrier-compromised skin, value provenance + slow ritual.
- Pains: face oils feel greasy / don't absorb · synthetic fragrance irritates · skincare that doesn't deliver visible glow.
- Desires: one daily step that nourishes + protects barrier + illuminates · ingredients they trust (native, natural, traceable) · a ritual that feels luxurious not clinical.

## USP + proof (quote real copy)
**USP:** NZ extra virgin olive oil slow-infused with native botanicals — one morning step that rebuilds your barrier and restores luminous skin.
- "Slowly infused with a curated blend of botanicals" (slow-infusion ≠ mass-blended).
- NZ provenance + **kawakawa** native active; traceable, regional.
- "Free from synthetic fragrance" — scented only by botanicals.
- Antioxidant-loaded (turmeric, cacao, green tea, rosehip, ginkgo, vit E).
- Credibility: sibling **Nuit = Finalist · Clean + Conscious Awards 2026**.

## Reviews
**5.0 / 5 · 4 reviews** (small but perfect). Real quotes (keep tone, mark mockup when expanding):
- "My skin loves the moisture and softness this high quality serum provides." — Laura C.
- "Beautiful natural ingredients… fantastic results after just two weeks!!" — Sarah C.
- "Feels great left on for 1/2 hr before moisturising so it sinks in." — Denise.
- "I love that there's no overwhelming fragrance to interfere with my perfume." — Alyson.

## Real design tokens (from live site via `browser styles`)
- **Fonts:** everything **Jost** (sans, Google font). Headings **light weight 200–300** with **wide letter-spacing ~0.25em**; body Jost 400, 14px. Airy, minimal.
- **Colors:** essentially **monochrome** — black **#000/#111** on **white #fff**; greys #383838, #f2f2f2. NO brand accent.
- **Buttons:** **SQUARE (radius 0)**, Jost, white/black minimal.
- Mood: ultra-minimal, airy, editorial clean-luxury skinimalism. Use `references/skincare-cosmetics.md` conversion STRUCTURE; pull the minimal LOOK from EVOO. **Introduce ONE restrained ownable accent** (brand has none): a muted **olive/sage green #6b7050** for eyebrows/links/highlights + warm **amber-gold #b8924f** for the oil/floats — used sparingly. Primary CTA stays **black** (faithful). Warm **cream #f5f1ea** alt surface for botanical warmth.
- PDP (single-product) architecture.

## Page = PRODUCT (PDP)
Gallery (real Aura photos) + buy box: name, 5.0★(4), price $64, a value selector **Aura $64 / Radiance Set (Aura+Nuit) $88 — save $36** with dynamic price + sticky ATC, key bullets, trust icons.

## Sections (in order)
header (white, black logo) + announce (Free NZ+AU shipping · No synthetic fragrance · Clean+Conscious 2026 finalist) → **PDP main** (gallery + buy box, value selector + dynamic price + sticky ATC) → trust strip (waterless · NZ EVOO base · no synthetic fragrance · cruelty-free) → benefits "What Aura does" (glow / barrier / absorbs clean / calm — icons) → the ritual / how to use (3 morning steps, model image) → botanicals & slow-infusion (kawakawa, olive oil, green tea, rosehip, turmeric — story + images + show-more, botanical float) → brand/provenance (waterless, Akaroa NZ, slow beauty) → reviews (5.0★, 4 real + expand to 6 marked mockup, authentic calm tone) → Radiance Set bundle cross-sell ($88) → FAQ → footer.

## Imagery plan — hotlink real, generate floats
### Hotlink (evoobotanicals.com/cdn/shop/files/ — append ?width=1200)
- Aura gallery: `7437370F-95F0-4043-B3B7-38ADBF477E77.jpg` (packshot), `EVOO_BotanicalsProducts-Aura-2000px-001.jpg` (clean packshot), `DE40CDB6-5D5B-4931-A447-F19E7B398AFC.jpg` (model glow), `9B3FB580-CE08-4AB2-B140-9EC39EED7E09.jpg` (lifestyle), `7E2F0E98-BBCB-4372-9158-1A0E999D981A.jpg` (texture/skin), `430A637F-73F0-4807-828C-DAFFBC20A0F5.jpg` (in-use).
- Bundle/cross-sell: `EVOO_Botanicals_Products_-_Aura_Nuit_and_Gua_Sha-_square.jpg`.
- Ritual/model: `DE40CDB6...jpg` / `430A637F...jpg`. Logo (above).

### Generate (Flux, FREE → $0)
- `float-oil` — a single warm amber-gold botanical oil droplet, glossy, on pure white, no shadow → key.
- `float-leaf` — a fresh olive sprig / kawakawa-style green leaf on pure white, no shadow → key.
- `ingredients-bg` — overhead botanical flat lay (olive branch + small green leaves + petals on cream linen), soft light, minimal — soft section background.
