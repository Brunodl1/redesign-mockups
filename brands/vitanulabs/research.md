# Vitanu Labs — VidaGreens (PRODUCT page redesign)

## Product
- **VIDAGREENS** by **VITANU LABS** — a 25+ superfood greens powder (9,280 mg plant/fruit/fiber/herbal per scoop). "Fuel your vitality, uplift your mood, whole-body wellness." Flavor: **Green Apple**. Price **$69.99**. Subscription available (selling_plan present → add Subscribe & Save).
- Logo (REAL, hotlink): https://vitanulabs.com/cdn/shop/files/LOGO_PACK-18.png?v=1780538651&width=400 (dark wordmark — fine on white header; invert on dark footer).

## Bruno's instructions
1. Gallery CAROUSEL: add 2 GENERATED images — (a) **someone USING the product** (drinking/mixing the greens), (b) a **review-style / UGC** image (customer-with-product, authentic). (People → Gemini.)
2. Take the home page **"Real People. Real Results."** section and add it to this page — it's a UGC VIDEO testimonial carousel (real videos below). Subtitle: "From first scoop to daily routine, hear directly from the people who make Vitanu part of their wellness lifestyle."
3. Make it look **more professional**: **white bg, black + blue vibe**, **blue Add-to-cart**.
4. **Sticky add-to-cart card** (product price + button) appearing on scroll.

## ICP / positioning
Wellness-minded adults wanting an easy daily greens habit for energy, digestion, immunity and mood. Premium-but-approachable (AG1-style). Objections: does it work / what's in it (25+ superfoods, transparent), is it worth $70 (subscribe & save), taste (Green Apple).

## USP
**One scoop, 25+ superfoods, 9,280 mg — your daily ritual for living vibrantly.** Energy, digestion, immunity and mood support in a clean green-apple greens blend.

## Real design tokens (from live site) → redesign per Bruno's white/black/BLUE pro brief
- **Real accent BLUE = #116aae** (links, feature bg). Real bg cream #f7f3ec → OVERRIDE to WHITE per Bruno. Ink #242424. Primary button near-black → make ATC BLUE.
- Fonts: real Helvetica/Arial + custom "FontDrop" headings → use **Inter** (clean, professional) for display + body.
- **Redesign palette:** white #fff bg, ink #161616, blue accent **#1763c7** (crisp pro blue), light blue-grey surface #f5f8fc, line #e6e9ee. ATC = blue.
- Buttons: modern rounded (radius ~10px), uppercase tracked. Professional = generous whitespace, soft shadows, clean type.

## Sections (PDP order)
header → pdp (gallery CAROUSEL [real packshot + generated usage + generated review + extra] + buy box: ★, title, price, Subscribe/One-time selector w/ dynamic BLUE ATC, flavor, benefit icon bullets, trust) → benefits ("Feel Better, Every Day." icons) → ingredients (25+ superfoods / Foundational Greens Complex + Detox & Digestive Herbs) → how-to-use → quality standards (trust band) → **Real People. Real Results. (UGC video carousel)** → written reviews → FAQ → footer. + sticky add-to-cart card.

## Imagery plan — hotlink real packshots + 3 real testimonial videos; generate usage+review (Gemini) + floats (Flux)
### Hotlink (real CDN, base https://cdn.shopify.com/s/files/1/0595/1746/8838/files/)
Gallery: Vitanu-Labs_Photoshoot_VIDAGREENS_Minimal-Beer-Bottle_2026-05-27_2k.jpg (main packshot), DSC_1058.jpg, ChatGPT_Image_Jun_7_2026_at_03_30_00_PM_2.png, ChatGPT_Image_Jun_7_2026_at_03_31_30_PM.png
Logo: above.

### Real "Real People. Real Results." testimonial videos (hotlink, host vitanulabs.com)
1. poster cdn/shop/files/preview_images/1264256e5e38472781ef50705e2a75a2.thumbnail.0000000000_2048x.jpg · mp4 cdn/shop/videos/c/vp/1264256e5e38472781ef50705e2a75a2/1264256e5e38472781ef50705e2a75a2.HD-1080p-4.8Mbps-86111323.mp4
2. poster .../preview_images/52fd5e8c681e4de88cc000ba7249ae57.thumbnail.0000000000_2048x.jpg · mp4 .../52fd5e8c681e4de88cc000ba7249ae57/52fd5e8c681e4de88cc000ba7249ae57.HD-720p-1.6Mbps-82798868.mp4
3. poster .../preview_images/433c1ca27851477abaff136f200324b7.thumbnail.0000000000_2048x.jpg · mp4 .../433c1ca27851477abaff136f200324b7/433c1ca27851477abaff136f200324b7.HD-1080p-7.2Mbps-82534674.mp4

### Generate
- **Gemini (people, ~$0.04/call, ~6 calls ≈ $0.24):** `usage` — a person in a bright clean modern kitchen mixing/drinking a fresh green VidaGreens drink (real tub on counter), healthy & vibrant, white/blue clean palette; `review` — an authentic UGC customer-style photo: a happy person holding the VidaGreens tub / a glass of greens, casual phone-shot feel (for the "review" carousel slide). Edit-mode with real-tub.jpg + a couple text-gen.
- **Flux (free):** `float-scoop` — scoop of green superfood powder on pure white (key out); `float-leaf` — fresh green apple + leaves splash on pure white (key out).
