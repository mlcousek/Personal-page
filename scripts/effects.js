/* ─────────────────────────────────────────────
   effects.js — shared live-animation layer
   · scroll-reveal (IntersectionObserver, works with
     dynamically rendered content via MutationObserver)
   · animated number counters (.stat-value / .training-value)
   · navbar scroll state (.scrolled)
   · hero parallax (orbs + portrait follow the cursor)
───────────────────────────────────────────── */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ══════════ Scroll reveal ══════════ */

  const REVEAL_SELECTORS = [
    '.post-card', '.stat-card', '.training-stat-card', '.podcast', '.video',
    '.book', '.cert-card', '.skills-col', '.timeline-node', '.date-group',
    '.about-section > .section-heading', '.sports-section-heading',
    '.about-hero-text', '.about-hero-photo', '.story-body p',
    '.table-wrap', '.football-card', '.weekly-chart-wrap',
    '.blog-header', '.sports-header', '.page-hero', '.media-page-header',
    '.all-posts-list li', '.home-blog-header', '.filter-bar', '.media-controls'
  ].join(',');

  let io = null;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  }

  function prepareReveals(root) {
    if (!io) return;
    const nodes = (root.matches && root.matches(REVEAL_SELECTORS)) ? [root] : [];
    if (root.querySelectorAll) {
      root.querySelectorAll(REVEAL_SELECTORS).forEach(function (el) { nodes.push(el); });
    }
    nodes.forEach(function (el) {
      if (el.dataset.revealed) return;
      el.dataset.revealed = '1';
      // stagger siblings of the same kind inside one parent
      let delay = 0;
      if (el.parentElement) {
        const siblings = Array.prototype.filter.call(
          el.parentElement.children,
          function (s) { return s.dataset && s.dataset.revealed; }
        );
        delay = Math.min(siblings.length - 1, 10) * 55;
      }
      el.style.setProperty('--reveal-delay', delay + 'ms');
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ══════════ Animated counters ══════════ */

  let counterIO = null;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
  }

  function runCounter(el) {
    const original = el.dataset.countTarget;
    // skip clock-style values like 2:57:24 — they don't interpolate well
    if (!original || original.indexOf(':') !== -1) return;
    const match = original.match(/(-?\d[\d\s]*(?:[.,]\d+)?)/);
    if (!match) return;
    const numStr = match[1].replace(/\s/g, '');
    const target = parseFloat(numStr.replace(',', '.'));
    if (isNaN(target)) return;
    const decimals = (numStr.split(/[.,]/)[1] || '').length;
    const prefix = original.slice(0, match.index);
    const suffix = original.slice(match.index + match[1].length);
    const dur = 1400;
    const start = performance.now();

    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const val = (target * eased).toFixed(decimals).replace('.', decimals ? ',' : '.');
      el.textContent = prefix + (decimals ? val.replace(',', '.') : Math.round(target * eased)) + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = original;
    }
    requestAnimationFrame(frame);
  }

  function prepareCounters(root) {
    if (!counterIO || !root.querySelectorAll) return;
    root.querySelectorAll('.stat-value, .training-value').forEach(function (el) {
      if (el.dataset.countTarget) return;
      el.dataset.countTarget = el.textContent.trim();
      counterIO.observe(el);
    });
  }

  /* ══════════ Re-scan when feature scripts render ══════════ */

  let scanScheduled = false;
  function scheduleScan() {
    if (scanScheduled) return;
    scanScheduled = true;
    requestAnimationFrame(function () {
      scanScheduled = false;
      prepareReveals(document.body);
      prepareCounters(document.body);
    });
  }

  const mo = new MutationObserver(scheduleScan);

  /* ══════════ Navbar scroll state ══════════ */

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      const nav = document.querySelector('.navbar');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
    });
  }

  /* ══════════ Hero parallax ══════════ */

  function setupParallax() {
    if (prefersReduced) return;
    const hero = document.querySelector('.hero-fullscreen');
    if (!hero) return;
    const orbs = hero.querySelectorAll('.hero-orb');
    const portrait = hero.querySelector('.hero-portrait');

    hero.addEventListener('mousemove', function (e) {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      orbs.forEach(function (orb, i) {
        const depth = (i + 1) * 14;
        orb.style.transform = 'translate3d(' + (x * depth) + 'px,' + (y * depth) + 'px,0)';
      });
      if (portrait) {
        portrait.style.transform =
          'perspective(900px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)';
      }
    });

    hero.addEventListener('mouseleave', function () {
      orbs.forEach(function (orb) { orb.style.transform = ''; });
      if (portrait) portrait.style.transform = '';
    });
  }

  /* ══════════ Boot ══════════ */

  function init() {
    prepareReveals(document.body);
    prepareCounters(document.body);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    setupParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
