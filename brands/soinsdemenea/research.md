# Les soins de Menea — research (home redesign)

**URL:** https://soinsdemenea.com/ · **Page:** home · **Slug:** soinsdemenea
**Niche:** skincare-cosmetics (natural · sensitive/dry/eczema · family) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **FRENCH** (unambiguous: `Shopify.locale="fr"`, FR meta/copy, panier, Montréal). Build ALL copy in FR.

## Brand
**Les soins de Menea** (MENEA) — Montréal natural skincare. Tagline **"Pour une peau saine au naturel."**
**100% des ingrédients d'origine naturelle**, formulated for **peaux sensibles, très sèches, à tendance
eczéma** — for the **whole family: nourrissons, enfants, adultes**. "Une combinaison d'expertise en
chimie et de ce que la nature offre de meilleur." Gentle, botanical, trustworthy.

## ICP
Québec francophone families / health-conscious parents seeking gentle natural skincare for sensitive,
dry, eczema-prone skin — for themselves and their babies/kids. Buy on: safe-for-sensitive-skin + 100%
natural + real soothing results + family-trust.

## USP / value prop (FR)
- **100 % d'origine naturelle** — sans ingrédients agressifs.
- **Pensé pour les peaux sensibles, très sèches & à tendance eczéma.**
- **Pour toute la famille** — des nourrissons aux adultes.
- **Chimie + nature** — expertise + ingrédients naturels.
- **Livraison gratuite au Canada dès 65 $.** · Fait à Montréal.

## Tone
Chaleureux, rassurant, doux, naturel/holistique; un peu poétique. Premium-gentle.

## Design tokens (from live site — Bootstrap theme; real brand colors below)
- **Logo:** elegant teal **"MENEA"** serif wordmark + delicate botanical leaf-flower mark (turquoise #25B1B7).
- **Real brand palette:** deep petrol-teal **#193A43**, turquoise **#25B1B7**, warm caramel **#C3935B**,
  slate-teal #416E7A, white. (Rest of hex = Bootstrap defaults, ignore.)
- **Elevated palette:** warm ivory bg, deep petrol-teal ink, teal accent (buttons), turquoise for
  eyebrows/accents, warm caramel pop (apricot oil), pale sage-teal alt bands. Calm, botanical, gentle.
- **Type:** display = **Cormorant Garamond** (elegant serif, matches MENEA logo) · body = **Nunito Sans**
  (soft humanist sans, family-friendly). Both Google Fonts.

## Real logo (hotlink — hard requirement) — verified, viewed
`https://soinsdemenea.com/cdn/shop/files/MENEA_Logo_1_100x@2x.png?v=1652909217` (teal wordmark + botanical
mark, transparent, ~200px). It's a teal/dark logo → shows on cream/white header; on a dark footer invert
to white or place on a light chip. (A higher-res master may exist at `MENEA_Logo_1.png?width=300` — test.)

## Imagery plan — HOTLINK real packshots (full-res masters work at ?width=N, verified 200); hero generated
Base `https://soinsdemenea.com/cdn/shop/files/<FILE>?width=<N>`
**Hero:** GENERATED gentle botanical Flux (`assets/hero-v1..4.png` → picker → `assets/hero.jpg`) — calm
showcase band under centered text.
**Bestsellers / products (FR):**
| Produit | prix CAD | fichier (master, use ?width=600) |
|---|---|---|
| Crème ultra-hydratante & nourrissante | 28 $ | cremehydra.png |
| Huile de noyaux d'abricot (ylang & vanille) | 32 $ | Melange_huile_abricot_vanille_et_ylang.png |
| Huile de jojoba biologique 100 % | 26 $ | huile.png |
| Crème à mains MENEA | 18 $ | Creme_hydratante_mains.png |
| Baume à lèvres | 12 $ | baumelevre.png |
| Coffret MENEA | 65 $ | coffret.png |
| (lifestyle/extra) | — | Msdsqfd.jpg |

## Catégories (collections réelles, FR)
Huiles · Lotions & crèmes · Baume à lèvres · Nettoyant doux · Bébés & enfants · Adultes · Coffrets

## Nav (FR)
Huiles · Lotions & crèmes · Nettoyant doux · Bébés & enfants · Coffrets · Notre histoire

## Section order (home — skincare structure, gentle-natural, FR)
annonce (livraison 65$) → header (ivoire, logo teal MENEA) → HÉRO (centré éditorial: promesse FR + 1 CTA +
bande visuelle botanique) → bandeau confiance (100% naturel · peaux sensibles · toute la famille · fait à
Montréal) → best-sellers (crème, huiles, savon…) → tuiles catégories (Bébés&enfants / Adultes / Huiles /
Coffrets) → bande "peau sensible & eczéma" (réconfort/ingrédients) → mur d'avis (★) → engagement naturel
band (100% naturel) → infolettre → pied de page.

## Lessons applied
- Real brand verified (Les soins de Menea, teal MENEA logo). Personally screenshot DEPLOYED page before done — [[redesign-verify-brand-and-screenshot]].
- Tooling broken: raw-HTML research, headless-Chrome shots (min ~500px width — [[headless-chrome-mobile-minwidth]]), Flux hero, no floats — [[redesign-tooling-broken]].
- Define every CSS token used (no undefined `--sp-8/9` etc. — they void the whole declaration).
