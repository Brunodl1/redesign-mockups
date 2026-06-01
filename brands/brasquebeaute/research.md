# BRASQUÉ BEAUTÉ — research (home redesign, focus product = RAJEUNI)

**URL:** https://brasquebeaute.com/ · **Page:** HOME (studied via the RAJEUNI product page + about + social) · **Slug:** brasquebeaute
**Niche:** skincare-cosmetics (clean/botanical anti-aging · pro-âge) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **FRENCH** — `<html lang="fr">`, fr-CA, Montréal (514), press = Elle Québec/La Presse/Clindoeil. Build FR.
Keep PROPER NAMES as packaged: BRASQUÉ BEAUTÉ, RAJEUNI, ILLUMI, PRO-MULTI, L'ESSENCE, PRO-LISSE, PRO-ÉCLAT, LUX-YEUX, PIÑA COLADA, GUA SHA, JAMBU.

## Brand
**BRASQUÉ BEAUTÉ** ("BRAS"il + "QUÉ"bec) — women-owned Québec brand (founder Cristiane + daughters Alexandra & Marianne,
est. 2019). Handmade small-batch plant-based skincare with exotic Brazilian-inspired botanicals. Holistic / **pro-âge**
("happy aging"). Vegan · sans paraben · sans cruauté · non toxique · sans couleurs/parfums artificiels. Light-luxe voice
("luxe", "décadent", "rituel", "girl power"). Hero homepage line: **"LE LUXE SE JOINT À LA NATURE AVEC UNE APPROCHE HOLISTIQUE."**

## Flagship — RAJEUNI (Bruno's focus)
**RAJEUNI Sérum Pro-Âge & Pro-Barrière** — a **serum** (50 ml, **59,99 $ CAD**), positioned as **"alternative naturelle au
Botox"**. Tagline **"LE LIFT, au naturel."** Light milky texture, fragrance-free, fast-absorbing. Mechanism: relaxes skin
micro-contractions to reduce wrinkle depth — "un effet similaire au Botox", sans aiguille. Key actives:
- **JAMBU** (Spilanthes / Acmella Oleracea) — spilanthol, anesthetic-like, relaxes micro-contractions, smooths wrinkles.
- **GABA** — relaxes tense muscles, reduces avg wrinkle depth, boosts elasticity.
- **CHICORÉE** (chicory root) — prebiotic **alternative au rétinol**: firms, stimulates collagen, elasticity.
- **PHYTOCÉRAMIDE** — plant ceramide: strengthens/protects the skin barrier, prevents water loss (PIE).

## ICP
Femmes 35–55+ francophones (Québec); recherche d'anti-âge **naturel & non invasif** (sans aiguille); peaux sensibles/
intolérantes au rétinol; valeurs clean/vegan/local; mentalité "pro-âge". Secondaire: peaux sensibles tout âge, É-U/France.

## USP / value prop
- **Alternative naturelle au Botox** — lift sans aiguille, à la maison (JAMBU/GABA/CHICORÉE).
- **Botaniques exotiques + science** — Bakuchiol, Buriti, Maracujá, Cacay, absolus de luxe; haute performance.
- **Clean & vegan** — sans paraben/cruauté, non toxique, sans parfums artificiels; fait main au Québec.
- **Approche holistique / pro-âge** — rituel de soin = prendre soin de soi.
- **Entreprise de femmes, québécoise** — "girl power", local, artisanal. Presse: Elle Québec, La Presse, Clindoeil.

## Tone
Chaleureux, intime, holistique, light-luxe; FR-natif, pédagogue mais accessible; aspirationnel, "pro-âge / happy aging".

## Design tokens (from live site — faithful, then elevated)
- **Real fonts:** **Halant** (serif, 600 — the BRASQUÉ wordmark/logo font; Google Font) + **Assistant** (sans body; Google Font).
  → display Halant serif (luxe), body Assistant. (Their h-tags use system-ui, but Halant is the brand font → elevate w/ Halant.)
- **Real palette:** editorial **white** bg, near-black ink **#1D1D1D**, black buttons **#191919** (SQUARE, uppercase, bold,
  tracked), ALL-CAPS product titles (.025em). Header is **black #000 / white text**. Footer light #F4F4F4.
  **TRUE BRAND ACCENT = deep botanical teal/emerald #108474** (surfaces in review widgets) + pale mint **#EDF5F5**.
  → Elevated: soft warm-white/cream bg + near-black ink + **teal #108474** accent (eyebrows/CTAs/links/highlights) + pale
  mint bands + a sparing warm **gold** for "luxe ingredients" + a near-black footer (echoes their black header). Editorial-luxe-natural.
