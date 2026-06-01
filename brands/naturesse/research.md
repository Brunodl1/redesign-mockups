# Naturesse Cosmetics — research (home redesign)

**URL:** https://www.naturesse.ca/ · **Page:** home · **Slug:** naturesse
**Niche:** skincare-cosmetics (argan-oil clean beauty · bio/équitable) · **Reference:** `references/skincare-cosmetics.md`
**Language:** **FRENCH** — `<html lang="fr">`, fr-CA, Saint-Hubert QC. Build FR. Keep proper names (Naturesse, argan, figue de Barbarie, Ghassoul, parfum names).

## Brand
**Naturesse Cosmetics** — clean/organic skincare built on **huile d'argan** (Maroc) + **huile de graines de figue de
Barbarie**. Formulé & **fabriqué au Canada** (Saint-Hubert, QC); argan acheté directement à des **coopératives
féminines amazighes** au Maroc (commerce équitable, supervisé par la fondatrice). **Certifié bio ECOCERT**, végane,
sans cruauté. Mantra: **"Naturez-vous la vie!"** Founder-led (Imane), héritage amazigh + crédibilité scientifique.

## ICP
Femmes francophones (QC d'abord) 30–55, beauté propre/naturelle & efficace, valeurs bio/équitable/éco. Secondaire:
hommes (huiles barbe/visage). Acheteurs cadeaux (coffrets "Pour Elle / Pour Lui"). Achat: clean + efficace + éthique.

## USP / value prop
- **Fait au Canada, argan marocain authentique** (coopératives féminines amazighes, sans intermédiaire).
- **Certifié bio ECOCERT** · huiles végétales bio.
- **Formulation propre** — sans parabènes, sulfate, OGM, propylène glycol, EDTA, PEG, huile minérale, colorant/solvant.
- **Commerce équitable + végane & sans cruauté.**
- **Juste dose d'actifs** — argan (oméga-6, vit. E, polyphénols) + figue de Barbarie (anti-âge). "L'essentiel pour votre peau."

## Tone
Chaleureux, conscient, un brin poétique ("Naturez-vous la vie!", "réveiller la beauté qui est en vous") + crédibilité
(ECOCERT, actifs). Sincère, féminin sans être frivole. Héritage amazigh / fondatrice = authenticité.

## Design tokens (from live site — faithful, then elevated)
- **Real fonts:** **Poppins** (corps + titres) + **Lato** (titres de section, en vert). Hero alt = Montserrat. All sans.
  → display **Poppins** (600) + body **Poppins/Lato** (400). Geometric sans, clean. (No serif — stay faithful to sans.)
- **Real palette:** **PRIMARY brand green = #4f7c29 (sauge/olive)**; secondary **gold #fdc331** (boutons héros pilule),
  stars #fdb819, link/sand **#bba783**, footer charcoal **#3c3a38**, bg white, ink #151515 / #1f2226.
  → Elevated: warm-white/cream bg + pale-sage band + brand **green #4F7C29** (primary CTAs/eyebrows/links) + **gold pill**
  signature CTA (hero) + warm **sand** accents + charcoal footer. Natural, clean, soft-luxe, fair-trade-warm.
- **Buttons:** **PILL (radius 50px)**, their signature = **gold pill** (#fdc331, dark ink) for hero; primary = green pill.
  Uppercase light-tracked (their PDP/cart are uppercase). Soft.
- **Shape:** cards their radius 0 → soften to ~10px for premium; images 12–16px. Generous spacing (100px sections). Container ~1280–1400px.

## Real logo (hotlink/local — hard requirement) — saved local + verify renders
Header (dark wordmark "Naturesse" script + feuille + "COSMETICS"): `https://www.naturesse.ca/cdn/shop/files/logo_400x.png?v=1687293837`
→ assets/logo.png (saved; native 139×90, small → display ~120px wide). White variant: `logo-naturesse-tete_medium.png`
(uncertain = wordmark vs mark). FOOTER: dark charcoal → CSS-invert the dark logo `filter:brightness(0) invert(1)` (black
transparent wordmark → white). Confirm renders. [[redesign-verify-brand-and-screenshot]]

## Imagery plan — ALL HOTLINK (verified 200; strong product photography; no generation)
Base `https://cdn.shopify.com/s/files/1/0773/5545/0653/files/` (products) or `https://www.naturesse.ca/cdn/shop/...`.
- **HERO (centered editorial) product:** flagship serum PNG `…/PZI_2395-600x600_350708ba-0560-4e73-a614-8ded3853b691.png?v=1698430825` (clean white bg). 
- **Bestsellers grid:** Sérum bio (above) · Crème Jour `…/Cremes_FondCreme_2000x2000_JOUR-768x768.jpg?v=1687191375` ·
  Crème Nuit `…/Cremes_FondCreme_2000x2000_NUIT-768x768.jpg?v=1687194749` · Gua Sha kit `…/Picture1.jpg?v=1687202917` ·
  Lait Tropical `…/Laits_Web_Tropical_2-1-768x512.jpg?v=1687193409` · Sérum Ylang `…/Argan-Oil-Ylang-Ylang-Serum-600x600_4edbf4dc-c550-4637-90c3-e8a3a34a4110.jpg?v=1768252561`.
- **Ingrédient "le secret" band:** argan tree/bottle portrait `https://cdn.shopify.com/s/files/1/0773/5545/0653/files/Picture2-600x900.png?v=1687316019`.
- **Rituel/lifestyle band:** woman applying oil `https://www.naturesse.ca/cdn/shop/articles/beauty-and-skin-care-routine-woman-applying-oil-o-2022-11-15-06-21-08-utc_8f6529f5-c968-4f92-8438-5fb0b2c49c45_600x400_crop_center.jpg?v=1741119316` (clean, on-brand).
- No AI generation (real imagery strong; avoids artifacts). Floats: optional/skip (consistent w/ recent clean builds).

## Products (FR · CAD)
Sérum d'argan pur bio 30 ml 40 $ / 100 ml 80 $ / roll-on 15 $ · Sérums parfumés (Ylang Ylang, Verveine, Pamplemousse) 40 $ ·
Sérum anti-âge figue de Barbarie 80 $ · Crème de Jour 45 $ · Crème de Nuit 50 $ · Laits corps 40 $ · Argile Ghassoul 30 $ ·
Shampoing barre 20 $ · Huiles à barbe 40 $ · Glow Duo Gua Sha + Sérum 80 $ · Coffrets 65–85 $.

## Nav (FR)
Pour Elle · Pour Lui · Coffrets cadeaux · Promotions · À propos

## Section order (home — skincare structure, natural clean-beauty bio, FR)
announce (livraison Canada · certifié bio ECOCERT · fait au Canada) → header (logo Naturesse) → HERO centered editorial
("Naturez-vous la vie." + flagship serum + 1 gold CTA + chips bio/végane/équitable) → badge strip (ECOCERT bio · sans
parabènes/sulfates · végane & sans cruauté · équitable · fait au Canada) → "le secret" 2 ingrédients (argan + figue de
Barbarie, image argan) → NOS MEILLEURS VENDEURS (grille produits + prix) → nos engagements (icônes: bio, clean, équitable
coopératives amazighes, végane, fait au Canada) → rituel/fondatrice (application + sourcing amazigh) → coffrets (Pour Elle/
Pour Lui) → avis (★, témoignages FR) → infolettre (10 % 1re commande) → footer (charcoal, logo blanc inversé).

## Lessons applied
- Verify real brand (Naturesse Cosmetics; real logo wordmark saved local). Footer dark → invert logo. [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min width — [[headless-chrome-mobile-minwidth]]), no generation — [[redesign-tooling-broken]].
- Define every CSS token (no undefined --sp-8/9 or --space-*); reveal class `.in` (not `.is-visible`); hero img path `assets/…`; cap 2-col gaps; logo/contrast check.
