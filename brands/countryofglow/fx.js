/* redesign-mockup motion — dependency-free.
   scroll-reveal: elements with .reveal rise + fade + un-rotateX into place as they
   enter the viewport (all devices). Siblings stagger. Respects prefers-reduced-motion.
   PDP gallery: thumb radios swap the main image (JS, since the CSS sibling selector
   can't reach the nested .gallery-main).
   (Floating .float elements are intentionally STATIC — no parallax/bob.) */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---- PDP gallery swap ---- */
  var radios = [].slice.call(document.querySelectorAll('.gallery-radio'));
  if (radios.length) {
    var imgs = [].slice.call(document.querySelectorAll('.gallery-main img'));
    var sync = function () {
      var on = document.querySelector('.gallery-radio:checked');
      var key = on ? on.id.replace('img-', '') : 'duo';
      imgs.forEach(function (im) {
        im.style.display = im.classList.contains('gimg-' + key) ? 'block' : 'none';
      });
    };
    radios.forEach(function (r) { r.addEventListener('change', sync); });
    sync();
  }

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
      /* safety net: on long pages / capture, force-reveal anything still hidden
         shortly after load so no section can stay permanently blank. */
      window.addEventListener('load', function () {
        setTimeout(function () {
          reveals.forEach(function (el) { el.classList.add('in'); });
        }, 1400);
      });
    }
  }

  /* floating elements are STATIC (Bruno's preference) — no parallax, no bob. */
})();