- **Buttons:** SQUARE (radius 0), UPPERCASE, bold (700), tracked — keep this brand signal. Primary CTA elevated to teal #108474.
- **Type:** h1 ~48–64px, tracking -.025em; product titles UPPERCASE tracked. Generous spacing (80px gutters).
- **Shape:** mostly flat/editorial (small radii 2–6px), modest shadow. Container ~1440px.

## Real logo (hard requirement) — TEXT wordmark (NO image file exists)
Header logo is **CSS text** "BRASQUÉ BEAUTÉ" in **Halant 600** (white on their black header). No logo image, no white/dark
variant — reproduce the wordmark in Halant (the faithful logo). Favicon only: `…/FaviconBrasqueTransp_32x32.png` (too small).
→ Render the wordmark text lockup; on dark footer it's white text (no invert issue). [[redesign-verify-brand-and-screenshot]]

## Imagery plan — ALL HOTLINK (verified 200; no generation — strong real imagery, avoid fake before/afters)
- **HERO (split, model RIGHT):** `https://brasquebeaute.com/cdn/shop/files/homepage_BackupImage_comp_1_2048x2048.jpg?v=1652904507`
  (woman in white dress opening a Brasqué serum, autumn QC balcony — real model + product). Busy bg → text on a clean panel (split).
- **RAJEUNI feature:** bottle `https://cdn.shopify.com/s/files/1/0582/5488/4917/products/RAJEUNI_Brasque_1.jpg?v=1658855161` ·
  texture drip (serum droplets on marble) `…/RAJEUNI_Brasque_2.jpg?v=1658855160`.
- **Collection grid:** ILLUMI `…/ILLUMI_Brasque_1.jpg?v=1659013400` · PRO-MULTI (amber oil, striking) `…/PRO-MULTI_30ml_Brasque_1.jpg?v=1658521045`
  · L'ESSENCE `…/files/EssenceBrasque_1.jpg?v=1683141806` · PIÑA COLADA `…/PINA_COLADA_Brasque_1.jpg?v=1658758977`
  · PRO-LISSE `…/PRO-LISSE_30ml_Brasque_1.jpg?v=1658758757` · GUA SHA `…/ROSE_QUARTZ_GUASHA_Brasque_1.jpg?v=1658759213` (host: cdn.shopify.com/s/files/1/0582/5488/4917/products/).
- **Ingredient (story band):** jasmine macro `https://brasquebeaute.com/cdn/shop/files/luxury_ingredients_2048x2048.jpg?v=1652905082`.
- **Before/after:** NONE on site → do NOT fabricate AI before/afters; build an honest "comment ça marche / la science" mechanism section instead.

## Products (FR · CAD)
RAJEUNI sérum 59,99 $ · ILLUMI sérum éclat 59,99 $ · PRO-MULTI huile 35,99/59,99 $ · L'ESSENCE brume 39,99 $ ·
PRO-LISSE huile (bakuchiol) 35,99/59,99 $ · PRO-ÉCLAT huile 35,99/59,99 $ · LUX-YEUX huile yeux 29,99/49,99 $ ·
PIÑA COLADA masque 24,99 $ · GUA SHA quartz rose 19,99 $ · mini pinceau 9,99 $.

## Nav (FR)
Accueil · Produits · RAJEUNI · À propos · Notre histoire · Contact

## Section order (home — skincare structure, editorial-luxe-natural, FR; RAJEUNI featured)
announce (livraison · femmes québécoises · vegan) → header (Halant wordmark) → HERO split (model + "Le lift, au naturel.",
1 CTA) → badge strip (végane · sans paraben · sans cruauté · non toxique · fait au Québec) → RAJEUNI feature (alternative
naturelle au Botox, texture drip, 1 CTA) → la science / comment ça marche (4 actifs: JAMBU·GABA·CHICORÉE·PHYTOCÉRAMIDE, icônes)
→ la collection (grille produits + prix) → notre histoire (holistique + femmes fondatrices + botaniques brésiliennes + jasmin)
→ dans les médias (Elle Québec, La Presse, Clindoeil, Le Panier Bleu) → avis (★, témoignages FR réels+crédibles) →
infolettre (10 % 1re commande) → footer (noir, wordmark blanc).

## Lessons applied
- Verify real brand (BRASQUÉ BEAUTÉ; logo is TEXT wordmark in Halant — reproduce it, no image exists). [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), no generation needed — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9 or --space-*); reveal class `.in` (not `.is-visible`); hero img path `assets/…`; cap 2-col gaps; logo/contrast check.
