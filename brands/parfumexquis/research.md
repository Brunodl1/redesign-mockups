# Parfum Exquis — research (home redesign)

**URL:** https://parfumexquis.com/ · **Page:** home · **Slug:** parfumexquis
**Niche:** fragrance (niche-perfume retailer) · **Reference:** `references/fragrance.md`
**Language:** **ENGLISH** (Bruno's call). Montreal-based, store loads EN, CAD,
markets "best place to buy perfume in Canada"; FR/ES toggles exist but on-page
copy is English. (Grounded in fetched HTML: `Shopify.locale="en"`, EN meta, no FR copy rendered.)

## What they are
Montreal-based **niche-fragrance retailer** (multi-brand) — sells authentic niche
& designer perfumes "from all over the world," plus discovery/sample sets, body
products and home fragrance. Positioning: *"Best niche perfumes from all over the
world · Montreal based niche perfume store · the best place to buy perfume in Canada."*

## ICP
Fragrance enthusiasts & gift-buyers ~22–45 hunting distinctive niche scents they
can't get at a mall counter; discover via TikTok/Reddit/word-of-mouth. Buy on:
authenticity, the thrill of a signature scent, and low-risk sampling before a full bottle.

## USP / angles to lean on
- **100% authentic** niche fragrances (the #1 objection in this category = fakes).
- **Montreal-based**, ships across Canada — local/trusted, CAD pricing.
- **Free shipping on orders $60+.**
- **Discovery / sample sets** = try before you commit (the low-friction entry).
- Curated **niche houses** you won't find everywhere (see brands below).

## Tone
Confident, knowledgeable, a little insider/connoisseur — but welcoming, not snobby.
Accessible-luxury.

## Language verdict
ENGLISH. Keep product + house proper names exactly as on packaging.

## Design tokens (from live site — `cdp.py` broken, grepped from raw HTML)
- Body font: **Nunito** (theme). Ink: near-black **#121212 / #303030**; white surfaces;
  a teal **#108474** appears as a theme accent. Generally a clean light theme.
- For the redesign we ELEVATE per `references/fragrance.md`: warm cream ground,
  near-black ink, single **amber/gold** accent, refined serif display + geometric sans.
  (We intentionally move off the stock Nunito/teal toward accessible-luxury fragrance DNA.)

## Real logo (hotlink — hard requirement)
`https://parfumexquis.com/cdn/shop/files/Logo_avec_typo_-_Couleurs.png?v=1722550893&width=400`
(400×400, transparent PNG, color wordmark. On the dark footer place on a light chip or invert.)

## Imagery plan — HOTLINK real product shots (bright, on-neutral; Shopify CDN, hotlink-OK, verified 200)
Base URL: `https://parfumexquis.com/cdn/shop/files/<FILE>?width=<N>`

**Bestsellers grid (8):**
| Name | House | File |
|---|---|---|
| Bianco Latte | Giardini di Toscana | `BiancoLatteGiardiniDiToscanaPerfume.jpg?v=1700006530` |
| Bois Imperial | Essential Parfums | `BoisImperialEssentialParfums.jpg?v=1704316336` |
| Wandervogel | 27 87 | `2787Wandervogel.jpg?v=1745427275` |
| Per Sē | 27 87 | `PerSe2787.jpg?v=1745439593` |
| Genetic Bliss | 27 87 | `GeneticBliss2787.jpg?v=1745341629` |
| Oro e Miele | Giardini di Toscana | `OroeMieleGiardinidiToscana.jpg?v=1773930113` |
| Mosaïque | 27 87 | `2787Mosaique.jpg?v=1745438066` |
| Poppy Riot | Room 1015 | `PoppyRiotRoom1015.jpg?v=1769460068` |

**Discovery-set band (try-before-you-buy) — EXCLUDE "Set Of Pins":**
| Name | File |
|---|---|
| My First Niche Perfume Set | `MyFirstNichePerfumeset.jpg?v=1705678968` |
| 27 87 Discovery Set | `2787discoveryset.jpg?v=1748618219` |
| Theodoros Kalotinis Discovery Set | `DiscoverysetTheodorosKalotinis.jpg?v=1761923487` |

**Brands-we-carry showcase (tiles/marquee):** Room 1015 (`room_1015.jpg?v=1703530587`),
Jusbox (`jusbox.jpg?v=1683409340`), Xerjoff (`Xerjoff_perfumes.jpg?v=1703531323`),
Vertus (`Vertus_perfumes.jpg?v=1703530794`), Chabaud (`Chabaud_perfume.jpg?v=1703531153`),
27 87, Giardini di Toscana, Essential Parfums, Loumari, Theodoros Kalotinis.

**Hero:** generated Flux options (`assets/hero-v1..4.png`) — amber-bottle editorial; OR
fall back to a real bottle shot (Oro e Miele / Bianco Latte) in a split layout. Picker decides.

## HARD constraint from Bruno
❌ Do **NOT** put **"Set Of Pins | Monthly perfume discovery set 8X1 ml"** anywhere on the page.

## Nav (real menu, English)
Fragrances · New · Bestsellers · For Her · For Him · Samples & Sets · Home Fragrance · Sale · Brands · About

## Section order (home — per fragrance reference)
announcement/free-ship bar → header → hero (split, editorial) → trust strip →
shop-by-category tiles → bestsellers grid → discovery-set band → brands marquee →
review wall → authenticity/why-us band → newsletter → footer.

## Tooling notes
cdp.py/Gemini-edit/PIL broken (see memory). Research grepped from raw HTML; screenshots
via headless Chrome; hero via free Flux; floats dropped (no chroma-key). Deploy via deploy.sh.
