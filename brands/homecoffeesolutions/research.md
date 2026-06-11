# Research — Home Coffee Solutions (homecoffeesolutions.com)

**Page:** home · **Language:** EN (English-first; FR alternate exists but site is `lang="en"`, Mississauga ON, CAD) · **Niche:** coffee (reference: `references/coffee.md`, exemplar Clive Coffee) · **Slug:** homecoffeesolutions

## Brand
- **What they sell:** espresso machines (entry → prosumer: Breville, De'Longhi, Gaggia, ECM, Profitec, Rocket, Jura, Lelit, La Marzocco, Quick Mill, Miele), grinders (Eureka, DF, Timemore), beans/k-cups, accessories, commercial equipment. Price range $1–$70,000; core = mid-to-premium home machines.
- **ICP:** home baristas + coffee enthusiasts in the GTA/Canada upgrading from pods to real espresso; also prosumer buyers ($2–5k dual boilers) and small office/commercial.
- **USP (real on-page copy):**
  - Showroom in **Mississauga, ON** — "Visit a Store or Shop Online", in-store demos + virtual setup sessions.
  - "Personalized Coffee Setup Support … our Coffee Specialists … brewing techniques, and maintenance tips."
  - **Manufacturer-authorized retailer** — "genuine products backed by full warranties and access to exclusive models."
  - **90-day price match guarantee**, **free delivery over $60**, flexible payment plans.
  - **Certified in-house technicians** "trained by top brands like De'Longhi, La Marzocco, Profitec, ECM, Lelit, Eureka, Eversys" — diagnostics + repairs.
- **Tone:** approachable-premium, educational ("upgrade your morning ritual").
- **Pains:** which machine to buy (jargon, huge range) · grey-market/no-support risk · buyer's remorse / can't use it properly.
- **Desires:** hands-on before buying · expert personal guidance · purchase confidence (warranty, price protection, service network).
- **Logo:** `https://cdn.shopify.com/s/files/1/0113/4942/files/hcs-logo-square.jpg?width=400` (alt "Home Coffee Solutions"). Wordmark variant: `https://www.homecoffeesolutions.com/cdn/shop/files/HCS_Original_Logo_a0ad91d6-80aa-4778-b546-e11d346b6435.jpg?width=1200`.

## Design tokens (REAL site, rendered)
- White bg, black ink, accent red **#EE302C** (hover #F25D5A), pill buttons (radius 27px, 12px×26px, sentence case, weight 700), cards rounded ~30px, font **Urbanist** (700 headings / 400 body), 16px base, page width 1560px, light grey lines #D9D9D9. Vibe: clean, minimal, high-contrast, red used sparingly.
- Elevation plan: keep white/red/Urbanist/pills faithfully; add warm espresso neutrals (cream surface #F7F3EE, deep roast #221710 for dark bands/footer) per coffee-niche DNA.

## Image plan (audit verdict: excellent — hotlink everything; generate floats only)
- **Hero (lifestyle, moody):** `https://www.homecoffeesolutions.com/cdn/shop/files/DSC01396-Edit.webp?v=1752527343&width=1920`
- **Products (white-bg/lifestyle, real):**
  - Breville Barista Express — `https://www.homecoffeesolutions.com/cdn/shop/products/Barista_Express_BES870BSS_1.jpg?v=1756413677&width=800`
  - Profitec Pro 700 V2 — `https://www.homecoffeesolutions.com/cdn/shop/products/ProfitecPro700DualBoiler_9.jpg?v=1750056127&width=800`
  - Philips Cafe Aromis 8000 — `https://www.homecoffeesolutions.com/cdn/shop/files/EP8757Hero_2.webp?v=1774375246&width=800`
  - Profitec Move (lifestyle) — `https://www.homecoffeesolutions.com/cdn/shop/files/Profitec-Move-Lifestyle.jpg?v=1767406820&width=800`
- **Category tiles:** espresso machines `hp-link-espressomachine_2.webp?width=600` · grinders `hp-link-grinder.webp?width=600` · accessories `hp-link-accessories.webp?width=600` · top picks `hp-link-toppick_1e6a7235-7c7f-484a-9bb2-b69c3bdf194c.webp?width=600` (all under `https://www.homecoffeesolutions.com/cdn/shop/files/`)
- **Generate (Flux, free):** floating elements — roasted coffee-bean clusters on pure white (key with ImageMagick floodfill; keybg.py/PIL dead).

## Hero variant
Full-bleed lifestyle photo + contained dark text card (Clive DNA; étymologie=split, lemustdose=full-bleed centered — this one: card bottom-left + scrim).
