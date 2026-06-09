# Tribalure — research (home redesign)

**URL:** https://tribalure.com/ · **Page:** home · **Slug:** tribalure
**Niche:** skincare-cosmetics (COLOR COSMETICS / makeup · Indigenous-owned · storytelling) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **ENGLISH** (Shopify.locale="en", lang="en", no FR). Canadian (Tribalure Canada Inc.) but English-only store → EN (consistent w/ prior calls).

## Brand
**Tribalure** — "Tribalure Canada Inc., a **100% Indigenous-owned** start-up specializing in online **cosmetics
and skincare**." Bold RED + black makeup (liner, gloss, balm, nail, pressed powder, brushes), accessories &
premium kits. Deep storytelling product names rooted in Indigenous heritage: **Raven Quill, Sacred Circle,
Red Sky, Red River, Spirit Berry, Eternal Flame, Auntie Josephine, Feather & Dreamcatcher**. Logo = TRIBALURE
wordmark with a **teal smudge-smoke wisp + red flame** (sacred smoke/fire). Heritage, pride, community.

## ICP
Beauty shoppers who want quality color cosmetics AND want to support a **100% Indigenous-owned** Canadian brand —
values-driven buyers who connect with the heritage, story and representation. Buy on: bold/quality makeup +
Indigenous-owned pride + storytelling + giving back/community + gift-worthy kits.

## USP / value prop (EN)
- **100% Indigenous-owned** Canadian beauty — representation & heritage you can support.
- **Bold color cosmetics** — longwear liner, lip, nail, pressed powder + pro brushes & cases.
- **Story in every name** — heritage-rooted collections (Sacred Circle, Red Sky, Eternal Flame…).
- **Giftable & premium** — kits, cases, legacy sets; community-minded.

## Tone
Proud, warm, authentic, story-forward, grounded, celebratory. Respectful of Indigenous heritage — mirror the
brand's OWN language (story, roots, heritage, community, sacred, smudge/smoke), never stereotyped/appropriative.

## Design tokens (REAL logo + screenshot → elevated; DOM colors were payment-icon noise, ignored)
- **Logo (local, transparent):** "TRIBALURE" black wordmark + **teal smoke wisp + red flame** motif. Saved
  `assets/logo.png` (869×300, transparent); `assets/logo-white.png` = white silhouette for dark footer.
- **Real palette (screenshot + products + logo):** bold RED (their hero product color + the flame), black/charcoal,
  white, TEAL (smoke), warm/natural earth tones (prairie imagery). → **Elevated:** warm SAND/cream bg, espresso
  near-black ink, **flame-RED** primary accent/CTA, **smoke-TEAL** secondary accent, warm clay/sand alt bands,
  espresso dark band/footer. Warm, grounded, bold-but-refined.
- **Real type:** Outfit (geometric sans) + Asul (serif) + GT Standard. → display = **Fraunces** (warm,
  characterful serif — suits heritage storytelling), body = **Outfit** (their real sans). Both Google Fonts.

## Imagery plan — HOTLINK real packshots (red+black makeup, verified 200); hero = product on warm ground
Homepage JS-rendered (hero is wordmark over a faint nature bg — not reusable). Products are red/black makeup on
white. NO gen (tooling dead — [[redesign-tooling-broken]]). CDN base `https://cdn.shopify.com/s/files/1/0721/1397/9700/`.
- **HERO (split, warm):** Sacred Circle Brush Collection (red/black brushes fanned — striking) on a warm
  red-tinted/earthy panel w/ a subtle smoke-flame motif. `files/tribalure_products_26.jpg`
- **BESTSELLERS (hotlink, ?width=600):**
  | Product | $CAD | src |
  |---|---|---|
  | Raven Quill Longwear Liquid Eye Liner | 34.99 | files/tribalure_products_9.jpg |
  | Red River Long-Lasting Lip Gloss | 37.99 | files/tribalure_products.jpg |
  | Sacred Circle Makeup Brush Collection | 79.99 | files/tribalure_products_26.jpg |
  | Eternal Flame Compact Pressed Powder | 49.99 | files/tribalure_products_24.jpg |
  | Strawberry Velvet Lip Balm | 24.99 | files/tribalure_products_68.jpg |
  | Spirit Berry Easy-Peel Off Nail Polish | 14.99 | files/tribalure_products_more.jpg |
  | Red Sky Cosmetic Case | 154.99 | products/Case1.png |
  | Feather & Dreamcatcher Keychain | 40.00 | files/tribalure_products_22.jpg |
- **KIT FEATURE:** The Auntie Josephine Red Legacy Kit $329.99 — `files/tribalure_products_62.jpg` (flagship premium).
- **STORY band:** text-led editorial (Indigenous-owned heritage) + CSS/SVG smoke-flame motif (no risky image).

## Categories & Nav
Cats: Makeup · Lips · Eyes · Nails · Brushes · Accessories · Kits.
Nav (EN, real site = Shop/About/Stories; converting links; About/Stories/Contact → footer per [[nav-no-utility-links]]):
Bestsellers · Makeup · Brushes · Kits · Our Story

## Section order (home — Indigenous-owned color cosmetics, warm storytelling, EN)
announce (100% Indigenous-owned · free shipping in Canada) → header (sand, color logo) → HERO (split warm:
Indigenous-owned beauty promise + brushes) → values strip (100% Indigenous-owned · cruelty-free · made in Canada ·
community-minded — SVG icons) → shop-by-category tiles (Lips/Eyes/Nails/Brushes) → bestsellers grid (8, ★+price) →
"Our story" Indigenous-owned heritage band (text-led, smoke-flame motif) → featured kit band (Auntie Josephine Red
Legacy Kit upsell) → reviews wall (6, ★ summary) → newsletter → footer (espresso, white logo).

## Lessons applied
- Real brand verified (Tribalure, 100% Indigenous-owned, smoke+flame logo). Screenshot DEPLOYED page before done — [[redesign-verify-brand-and-screenshot]].
- Palette from screenshot/products, NOT DOM tokens (those were payment-icon colors) — [[palette-from-real-screenshot]].
- Tooling broken: DOM-dump for JS site, headless-Chrome shots (~500px min — [[headless-chrome-mobile-minwidth]]), NO gen — [[redesign-tooling-broken]].
- Respectful, authentic tone mirroring the brand's own Indigenous-owned language; hotlink exact products.json `src`; tokens defined; relative paths; outbound → google.com.
