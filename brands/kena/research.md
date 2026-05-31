# Kena Skincare — research (home redesign)

## Language — **FRENCH** (verdict)
Québec/Canada brand: header shows "CAD $ | Canada", a "FRANÇAIS" toggle, and all
on-page copy is French ("Découvrez notre soin", "Nos étoiles", "Notre mission").
Per Bruno's rule (Québec brand offering FR → build FR). **All copy in French.**
Keep product proper names exactly as on packaging.

## ICP
Femmes & hommes ~25–50 cherchant des soins **naturels, multi-usage, fabriqués au
Québec**. Achat émotionnel: « un soin sain, nourrissant, polyvalent qui me donne
un éclat doré (Lueur Dorée), d'une petite marque d'ici en qui j'ai confiance. »
Objection à lever: *est-ce que ça fonctionne vraiment / est-ce vraiment naturel?*
→ avis + notes, ingrédients (chlorophylle), mission/origine, garantie.

## What they sell (REAL product names)
- **L'huile de soin nourrissante** — HÉROS. Multi-usage visage/corps/cheveux, infusée à la chlorophylle.
- **L'ensemble Lueur Dorée** — coffret signature (éclat doré).
- **Le beurre fouetté hydratant** — beurre corporel fouetté.
- **L'huile fouettée pour la barbe** — soin barbe.
- **Le gommage exfoliant** — gommage corps.

## USP / value prop
Soins naturels **multi-usage**, **infusés à la chlorophylle**, fabriqués au
Québec; polyvalence (un produit, plusieurs usages); éclat « doré » naturel.

## Tone
Naturel, chaleureux, élégant-épuré, accessible.

## Pains → Desires
Pains: routine trop compliquée/multi-produits; peau sèche/terne; méfiance « clean=marketing ».
Desires: simplicité (1 produit polyvalent); peau nourrie + éclat doré; soutenir une marque d'ici.

## Real copy snippets (reinterpret)
- « WELCOME TO OUR WORLD OF SKINCARE ! »
- « Découvrez notre soin — L'huile de soin nourrissante »
- « Multi-usage pour le visage, le corps et les cheveux »
- « Nos étoiles »
- « Infusé à la chlorophylle… »
- « PROFITEZ DE 15% DE RABAIS SUR VOTRE PREMIÈRE COMMANDE »

## Niche
skincare-cosmetics (→ references/skincare-cosmetics.md). Reinterpret OSEA DNA
through Kena's REAL brand (below), not warm-sand: Kena is white + sage-olive + gold.

## Kena REAL design tokens (cdp.py styles — be faithful)
- Headings: **Cormorant Garamond**, serif, weight 500, normal casing. H1 ~60px.
- Body/UI: **Poppins**, sans.
- Accent/buttons: **sage-olive `#747A5F`**, white text, **square (radius 0)**, padding 15px 30px, no casing, Poppins 400.
- Body bg white `#FFFFFF`; ink near-black `#212429`.
- Brand layer to add: **gold** accent (Lueur Dorée) + soft cream surfaces + chlorophyll green hints.

## Logo
- Header (dark): `https://www.kenaskincare.com/cdn/shop/files/Beige_Minimalist_Skincare_Logo_1.png?width=400`
- Footer (white, for dark bg): `https://www.kenaskincare.com/cdn/shop/files/kena_logo_blanc.png?width=600`

## Image plan
**Hotlink (real Kena photos, Shopify CDN):**
- Oil bottle hero/product: `…/photo_kena_huile.png?width=1200`
- Lifestyle/oil: `…/IMG_5860.jpg?width=1000` , `…/_MG_5860.jpg?width=1000`
- Beurre fouetté: `…/IMG_6262.jpg?width=900`
- Lueur Dorée set: `…/IMG_3206.jpg?width=900`
- Barbe: `…/F8208E32-D618-49F1-A47C-D2A65F45E927.jpg?width=900`

**Generate:**
- HERO composite (Gemini edit, real oil bottle `src_oil.png`) — warm golden-hour vanity, botanicals, gold+green, negative space. 2 variants. ~$0.08.
- FLOAT: amber/gold **oil droplets & bubbles** (the hero oil) — Flux, 3 variants → `float-oil-*`.
- FLOAT: **whipped butter dollop**, soft cream colour (beurre fouetté) — Flux, 3 variants → `float-butter-*`.

## Hero variant
etymologie=split, lemustdose=full-bleed → Kena = **centered editorial**
(centered Cormorant promise + 1 CTA on soft cream/gold ground, large hero image
below, both above fold desktop; mobile = image first).
