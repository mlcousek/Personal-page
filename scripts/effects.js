/* ─────────────────────────────────────────────
   effects.js — shared live-animation layer
   · scroll-reveal (IntersectionObserver, works with
     dynamically rendered content via MutationObserver)
   · animated number counters (.stat-value / .training-value)
   · navbar scroll state (.scrolled) via top-of-page sentinel
   · hero parallax (orbs + portrait follow the cursor,
     fine pointers only)
───────────────────────────────────────────── */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

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
        delay = Math.min(siblings.length - 1, 8) * 55;
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
    const dur = 1200;
    const start = performance.now();

    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 4); // ease-out quart
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

  /* ══════════ Ambient backdrop (blobs only — beams rendered on canvas) ══════════ */

  function setupBackdrop() {
    if (document.querySelector('.bg-scene')) return;
    const scene = document.createElement('div');
    scene.className = 'bg-scene';
    scene.setAttribute('aria-hidden', 'true');
    scene.innerHTML =
      '<div class="bg-blob bg-blob--1"></div>' +
      '<div class="bg-blob bg-blob--2"></div>' +
      '<div class="bg-blob bg-blob--3"></div>';
    document.body.prepend(scene);
  }

  /* ══════════ Canvas beam engine ══════════
     Each beam:
       • spawns at a random position on any screen edge, with a random angle
       • has an ORANGE glowing head that travels along its axis
       • the head fades into a GRAY tail that then fades to nothing
       • orange heads never cross each other (checked at spawn)
       • gray tails can cross freely
  ══════════════════════════════ */

  function setupBeams() {
    if (prefersReduced) return;
    if (document.querySelector('.bg-canvas')) return;

    var canvas = document.createElement('canvas');
    canvas.className = 'bg-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.prepend(canvas);

    var ctx = canvas.getContext('2d');
    var W = 0, H = 0;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Fraction of the beam's total length
    var ORANGE_LEN = 0.36;   // size of the orange glowing head (doubled)
    var GRAY_LEN   = 0.80;   // size of the fading gray tail (longer)
    var MAX_BEAMS  = 7;     // max simultaneous beams`
    var SPAWN_GAP  = 350;    // ms minimum between spawns (higher frequency)

    var beams = [];
    var lastSpawn = -Infinity;

    function rand(a, b) { return a + Math.random() * (b - a); }

    function makeBeam() {
      var diag = Math.hypot(W, H);

      var edge = Math.floor(Math.random() * 4);
      var sx, sy, baseAngle;
      switch (edge) {
        case 0: sx = rand(-W*0.1, W*1.1); sy = -60;    baseAngle = Math.PI/2;  break; // top → down
        case 1: sx = rand(-W*0.1, W*1.1); sy = H+60;   baseAngle = -Math.PI/2; break; // bottom → up
        case 2: sx = -60;   sy = rand(-H*0.1, H*1.1);  baseAngle = 0;          break; // left → right
        default: sx = W+60; sy = rand(-H*0.1, H*1.1);  baseAngle = Math.PI;    break; // right → left
      }

      var startAngle = baseAngle + rand(-65, 65) * Math.PI / 180;

      // 50 % straight, 50 % 1–3 sharp turns (each ≥ 35°)
      var numTurns = Math.random() < 0.5 ? 0 : Math.floor(rand(1, 4));

      // Each leg gets its own full-diagonal length so turns never shorten the
      // visible path enough to end mid-screen.
      var legLen = rand(1.5, 2.1) * diag;

      // Build waypoints
      var pts = [{ x: sx, y: sy }];
      var cx = sx, cy = sy, curAngle = startAngle;

      if (numTurns === 0) {
        pts.push({ x: cx + Math.cos(curAngle) * legLen, y: cy + Math.sin(curAngle) * legLen });
      } else {
        for (var t = 0; t <= numTurns; t++) {
          cx += Math.cos(curAngle) * legLen;
          cy += Math.sin(curAngle) * legLen;
          pts.push({ x: cx, y: cy });
          if (t < numTurns) {
            var turn = rand(35, 120) * Math.PI / 180;
            curAngle += (Math.random() < 0.5 ? turn : -turn);
          }
        }
      }

      // Convert waypoints → segment objects with cumulative distances
      var segs = [];
      var cumLen = 0;
      for (var i = 0; i < pts.length - 1; i++) {
        var dx = pts[i+1].x - pts[i].x;
        var dy = pts[i+1].y - pts[i].y;
        var sLen = Math.sqrt(dx*dx + dy*dy);
        segs.push({
          x1: pts[i].x, y1: pts[i].y,
          x2: pts[i+1].x, y2: pts[i+1].y,
          len: sLen,
          cumStart: cumLen
        });
        cumLen += sLen;
      }

      return {
        segs: segs,
        totalLen: cumLen,
        progress: 0,            // fraction 0 → 1 + ORANGE_LEN + GRAY_LEN
        speed: rand(0.00008, 0.00012) 
      };
    }

    // World position at fraction t along the polyline (clamped to [0,1])
    function posAt(b, t) {
      var dist = Math.max(0, Math.min(t, 1)) * b.totalLen;
      for (var i = 0; i < b.segs.length; i++) {
        var seg = b.segs[i];
        if (dist <= seg.cumStart + seg.len || i === b.segs.length - 1) {
          var lt = seg.len > 0 ? Math.max(0, Math.min(1, (dist - seg.cumStart) / seg.len)) : 0;
          return { x: seg.x1 + (seg.x2 - seg.x1) * lt, y: seg.y1 + (seg.y2 - seg.y1) * lt };
        }
      }
      var last = b.segs[b.segs.length - 1];
      return { x: last.x2, y: last.y2 };
    }

    // Draw fraction [t1, t2] of beam's polyline, segment-by-segment,
    // with a per-sub-segment gradient built from colorFn(frac ∈ [0,1]).
    function drawPolyPart(b, t1, t2, colorFn, lineWidth) {
      var d1 = Math.max(0, t1) * b.totalLen;
      var d2 = Math.min(t2, 1)  * b.totalLen;
      if (d2 <= d1) return;
      var range = d2 - d1;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      for (var i = 0; i < b.segs.length; i++) {
        var seg = b.segs[i];
        var sEnd = seg.cumStart + seg.len;
        if (sEnd <= d1 || seg.cumStart >= d2) continue;
        var dA = Math.max(d1, seg.cumStart);
        var dB = Math.min(d2, sEnd);
        var lA = seg.len > 0 ? (dA - seg.cumStart) / seg.len : 0;
        var lB = seg.len > 0 ? (dB - seg.cumStart) / seg.len : 1;
        var xa = seg.x1 + (seg.x2 - seg.x1) * lA, ya = seg.y1 + (seg.y2 - seg.y1) * lA;
        var xb = seg.x1 + (seg.x2 - seg.x1) * lB, yb = seg.y1 + (seg.y2 - seg.y1) * lB;
        var fracA = (dA - d1) / range;
        var fracB = (dB - d1) / range;
        var g = ctx.createLinearGradient(xa, ya, xb, yb);
        g.addColorStop(0, colorFn(fracA));
        g.addColorStop(1, colorFn(fracB));
        ctx.beginPath(); ctx.moveTo(xa, ya); ctx.lineTo(xb, yb);
        ctx.strokeStyle = g; ctx.stroke();
      }
    }

    // Get the world-space orange-head segment of a beam (for collision check)
    function orangeSeg(b) {
      var p2 = b.progress;
      var p1 = Math.max(0, p2 - ORANGE_LEN);
      var pt1 = posAt(b, p1), pt2 = posAt(b, p2);
      return { x1: pt1.x, y1: pt1.y, x2: pt2.x, y2: pt2.y };
    }

    // Segment-segment intersection test
    function segsIntersect(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
      var dax = ax2 - ax1, day = ay2 - ay1;
      var dbx = bx2 - bx1, dby = by2 - by1;
      var cross = dax * dby - day * dbx;
      if (Math.abs(cross) < 0.5) return false;
      var t = ((bx1 - ax1) * dby - (by1 - ay1) * dbx) / cross;
      var u = ((bx1 - ax1) * day - (by1 - ay1) * dax) / cross;
      return t > 0.05 && t < 0.95 && u > 0.05 && u < 0.95;
    }

    function orangeWouldCross(b) {
      var s = orangeSeg(b);
      for (var i = 0; i < beams.length; i++) {
        var os = orangeSeg(beams[i]);
        if (segsIntersect(s.x1, s.y1, s.x2, s.y2, os.x1, os.y1, os.x2, os.y2)) {
          return true;
        }
      }
      return false;
    }

    function trySpawn(now) {
      if (now - lastSpawn < SPAWN_GAP) return;
      if (beams.length >= MAX_BEAMS) return;
      for (var attempt = 0; attempt < 12; attempt++) {
        var b = makeBeam();
        if (!orangeWouldCross(b)) {
          beams.push(b);
          lastSpawn = now;
          return;
        }
      }
      beams.push(makeBeam());
      lastSpawn = now;
    }

    function drawBeam(b, dt) {
      b.progress += b.speed * dt;
      var p = b.progress;

      var oEnd   = p;
      var oStart = Math.max(0, p - ORANGE_LEN);
      var gEnd   = oStart;
      var gStart = Math.max(0, p - ORANGE_LEN - GRAY_LEN);

      ctx.save();

      // — Gray fading tail —
      if (gEnd > gStart) {
        drawPolyPart(b, gStart, gEnd, function(frac) {
          var a = (frac * 0.28).toFixed(3);
          return 'rgba(155,163,175,' + a + ')';
        }, 1);
      }

      // — Orange glowing head: glow pass then crisp core —
      if (oEnd > 0 && oStart < 1) {
        // Outer glow (wide, soft)
        drawPolyPart(b, oStart, oEnd, function(frac) {
          var a = (frac * 0.22).toFixed(3);
          return 'rgba(252,100,0,' + a + ')';
        }, 7);
        // Core line
        drawPolyPart(b, oStart, oEnd, function(frac) {
          // interpolate orange → bright white-yellow at tip
          var r = Math.round(252 + frac * 3);
          var g = Math.round(82  + frac * 138);
          var gb = Math.round(0   + frac * 150);
          var a = (0.05 + frac * 0.95).toFixed(3);
          return 'rgba(' + r + ',' + g + ',' + gb + ',' + a + ')';
        }, 1.5);
      }

      ctx.restore();

      return p > 1 + ORANGE_LEN + GRAY_LEN;
    }

    var lastFrame = 0;

    function loop(now) {
      var dt = Math.min(50, now - lastFrame);
      lastFrame = now;

      ctx.clearRect(0, 0, W, H);

      trySpawn(now);

      for (var i = beams.length - 1; i >= 0; i--) {
        if (drawBeam(beams[i], dt)) beams.splice(i, 1);
      }

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  }

  /* ══════════ Navbar scroll state (sentinel, no scroll listener) ══════════ */

  function setupNavState() {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:32px;pointer-events:none;';
    document.body.prepend(sentinel);

    function applyState(scrolled) {
      const nav = document.querySelector('.navbar');
      if (nav) nav.classList.toggle('scrolled', scrolled);
    }

    if ('IntersectionObserver' in window) {
      let lastScrolled = window.scrollY > 24;
      applyState(lastScrolled);
      const navIO = new IntersectionObserver(function (entries) {
        lastScrolled = !entries[0].isIntersecting;
        applyState(lastScrolled);
      });
      navIO.observe(sentinel);
      // navbar is fetch-injected after load — re-apply once it exists
      const navMO = new MutationObserver(function () {
        if (document.querySelector('.navbar')) {
          applyState(lastScrolled);
          navMO.disconnect();
        }
      });
      navMO.observe(document.body, { childList: true, subtree: true });
    } else {
      applyState(window.scrollY > 24);
    }
  }

  /* ══════════ Hero parallax ══════════ */

  function setupParallax() {
    if (prefersReduced || !finePointer) return;
    const hero = document.querySelector('.hero-fullscreen');
    if (!hero) return;
    const orbs = hero.querySelectorAll('.hero-orb');
    const portrait = hero.querySelector('.hero-portrait');

    hero.addEventListener('mousemove', function (e) {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      orbs.forEach(function (orb, i) {
        const depth = (i + 1) * 12;
        orb.style.transform = 'translate3d(' + (x * depth) + 'px,' + (y * depth) + 'px,0)';
      });
      if (portrait) {
        portrait.style.transform =
          'perspective(900px) rotateY(' + (x * 5) + 'deg) rotateX(' + (-y * 5) + 'deg)';
      }
    });

    hero.addEventListener('mouseleave', function () {
      orbs.forEach(function (orb) { orb.style.transform = ''; });
      if (portrait) portrait.style.transform = '';
    });
  }

  /* ══════════ Boot ══════════ */

  function init() {
    setupBackdrop();
    setupBeams();
    prepareReveals(document.body);
    prepareCounters(document.body);
    mo.observe(document.body, { childList: true, subtree: true });
    setupNavState();
    setupParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
