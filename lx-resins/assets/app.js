/* LX Resins — rendering, routing, language switch and forms.
   Texts live in content.js, styles in site.css. Views are plain functions that return HTML. */
(function () {
  'use strict';
  const { ui, props, sectors, products, families } = window.LX;
  const LANGS = ['en', 'de', 'tr'];
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };
  const initialLang = () => {
    const saved = store.get('lx-lang');
    if (LANGS.includes(saved)) return saved;
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : 'en';
  };
  const state = { lang: initialLang(), filter: 'all', interest: '', subject: '', menu: false, forms: {}, done: {} };

  /* ---------- helpers ---------- */
  const L = (o) => (o && typeof o === 'object' && 'en' in o ? o[state.lang] : o);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const num = (x, d) => { const s = x.toFixed(d); return state.lang === 'en' ? s : s.replace('.', ','); };
  const range = (v) => `${num(v[0], v[2])}–${num(v[1], v[2])} ${v[3]}`;
  const sectorById = (id) => sectors.find((s) => s.id === id);
  const productById = (id) => products.find((p) => p.id === id);
  const inSector = (id) => ({ products: products.filter((p) => p.sectors.includes(id)), families: families.filter((f) => f.sectors.includes(id)) });
  const pname = (name) => { const [a, b] = Array.isArray(name) ? name : name.split(' '); return `<span class="pname" lang="en"><b>${a}</b> <span>${b}</span></span>`; };
  const plain = (name) => (Array.isArray(name) ? name.join(' ') : name);
  const img = (base, widths, w, h, alt, sizes, extra) =>
    `<img src="assets/img/${base}-${widths[0]}.webp" srcset="${widths.map((x) => `assets/img/${base}-${x}.webp ${x}w`).join(', ')}" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}" decoding="async" ${extra || 'loading="lazy"'}>`;
  const part = (p, sizes, extra) => img('part-' + p.image, [520, 1000], 1000, 1000, L(p.alt), sizes, extra);
  const chev = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
  const h2 = (o, cls) => `<h2 class="${cls || 'h-2'}"><span class="a">${L(o.a)}</span> <span class="b">${L(o.b)}</span></h2>`;
  const h1 = (a, b, cls) => `<h1 class="${cls || 'h-1'}"><span class="a">${a}</span> <span class="b">${b}</span></h1>`;

  const logo = () => `<svg viewBox="10 11 372 60" role="img" aria-label="LX Resins"><polygon class="l" points="10,11 23,11 23,58 53,58 53,71 10,71"/><g class="k"><polygon points="60,11 77,11 95,32 113,11 130,11 104,41 130,71 113,71 95,50 77,71 60,71 86,41"/><polygon points="141,11 154,11 154,71 141,71"/><polygon points="154,11 176,11 190,23 190,38 176,50 154,50 154,37 170,37 176,32 176,29 170,24 154,24"/><polygon points="161,47 178,47 198,71 181,71"/><g transform="translate(219 51) scale(0.01318359375 -0.01318359375)"><path d="M188 1493H573V291H1249V0H188Z"/><path transform="translate(1335.34,0)" d="M1020 762 1538 0H1137L788 510L442 0H39L557 762L59 1493H461L788 1012L1114 1493H1518Z"/><path transform="translate(2944.68,0)" d="M111 735H739V444H111Z"/><path transform="translate(3825.02,0)" d="M735 831Q856 831 908.5 876.0Q961 921 961 1024Q961 1126 908.5 1170.0Q856 1214 735 1214H573V831ZM573 565V0H188V1493H776Q1071 1493 1208.5 1394.0Q1346 1295 1346 1081Q1346 933 1274.5 838.0Q1203 743 1059 698Q1138 680 1200.5 616.5Q1263 553 1327 424L1536 0H1126L944 371Q889 483 832.5 524.0Q776 565 682 565Z"/><path transform="translate(5432.36,0)" d="M188 1493H1227V1202H573V924H1188V633H573V291H1249V0H188Z"/><path transform="translate(6861.70,0)" d="M1227 1446V1130Q1104 1185 987.0 1213.0Q870 1241 766 1241Q628 1241 562.0 1203.0Q496 1165 496 1085Q496 1025 540.5 991.5Q585 958 702 934L866 901Q1115 851 1220.0 749.0Q1325 647 1325 459Q1325 212 1178.5 91.5Q1032 -29 731 -29Q589 -29 446.0 -2.0Q303 25 160 78V403Q303 327 436.5 288.5Q570 250 694 250Q820 250 887.0 292.0Q954 334 954 412Q954 482 908.5 520.0Q863 558 727 588L578 621Q354 669 250.5 774.0Q147 879 147 1057Q147 1280 291.0 1400.0Q435 1520 705 1520Q828 1520 958.0 1501.5Q1088 1483 1227 1446Z"/><path transform="translate(8367.04,0)" d="M188 1493H573V0H188Z"/><path transform="translate(9159.39,0)" d="M188 1493H618L1161 469V1493H1526V0H1096L553 1024V0H188Z"/><path transform="translate(10903.73,0)" d="M1227 1446V1130Q1104 1185 987.0 1213.0Q870 1241 766 1241Q628 1241 562.0 1203.0Q496 1165 496 1085Q496 1025 540.5 991.5Q585 958 702 934L866 901Q1115 851 1220.0 749.0Q1325 647 1325 459Q1325 212 1178.5 91.5Q1032 -29 731 -29Q589 -29 446.0 -2.0Q303 25 160 78V403Q303 327 436.5 288.5Q570 250 694 250Q820 250 887.0 292.0Q954 334 954 412Q954 482 908.5 520.0Q863 558 727 588L578 621Q354 669 250.5 774.0Q147 879 147 1057Q147 1280 291.0 1400.0Q435 1520 705 1520Q828 1520 958.0 1501.5Q1088 1483 1227 1446Z"/></g></g></svg>`;

  /* ---------- routing ---------- */
  const routeId = () => (location.hash || '#home').slice(1) || 'home';
  const routeKind = (id) => {
    if (['home', 'products', 'industries', 'about', 'contact', 'partners'].includes(id)) return id;
    if (sectorById(id)) return 'sector';
    if (productById(id)) return 'product';
    return 'missing';
  };
  const navSection = (id) => {
    const k = routeKind(id);
    return k === 'product' ? 'products' : k === 'sector' ? 'industries' : k;
  };

  /* ---------- shared blocks ---------- */
  const langButtons = () => `<div class="langs" role="group" aria-label="${L(ui.language)}">${LANGS.map((l) =>
    `<button type="button" data-lang="${l}" aria-pressed="${l === state.lang}" lang="${l}">${l.toUpperCase()}</button>`).join('')}</div>`;

  const header = (id) => {
    const sec = navSection(id);
    const cur = (k) => (sec === k ? ' aria-current="page"' : '');
    return `<div class="wrap hdr__in">
      <a class="logo" href="#home" aria-label="LX Resins, ${L(ui.home)}">${logo()}</a>
      <nav class="nav" aria-label="${L(ui.menu)}">
        <div class="nav__item"><a class="nav__link" href="#products"${cur('products')}>${L(ui.nav.products)}</a></div>
        <div class="nav__item"><a class="nav__link" href="#industries"${cur('industries')}>${L(ui.nav.industries)}</a>
          <div class="sub">${sectors.map((s) => `<a href="#${s.id}" style="--accent:${s.accent}"><i class="dot"></i>${L(s.name)}</a>`).join('')}</div></div>
        <div class="nav__item"><a class="nav__link" href="#about"${cur('about')}>${L(ui.nav.about)}</a></div>
        <div class="nav__item"><a class="nav__link" href="#partners"${cur('partners')}>${L(ui.nav.partners)}</a></div>
      </nav>
      ${langButtons()}
      <a class="btn btn--sm" href="#contact">${L(ui.nav.contact)}</a>
      <button type="button" class="menu-btn" data-menu="open" aria-expanded="false" aria-controls="mm" aria-label="${L(ui.menu)}"><span></span></button>
    </div>`;
  };

  const mobileMenu = (id) => {
    const sec = navSection(id);
    const cur = (k) => (sec === k ? ' aria-current="page"' : '');
    return `<div class="wrap mm__top"><a class="logo" href="#home" aria-label="LX Resins, ${L(ui.home)}">${logo()}</a>
        <button type="button" class="mm__close" data-menu="close" aria-label="${L(ui.close)}"></button></div>
      <nav class="wrap" aria-label="${L(ui.menu)}"><ul class="mm__list">
        <li><a href="#products"${cur('products')}>${L(ui.nav.products)}</a></li>
        <li><a href="#industries"${cur('industries')}>${L(ui.nav.industries)}</a></li>
        <li class="mm__sub">${sectors.map((s) => `<a href="#${s.id}" style="--accent:${s.accent}"><i class="dot"></i>${L(s.name)}</a>`).join('')}</li>
        <li><a href="#about"${cur('about')}>${L(ui.nav.about)}</a></li>
        <li><a href="#partners"${cur('partners')}>${L(ui.nav.partners)}</a></li>
        <li><a href="#contact"${cur('contact')}>${L(ui.nav.contact)}</a></li>
      </ul></nav>
      <div class="wrap mm__foot">${langButtons()}<a class="btn" href="#contact">${L(ui.cta.b1)}</a></div>`;
  };

  const closing = (withCall) => `<section class="on-dark">
    ${withCall ? `<div class="wrap band"><div class="close">
      <h2 class="h-1"><span class="a">${L(ui.cta.a)}</span> <span class="b">${L(ui.cta.b)}</span></h2>
      <div><p>${L(ui.cta.p)}</p><div class="actions"><a class="btn" href="#contact">${L(ui.cta.b1)}</a><a class="link" href="#partners">${L(ui.cta.b2)}</a></div></div>
    </div></div>` : ''}
    <footer class="wrap ftr${withCall ? '' : ' ftr--solo'}"><div class="ftr__grid">
      <div class="ftr__brand"><a class="logo" href="#home" aria-label="LX Resins, ${L(ui.home)}">${logo()}</a><p class="ftr__tag" lang="en">${ui.footer.tagline}</p></div>
      <div><h2>${L(ui.nav.products)}</h2><ul>${products.map((p) => `<li><a href="#${p.id}" lang="en">${plain(p.name)}</a></li>`).join('')}</ul></div>
      <div><h2>${L(ui.nav.industries)}</h2><ul>${sectors.map((s) => `<li><a href="#${s.id}">${L(s.name)}</a></li>`).join('')}</ul></div>
      <div><h2>${L(ui.footer.company)}</h2><ul><li><a href="#about">${L(ui.nav.about)}</a></li><li><a href="#partners">${L(ui.nav.partners)}</a></li><li><a href="#contact">${L(ui.nav.contact)}</a></li></ul></div>
    </div>
    <div class="ftr__base"><p class="ftr__note">${L(ui.footer.note)}</p><p>© 2026 LX Resins. ${L(ui.footer.rights)}.</p></div></footer>
  </section>`;

  const crumbs = (items) => `<nav class="wrap" aria-label="Breadcrumb"><ol class="crumbs">${items.map((it, i) =>
    `<li>${i < items.length - 1 ? `<a href="#${it[0]}">${it[1]}</a>` : `<span aria-current="page">${it[1]}</span>`}</li>`).join('')}</ol></nav>`;

  const workflow = () => `<section class="band band--line" aria-labelledby="wf-h"><div class="wrap">
    <div class="shead"><h2 class="h-2" id="wf-h"><span class="a">${L(ui.workflow.a)}</span> <span class="b">${L(ui.workflow.b)}</span></h2><p class="muted">${L(ui.workflow.sub)}</p></div>
    <ol class="flow">${ui.workflow.steps.map((s, i) => `<li><span class="num">0${i + 1}</span><h3 class="h-3">${L(s.h)}</h3><p class="muted small">${L(s.p)}</p></li>`).join('')}</ol>
  </div></section>`;

  const principles = () => `<ol class="princ">${ui.principles.map((p, i) => `<li><span class="num">0${i + 1}</span><h3 class="h-3">${L(p.h)}</h3><p class="muted">${L(p.p)}</p></li>`).join('')}</ol>`;

  const familyLink = (f, inner, cls) => `<a class="${cls || ''}" href="#contact" data-interest="${f.code}">${inner}</a>`;

  /* ---------- views ---------- */
  const viewHome = () => {
    const first = products[0];
    return `
    <section class="hero" aria-labelledby="hero-h">
      <div class="wrap hero__grid">
        <div class="hero__text">
          <p class="hero__kicker label">${L(ui.hero.kicker)}</p>
          <h1 class="h-display" id="hero-h"><span class="a">${L(ui.hero.a)}</span> <span class="b">${L(ui.hero.b)}</span></h1>
          <p class="hero__sub">${L(ui.hero.sub)}</p>
          <div class="actions"><a class="btn" href="#products">${L(ui.hero.cta1)}</a><a class="link" href="#contact">${L(ui.hero.cta2)}</a></div>
        </div>
        <figure class="hero__fig">${img('hero', [640, 1086], 1086, 1448, L(ui.hero.alt), '(max-width: 799px) 100vw, 50vw', 'fetchpriority="high"')}<span class="hero__beam" aria-hidden="true"></span></figure>
      </div>
      <div class="hero__strip"><div class="wrap label">
        <span>${sectors.map((s) => `<b>${L(s.name)}</b>`).join(' / ')}</span>
        <span>${L(ui.hero.band)} <b>385–405&nbsp;nm</b></span>
        <span class="tag" lang="en">${ui.footer.tagline}</span>
      </div></div>
    </section>

    <section class="band" aria-labelledby="col-h"><div class="wrap">
      <div class="shead"><h2 class="h-2" id="col-h"><span class="a">${L(ui.collection.a)}</span> <span class="b">${L(ui.collection.b)}</span></h2><p class="muted">${L(ui.collection.sub)}</p></div>
      <div class="cindex">
        <div><ul class="cindex__list">${products.map((p, i) => `<li><a class="crow" href="#${p.id}" data-row="${i}" data-active="${i === 0}" style="--accent:${p.accent}">
            <i class="crow__bar"></i>
            <span>${pname(p.name)}<span class="crow__meta"><span class="code">${p.code}</span><span>${L(p.cat)}</span></span></span>
            <span class="crow__thumb panel">${part(p, '84px')}</span>${chev}</a></li>`).join('')}</ul>
          <p class="cindex__more"><a class="link" href="#products">${L(ui.collection.all)}</a></p></div>
        <div class="cprev" aria-hidden="true">
          <div class="panel" id="cprev-panel" style="--accent:${first.accent}">${products.map((p, i) => img('part-' + p.image, [520, 1000], 1000, 1000, '', '(max-width: 859px) 1px, 40vw', `data-on="${i === 0}" data-prev="${i}" ${i === 0 ? '' : 'loading="lazy"'}`)).join('')}</div>
          <div class="cprev__cap"><span class="h-3" id="cprev-tag">${L(first.tagline)}</span><span class="code muted" id="cprev-code">${first.code}</span></div>
        </div>
      </div>
    </div></section>

    <section aria-labelledby="st-h">
      <div class="stmt">${img('lattice', [800, 1536], 1536, 1024, L(ui.statement.alt), '100vw')}
        <div class="stmt__txt"><div class="wrap"><h2 class="h-1" id="st-h"><span class="a">${L(ui.statement.a)}</span> <span class="b">${L(ui.statement.b)}</span></h2><p>${L(ui.statement.p)}</p></div></div></div>
      <div class="wrap band--tight band">${principles()}</div>
    </section>

    <section class="band band--line" aria-labelledby="sec-h"><div class="wrap">
      <div class="shead"><h2 class="h-2" id="sec-h"><span class="a">${L(ui.sectorsIntro.a)}</span> <span class="b">${L(ui.sectorsIntro.b)}</span></h2><p class="muted">${L(ui.sectorsIntro.sub)}</p></div>
      <div class="stiles">${sectors.map((s) => { const g = inSector(s.id); const p = productById('lx-' + s.image); return `<a class="stile" href="#${s.id}" style="--accent:${s.accent}">
          <span class="panel">${part(p, '(max-width: 799px) 92vw, 30vw')}</span>
          <span class="stile__head"><span class="stile__name">${L(s.name)}</span><span class="label muted">${g.products.length + g.families.length} ${L(ui.sectorsIntro.families)}</span></span>
          <span class="muted">${L(s.line)}</span>
          <span class="codes">${[...g.products, ...g.families].map((x) => `<span class="code">${x.code}</span>`).join('')}</span></a>`; }).join('')}</div>
    </div></section>

    <section class="on-dark band" aria-labelledby="pf-h"><div class="wrap">
      <div class="shead"><h2 class="h-2" id="pf-h"><span class="a">${L(ui.portfolio.a)}</span> <span class="b">${L(ui.portfolio.b)}</span></h2><p class="muted">${L(ui.portfolio.sub)}</p></div>
      <ul class="pfx">${families.map((f) => `<li>${familyLink(f, `<span class="code">${f.code}</span>${pname(f.name)}<span class="pfx__use">${L(f.use)}</span>`)}</li>`).join('')}</ul>
      <p class="muted small measure" style="margin-top:28px">${L(ui.portfolio.note)}</p>
    </div></section>

    ${workflow()}`;
  };

  const productCard = (p) => `<a class="pcard" href="#${p.id}" style="--accent:${p.accent}">
      <span class="panel">${part(p, '(max-width: 859px) 92vw, 45vw')}</span>
      <span class="pcard__head">${pname(p.name)}<span class="code">${p.code}</span></span>
      <span class="muted">${L(p.cat)}</span>
      <dl class="pcard__specs"><div><dt>${L(props.hardness)}</dt><dd>${range(p.values.hardness)}</dd></div><div><dt>${L(props.viscosity)}</dt><dd>${range(p.values.viscosity)}</dd></div></dl>
    </a>`;

  const familyRow = (f) => `<li class="frow"><span class="code">${f.code}</span>${pname(f.name)}
      <span class="frow__use"><b>${L(f.use)}</b>${f.desc ? `<br>${L(f.desc)}` : ''}</span>
      ${familyLink(f, L(ui.products.ask) + `<span class="sr"> ${f.name}</span>`, 'link')}</li>`;

  const viewProducts = () => {
    const f = state.filter;
    const ps = products.filter((p) => f === 'all' || p.sectors.includes(f));
    const fs = families.filter((x) => f === 'all' || x.sectors.includes(f));
    const chips = [['all', L(ui.products.all), products.length + families.length]].concat(sectors.map((s) => { const g = inSector(s.id); return [s.id, L(s.name), g.products.length + g.families.length]; }));
    return `${crumbs([['home', L(ui.home)], ['products', L(ui.nav.products)]])}
    <div class="wrap phead">${h1(L(ui.products.a), L(ui.products.b))}<p class="lead muted">${L(ui.products.sub)}</p></div>
    <div class="wrap">
      <div class="listbar"><div class="filters" role="group" aria-label="${L(ui.products.filter)}">${chips.map((c) =>
        `<button type="button" class="chip" data-chip="${c[0]}" aria-pressed="${f === c[0]}">${c[1]} <span class="muted" style="color:inherit;opacity:.6">${c[2]}</span></button>`).join('')}</div>
        <p class="label muted" role="status">${ps.length + fs.length} ${L(ui.products.count)}</p></div>
      ${ps.length + fs.length === 0 ? `<div class="empty"><p class="h-3">${L(ui.products.empty)}</p><button type="button" class="btn btn--ink" data-chip="all">${L(ui.products.showAll)}</button></div>` : ''}
      ${ps.length ? `<section aria-labelledby="g1"><div class="gtitle"><h2 class="h-3" id="g1">${L(ui.products.g1)}</h2><span class="label muted">${ps.length}</span></div>
        <div class="pgrid" data-n="${ps.length}">${ps.map(productCard).join('')}</div></section>` : ''}
      ${fs.length ? `<section class="band" aria-labelledby="g2"><div class="gtitle"><h2 class="h-3" id="g2">${L(ui.products.g2)}</h2><span class="label muted">${fs.length}</span></div>
        <ul class="frows">${fs.map(familyRow).join('')}</ul>
        <p class="muted small measure" style="margin-top:20px">${L(ui.portfolio.note)}</p></section>` : '<div class="band--tight band"></div>'}
    </div>`;
  };

  const spectrum = () => {
    const x = (nm) => 6 + ((nm - 360) / 80) * 288;
    return `<svg viewBox="0 0 300 52" role="img" aria-label="${esc(L(ui.product.bandAlt))}">
      <defs><linearGradient id="uv" x1="0" x2="1"><stop offset="0" stop-color="#3D1FCB"/><stop offset="1" stop-color="#8B3DF2"/></linearGradient></defs>
      <rect x="${x(360)}" y="4" width="288" height="18" fill="#E8E8EB"/>
      <rect x="${x(385)}" y="0" width="${x(405) - x(385)}" height="26" fill="url(#uv)"/>
      ${[360, 380, 400, 420, 440].map((n) => `<line x1="${x(n)}" x2="${x(n)}" y1="26" y2="32" stroke="#14171C" stroke-opacity=".4"/><text x="${x(n)}" y="46" text-anchor="${n === 360 ? 'start' : n === 440 ? 'end' : 'middle'}">${n}</text>`).join('')}
    </svg>`;
  };

  const viewProduct = (p) => {
    const sec = sectorById(p.sectors[0]);
    const isDental = p.sectors.includes('dental');
    const idx = products.indexOf(p);
    const next = products[(idx + 1) % products.length];
    const g = inSector(sec.id);
    const related = [...g.products.filter((x) => x !== p).map((x) => ({ p: x })), ...g.families.map((x) => ({ f: x }))].slice(0, 3);
    const rows = Object.keys(p.values).map((k) => `<tr><th scope="row">${L(props[k])}</th><td>${range(p.values[k])}</td></tr>`).join('');
    return `<article class="pd" style="--accent:${p.accent}">
    ${crumbs([['home', L(ui.home)], ['products', L(ui.nav.products)], [p.id, plain(p.name)]])}
    <div class="wrap pd__hero">
      <div>
        <p class="pd__cat label">${L(p.cat)}</p>
        <h1>${pname(p.name)}</h1>
        <p class="pd__id"><span class="tagcode code">${p.code}</span><span class="muted">${L(ui.product.type)}</span></p>
        <p class="pd__tag">${L(p.tagline)}</p>
        <p class="lead muted">${L(p.desc)}</p>
        <div class="actions"><a class="btn" href="#contact" data-interest="${p.code}" data-subject="0">${L(ui.product.ask)}</a><a class="link" href="#contact" data-interest="${p.code}" data-subject="1">${L(ui.product.tds)}</a></div>
      </div>
      <figure class="pd__fig"><div class="panel">${part(p, '(max-width: 859px) 92vw, 46vw', 'fetchpriority="high"')}</div></figure>
    </div>
    <div class="wrap"><ul class="hl">${p.highlights.map((h) => `<li>${L(h)}</li>`).join('')}</ul></div>

    <section class="wrap band two" aria-labelledby="pf-focus">
      <div class="stack"><h2 class="h-3" id="pf-focus">${L(ui.product.focus)}</h2><ul class="focus">${p.focus.map((f) => `<li>${L(f)}</li>`).join('')}</ul></div>
      <div class="stack"><h2 class="h-3">${L(ui.product.design)}</h2><p class="lead" style="font-size:1.12rem">${L(p.design)}</p></div>
    </section>

    <section class="wrap band band--line" aria-labelledby="pf-profile">
      <div class="shead"><h2 class="h-2" id="pf-profile"><span class="a">${plain(p.name)}</span> <span class="b">${L(ui.product.profile)}</span></h2><p class="muted">${L(p.note)}</p></div>
      <div class="profile">
        <table class="spec"><caption class="sr">${L(ui.product.profile)}, ${plain(p.name)}</caption>
          <thead><tr><th scope="col">${L(ui.product.property)}</th><th scope="col">${L(ui.product.value)}</th></tr></thead><tbody>${rows}</tbody></table>
        <div class="aside">
          <div class="bandbox"><span class="label muted">${L(ui.product.band)}</span><span class="bandbox__v">385–405&nbsp;nm</span>${spectrum()}<p class="small muted">${L(ui.product.bandNote)}</p></div>
          ${p.bottle ? `<div class="pack">${img('bottle-' + p.image, [400, 720], 720, 900, plain(p.name) + ', ' + L(ui.product.bottle), '120px')}<div><span class="label muted">${L(ui.product.pack)}</span><span class="h-3">${L(ui.product.bottle)}</span><span class="small muted">${L(ui.product.type)}</span></div></div>` : ''}
        </div>
      </div>
    </section>

    <section class="wrap" aria-labelledby="pf-docs"><div class="docs">
      <div><h2 class="h-3" id="pf-docs" style="margin-bottom:8px">${L(ui.product.docsH)}</h2><p>${L(ui.product.docs)}</p>${isDental ? `<p>${L(ui.product.docsDental)}</p>` : ''}</div>
      <a class="btn btn--ink" href="#contact" data-interest="${p.code}" data-subject="1">${L(ui.product.tds)}</a>
    </div></section>

    <section class="wrap band" aria-labelledby="pf-rel">
      <div class="gtitle"><h2 class="h-3" id="pf-rel">${L(ui.product.related)}</h2><a class="link" href="#${next.id}">${L(ui.product.next)}: <span lang="en" style="margin-left:.35em">${plain(next.name)}</span></a></div>
      <div class="rel">${related.map((r) => r.p
        ? `<a href="#${r.p.id}" style="--accent:${r.p.accent}"><span class="code small">${r.p.code}</span>${pname(r.p.name)}<span class="muted small">${L(r.p.cat)}</span></a>`
        : familyLink(r.f, `<span class="code small">${r.f.code}</span>${pname(r.f.name)}<span class="muted small">${L(r.f.use)}</span>`)).join('')}</div>
    </section>
    </article>`;
  };

  const sectorTitle = (s) => (state.lang === 'tr' ? [L(s.inTitle), L(ui.sector.post)] : [L(ui.sector.pre), L(s.inTitle)]);

  const viewIndustries = () => `${crumbs([['home', L(ui.home)], ['industries', L(ui.nav.industries)]])}
    <div class="wrap phead">${h1(L(ui.sectorsIntro.a), L(ui.sectorsIntro.b))}<p class="lead muted">${L(ui.sectorsIntro.sub)}</p></div>
    <div class="wrap">${sectors.map((s) => { const g = inSector(s.id); const p = productById('lx-' + s.image); return `<section class="srow" style="--accent:${s.accent}" aria-labelledby="s-${s.id}">
        <a class="srow__fig panel" href="#${s.id}" tabindex="-1" aria-hidden="true">${part(p, '(max-width: 859px) 92vw, 44vw')}</a>
        <div class="srow__txt"><h2 class="srow__name" id="s-${s.id}">${L(s.name)}</h2><p class="lead">${L(s.line)}</p>
          <div class="fchips">${g.products.map((x) => `<a class="fchip" href="#${x.id}"><span lang="en">${plain(x.name)}</span><span class="code">${x.code}</span></a>`).join('')}${g.families.map((x) => `<span class="fchip"><span lang="en">${x.name}</span><span class="code">${x.code}</span></span>`).join('')}</div>
          <a class="btn btn--ink" href="#${s.id}">${L(s.name)}: ${L(ui.sectorsIntro.open)}</a></div></section>`; }).join('')}</div>
    ${workflow()}`;

  const viewSector = (s) => {
    const g = inSector(s.id);
    const hero = productById('lx-' + s.image);
    const [a, b] = sectorTitle(s);
    const rows = [];
    g.products.forEach((p) => p.focus.forEach((f) => rows.push(`<tr><th scope="row">${L(f)}</th><td><a href="#${p.id}" style="--accent:${p.accent}"><i class="dot"></i><span lang="en">${plain(p.name)}</span><span class="code">${p.code}</span></a></td></tr>`)));
    g.families.forEach((f) => rows.push(`<tr><th scope="row">${L(f.use)}</th><td>${familyLink(f, `<i class="dot"></i><span lang="en">${f.name}</span><span class="code">${f.code}</span>`)}</td></tr>`));
    return `<div style="--accent:${s.accent}">
    ${crumbs([['home', L(ui.home)], ['industries', L(ui.nav.industries)], [s.id, L(s.name)]])}
    <div class="wrap pd__hero">
      <div>${h1(a, b)}<p class="lead muted" style="margin-top:24px">${L(s.intro)}</p>
        <div class="actions" style="margin-top:28px"><a class="btn" href="#contact">${L(ui.cta.b1)}</a><a class="link" href="#products" data-filter="${s.id}">${L(ui.sector.seeProducts)}</a></div></div>
      <figure class="pd__fig"><div class="panel">${part(hero, '(max-width: 859px) 92vw, 46vw', 'fetchpriority="high"')}</div></figure>
    </div>
    <section class="wrap band band--line" aria-labelledby="fd-h">
      <div class="shead"><h2 class="h-2" id="fd-h" style="font-weight:750">${L(ui.sector.finder)}</h2><p class="muted">${g.products.length + g.families.length} ${L(ui.sectorsIntro.families)}</p></div>
      <table class="finder"><thead><tr><th scope="col">${L(ui.sector.application)}</th><th scope="col">${L(ui.sector.family)}</th></tr></thead><tbody>${rows.join('')}</tbody></table>
      ${s.id === 'dental' ? `<p class="muted small measure" style="margin-top:20px">${L(ui.product.docsDental)}</p>` : ''}
    </section>
    <section class="wrap band band--line" aria-labelledby="ft-h">
      <div class="gtitle"><h2 class="h-3" id="ft-h">${L(ui.sector.featured)}</h2></div>
      <div class="feat">${g.products.map((p) => `<div class="feat__item" style="--accent:${p.accent}"><a class="panel" href="#${p.id}" tabindex="-1" aria-hidden="true">${part(p, '(max-width: 699px) 110px, 300px')}</a>
        <div class="feat__txt"><span class="code small">${p.code}</span><h3>${pname(p.name)}</h3><p class="h-3">${L(p.tagline)}</p><p class="muted measure">${L(p.desc)}</p><a class="link" href="#${p.id}">${L(ui.products.view)}<span class="sr">: ${plain(p.name)}</span></a></div></div>`).join('')}</div>
    </section>
    <section class="wrap band band--line" aria-labelledby="ot-h"><div class="gtitle"><h2 class="h-3" id="ot-h">${L(ui.sector.other)}</h2></div>
      <div class="others">${sectors.filter((x) => x !== s).map((x) => `<a href="#${x.id}" style="--accent:${x.accent}"><span>${L(x.name)}</span>${chev}</a>`).join('')}</div></section>
    </div>`;
  };

  const viewAbout = () => `${crumbs([['home', L(ui.home)], ['about', L(ui.nav.about)]])}
    <div class="wrap phead">${h1(L(ui.statement.a), L(ui.statement.b))}<p class="lead" style="margin-top:28px">${L(ui.about.lead)}</p><p class="lead muted" style="margin-top:14px;font-size:1.1rem">${L(ui.about.p2)}</p></div>
    <div class="wrap"><ul class="facts">${ui.about.facts.map((f) => `<li><b>${f.n}</b><span class="muted">${L(f.l)}</span></li>`).join('')}</ul></div>
    <div class="band--tight band">${img('lattice', [800, 1536], 1536, 1024, L(ui.statement.alt), '100vw', 'class="wide-img" loading="lazy"')}</div>
    <section class="wrap band--tight band" style="padding-top:0" aria-labelledby="pr-h"><div class="shead"><h2 class="h-2" id="pr-h" style="font-weight:750">${L(ui.about.princH)}</h2><p class="muted">${L(ui.statement.p)}</p></div>${principles()}</section>
    ${workflow()}
    <section class="wrap band--tight band" aria-labelledby="ab-docs" style="padding-top:0"><div class="docs">
      <div><h2 class="h-3" id="ab-docs" style="margin-bottom:8px">${L(ui.product.docsH)}</h2><p>${L(ui.product.docs)}</p><p>${L(ui.product.docsDental)}</p><p class="muted">${L(ui.about.images)}</p></div>
      <a class="btn btn--ink" href="#products">${L(ui.hero.cta1)}</a></div></section>`;

  /* ---------- forms ---------- */
  const field = (form, f) => {
    const id = `${form}-${f.id}`;
    const saved = (state.forms[form] || {})[f.id];
    const val = saved != null ? saved : f.value || '';
    const lab = `${L(f.label)}${f.req ? ' <span aria-hidden="true">*</span>' : ` <span class="opt">(${L(ui.form.optional)})</span>`}`;
    const common = `id="${id}" name="${f.id}" ${f.req ? 'required aria-required="true"' : ''} aria-describedby="${id}-err${f.hint ? ' ' + id + '-hint' : ''}" data-rule="${f.rule || ''}"`;
    let control;
    if (f.type === 'select') control = `<select ${common}><option value="">${L(f.placeholder || ui.form.choose)}</option>${f.options.map((o) => `<option value="${esc(o[0])}"${String(val) === String(o[0]) ? ' selected' : ''}>${esc(o[1])}</option>`).join('')}</select>`;
    else if (f.type === 'textarea') control = `<textarea ${common} rows="5">${esc(val)}</textarea>`;
    else control = `<input ${common} type="${f.type || 'text'}" value="${esc(val)}" ${f.auto ? `autocomplete="${f.auto}"` : ''} ${f.mode ? `inputmode="${f.mode}"` : ''}>`;
    return `<div class="field"><label for="${id}">${lab}</label>${control}${f.hint ? `<span class="hint" id="${id}-hint">${L(f.hint)}</span>` : ''}<span class="err" id="${id}-err"></span></div>`;
  };

  const formShell = (form, title, body, submit) => {
    if (state.done[form]) {
      return `<div class="done" role="status" id="${form}-done" tabindex="-1"><h2 class="h-3">${L(ui.form.doneH)}</h2>
        <p class="done__note">${L(ui.form.doneP)}</p>
        <dl>${state.done[form].map(([l, v]) => `<dt>${esc(l)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
        <button type="button" class="btn btn--ink" data-edit="${form}">${L(ui.form.edit)}</button></div>`;
    }
    return `<form class="form" id="${form}" novalidate aria-label="${title}"><p class="small muted">${L(ui.form.required)}</p>${body}
      <label class="consent" for="${form}-consent"><input type="checkbox" id="${form}-consent" name="consent" required aria-required="true" aria-describedby="${form}-consent-err" data-rule="consent"><span>${L(ui.form.consent)} <span aria-hidden="true">*</span></span><span class="err" id="${form}-consent-err"></span></label>
      <div class="form__foot"><button type="submit" class="btn">${submit}</button><p class="form__sum" role="alert" id="${form}-sum"></p></div></form>`;
  };

  const familyOptions = () => products.map((p) => [p.code, `${plain(p.name)} (${p.code})`]).concat(families.map((f) => [f.code, `${f.name} (${f.code})`]));

  const viewContact = () => {
    const F = 'cf';
    const pre = state.forms[F] || (state.forms[F] = {});
    if (state.interest) { pre.family = state.interest; state.interest = ''; }
    if (state.subject !== '') { pre.subject = state.subject; state.subject = ''; }
    const body = `<div class="form__row">${field(F, { id: 'name', label: ui.form.name, req: true, rule: 'name', auto: 'name' })}${field(F, { id: 'company', label: ui.form.company, auto: 'organization' })}</div>
      <div class="form__row">${field(F, { id: 'email', label: ui.form.email, type: 'email', req: true, rule: 'email', auto: 'email', mode: 'email' })}${field(F, { id: 'phone', label: ui.form.phone, type: 'tel', auto: 'tel', mode: 'tel' })}</div>
      <div class="form__row">${field(F, { id: 'country', label: ui.form.country, auto: 'country-name' })}${field(F, { id: 'subject', label: ui.form.subject, type: 'select', req: true, rule: 'select', options: ui.form.subjects.map((s, i) => [i, L(s)]) })}</div>
      ${field(F, { id: 'family', label: ui.form.family, type: 'select', placeholder: ui.form.familyNone, options: familyOptions() })}
      ${field(F, { id: 'message', label: ui.form.message, type: 'textarea', req: true, rule: 'message', hint: ui.form.messageHint })}`;
    return `${crumbs([['home', L(ui.home)], ['contact', L(ui.nav.contact)]])}
    <div class="wrap fpage">
      <div class="fpage__txt">${h1(L(ui.contact.a), L(ui.contact.b))}<p class="lead muted">${L(ui.contact.p)}</p>
        <div class="aside-link"><span class="muted">${L(ui.contact.partnerQ)}</span><a class="link" href="#partners">${L(ui.contact.partnerL)}</a></div></div>
      <div>${formShell(F, L(ui.contact.formTitle), body, L(ui.contact.submit))}</div>
    </div>`;
  };

  const viewPartners = () => {
    const F = 'pf';
    const saved = state.forms[F] || {};
    const body = `<div class="form__row">${field(F, { id: 'company', label: ui.form.company, req: true, rule: 'company', auto: 'organization' })}${field(F, { id: 'name', label: ui.form.contactName, req: true, rule: 'name', auto: 'name' })}</div>
      <div class="form__row">${field(F, { id: 'email', label: ui.form.email, type: 'email', req: true, rule: 'email', auto: 'email', mode: 'email' })}${field(F, { id: 'phone', label: ui.form.phone, type: 'tel', auto: 'tel', mode: 'tel' })}</div>
      <div class="form__row">${field(F, { id: 'country', label: ui.form.region, req: true, rule: 'country', auto: 'country-name' })}${field(F, { id: 'biz', label: ui.form.bizType, type: 'select', req: true, rule: 'select', options: ui.form.bizTypes.map((s, i) => [i, L(s)]) })}</div>
      <fieldset class="field"><legend>${L(ui.form.fields)} <span class="opt">(${L(ui.form.optional)})</span></legend><div class="checks">${sectors.map((s) =>
        `<label class="check"><input type="checkbox" name="field-${s.id}" value="${s.id}"${saved['field-' + s.id] ? ' checked' : ''}>${L(s.name)}</label>`).join('')}</div></fieldset>
      ${field(F, { id: 'website', label: ui.form.website, type: 'url', auto: 'url', mode: 'url' })}
      ${field(F, { id: 'message', label: ui.form.message, type: 'textarea', req: true, rule: 'message' })}`;
    return `${crumbs([['home', L(ui.home)], ['partners', L(ui.nav.partners)]])}
    <div class="wrap fpage">
      <div class="fpage__txt">${h1(L(ui.partners.a), L(ui.partners.b))}<p class="lead muted">${L(ui.partners.p)}</p>
        <div><h2 class="h-3" style="margin-bottom:12px">${L(ui.partners.listH)}</h2><ul>${ui.partners.list.map((x) => `<li>${L(x)}</li>`).join('')}</ul></div>
        <div class="aside-link"><span class="muted">${L(ui.partners.customerQ)}</span><a class="link" href="#contact">${L(ui.partners.customerL)}</a></div></div>
      <div>${formShell(F, L(ui.partners.formTitle), body, L(ui.partners.submit))}</div>
    </div>`;
  };

  const viewMissing = () => `<div class="wrap band"><div class="empty">${h1('404', L(ui.notFound.h), 'h-2')}<p class="muted">${L(ui.notFound.p)}</p><a class="btn" href="#products">${L(ui.hero.cta1)}</a></div></div>`;

  /* ---------- page meta ---------- */
  const pageMeta = (id) => {
    const k = routeKind(id);
    const strip = (s) => s.replace(/\.$/, '');
    if (k === 'home') return ['LX Resins | ' + strip(L(ui.hero.sub)), L(ui.meta.home)];
    if (k === 'product') { const p = productById(id); return [`${plain(p.name)} ${p.code} | LX Resins`, L(p.desc)]; }
    if (k === 'sector') { const s = sectorById(id); return [`${L(s.name)} | LX Resins`, L(s.line)]; }
    if (k === 'products') return [`${L(ui.nav.products)} | LX Resins`, L(ui.products.sub)];
    if (k === 'industries') return [`${L(ui.nav.industries)} | LX Resins`, L(ui.sectorsIntro.sub)];
    if (k === 'about') return [`${L(ui.nav.about)} | LX Resins`, L(ui.about.lead)];
    if (k === 'contact') return [`${L(ui.nav.contact)} | LX Resins`, L(ui.contact.p)];
    if (k === 'partners') return [`${L(ui.nav.partners)} | LX Resins`, L(ui.partners.p)];
    return ['LX Resins', L(ui.meta.home)];
  };

  /* ---------- render ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const hdr = $('#hdr'); const main = $('#main'); const foot = $('#foot'); const mm = $('#mm');

  const syncHeader = () => {
    const over = routeKind(routeId()) === 'home' && !state.menu && window.scrollY < ((($('.hero') || {}).offsetHeight || 0) - hdr.offsetHeight - 8);
    hdr.classList.toggle('hdr--over', over);
  };

  const render = (opts) => {
    const id = routeId(); const k = routeKind(id);
    document.documentElement.lang = state.lang;
    const [title, desc] = pageMeta(id);
    document.title = title;
    $('meta[name="description"]').setAttribute('content', desc);
    hdr.innerHTML = header(id);
    mm.innerHTML = mobileMenu(id);
    main.className = k === 'home' ? 'is-home' : '';
    main.innerHTML = k === 'home' ? viewHome() : k === 'products' ? viewProducts() : k === 'product' ? viewProduct(productById(id))
      : k === 'industries' ? viewIndustries() : k === 'sector' ? viewSector(sectorById(id)) : k === 'about' ? viewAbout()
      : k === 'contact' ? viewContact() : k === 'partners' ? viewPartners() : viewMissing();
    foot.innerHTML = closing(k !== 'contact' && k !== 'partners');
    $('.skip').textContent = L(ui.skip);
    setMenu(false);
    if (opts && opts.top) { window.scrollTo(0, 0); }
    syncHeader();
  };

  const setMenu = (open) => {
    state.menu = open;
    mm.dataset.open = String(open);
    document.body.style.overflow = open ? 'hidden' : '';
    const b = $('.menu-btn'); if (b) b.setAttribute('aria-expanded', String(open));
    syncHeader();
  };

  /* ---------- form logic ---------- */
  const RULES = {
    name: (v) => v.trim().length > 1, company: (v) => v.trim().length > 1, country: (v) => v.trim().length > 1,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()), select: (v) => v !== '', message: (v) => v.trim().length > 4
  };
  const collect = (form) => {
    const out = {}; const labels = {};
    form.querySelectorAll('input,select,textarea').forEach((el) => {
      if (el.type === 'checkbox') { out[el.name] = el.checked ? '1' : ''; return; }
      out[el.name] = el.value;
      const lab = form.querySelector(`label[for="${el.id}"]`);
      labels[el.name] = lab ? lab.firstChild.textContent.trim() : el.name;
      labels['__text_' + el.name] = el.tagName === 'SELECT' && el.value !== '' ? el.options[el.selectedIndex].text : el.value;
    });
    return { out, labels };
  };
  const validateField = (el) => {
    const rule = el.dataset.rule; if (!rule) return true;
    const ok = rule === 'consent' ? el.checked : RULES[rule](el.value);
    const err = document.getElementById(el.id + '-err');
    el.setAttribute('aria-invalid', String(!ok));
    if (err) err.textContent = ok ? '' : L(ui.form.err[rule]);
    return ok;
  };
  const submitForm = (form) => {
    const fields = [...form.querySelectorAll('[data-rule]')].filter((el) => el.dataset.rule);
    const bad = fields.filter((el) => !validateField(el));
    const sum = document.getElementById(form.id + '-sum');
    if (bad.length) { sum.textContent = L(ui.form.err.summary); bad[0].focus(); return; }
    sum.textContent = '';
    const { out, labels } = collect(form);
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.innerHTML = `<span class="spin" aria-hidden="true"></span>${L(ui.form.sending)}`;
    window.setTimeout(() => {
      state.forms[form.id] = out;
      state.done[form.id] = Object.keys(out).filter((k) => labels[k] && out[k] && k !== 'message').slice(0, 6).map((k) => [labels[k], labels['__text_' + k]]);
      render();
      const d = document.getElementById(form.id + '-done'); if (d) d.focus();
    }, 900);
  };

  /* ---------- events ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lang],[data-menu],[data-chip],[data-interest],[data-filter],[data-edit]');
    if (!t) return;
    if (t.dataset.lang) {
      const forms = main.querySelectorAll('form'); forms.forEach((f) => { state.forms[f.id] = collect(f).out; });
      state.lang = t.dataset.lang; store.set('lx-lang', state.lang);
      const wasMenu = state.menu; render(); if (wasMenu) setMenu(true);
      const again = document.querySelector(`${wasMenu ? '#mm' : '#hdr'} [data-lang="${state.lang}"]`); if (again) again.focus();
      return;
    }
    if (t.dataset.menu) { setMenu(t.dataset.menu === 'open'); (t.dataset.menu === 'open' ? $('.mm__close') : $('.menu-btn')).focus(); return; }
    if (t.dataset.chip) { state.filter = t.dataset.chip; render(); const c = $(`.chip[data-chip="${state.filter}"]`); if (c) c.focus(); return; }
    if (t.dataset.edit) { delete state.done[t.dataset.edit]; render(); const f = document.getElementById(t.dataset.edit); if (f) f.querySelector('input').focus(); return; }
    if (t.dataset.interest) { state.interest = t.dataset.interest; state.subject = t.dataset.subject != null ? t.dataset.subject : '0'; delete state.done.cf; }
    if (t.dataset.filter) { state.filter = t.dataset.filter; }
  });
  document.addEventListener('submit', (e) => { e.preventDefault(); submitForm(e.target); });
  document.addEventListener('focusout', (e) => { if (e.target.dataset && e.target.dataset.rule && e.target.getAttribute('aria-invalid') === 'true') validateField(e.target); });
  document.addEventListener('change', (e) => { if (e.target.dataset && e.target.dataset.rule && e.target.getAttribute('aria-invalid') === 'true') validateField(e.target); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && state.menu) { setMenu(false); $('.menu-btn').focus(); } });

  const activate = (row) => {
    const i = Number(row.dataset.row); const p = products[i];
    main.querySelectorAll('.crow').forEach((r) => { r.dataset.active = String(r === row); });
    main.querySelectorAll('[data-prev]').forEach((im) => { im.dataset.on = String(Number(im.dataset.prev) === i); });
    const panel = $('#cprev-panel'); if (!panel) return;
    panel.style.setProperty('--accent', p.accent);
    $('#cprev-tag').textContent = L(p.tagline); $('#cprev-code').textContent = p.code;
  };
  ['mouseover', 'focusin'].forEach((ev) => main.addEventListener(ev, (e) => { const row = e.target.closest && e.target.closest('.crow'); if (row && row.dataset.active !== 'true') activate(row); }));

  let ticking = false;
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { syncHeader(); ticking = false; }); } }, { passive: true });
  window.addEventListener('resize', syncHeader);
  window.addEventListener('hashchange', () => { render({ top: true }); main.focus({ preventScroll: true }); });

  render();
})();
