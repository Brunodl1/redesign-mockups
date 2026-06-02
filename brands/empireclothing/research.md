# Empire Clothing (Empire 1917) — research (home redesign)

**URL:** https://empireclothing.com/ · **Page:** home · **Slug:** empireclothing
**Niche:** apparel → **menswear / heritage tailored suiting** · **Reference:** `references/menswear.md` (NEW — pending exemplar approval)
**Language:** **FRENCH** (proposed) — Montréal (QC) brand, EN/FR toggle exists → per skill rule default FR even though English-primary.
Keep proper names: Empire, Empire 1917, Made-to-Measure → "Sur-Mesure", fabric/collection names. Flag to Bruno (could flip EN).

## Brand
**Empire Clothing Manufacturing Company** ("Empire 1917") — century-old **Montréal menswear manufacturer** (founded 1917,
3rd-generation family business; Ronald Leibovitch + daughter Amanda). Tailored **suits, sport coats/vestons, blazers,
tuxedos/smokings, topcoats**. Premium European fabrics (Italy/England/Scotland/Ireland), in-house Montréal factory (330
employees since 1932), **Made-to-Measure / Sur-Mesure** tier. B2B wholesale to upscale retailers (US + Canada) — but the
redesign presents a polished DTC-style heritage homepage. Quiet-luxury, sartorial, heritage. NOT streetwear.

## ICP
Men 35–65, professional/executive, classic sartorial dressers; + the B2B retail buyer channel (upscale menswear stores).
Buy on: quality + fit + heritage + European fabrics + craftsmanship + the "best first impression."

## USP / value prop
- **Heritage depuis 1917** — a century of Montréal tailoring; 3rd-generation family house.
- **Qualité & coupe** — "We set our standards high for quality and fit… your best first impression… lasting impressions."
- **Étoffes européennes** — best mills in Italy, England, Scotland, Ireland; "softer, more supple hand."
- **Fabriqué à Montréal** — in-house factory, 330 employees, flexibility + responsive service.
- **Sur-Mesure** — customize fabric, lining, buttons; "play designer."

## Tone
Classic, restrained, heritage-proud, quiet luxury. "Experience the Elegance of Empire." Dignified old-world craftsmanship
+ Canadian manufacturing pride. Understated, confident — a 100-year suiting house, not a loud fashion brand.

## Design tokens (from live site — faithful, then elevated)
- **Real fonts:** **Arimo** (Arial-metric sans, plain) for everything (h1 31px wt400, body 17px wt300). Secondary Fira Sans (legacy).
  → ELEVATE the heritage: pair an elegant SERIF display (heritage/sartorial) + clean sans body. Candidates: Cormorant Garamond
  / Playfair Display (display) + Inter/Arimo-like sans (body). Decide in reference + base.css.
- **Real palette:** PRIMARY **deep navy/indigo #2C365E** (CTAs, links, active); ink **#242A41** (navy-black); white bg;
  hover **#4E5B86**; brick red **#C54538** (announce only — use sparingly/skip); plum **#771F52** (sale only). Borders #CCC.
  → Elevated: ivory/cream + deep navy + charcoal + a warm GOLD heritage accent (hairlines/eyebrows). Classic suiting, quiet-luxe.
- **Buttons:** SQUARE (radius 0), UPPERCASE, bold (700), letter-spacing 2px. Keep this — sartorial/structured.
- **Type:** headings light wt400 plain (real); elevate display to serif. Nav uppercase tracked .3em. Container ~1220px.
- **Shape:** SQUARE corners everywhere (radius 0), minimal shadow, subtle 1px borders. Restrained, structured.

## Real logo (hotlink/local — hard requirement) — AVIF, convert to PNG, verify renders
Black wordmark "Empire 1917": `https://empireclothing.com/img/empire1917_logo_main_2048x.avif` (also _410x, _500x500). NO white
variant. → download + convert AVIF→PNG → assets/logo.png. Header light → black logo OK; dark footer → invert (brightness(0) invert(1)). [[redesign-verify-brand-and-screenshot]]

## Imagery plan — ALL HOTLINK (verified 200; strong on-figure menswear editorial). Host = api.empireclothing.com/assets/<uuid>
NOTE: images live at `https://api.empireclothing.com/assets/<uuid>` (Directus CMS), all 200, hotlinkable. NO cdn.shopify URLs.
- **HERO landscape (best wide):** `https://api.empireclothing.com/assets/5ddfd4c0-6340-4fc4-86aa-a7300de308b5` (grey glen-plaid sport coat, arched-window interior, neg-space left). Portrait alts: `cb0366bf-c508-4f24-8f0b-fd433f82f680` (powder-blue), `e10f2a3f-c9e0-4c5c-9499-22359f9b797f` (sage green archway), tuxedo `fed6c79b-a47c-486e-b196-ba6ad5191f57`.
- **Category tiles:** sport coats `cced8150-589b-4326-852d-53ef04e5faaf` · blazers `b767d2d3-11f2-4663-86b3-4d11c045592f` · suits `154c2be3-8684-4822-a53f-1498c3fba05f` · tuxedo `fed6c79b-a47c-486e-b196-ba6ad5191f57`.
- **Lookbook/editorial band:** `5542a74f-2cb2-4c7c-98fc-ceef40d3413c` (blue plaid, stone wall, 4001×5999). MTM/portrait: `e10f2a3f…`, `33478 ZACK` camel `c0226425-64ce-4a70-97e9-588f7b59f756`.
- **Heritage band:** B&W 1917 horse-and-buggy `https://empireclothing.com/img/horsenbuggy_1200x.webp`.
- Brand imagery is STRONG → no generation needed (maybe 1 optional atelier/fabric atmosphere shot — skip to stay safe/fast).

## Products / structure (no public prices — B2B; show collection CTAs not prices)
Complets (suits) · Vestons/sport coats · Blazers · Smokings (tuxedos) · Pardessus (topcoats) · Sur-Mesure. Seasonal
collections SS/FW. NO prices shown (B2B) → hero + heritage + collection CTAs drive, not price.

## Nav (FR proposed)
Accueil · Collections · Sur-Mesure · Notre savoir-faire · Histoire · Contact

## Section order (home — menswear/heritage structure, FR; pending reference)
announce (depuis 1917 · fait à Montréal · étoffes européennes) → header (logo Empire 1917) → HERO (editorial, "L'élégance
depuis 1917" + 1 CTA "Voir les collections") → trust/heritage strip (depuis 1917 · fabriqué à Montréal · étoffes
européennes · sur-mesure) → collections/categories grid (complets·vestons·smokings·pardessus) → savoir-faire/quality band
(craftsmanship + détail) → heritage/histoire band (B&W 1917 + the story) → sur-mesure feature (customize) → lookbook/
editorial band → (retailers / "où nous trouver" or contact) → newsletter → footer (navy/ink, logo inversé).

## Lessons applied
- Verify real brand (Empire 1917; AVIF logo → convert PNG, invert on dark). [[redesign-verify-brand-and-screenshot]]
- Tooling broken: raw-HTML research, headless-Chrome shots (~500px min — [[headless-chrome-mobile-minwidth]]), AVIF→PNG via sips — [[redesign-tooling-broken]].
- Define every CSS token; reveal `.in` (not `.is-visible`); hero img path `assets/…`; cap 2-col gaps; strip stray section <link>s on assemble; logo/contrast check.
- NEW niche → needs `references/menswear.md` (exemplar approval required before build).
