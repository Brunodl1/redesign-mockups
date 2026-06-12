# Research — Arising From Fire / Allie & Lennie (arisingfromfire.com)

**Page:** product (`/products/allie-lennie`) · **Language:** **FR** (bilingual Canadian roaster — French tagline « De la braise naît le légendaire! », `/fr/` hreflang, bilingual shipping copy → per skill rule, Québec/CA brand offering French → build in FRENCH; keep proper names as on pack) · **Niche:** coffee · **Reference:** existing `references/coffee.md` (warm editorial) **+ Bruno's explicit layout = Smoking Gun Coffee product page** · **Slug:** arisingfromfire

## Brand
- **Who:** Phoenix Coffee Company Inc., dba **Arising From Fire** — Canadian specialty coffee roaster. Tagline **"Legendary Things Arise from Fire!"** / « De la braise naît le légendaire! ». Roast-to-order, single-origin focus, producer-transparency ethos. Tone: sophisticated yet warm, craft, "quiet beauty" ("This is not a coffee chasing spectacle. Its beauty is quieter than that.")
- **Logo:** NONE — site uses a plain text shop name ("Phoenix Coffee Company Inc."). No image asset on home or product page. → Build a tasteful **EB Garamond wordmark "ARISING FROM FIRE" + small flame inline-SVG** (honest fallback; flagged to Bruno).
- **USP:** same-day/next-day dispatch on in-stock; roast-to-order on the current week's roast cycle ("freshly roasted beans"); "Expressive coffees from remarkable producers"; producer stewardship (fairness, transparency); pickup available.

## Product — Allie & Lennie (Brazil • Yuki Minami)
- **Name on pack:** ALLIE & LENNIE — BRAZIL • YUKI MINAMI (single-origin whole-bean espresso; "grounding force of the espresso lineup").
- **Price:** CAD **$24 / 300g** · $24 / 2.5lb(?) · **$160 / 5lb** (bulk). Variants = size only, whole bean.
- **Origin:** Cerrado Mineiro, Minas Gerais, **Brazil** · Farm **Olhos D'água** · Producer **Yuki Minami** (champion of transparency/fairness in São Gotardo).
- **Specs:** Varietal **Red & Yellow Catuaí** · Elevation **1140–1220 m** · Process **Natural** · roast = espresso.
- **Tasting:** **Peanut Butter · Berry Jam · Kit-Kat** | Body: creamy · Acidity: gentle · Sweetness: comforting. Evocative copy: "peanut brittle sweetness, jammy berry depth, soft milk chocolate, and a rounded, comforting body… built to endure." → expand into FR description (Bruno wants bigger description).
- **ICP:** specialty enthusiast 28–50, values traceability + producer ethics + freshness over convenience. Pains: opaque/stale mass coffee · no producer connection · hard to access fresh small-batch. Desires: same-week roast from a named producer · flavour education (origin/varietal/process) · purchase supports fair, transparent sourcing.

## Design tokens (REAL site)
- Palette: warm cream bg **#EFECEC**, ink **#252525**, signature **burgundy #A61E22** (CTAs), olive-deep **#2C332F** (secondary/dark bands), cream button text #F3EEE7.
- Type: display **EB Garamond** (serif, 400, elegant), body **Manrope** (400/700), generous letter-spacing, sentence-case headings. Buttons 6px radius, solid fill, letter-spacing .1rem.
- Vibe: warm artisanal roaster — serif elegance + modern sans, burgundy craft accent on cream. Product packshot is DARK/moody (bag + beans + espresso on black) → generated imagery matches dark+copper.

## Image plan
- **HOTLINK (real):** packshot `https://arisingfromfire.com/cdn/shop/files/7A08D6CC-ACCB-4677-8C18-F7D94855188B.png?v=1778545416&width=1200` (BRAZIL • YUKI MINAMI bag styled on black with beans/cups). Only product image that exists.
- **GENERATE (free Flux, dark+copper):** lifestyle espresso/beans flat-lay (gallery secondary), Brazil Cerrado origin landscape (story), dark bean macro on white (float cut-out), espresso-extraction brew shot (brew section). NO Gemini composite needed (real packshot already lifestyle-styled). Canonical: `lifestyle.jpg`, `origin.jpg`, `brew.jpg`, `float-beans-cut.png`.

## Layout (Smoking Gun template + Bruno's adds, ≤3 extra)
1. header (announce + nav) · 2. **s-product** buy section — gallery (real packshot + generated thumbs) + buy box with **roast-profile card** (roast-scale slider + Sweetness/Acidity/Body bars + tasting-note chips), size tiers (300g/2.5lb/5lb), qty, subscription toggle, price, ATC, **ship-cadence freshness line**, short desc + brew note; **wavy divider** at base · 3. **s-story** EXPANDED description + Yuki Minami producer/origin (Bruno: bigger description) · 4. **s-specs** terroir/beanology table (ADD 1) · 5. **s-brew** brew guide method icons + espresso recipe (ADD 2) · 6. **s-reviews** testimonials (Bruno) · 7. **s-related** « vous aimerez aussi » · 8. footer.

## Hero/buy variant
Smoking Gun split: gallery left / sticky buy box right. Mobile: image stack on top, thumbs below, buy box beneath. All copy FRENCH.
