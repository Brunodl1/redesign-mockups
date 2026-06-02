/* Purana PDP interactivity — variant select + price sync + gallery carousel.
   Dependency-free. Add-to-cart links already point to google.com (mockup). */
(function () {
  var PRICES = { '15ml': '$225', '40ml': '$488' };

  /* ---- Variant selector → active state + price on both CTAs ---- */
  var variants = [].slice.call(document.querySelectorAll('.pdp-variant input[name="variant"]'));
  var ctaMain = document.querySelector('.pdp-cta');
  var ctaGuarantee = document.querySelector('.guarantee-cta');
  function syncVariant() {
    var val = '15ml';
    variants.forEach(function (r) {
      var label = r.closest('.pdp-variant');
      if (r.checked) { val = r.value; if (label) label.classList.add('pdp-variant--active'); }
      else if (label) { label.classList.remove('pdp-variant--active'); }
    });
    var p = PRICES[val] || '$225';
    if (ctaMain) ctaMain.textContent = 'Add to Cart — ' + p;
    if (ctaGuarantee) ctaGuarantee.textContent = 'Add to Cart — ' + p;
  }
  variants.forEach(function (r) { r.addEventListener('change', syncVariant); });
  syncVariant();

  /* ---- Purchase-type toggle → active state ---- */
  var ptypes = [].slice.call(document.querySelectorAll('.pdp-ptype input[name="purchase_type"]'));
  function syncPtype() {
    ptypes.forEach(function (r) {
      var label = r.closest('.pdp-ptype');
      if (label) label.classList.toggle('pdp-ptype--active', r.checked);
    });
  }
  ptypes.forEach(function (r) { r.addEventListener('change', syncPtype); });
  syncPtype();

  /* ---- Gallery carousel: thumbnails + prev/next ---- */
  var main = document.querySelector('.pdp-main-img');
  var thumbs = [].slice.call(document.querySelectorAll('.pdp-thumb'));
  var idx = 0;
  function show(i) {
    if (!thumbs.length || !main) return;
    idx = (i + thumbs.length) % thumbs.length;
    var img = thumbs[idx].querySelector('img');
    if (img) {
      var src = img.getAttribute('src').replace(/width=\d+/, 'width=1100');
      main.setAttribute('src', src);
    }
    thumbs.forEach(function (t, j) { t.classList.toggle('pdp-thumb--active', j === idx); });
  }
  thumbs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(i); });
  });

  /* inject prev/next arrows over the main image */
  var wrap = document.querySelector('.pdp-main-wrap');
  if (wrap && thumbs.length > 1) {
    var mk = function (cls, label, glyph, fn) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pdp-nav ' + cls;
      b.setAttribute('aria-label', label);
      b.innerHTML = glyph;
      b.addEventListener('click', fn);
      wrap.appendChild(b);
      return b;
    };
    mk('pdp-nav--prev', 'Previous image', '‹', function () { show(idx - 1); });
    mk('pdp-nav--next', 'Next image', '›', function () { show(idx + 1); });

    /* keyboard arrows when gallery focused/hovered */
    wrap.setAttribute('tabindex', '0');
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(idx - 1); }
      else if (e.key === 'ArrowRight') { show(idx + 1); }
    });
  }
})();
