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

  /* ---- mobile nav drawer toggle ---- */
  var toggle = document.getElementById('nav-toggle');
  var drawer = document.getElementById('mobile-nav');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = drawer.getAttribute('aria-hidden') === 'false';
      drawer.setAttribute('aria-hidden', open ? 'true' : 'false');
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        drawer.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
