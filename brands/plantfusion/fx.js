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
      setTimeout(function () { reveals.forEach(function (el) { el.classList.add('in'); }); }, 1800);
    }
  }

  /* floating elements are STATIC (Bruno's preference) — no parallax, no bob.
     They keep a fixed rotation via CSS (.float img { transform: rotate(var(--rot)) }). */

  /* ---- PDP gallery: thumbnail strip swaps the main image ---- */
  var gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    var mainImg = gallery.querySelector('[data-gallery-main]');
    var thumbs = [].slice.call(gallery.querySelectorAll('[data-full]'));
    thumbs.forEach(function (t) {
      t.addEventListener('click', function () {
        if (!mainImg) return;
        mainImg.style.opacity = '0';
        setTimeout(function () {
          mainImg.src = t.getAttribute('data-full');
          mainImg.style.opacity = '1';
        }, 130);
        thumbs.forEach(function (x) { x.classList.remove('is-active'); });
        t.classList.add('is-active');
      });
    });
  }

  /* ---- before/after comparison slider (drag) ---- */
  [].slice.call(document.querySelectorAll('[data-ba]')).forEach(function (ba) {
    var range = ba.querySelector('[data-ba-range]');
    function set(p) { ba.style.setProperty('--ba', p + '%'); }
    if (range) {
      set(range.value);
      range.addEventListener('input', function () { set(range.value); });
    }
  });

  /* ---- horizontal carousels (arrow buttons scroll the track) ---- */
  [].slice.call(document.querySelectorAll('[data-carousel]')).forEach(function (c) {
    var track = c.querySelector('[data-carousel-track]');
    if (!track) return;
    var prev = c.querySelector('[data-carousel-prev]');
    var next = c.querySelector('[data-carousel-next]');
    function step() { return Math.max(260, track.clientWidth * 0.8); }
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  });

  /* ---- subscription / one-time price toggle ---- */
  var buyForm = document.querySelector('[data-buy]');
  if (buyForm) {
    var priceEls = [].slice.call(document.querySelectorAll('[data-price-now]'));
    var radios = [].slice.call(buyForm.querySelectorAll('input[name="purchase"]'));
    function syncPrice() {
      var sel = buyForm.querySelector('input[name="purchase"]:checked');
      var p = sel ? sel.getAttribute('data-price') : null;
      if (p) priceEls.forEach(function (el) { el.textContent = p; });
    }
    radios.forEach(function (r) { r.addEventListener('change', syncPrice); });
    syncPrice();
  }

  /* ---- ambient full-bleed videos: force autoplay (some browsers ignore the attr) ---- */
  [].slice.call(document.querySelectorAll('.s-patented video, .s-nutrients video')).forEach(function (v) {
    v.muted = true;
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  });

  /* ---- flavor selector: swap gallery main + active thumb + labels + sticky thumb ---- */
  var flavorBtns = [].slice.call(document.querySelectorAll('[data-flavor]'));
  if (flavorBtns.length) {
    var gMain = document.querySelector('[data-gallery-main]');
    var gThumbs = [].slice.call(document.querySelectorAll('[data-gallery] [data-full]'));
    var flavorOut = document.querySelector('[data-flavor-out]');
    var sbThumb = document.querySelector('[data-stickybar] [data-sb-pack]');
    var sbFlavor = document.querySelector('[data-stickybar] [data-sb-flavor]');
    flavorBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var pack = b.getAttribute('data-pack');
        var name = b.getAttribute('data-flavor');
        if (gMain && pack) { gMain.style.opacity = '0'; setTimeout(function () { gMain.src = pack; gMain.style.opacity = '1'; }, 130); }
        if (gThumbs[0]) { gThumbs[0].setAttribute('data-full', pack); var ti = gThumbs[0].querySelector('img'); if (ti) ti.src = pack; }
        if (flavorOut) flavorOut.innerHTML = name;
        if (sbThumb && pack) sbThumb.src = pack;
        if (sbFlavor) sbFlavor.innerHTML = name;
        flavorBtns.forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
      });
    });
  }

  /* ---- size selector: simple active toggle ---- */
  var sizeBtns = [].slice.call(document.querySelectorAll('[data-size]'));
  sizeBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      sizeBtns.forEach(function (x) { x.classList.remove('is-active'); });
      b.classList.add('is-active');
    });
  });

  /* ---- sticky add-to-cart bar: reveal once the hero buy box scrolls past ---- */
  var bar = document.querySelector('[data-stickybar]');
  var anchor = document.querySelector('[data-buy]');
  if (bar && anchor && 'IntersectionObserver' in window) {
    var bo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { bar.classList.toggle('show', !e.isIntersecting && e.boundingClientRect.top < 0); });
    }, { threshold: 0 });
    bo.observe(anchor);
  }
})();
