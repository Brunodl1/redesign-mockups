/* redesign-mockup motion — dependency-free.
   scroll-reveal: elements with .reveal rise + fade + un-rotateX into place as they
   enter the viewport (all devices). Siblings stagger. Respects prefers-reduced-motion.
   (Floating .float elements are intentionally STATIC — no parallax/bob.) */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---- scroll-reveal (all devices) ---- */
  var reveals = [].slice.call(document.querySelectorAll('.reveal'));
  if (reveals.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('in'); });
    } else {
      reveals.forEach(function (el) {
        if (el.style.transitionDelay) return;
        var sibs = [].slice.call(el.parentNode.children).filter(function (c) {
          return c.classList && c.classList.contains('reveal');
        });
        var i = sibs.indexOf(el);
        if (i > 0) el.style.transitionDelay = Math.min(i * 90, 360) + 'ms';
      });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* floating elements are STATIC (Bruno's preference) — no parallax, no bob.
     They keep a fixed rotation via CSS (.float img { transform: rotate(var(--rot)) }). */

  /* ---- product buy-box interactions ---- */
  var SUB_RATE = 0.90; /* abonnement = -10 % */

  function money(n) {
    return n.toFixed(2).replace('.', ',') + '  $ CAD';
  }
  function moneyShort(n) {
    return n.toFixed(2).replace('.', ',');
  }

  var chips   = [].slice.call(document.querySelectorAll('.s-product__format-chip'));
  var subOpts = [].slice.call(document.querySelectorAll('.s-product__sub-option'));
  var subPriceEls = [].slice.call(document.querySelectorAll('.s-product__sub-price'));
  var qtyInput = document.querySelector('.s-product__qty-input');
  var qtyBtns  = [].slice.call(document.querySelectorAll('.s-product__qty-btn'));
  var priceEl  = document.querySelector('.s-product__price');

  function activeChip() {
    return document.querySelector('.s-product__format-chip.is-active') || chips[0];
  }
  function basePrice() {
    var c = activeChip();
    return c ? parseFloat(c.getAttribute('data-price')) : 0;
  }
  function isSubSelected() {
    var sel = document.querySelector('.s-product__sub-option.is-selected input');
    return sel && sel.value === 'sub';
  }
  function qty() {
    var q = qtyInput ? parseInt(qtyInput.value, 10) : 1;
    return (isNaN(q) || q < 1) ? 1 : q;
  }

  function refresh() {
    var base = basePrice();
    /* per-option prices reflect the chosen format */
    if (subPriceEls[0]) subPriceEls[0].textContent = money(base);
    if (subPriceEls[1]) subPriceEls[1].textContent = money(base * SUB_RATE);
    /* headline price reflects format × purchase type × quantity */
    var unit = isSubSelected() ? base * SUB_RATE : base;
    if (priceEl) {
      priceEl.innerHTML = moneyShort(unit * qty()) +
        ' <span class="s-product__currency">$ CAD</span>';
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) {
        c.classList.remove('is-active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-pressed', 'true');
      refresh();
    });
  });

  subOpts.forEach(function (opt) {
    var input = opt.querySelector('input');
    opt.addEventListener('click', function () {
      subOpts.forEach(function (o) { o.classList.remove('is-selected'); });
      opt.classList.add('is-selected');
      if (input) input.checked = true;
      refresh();
    });
  });

  qtyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!qtyInput) return;
      var dec = /diminuer/i.test(btn.getAttribute('aria-label') || '');
      var next = qty() + (dec ? -1 : 1);
      qtyInput.value = Math.max(1, Math.min(99, next));
      refresh();
    });
  });
  if (qtyInput) qtyInput.addEventListener('input', refresh);

  /* thumbnail strip: clicking swaps the main image + active state */
  var thumbs = [].slice.call(document.querySelectorAll('.s-product__thumb'));
  var mainImg = document.querySelector('.s-product__main-image');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var img = thumb.querySelector('img');
      if (mainImg && img) {
        mainImg.src = img.src;
        mainImg.alt = img.alt;
      }
      thumbs.forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });

  refresh();
})();
