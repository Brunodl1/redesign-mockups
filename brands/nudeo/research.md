# NU-DEO — research (home redesign)

**URL:** https://www.nu-deo.ca/ · **Page:** home · **Slug:** nudeo
**Niche:** skincare-cosmetics (natural personal care · cream-balm deodorant) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **FRENCH** — `.ca` Québec brand (Saint-Lazare, QC) with a FR toggle. Per skill rule, build FR even though
the storefront loads EN. Keep packaging PROPER NAMES as-is (NU-DEO, ORIGINAL, BLACK LABEL, PINK LABEL, "Naturally
Uncomplicated" can stay as the signature tagline / the "nu" = *à nu / nu* pun works in FR). Translate ALL UI + marketing.

## Brand
**NU-DEO** — handcrafted natural **cream-balm deodorant** in a 60 g metal tin. "NU = Naturally Uncomplicated."
Founder **Otilia** (certified esthetician + engineer), Saint-Lazare QC. Vegan, plastic-free. Applied by hand,
melts at body temp. Active = **Magnesium Hydroxide** (gentle, bicarb-free) + Shea + Arrowroot + Coconut.

## ICP
Clean/natural-beauty buyers; **sensitive skin** (burned by baking-soda deos → "natural deo rash"); eco/zero-waste;
Québec local pride; families (safe pregnancy/teens); switchers from aluminum antiperspirants. Whole-body/unisex.

## USP / value prop
- **Sans bicarbonate + sans cire** — léger, respirant, prévient les irritations ("natural deo rash").
- **Zéro charge, 100 % actifs** — "chaque ingrédient est un héros".
- **Sans aluminium · emballage sans plastique** (boîtier métal recyclable, pas de taches jaunes).
- **Fait main à Saint-Lazare, QC** — formule végane haute performance, naturel + efficace.
- **Multi-zones / toute la famille** — aisselles, pieds, etc.; sûr grossesse/ados. Rituel d'application à la main.
- 3 parfums @ **14,99 $ CAD / 60 g** (~2 mois). Livraison; infolettre (offre 10 % 1re commande — mockup).

## Tone
Propre, honnête, science + chaleur. Fondatrice (Otilia). Esthéticienne + ingénieure. Transparent, mat-de-fait,
légèrement premium (BLACK LABEL = cuir fumé). "Ce qu'on laisse de côté compte autant que ce qu'on met."

## Design tokens (from live site — faithful)
- **Real font:** **Barlow Condensed** (everything; headings light **300**, no uppercase, airy). On Google Fonts → use directly.
- **Logo:** wordmark **"NU-DEO"** (dark). `NU-DEO_LOGO.png?v=1779933588`. No white variant → footer stays LIGHT
  (soft lavender/cream) so the dark logo shows; OR invert. Save local logo.png. [[redesign-verify-brand-and-screenshot]]
- **Palette (real):** lavender accent **#927FBC** (their foreground/heading/btn), sage-green CTA **#C3CCA6**,
  warm cream **#FAF9F1 / #F1EDE7**, soft-lavender footer **#C5BADC**, white, border #E6E6E6, yellow badge #FDC656.
  → Elevated: cream bg + charcoal-plum ink (legible, NOT lavender body text), **lavender** = brand/heading/primary CTA,
  **sage** = botanical accent (eyebrows/icons/chips), gold sparing. Soft, clean, natural, airy.
- **Buttons:** **full pill** (radius 100px), padding ~16/24, sentence case, weight 400, subtle shadow.
- **Shape:** cards radius 10px, image blocks 20px, wide container. Generous airy spacing.

## Real logo (hotlink/local — hard requirement) — SAVE LOCALLY + verify it renders
`https://www.nu-deo.ca/cdn/shop/files/NU-DEO_LOGO.png?v=1779933588` (dark wordmark, transparent) → assets/logo.png.
No white version → keep footer LIGHT (soft lavender #C5BADC / cream) so dark logo shows. Confirm renders. [[redesign-verify-brand-and-screenshot]]

## Imagery plan — ALL HOTLINK (verified 200; strong real photography)
Base `https://www.nu-deo.ca/cdn/shop/files/<FILE>`. Real, sharp:
- **HERO (full-bleed):** `NU-DEO_3DEO_FP-16-9-rectangle.jpg?v=1775334487` (3-tin flatlay, 16:9, neg-space top). alt fallback `NU-DEO_3DEO_FP_WEB.jpg?v=1775340033`.
- **3 scents (bestsellers):** ORIGINAL `NU-DEO_ORG_WEB.jpg?v=1775340033` · BLACK LABEL `NU-DEO_BLK_WEB.jpg?v=1775340033` · PINK LABEL `NU-DEO_PNK_WEB.jpg?v=1775340033` (4K styled).
- **Ingredients (macro 2048):** shea `shea_sq_e0b6e8b8-af3a-4c19-b1d0-78043a0335f4.png?v=1777931485` · arrowroot `arrowroot_sq_ebee3fce-f159-4944-8192-312c2ad7c236.png?v=1777931516` · coconut `coconut_sq_0e1bbd33-1c43-408a-9db0-12833b7f383a.png?v=1777931543` · magnesium `magnesium_sq_15e6ae9b-71e4-4278-ad6e-de1c71c9dbea.png?v=1777931573`.
- **Founder (Otilia, circular avatar ~312):** `Oti_png.webp?v=1774405261` (small → avatar only).
- No human application shot; no white logo → noted above. NO generated images needed (real imagery is strong).

## Products (parfums · 14,99 $ CAD / 60 g)
ORIGINAL (litsée, bergamote, lavande, clou de girofle — frais, unisexe) · BLACK LABEL (patchouli, cèdre de Virginie,
poivre noir — cuir fumé, résineux) · PINK LABEL (palmarosa, ylang-ylang, pamplemousse rose — floral aérien).

## Nav (FR)
Boutique · Nos parfums · Ingrédients · Notre histoire · FAQ

## Section order (home — skincare structure, clean natural beauty, FR)
announce (livraison · sans aluminium · fait au Québec) → header (cream, logo NU-DEO) → HERO (full-bleed flatlay,
"À nu. Naturellement." + 1 CTA + fait au QC) → badge strip (sans bicarbonate · sans aluminium · sans cire · sans
parfum synthétique · sans plastique) → 3 parfums grid (ORIGINAL/BLACK/PINK, 14,99 $) → "Pourquoi NU" bienfaits
(icônes: anti-irritation/sans bicarb · 100 % actifs · magnésium · peau sensible) → ingrédients band (shea·arrowroot·
coco·magnésium, "chaque ingrédient est un héros") → rituel + fondatrice (application à la main · Otilia esthéticienne+
ingénieure) → avis (★4,9) → infolettre (10 % 1re commande) → footer (lavande douce, logo foncé).

## Lessons applied
- Verify real brand (NU-DEO, dark wordmark). Save logo local + confirm RENDERS; footer light so dark logo shows. [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), no floats needed — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9 or --space-*); reveal class `.in` (not `.is-visible`); hero img path `assets/…`; cap 2-col gaps; logo render check.
