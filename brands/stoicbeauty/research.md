# Stoic Beauty — research (home redesign)

## Brand
- **Stoic Beauty** (stoic-beauty.ca, Shopify `stoicbeauty.myshopify.com`). **Language: FRENCH** — `.ca`, offers French (`/fr` → 200 real FR content "Ajouter au panier"; hreflang fr; "Français" toggle). Canadian (Bruno's Québec prospects) → build FR. Keep product proper names (Eos, Harmonia, Lakhesis, Chryso, Thalassa, Trivolos, Eleuthia, Physis, Gemini) as on packaging; translate ALL descriptors, UI, marketing.
- **What:** Canadian-made clean skincare for **sensitive skin** — botanical science + meticulous formulation, clinically studied actives, gentle (eczema, rosacea, acne, perimenopause, pregnancy-safe), water-safe/biodegradable/eco, formulated by an MIT-trained organic chemist. Greek-mythology product names.
- **USP / tone:** "Balancing Science and Artistry", "Meet you in the Moment". Warm, premium, apothecary-meets-clinical, caring. Canadian made, eco-conscious, sensitive-skin specialists.
- **ICP:** women ~28–55 with sensitive/reactive skin (eczema, rosacea, redness, pregnancy, perimenopause) who want clean + clinically-backed + Canadian + eco. Objection page must answer: "will it actually work AND not irritate my sensitive skin?" → clinical actives, sensitive-safe, reviews, press, samplers.
- **Niche:** skincare-cosmetics (reference EXISTS — OSEA exemplar, warm-natural premium; use its structure, Stoic's own palette).

## Real design tokens (from live screenshot + CSS)
- Palette: **deep burgundy/oxblood #720111** (primary — buttons, headings, brand), **gold #D6AD60** (secondary — logo sunburst, fine accents, stars), **blush-cream #F6EFEF** (bg), warm taupe **#6C6660** (soft body), near-black, forest accent #324741 (in product art). Warm, elegant.
- Type: **Parabolica** (elegant high-contrast serif display) + **Montserrat** (sans body). Build: **Fraunces** (warm refined serif) for display + **Montserrat** for body/UI.
- **Logo:** `https://stoic-beauty.ca/cdn/shop/files/sblogo_676526e6-9028-4e46-af3d-d2a147651136_1100x_1.png` — "STOIC BEAUTY" black wordmark + GOLD sunburst/eye emblem on transparent. Header on cream = as-is; dark footer = `filter:brightness(0) invert(1)` (white).
- Buttons: burgundy, rounded, title/uppercase.

## THEIR section order (keep + elevate, FR)
announce → header (mega nav) → hero "Canadian made, sensitive skincare" → "SCIENCE BACKED NATURAL SKINCARE" statement → featured product (Spring Refresh / Eos) → "Our Must… Harmonia" + press band (Clin d'œil, ELLE, FAJO, Breakfast Television, Forbes) → Sensitive Skin Concerns tabs (Eczema/Rosacea/Acne/Fine Lines) + product grid → trust icons (Natural & Science-Backed · … · Water-Safe Ingredients) → Sampler box feature → Stoic Beauty Insights (blog) → community/UGC → newsletter "Sign Up & Save 15%" → footer.

## Imagery — ALL HOTLINK (strong editorial product photography). Base `https://stoic-beauty.ca/cdn/shop/`
- Logo: `files/sblogo_676526e6-9028-4e46-af3d-d2a147651136_1100x_1.png`.
- Hero image: `files/Harmonia-compresse.jpg` (amber jar + science beaker + chamomile on warm terracotta — apothecary-science, on-brand).
- Bestsellers grid (FR descriptors · price · file under `files/` unless noted):
  Eos | Brume du matin 36 $ `products/PregnancySafeExfoliant.png` · Harmonia | Crème de nuit équilibrante 46 $ `files/Harmonia-compresse.jpg` · Lakhesis | Crème de jour vitamine C 68 $ `files/Perimenopausedaycream.png` · Chryso | Sérum régénérant 54 $ `files/Chryso.jpg` · Thalassa | Sérum hydratant visage & cuir chevelu 42 $ `products/solutionfordryscalpe.png` · Trivolos | Crème eczéma 38 $ `files/TrivolosBestEczemaCream3.png`.
- Harmonia spotlight: `files/GoldenChamomileCream.jpg` (amber jar, white).
- Sampler/discovery: `files/samplerpack.png` (wooden box w/ 2 mini creams).
- Founder/origin/eco band: `files/Picture1.png` (branded sage serum lifestyle) or `files/sensitivecleansing-compressed.jpg`.
- Press marks = styled TEXT (Clin d'œil · ELLE · FAJO · Breakfast Television · Forbes) — no logo assets.
All verified 200.

## Hero variant: CENTERED EDITORIAL (telan=split, bombay/ars=fullbleed, slc=split → centered NEW ✓). Cream ground, centered gold eyebrow + big burgundy Fraunces FR headline + 1-line subhead + 1 burgundy CTA; Harmonia image framed prominently. Mobile: image FIRST (order) above the fold, then compact text.
