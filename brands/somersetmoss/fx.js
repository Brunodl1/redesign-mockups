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

  /* ---- "product in use" carousel (s-howto) ---- */
  [].slice.call(document.querySelectorAll('[data-carousel]')).forEach(function (root) {
    var slides = [].slice.call(root.querySelectorAll('.s-howto__slide'));
    var dots = [].slice.call(root.querySelectorAll('.s-howto__dot'));
    if (slides.length < 2) return;
    var i = 0, timer = null;

    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); });
    }
    function next() { go(i + 1); }
    function start() {
      if (reduce || timer) return;
      timer = setInterval(next, 5000);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    var prev = root.querySelector('.s-howto__nav--prev');
    var nxt = root.querySelector('.s-howto__nav--next');
    if (prev) prev.addEventListener('click', function () { go(i - 1); restart(); });
    if (nxt) nxt.addEventListener('click', function () { go(i + 1); restart(); });
    dots.forEach(function (d, k) {
      d.addEventListener('click', function () { go(k); restart(); });
    });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    go(0);
    start();
  });
})();
