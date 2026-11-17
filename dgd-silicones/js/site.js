(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- header + menu ---------- */
  var top = $('#top'), burger = $('.top__burger'), menu = $('#menu');
  function stuck() { top.classList.toggle('is-stuck', window.scrollY > 8); }
  stuck(); window.addEventListener('scroll', stuck, { passive: true });
  function setMenu(open) { menu.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', String(open)); }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); burger.focus(); } });

  /* ---------- hero specimen: a silicone cross-section that morphs and yields to the pointer ---------- */
  (function () {
    var svg = $('.spec__svg'); if (!svg) return;
    var N = 150, C = 300, TAU = Math.PI * 2;
    var names = ['O-ring', 'Profil', 'Conta', 'Tüp'];
    function polar(fn) { var p = []; for (var i = 0; i < N; i++) { var a = -Math.PI / 2 + TAU * i / N, r = fn(a); p.push([C + Math.cos(a) * r, C + Math.sin(a) * r]); } return p; }
    function sgnpow(v, e) { return (v < 0 ? -1 : 1) * Math.pow(Math.abs(v), e); }
    var shapes = [
      { w: 36, p: polar(function () { return 205; }) },
      { w: 58, p: polar(function (a) { var s = Math.PI / 3, m = ((a % s) + s) % s; return Math.min(186 / Math.cos(m - s / 2), 205); }) },
      { w: 44, p: (function () { var p = []; for (var i = 0; i < N; i++) { var a = -Math.PI / 2 + TAU * i / N; p.push([C + 226 * sgnpow(Math.cos(a), 0.4), C + 158 * sgnpow(Math.sin(a), 0.4)]); } return p; })() },
      { w: 98, p: polar(function () { return 128; }) }
    ];
    var layers = [['#s-shadow', 1], ['#s-body', 1], ['#s-edge', 0.74], ['#s-core', 0.6], ['#s-teal', 0.3], ['#s-hi', 0.15], ['#s-hi2', 0.06]]
      .map(function (l) { return { el: $(l[0]), k: l[1] }; });
    var nameEl = $('#spec-name'), tabs = $$('.spec__tabs button');
    var cur = 0, from = 0, t = 1, pts = shapes[0].p.map(function (p) { return { x: p[0], y: p[1], vx: 0, vy: 0 }; });
    var pointer = null, visible = true, auto = true, clock = 0, raf = 0, timer = 0;

    function ease(u) { return u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2; }
    function draw(w) {
      var d = '', n = pts.length;
      for (var i = 0; i < n; i++) {
        var a = pts[i], b = pts[(i + 1) % n], mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        d += (i === 0 ? 'M' + mx.toFixed(1) + ' ' + my.toFixed(1) : '') + 'Q' + b.x.toFixed(1) + ' ' + b.y.toFixed(1) + ' ' + ((b.x + pts[(i + 2) % n].x) / 2).toFixed(1) + ' ' + ((b.y + pts[(i + 2) % n].y) / 2).toFixed(1);
      }
      d += 'Z';
      layers.forEach(function (l) { l.el.setAttribute('d', d); l.el.setAttribute('stroke-width', (w * l.k).toFixed(1)); });
    }
    function target(i, e) { var A = shapes[from].p[i], B = shapes[cur].p[i]; return [A[0] + (B[0] - A[0]) * e, A[1] + (B[1] - A[1]) * e]; }
    function still() { var w = shapes[cur].w; pts.forEach(function (p, i) { p.x = shapes[cur].p[i][0]; p.y = shapes[cur].p[i][1]; }); draw(w); }
    function frame() {
      raf = 0; if (!visible) return;
      clock += 0.016; if (t < 1) t = Math.min(1, t + 0.016 / 1.1);
      var e = ease(t), w = shapes[from].w + (shapes[cur].w - shapes[from].w) * e;
      for (var i = 0; i < N; i++) {
        var p = pts[i], g = target(i, e), a = TAU * i / N;
        var breathe = Math.sin(a * 2 + clock * 0.9) * 1.2, dx = g[0] - C, dy = g[1] - C, len = Math.sqrt(dx * dx + dy * dy) || 1;
        var tx = g[0] + dx / len * breathe, ty = g[1] + dy / len * breathe;
        if (pointer) {
          var px = p.x - pointer[0], py = p.y - pointer[1], dist = Math.sqrt(px * px + py * py) || 1, R = 150;
          if (dist < R) { var f = Math.pow(1 - dist / R, 2) * 46; tx += px / dist * f; ty += py / dist * f; }
        }
        p.vx = (p.vx + (tx - p.x) * 0.11) * 0.8; p.vy = (p.vy + (ty - p.y) * 0.11) * 0.8;
        p.x += p.vx; p.y += p.vy;
      }
      draw(w); raf = requestAnimationFrame(frame);
    }
    function kick() { if (!reduce && !raf && visible) raf = requestAnimationFrame(frame); }
    function setShape(i) {
      if (i === cur) return;
      from = cur; cur = i; t = 0;
      nameEl.textContent = names[i];
      tabs.forEach(function (b, k) { b.setAttribute('aria-pressed', String(k === i)); });
      if (reduce) still(); else kick();
    }
    tabs.forEach(function (b, k) { b.addEventListener('click', function () { auto = false; clearInterval(timer); setShape(k); }); });
    svg.addEventListener('pointermove', function (e) {
      var r = svg.getBoundingClientRect(); pointer = [(e.clientX - r.left) / r.width * 600, (e.clientY - r.top) / r.height * 600];
    });
    svg.addEventListener('pointerleave', function () { pointer = null; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; kick(); }).observe(svg);
    }
    still();
    if (!reduce) { kick(); timer = setInterval(function () { if (auto && visible && !pointer) setShape((cur + 1) % shapes.length); }, 4200); }
  })();

  /* ---------- applications ---------- */
  (function () {
    var items = $$('#apps-list .app'), views = $$('#apps-bg img'); if (!items.length) return;
    var desktop = window.matchMedia('(min-width: 901px)');
    function show(i) {
      items.forEach(function (li, k) { var on = k === i; li.classList.toggle('is-on', on); $('.app__btn', li).setAttribute('aria-expanded', String(on)); });
      views.forEach(function (im, k) { im.classList.toggle('is-on', k === i); });
    }
    items.forEach(function (li, i) {
      $('.app__btn', li).addEventListener('click', function () {
        if (li.classList.contains('is-on')) return;
        show(i);
        if (!desktop.matches) requestAnimationFrame(function () { window.scrollTo({ top: li.getBoundingClientRect().top + window.scrollY - 84, behavior: reduce ? 'auto' : 'smooth' }); });
      });
    });
  })();

  /* ---------- reveal ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    $$('.sec-head, .fam, .cons__intro, .cons__list li, .cat__in, .contact__info, .form').forEach(function (el, i) {
      el.classList.add('rv'); el.style.transitionDelay = (el.matches('.fam, .cons__list li') ? (i % 3) * 80 : 0) + 'ms'; io.observe(el);
    });
  }

  /* ---------- catalogue (PDF is attached when the site goes live) ---------- */
  var catBtn = $('#cat-btn'), catNote = $('#cat-note');
  if (catBtn) catBtn.addEventListener('click', function (e) { e.preventDefault(); catNote.hidden = false; });

  /* ---------- form: validation + honest states; FORM_ENDPOINT is set at integration ---------- */
  (function () {
    var form = $('#form'); if (!form) return;
    var FORM_ENDPOINT = '';
    var state = $('#form-state'), submit = $('button[type="submit"]', form);
    var rules = { ad: 'Adınızı yazın.', eposta: 'Geçerli bir e-posta adresi yazın.', mesaj: 'Uygulamanızı birkaç cümleyle anlatın.' };
    function check(name) {
      var el = form.elements[name], err = $('#e-' + name), v = el.value.trim();
      var ok = name === 'eposta' ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) : v.length > 1;
      el.setAttribute('aria-invalid', String(!ok)); err.textContent = ok ? '' : rules[name];
      if (!ok) el.setAttribute('aria-describedby', 'e-' + name); else el.removeAttribute('aria-describedby');
      return ok;
    }
    Object.keys(rules).forEach(function (n) { form.elements[n].addEventListener('blur', function () { if (form.elements[n].value || form.elements[n].getAttribute('aria-invalid')) check(n); }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Object.keys(rules).filter(function (n) { return !check(n); });
      if (bad.length) { state.textContent = 'Eksik alanları tamamlayın.'; form.elements[bad[0]].focus(); return; }
      if (!FORM_ENDPOINT) { state.textContent = 'Önizleme sürümü: form henüz e-posta servisine bağlanmadı, mesajınız gönderilmedi. Bize telefonla ya da info@dgdsilicones.com adresinden ulaşabilirsiniz.'; return; }
      submit.disabled = true; state.textContent = 'Gönderiliyor…';
      fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) })
        .then(function (r) { if (!r.ok) throw new Error(); form.reset(); state.textContent = 'Mesajınız ulaştı. En kısa sürede dönüş yapacağız.'; })
        .catch(function () { state.textContent = 'Gönderilemedi. Lütfen tekrar deneyin ya da info@dgdsilicones.com adresine yazın.'; })
        .then(function () { submit.disabled = false; });
    });
  })();
})();
