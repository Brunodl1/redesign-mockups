# Research — Beyond Bathing Swimwear (beyondbathingswimwear.com)

## Page: home · Language: ENGLISH (Canadian, CAD) · Niche: swimwear (ref: references/swimwear.md, Summersalt DNA)

## Brand / ICP
- **What they sell:** full-coverage, modest, sun-protective swimwear (originally branded "Bathing Boomers").
  Heroes: **The Swim Shirt** ($135 / sale $81), **The Swim Dress** ($135 / $81), **The Daisy Top**
  (UV-certified, $155 / $93), **The Leggings** ($45). Also beach bags, jewellery.
- **ICP:** women 50+ ("Boomers") who've avoided the water over fit / body-confidence / sun concerns.
  Buying emotion: confidence + comfort + permission to get back in the water, covered.
- **USP:** full coverage · **98% UV blocking** (UV-certified) · wire-free built-in support · designed in
  **Canada by two best friends** (co-founders **Velvet Haney & Rachel Manley**) "who get it".
- **Tone:** warm, relatable, funny, empowering. Real hero copy: *"Your Swimsuit Drawer Called. It Said
  It's Time."* · *"Designed in Canada by Two Best Friends Who Get It"*.
- **Proof:** 193 verified reviews w/ star ratings.
- **Announcement (real):** "🌸 Spring Sale - 40% off selected styles. Because you deserve to be in the water."

## Design tokens (faithful to brand)
- Palette: warm sand/off-white ground, charcoal ink, the products are **blues** (paisley blue, navy) →
  **ocean sea-blue accent**, sandy-gold pop. Friendly/warm, NOT cold-luxury.
- Logo: black transparent PNG (`assets/logo.png`, 600×300). Visible on light header as-is; invert on dark
  footer (`filter:brightness(0) invert(1)`).
- Type: warm serif display (Fraunces) + clean readable sans body (Mulish) — sized UP for 50+ legibility.
- Buttons: soft-rounded (radius 12), friendly; uppercase tracked eyebrows.

## Imagery plan — ALL HOTLINKED (no generation; avoids Flux face-melt on human shots, $0 Gemini)
Real on-figure lifestyle shots (verified 200):
- Hero pool: `https://d3k81ch9hvuctc.cloudfront.net/company/XaudPQ/images/9aaf98fd-404d-45d2-85ee-92043641d172.jpeg` (women swimming, indoor pool)
- Aquafit: `https://d3k81ch9hvuctc.cloudfront.net/company/XaudPQ/images/2d754c0f-7889-4dfe-a417-0cb17d31849d.png`
- Rachel/Portugal: `https://d3k81ch9hvuctc.cloudfront.net/company/XaudPQ/images/58c6fd58-864d-46c2-afc7-037a94f4db98.png`
- Founders (Velvet & Rachel): `https://beyondbathingswimwear.com/cdn/shop/files/bathing_boomers_swimwear_co-founders_velvet_haney_and_rachel_manley_1200x.jpg?v=1673902950`
Products (swap _1200x for size; all 200):
- Swim Shirt (on-figure beach): `.../products/bathingboomersswimshirtbeach_1200x.jpg?v=1664226043`
- Swim Shirt (blue paisley flat): `.../products/bathingboomersbluepaisleyswimshirt_1200x.jpg?v=1664226037`
- Swim Shirt (lake): `.../products/bathingboomersbluepaisleylake_1200x.jpg?v=1664226038`
- Swim Dress (black, Lake Como): `.../products/bathingboomersswimdressblacklakecomoitaly_6ddfc941-7fc0-4191-9a14-eb9f1add1538_1200x.jpg?v=1664208121`
- Swim Dress (blue): `.../products/bathingboomersswimdressbluefabric_1200x.jpg?v=1664220303`
- Daisy Top (UV): `.../files/daisytopbeyondbathingswimwear_1200x.jpg?v=1707774787`
- Leggings: `.../products/bathingboomersleggingbeachyoga_1200x.jpg?v=1664375751`
(host prefix for products/files: `https://beyondbathingswimwear.com/cdn/shop`)

## Section order (home)
announce → header(logo+converting nav+cart) → hero(full-bleed, real woman at water) → credentials strip
(UV98% · Canada · sizes · ★4.9/193 · free returns) → bestsellers(4 products, on-figure + price + quick-add)
→ shop-by-coverage(fit/concern tiles) → benefits + founder story(founders photo) → reviews(★4.9 + 6, 2 rows)
→ spring-sale offer + newsletter → footer(dark, inverted logo, About/Help here per nav-no-utility-links).
