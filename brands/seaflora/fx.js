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
      /* Bulletproof: synchronously reveal anything already in/above the viewport on
         load (covers slow-JS, prerender, and tall headless screenshot captures so no
         section can render blank). The observer still handles the rest on scroll. */
      var revealInView = function () {
        var vh = window.innerHeight || document.documentElement.clientHeight;
        reveals.forEach(function (el) {
          if (el.classList.contains('in')) return;
          if (el.getBoundingClientRect().top < vh * 0.98) {
            el.classList.add('in'); io.unobserve(el);
          }
        });
      };
      revealInView();
      window.addEventListener('load', revealInView);
    }
  }

  /* floating elements are STATIC (Bruno's preference) — no parallax, no bob.
     They keep a fixed rotation via CSS (.float img { transform: rotate(var(--rot)) }). */
})();
