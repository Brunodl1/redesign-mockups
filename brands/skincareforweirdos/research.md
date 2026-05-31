# Skincare for Weirdos — research (home redesign)

**URL:** https://skincareforweirdos.com/ · **Page:** home · **Slug:** skincareforweirdos
**Niche:** skincare-cosmetics · **Reference:** `references/skincare-cosmetics.md` (STRUCTURE only)
**Language:** **ENGLISH.** Montreal/Québec brand (514 number) BUT identity is English Gen-Z
slang ("slay", "af", "glow up", "fly that freak flag high"), USD pricing, ships 30+ countries —
voice is essentially untranslatable. Build EN (flag to Bruno; he chose EN for the last MTL brand).

## Brand
Playful, irreverent, inclusive **vegan skincare** brand. Science + self-expression. Signature
product = **Healing Heart Pimple Patches** (hydrocolloid, 1.5% salicylic acid + 1.5% niacinamide,
in clear + fun printed designs "Glow Up"/"WIP"). Also: toner, cleanser, serum, moisturiser,
infusing masks/patches, peptide lip glaze, gua sha, tweezers.

## ICP
Gen-Z / younger millennial (~16–30), acne-prone & sensitive skin, values-driven (vegan, cruelty-
free, sustainable), into self-expression, internet/meme-native, "weirdo" self-identifiers. Buys on:
does-it-work proof + clean/vegan ethics + the brand makes them feel seen ("it's not weird to love
yourself").

## USP / value prop (MUST be crystal-clear in hero — Bruno's instruction)
- **Vegan & cruelty-free** — Leaping Bunny certified.
- **Science-backed that actually works** — e.g. patches w/ 1.5% salicylic acid + 1.5% niacinamide.
- **Clean** — no parabens, no sulfates.
- **For all skin types** — inclusive.
- **Sustainable** — up to 80% post-consumer recycled plastic, carbon-neutral shipping.
- **Personality** — "It's not weird to love yourself" / "Fly that freak flag high."
- Offer: **free shipping $40+ (US & CA)**, **15% off first order** (newsletter).
- Social proof: **★ 4.9 "Excellent"**.

## Tone
Playful, irreverent, warm, inclusive, internet-native. Confident but self-aware. Emoji ok (sparingly).

## Design tokens (from live site — grepped raw HTML; cdp.py broken)
- **Palette (real brand — BOLD/playful):** deep blue **#2E5579** (dominant/primary), ink **#111111**,
  white; acid chartreuse **#D4D626**, hot pink **#EE4B99**, lilac **#D59FC7**, coral **#D0473E**,
  mint **#95C9B4**, off-white **#F7F3EF**. Maximalist but use color in blocks/chips/CTAs over white.
- **Type (real brand = MONOSPACE):** headings **"Geist Mono"** (mono); body uses mono too
  (Anonymous Pro / Source Code Pro). For the elevated build: **Geist Mono** for display + eyebrows +
  buttons + badges (keeps the science-zine signature) paired with a clean **Inter** for body
  paragraphs (readability). All on Google Fonts (verified 200).
- **Vibe:** Y2K / holographic / techy-zine + bold flat color blocks.

## Real logo (hotlink — hard requirement) — verified, viewed
`https://skincareforweirdos.com/cdn/shop/files/Weirdos_Logo-14.png?v=1761526252&width=400`
(400×120 landscape wordmark, transparent PNG, **holographic pastel** "skincare for weirdos".
It's PALE → needs a DARK/COLOR backdrop to read. Put header + footer on deep blue #2E5579 or
near-black #111 so the holo logo pops. Do NOT place it on white.)

## Imagery plan — HOTLINK real product shots (on white, good quality; Shopify CDN, verified 200)
NO generation — brand aesthetic = product-on-color-block + CSS holo gradients (faster, authentic).
Base: `https://skincareforweirdos.com/cdn/shop/files/<FILE>?width=<N>`
| Product | USD | File |
|---|---|---|
| Healing Hearts Starter Kit (case + 32 patches) | $22 | `starter-kit-case-x-32-healing-hearts-pimple-patches-322274.jpg?v=1712951200` |
| Healing Heart Pimple Patches — 32 pack | $15 | `32x-healing-heart-pimple-patches-595606.jpg?v=1762537456` |
| Power-Up Miracle Toner | $24 | `power-up-miracle-toner-971576.jpg?v=1763060293` |
| Moon Dust Powder Cleanser | $26 | `moon-dust-powder-cleanser-878160.jpg?v=1763060291` |
| Holy Grail Daily Serum | $32 | `holy-grail-daily-serum-273777.jpg?v=1763060294` |
| Lunar Milk Moisturiser | $28 | `lunar-milk-moisturizer-228875.jpg?v=1763060293` |
| Deep Submerge Infusing Mask | $9 | `deep-submerge-infusing-mask-733392.jpg?v=1763060300` |
| Cosmic Healing Peptide Lip Glaze | $16 | `cosmic-healing-peptide-glaze-the-og-380447.jpg?v=1763060298` |
| Stainless Steel Gua Sha | $18 | `stainless-steel-gua-sha-2029614.jpg?v=1779396610` |

## Nav (real menu, EN)
Skincare · Pimple Patches · Accessories · Shop All

## Section order (home — skincare structure, bold/playful reinterpretation)
announce/free-ship bar → header (deep-blue, holo logo) → HERO (value prop crystal clear) →
trust/proof strip → signature Healing Heart Patches feature (the science + fun) → bestsellers grid →
values/manifesto band ("it's not weird to love yourself") → reviews wall (★4.9) →
sustainability band (Leaping Bunny · 80% recycled · carbon-neutral) → newsletter (15% off) → footer.

## Constraints / lessons applied
- Verify real brand from logo alt (done: "Skincare for Weirdos"). Personally screenshot the
  DEPLOYED page before declaring done (see [[redesign-verify-brand-and-screenshot]]).
- Tooling broken: research from raw HTML; headless Chrome for shots; floats dropped (keybg broken).
  See [[redesign-tooling-broken]].
