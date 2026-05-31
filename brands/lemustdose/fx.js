/* redesign-mockup motion — dependency-free.
   1) scroll-reveal: elements with .reveal rise + fade + un-rotateX into place
      as they enter the viewport (all devices). Siblings stagger.
   2) float parallax: elements with .float[data-speed] drift as you scroll
      (desktop only). Pairs with the .float / @keyframes bob CSS.
   Respects prefers-reduced-motion. */
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

  /* ---- float parallax (desktop only) ---- */
  if (reduce || window.matchMedia('(max-width:1000px)').matches) return;
  var floats = [].slice.call(document.querySelectorAll('.float'));
  if (!floats.length) return;
  function base() {
    var sy = window.pageYOffset || 0;
    floats.forEach(function (f) {
      var r = f.getBoundingClientRect();
      f._b = r.top + r.height / 2 + sy;
    });
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  var ticking = false;
  function update() {
    var sy = window.pageYOffset || 0, vh = window.innerHeight;
    floats.forEach(function (f) {
      var rel = clamp((f._b - sy - vh / 2) / vh, -1.3, 1.3);
      var sp = parseFloat(f.getAttribute('data-speed')) || 40;
      f.style.transform = 'translateY(' + (rel * sp).toFixed(1) + 'px)';
    });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', function () { base(); update(); });
  base(); update();
})();
