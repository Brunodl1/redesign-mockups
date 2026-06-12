# da lish — mascara product page redesign

**Brand:** da lish (stylized lowercase, peach accent over the "i"). Vendor: da lish cosmetics. Domain dalishcosmetics.com.
**Niche:** skincare-cosmetics (colour cosmetics / clean beauty).
**Language:** ENGLISH (en-CA; English-only site, no FR toggle; Canadian "Made in Canada", BC brand). Build in EN.
**Tone:** playful, conversational, friendly clean-beauty — NOT clinical, NOT heavy-luxe. ("uncomplicated beauty. Clean Beauty. Skin Loving." / "not a full-blown Kim K moment!")
**USP:** clean, skin-loving, cruelty-free, non-GMO colour makeup that performs — flake-free, smudge-proof, buildable, no caking.
**ICP:** women who want easy, clean, everyday makeup that works and feels good to buy from a principled small Canadian brand.

## Product — the mascara
- Name: **da lish mascara** · **$30 CAD**
- Shades: **brown/black**, **soft black**
- **4.9 ★ · 23 reviews**
- Size 0.13 fl oz / 3.4 mL
- Benefits: Flake-Free & Smudge-Proof · Buildable Volume (no clumps) · No Caking (gets better with time) · Water-Resistant (NOT waterproof)
- Texture: rich smooth; thick wand for volume + narrow tip for precision
- Clean: cruelty-free, non-GMO; key actives sunflower seed oil, rosemary leaf extract, vitamin E (tocopherol), carnauba wax
- Bruno's brief: the live description is a wall-of-text (benefits+texture+how-to+pro-tip+27-line INCI dumped together). → break into short benefit cards + ACCORDION (description / how to use / ingredients / shipping) + FAQ accordion.

## Design tokens (brand-real)
- Palette: **black `#1D1C1C` + white + signature peach `#ffc3af`**. (Ignore teal/blue CSS tokens — those are payment-icon colors.)
- Type: clean lowercase humanist sans wordmark → use Outfit (display, lowercase headings echo "da lish") + Inter (body).
- Buttons: dark fill, light text, rounded → black pill primary + peach secondary.
- Aesthetic: bright, clean, warm; white studio shots; peachy props; sleek black tube w/ silver cap + peach logo.

## Imagery plan
**Hotlink (real, cdn.shopify.com/s/files/1/0077/5340/0356):**
- Logo: `files/dalish_corp_rgb_onwhite_alpha.png` (transparent dark wordmark; invert on dark footer)
- Lifestyle: `products/DSC_1234_e4b9181f-799c-44d5-b12d-717d28abdafa.jpg` (range on sunlit ledge), `products/fullsizeoutput_5883_1_38e31df0-1c00-4886-ba06-0fdcef7a607b.jpg` (styled tube + sticker)
**Local real packshots:** `tube.jpg` (M01 closed tube), `wand.jpg` (open tube + wand), `swatch.jpg` (texture smear)
**Floats (keyed, real product):** `tube-cut.png`, `wand-cut.png`
**Generated usage shots (brand had ZERO — Bruno's explicit ask):** `usage.jpg` (macro eye + wand applying), `apply.jpg` (woman applying mascara), `result.jpg` (open eye, voluminous lashes). Flux, free.

## Hero variant
Product page → sticky **gallery + buy box** at top (lead with the usage macro shot). Variant differs from étymologie (split) / le must dose (full-bleed).
