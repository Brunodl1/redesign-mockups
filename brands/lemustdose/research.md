# Research — Le Must Dose (lemustdose.com)

**Page:** home · **Language:** FRENCH (Bruno's call — default rule for Canadian/bilingual brand; keep product proper names per packaging, translate all UI/marketing) · **Niche:** skincare-cosmetics (K-beauty / clinic-inspired premium) · **Platform:** Shopify

## What they sell
Premium **K-beauty "booster serums"** — concentrated actives positioned as a clinic-grade, non-invasive alternative. Company: **Lemust Apothecare Inc. (2025, Canada)**. 3 hero products @ **$69 CAD** each:
- **All-in-One PDRN Serum w/ HA Peptides Booster** — $69 — /products/rejuvenate-glow-all-in-one-booster-serum — "30,000 ppm PDRN (3× more than top serums)", "15% pure HA (7.5× more hydrating)". 2×7mL, 5 drops/day. BEST SELLER, "PDRN After-Care Microneedling".
- **Stem Cell Exosomes Age Defense Booster Serum** — $69 — /products/anti-aging-care-for-men-women — plant stem cells, tranexamic acid, niacinamide, 5% HA.
- **Spicule Shot Booster Serum** — $69 — /products/absorb-repair-spicule-microneedling — "100,000 natural micro-spicules" → "liquid microneedling"; 4% HA, 20,000 ppm Centella, multi-peptides. (currently sold out)
- Gift card — $50+.

## ICP
Results-driven, dermatology-aware skincare enthusiasts ~25–55, comfortable with clinic-grade actives, want visible hydration + anti-aging WITHOUT invasive procedures (microneedling-alternative appeal). Buying emotion: trust in K-beauty innovation + "clinic-grade at home." **Dominant objection: "will this actually work?"** — answered with concentration math (3×, 7.5×) and clinical framing.

## USP / proof
- **Core promise:** *"Smart Skincare. Clinic Inspired. Deep Results."* / *"Essentiality Meets Luxury."* / *"Great skin is for everyone."*
- **Proof:** explicit potency comparisons (3× PDRN, 7.5× hydration); K-beauty origin prestige; clean formulation (no PEGs/parabens/silicones, vegan, fragrance-free); "step zero" absorption science.
- **Gap:** NO visible customer testimonials / review faces on-site → social proof is thin (a redesign opportunity).
- **Offer:** New customers **10% sitewide + free shipping** on first order. Now shipping internationally.

## Design tokens (prospect's real system — base layer)
From `cdp.py styles`:
- **Palette:** bg cream **#FFF8EF** (rgb 255,248,239); ink near-black **#121212**; accent deep maroon **#4D1309** + **#572519** (warm burgundy/brown); hero text white on dark.
- **Type:** body **Assistant** (sans); display **Alice** (high-contrast serif, loaded). H1 40px/400, ls .6px; H2 24px.
- **Buttons:** black bg (#121212), white text, **0px radius (sharp corners)**, ls 1px, uppercase-ish, no shadow. Sharp, minimal, luxe.
- Mood: warm-luxe apothecary + clinical. Cream + deep maroon + black, serif headlines, sharp edges.

## Imagery audit (Shopify CDN — hotlink-safe)
- **Logo:** `https://lemustdose.com/cdn/shop/files/lemust.png?v=1754498984&width=600` (dark wordmark; invert on dark footer).
- **Hotlink (good, reuse):**
  - hero banner → `https://lemustdose.com/cdn/shop/files/Brandstore_1500_x_750_px_2.jpg?v=1757257912&width=3840`
  - product PDRN → `https://lemustdose.com/cdn/shop/files/CopyofAMZListing2025-08_5_0a74e512-7cd3-4621-82a9-c1adba12ca07.png?v=1755713589&width=533`
  - product Stem Cell → `https://lemustdose.com/cdn/shop/files/CopyofAMZListing2025-08_4.png?v=1755712957&width=533`
  - product Spicule → `https://lemustdose.com/cdn/shop/files/CopyofAMZListing2025-08.png?v=1755712744&width=533`
  - lifestyle (couple) → `https://lemustdose.com/cdn/shop/files/Man_Woman_750_x_750_px.jpg?v=1757277591&width=1500`
  - men's banner → `https://lemustdose.com/cdn/shop/files/Anti-Aging_Serum_for_Him_e2c99240-a8dd-4680-9156-620443fddd00.jpg?v=1758298770&width=3200`
  - social wall → `https://lemustdose.com/cdn/shop/files/Last_Page_on_lemust_wall_3000_x_1600_px_1.jpg?v=1757172756&width=3840`
- **Generate (maybe):** only if we want a stronger custom hero or testimonial faces (no real testimonials exist). Default: hotlink-first, generate hero only if the stock banner reads weak in Step 5.

## Design direction (prospect base + skincare-cosmetics reference structure)
Keep Le Must Dose's OWN look (cream #FFF8EF + deep maroon #4D1309 + black, Alice serif display, Assistant sans, sharp 0-radius buttons) as the base. Layer the skincare-cosmetics reference's conversion STRUCTURE: hero (real product + panel) → press/proof bar → bestsellers grid (3 serums, $69, star ratings) → "the science" band (PDRN / spicules / exosomes potency math) → clean-formulation/ingredients band → reviews (build social proof the real site lacks) → guarantee/offer (10% first order) → newsletter → footer. Lead with **clinic-grade potency + K-beauty + clean formulation**.

## Notes
- Currency CAD. Keep product proper names as on packaging.
- Social proof is the brand's biggest gap — the redesign should manufacture credible review/social-proof sections (clearly as mockup placeholders).
