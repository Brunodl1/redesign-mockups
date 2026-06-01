# Espace Oriental — research (home redesign)

**URL:** https://espaceoriental.com/ · **Page:** home · **Slug:** espaceoriental
**Niche:** skincare-cosmetics (natural/organic · Moroccan-hammam) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **FRENCH** (unambiguous: `Shopify.locale="fr"`, French meta/copy, "au Québec",
panier/accueil/boutique/livraison). Build ALL copy in FR. Keep product proper names as on packaging.

## Brand
**ESPACE ORIENTAL®** — Québec-made **natural/organic skincare** with a Moroccan **hammam ritual**
soul. Sells pure vegetable oils (argan, figue de barbarie, rose musquée, jojoba, ricin), clay
masks (argile verte volcanique, argile blanche kaolin), gommages (argile & miel, rose & terre),
savon noir bio, hydrolats (eau de rose), essential oils, beard elixir, and hammam accessories
(gant Kessa, éponge konjac). Minimal, elegant black "E|O" monogram logo.

## ICP
Québec/Canada, ~25–55, eco-conscious, willing to pay a premium for clean/natural/organic; values
heritage + ethical sourcing + at-home self-care rituals (hammam/spa). Bilingual but FR-first.

## USP / value prop (lead with these, in FRENCH)
- **100% naturels & vegans**, ingrédients **biologiques**.
- **Fabriqué au Québec** — « Conçus avec passion, fièrement québécois ».
- **Rituel hammam** traditionnel marocain + soins modernes.
- **Emballage éco-responsable** (système Mono-Material breveté).
- **Livraison gratuite dès 70 $.** · **232+ avis**, notes ~5/5.

## Tone
Chaleureux, naturel, élégant, bien-être; héritage marocain + fierté québécoise. Minimal, premium.

## Design tokens (from live site — system fonts, so we elevate the type)
- Real brand: generic **system-ui** fonts (no real typeface) → elevate with an elegant pairing.
- Real colors present: near-black **#222**, white, a green **#108474**, a gold **#F7B604**.
- **Elevated palette (warm Moroccan-natural premium):** warm sand/cream bg, deep warm charcoal
  ink (matches black logo), a refined **gold/ochre** accent (oriental + argan), a **clay terracotta**
  pop (hammam clay), a natural green for small bio cues. Elegant + minimal.
- **Type:** display = **Cormorant Garamond** (elegant serif, oriental-premium) · body = **Jost**
  (clean geometric sans). Both Google Fonts.

## Real logo (hotlink — hard requirement) — verified, viewed
`https://espaceoriental.com/cdn/shop/files/Espace_Oriental___Logo_1.png?width=400`
(400×400 transparent PNG, minimal **black "E | O" monogram**, ESPACE/ORIENTAL arched. On the dark
footer invert to white via `filter:brightness(0) invert(1)`.)

## Imagery plan
- **Hero:** GENERATED (brand lacks an editorial hero) — warm Moroccan hammam still life, Flux
  `assets/hero-v1..4.png` → picker → `assets/hero.jpg`. Full-bleed + text card.
- **Products / categories:** HOTLINK real packshots (on white, good; Shopify CDN, verified 200).
  Base `https://espaceoriental.com/cdn/shop/files/<FILE>?width=<N>`:
| Produit | Prix CAD | Fichier |
|---|---|---|
| Huile de pépins de figue de barbarie | 58,95 $ | huile-pepins-figue-barbarie-espace-oriental-face.png?v=1752691942 |
| Huile d'argan bio | 24,99 $ | Huile-Argan-Bio-5.png?v=1721580463 |
| Huile de rose musquée | 22,99 $ | huile-rose-musquee-15ml-pure.png?v=1740673804 |
| Masque à l'argile verte volcanique | 19,99 $ | MasqueArgileVerte_120ml.png?v=1707942298 |
| Masque à l'argile blanche (kaolin) | 19,99 $ | MasqueArgileBlanche_120ml.png?v=1707944332 |
| Savon noir bio à l'huile d'olive | 12,99 $ | SavonNoir_100gr_Avant.png?v=1723424617 |
| Gommage argile et miel | 21,99 $ | GommageArgileetMiel_120ml.png?v=1707939646 |
| Eau de rose véritable (hydrolat) | 16,99 $ | veritable-eau-de-rose-tonique-naturel.png?v=1740603442 |
| Huile de jojoba | 18,99 $ | HuiledeJojoba_30ml_Avant.jpg?v=1715190812 |
| Gant exfoliant Kessa | 9,99 $ | gant-exfoliant-kessa-naturel.png?v=1743444936 |
| Élixir pour barbe aux 3 huiles | 29,99 $ | elixir-barbe-3-huiles-pure-biologiques.png?v=1740602270 |

## Catégories (collections réelles, FR)
Huiles naturelles & pures · Gommages & Masques · Huiles essentielles · Accessoires — Rituel Hammam · Hydrolats · Savons noir Bio

## Nav (FR)
Huiles · Gommages & Masques · Huiles essentielles · Rituel Hammam · Hydrolats · Savons noir · Boutique

## Section order (home — skincare structure, FR, Moroccan-natural)
annonce (livraison 70$) → header (crème, logo noir E|O) → HÉRO (full-bleed marocain, promesse FR, 1 CTA) →
bandeau confiance (100% naturel · vegan · fabriqué au Québec · bio) → best-sellers (huiles signature) →
tuiles catégories (6 collections) → bande éditoriale « Rituel Hammam » (origine, fièrement québécois) →
focus ingrédient (argan / figue de barbarie) → mur d'avis (★ 4,9 · 232+ avis) → bande éco-responsable →
infolettre → pied de page.

## Lessons applied
- Real brand verified (ESPACE ORIENTAL®, black E|O logo). Personally screenshot the DEPLOYED page
  before declaring done — [[redesign-verify-brand-and-screenshot]].
- Tooling broken: raw-HTML research, headless-Chrome shots, Flux hero, no floats. [[redesign-tooling-broken]].
