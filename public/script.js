document.documentElement.classList.add('js');

const SERVICES = [
  { id: 'building', title: 'Building Contracting', img: 'svc-building', short: 'Approved by Dubai Municipality, Civil Defense, RTA, DEWA, Trakhees and Nakheel.',
    text: 'An approved, independent contracting company that works closely with every associate to understand each project and deliver responsive, inventive solutions that respect the client\'s budget, quality and timeframe.',
    list: ['New building construction', 'Civil and structural works', 'Retaining walls', 'Block walls and boundary walls', 'External cladding', 'Cost-effective construction solutions'] },
  { id: 'painting', title: 'Painting, Polishing & Cleaning', img: 'svc-painting', short: 'Professional painting for buildings, villas and warehouses.',
    text: 'A complete range of professional painting services for commercial, industrial and residential buildings, villas and warehouses. End-to-end solutions for all your painting needs.',
    list: ['Spray painting', 'Aluminium & steel structure painting', 'Doors and windows painting', 'Doors and windows polishing', 'Protecline coating', 'Wooden structure polishing', 'Wooden structure varnishing', 'Exterior and interior painting', 'Decorative painting'] },
  { id: 'plumbing', title: 'Plumbing & Sanitary', img: 'svc-plumbing', short: 'Repairs, replacement and new installation with free quotes.',
    text: 'Guaranteed quality and on-time service for all residential and commercial plumbing needs. Free quotes, and all work is guaranteed for workmanship.',
    list: ['Sanitary fixtures', 'Domestic water supply systems', 'Manhole build & maintenance', 'Leak detection & rectification', 'Hot & cold water supply', 'Water tanks', 'Sewage systems', 'Drainage systems', 'PEX piping systems', 'General plumbing maintenance'] },
  { id: 'masonry', title: 'Masonry', img: 'svc-masonry', short: '25+ years in commercial and residential masonry.',
    text: 'One of very few contractors in Dubai with over 25 years of masonry experience. We have kept 100% positive client feedback, and 75% of our masonry projects come from repeat customers.',
    list: ['Hollow & solid block', 'Interlock & curbstone', 'Concrete driveways & walkways', 'Masonry restoration & renovation', 'Tile, marble & granite restoration', 'Marble cabinet tops', 'Remodelling', 'Floor screed', 'Concrete ramps', 'Plastering works'] },
  { id: 'partition', title: 'Partitions', img: 'svc-partition', short: 'Interior and exterior partitions for every setting.',
    text: 'A full range of commercial and residential, interior and exterior partition services, delivered with professionalism, integrity and quality work.',
    list: ['Concrete partitions', 'Plaster slab partitions', 'Reinforced brick partitions', 'Solid & hollow block partitions', 'Precast concrete slab partitions', 'A.C. or G.I. sheet partitions', 'Glass partitions', 'Gypsum partitions', 'Timber partitions', 'Metal lath partitions', 'Wood-wool partitions'] },
  { id: 'ceiling', title: 'False Ceilings', img: 'svc-ceiling', short: 'New builds, refurbishments and fit-outs.',
    text: 'Skilled teams capable of executing every type of false ceiling, with a strong track record on large and small jobs including new builds, refurbishments and fit-out projects.',
    list: ['Gypsum ceilings', 'Armstrong ceilings', 'Metal panel & strip ceilings', 'Wooden ceilings', 'PVC ceilings', 'Thermocol ceilings', 'Cone ceilings', 'Beam ceilings'] },
  { id: 'roofing', title: 'Roofing & Warehouses', img: 'svc-roofing', short: 'Steel-frame warehouses and roofing systems.',
    text: 'Warehouse buildings designed to withstand high winds and seismic loads, with steel frames that accommodate overhead cranes and gantries, plus glazing, cladding and access doors to suit each client.',
    list: ['Warehouse construction', 'Roof panel waterproofing', 'GI roof panel fixing & maintenance', 'Spouts & gutters', 'Aluminium roof panel fixing & maintenance'] },
  { id: 'waterproofing', title: 'Waterproofing', img: 'svc-waterproofing', short: 'Membranes, coatings and pool waterproofing.',
    text: 'Quality management systems and best practice behind every waterproofing job, with competitive pricing and strong technical skills.',
    list: ['Fibreglass net waterproofing', 'Liquid-applied membrane', '4mm membrane sheets', 'Aluminium & GI roof panels', 'Combo waterproofing', 'Swimming pools', 'Toilets, kitchens & pantries', 'Building and villa roof decks'] },
  { id: 'carpentry', title: 'Carpentry & Joinery', img: 'svc-carpentry', short: 'From apartments to industrial fit-outs.',
    text: 'Experienced finishing carpenters for everything from small apartments to industrial projects, backed by a long list of recommendations and regular clients.',
    list: ['Wooden doors & windows', 'Aluminium doors & windows', 'Glass doors & windows', 'Automatic sliding doors', 'Wardrobes in wood, MDF & aluminium', 'Kitchen cabinets', 'Wooden counters', 'Marble countertops', 'Bird spikes', 'Maintenance & repairs'] },
  { id: 'flooring', title: 'Flooring', img: 'svc-flooring', short: 'Epoxy, markings and floor restoration.',
    text: 'Specialised flooring for commercial developments and tenant improvements, delivered on time and within budget.',
    list: ['Floor epoxy coating', 'Floor markings & signage', 'Numbering & arrows', 'Parking lines & numbering', 'Crack & bulged concrete repair', 'Marble & tile polishing', 'Protective floor coatings'] },
  { id: 'electrical', title: 'Electrical', img: 'svc-electrical', short: 'Residential, commercial and industrial.',
    text: 'We advise on the right consumer unit, then carry out electrical work quickly, safely and efficiently so you can plan preventative maintenance and fix faults fast.',
    list: ['New electrical installations', 'DB box maintenance & repair', 'Removing & re-fixing fittings', 'Electrical repairs', 'Electrical wiring', 'Sensor lighting systems'] },
];

const PROJECTS = [
  { title: 'Construction of retaining wall', client: 'JGE', img: 'prj-retaining', cat: 'civil' },
  { title: 'External cladding', client: 'G+M+16 tower', img: 'prj-cladding', cat: 'finishing' },
  { title: 'External & internal refurbishment', client: 'Karam Fish Market', img: 'prj-karam', cat: 'finishing' },
  { title: 'Waterproofing of 50+ planter boxes', client: 'G+5 group buildings', img: 'prj-planter', cat: 'civil' },
  { title: 'Concrete restoration & painting', client: 'B+G+M+16+2R tower', img: 'prj-restoration', cat: 'finishing' },
  { title: 'Floor epoxy & road marking', client: 'G+7 Building A-B-C', img: 'prj-epoxy', cat: 'finishing' },
  { title: 'Refurbishment of 48 apartments', client: 'G+M+16+R tower', img: 'prj-apartments', cat: 'finishing' },
  { title: 'Replacement of damaged roofing panels', client: 'Warehouse', img: 'prj-roofing', cat: 'civil' },
  { title: 'Domestic water supply line replacement', client: 'G+4 building', img: 'prj-water4', cat: 'mep' },
  { title: 'Fixing of interlocks', client: 'JGE Club', img: 'prj-interlock', cat: 'civil' },
  { title: 'Domestic water supply refurbishment', client: 'G+7 building', img: 'prj-water7', cat: 'mep' },
  { title: 'Construction of block wall', client: 'Le Méridien Hotel, Garhoud', img: 'prj-meridien', cat: 'civil' },
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const img = (n) => `./assets/img/${n}.jpg`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Shared: header, menu, year ---------- */
const header = $('.site-header');
const toggle = $('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && header.classList.contains('open')) { header.classList.remove('open'); toggle.setAttribute('aria-expanded', false); toggle.focus(); }
  });
}
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
$$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

/* ---------- Home: authority marquee (duplicate items for a seamless loop) ---------- */
const track = $('.marquee-track');
if (track) {
  [...track.children].forEach(li => { const c = li.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
}

/* ---------- Home: 3D project carousel ---------- */
const cf = $('[data-coverflow]');
if (cf) {
  const slides = $$('.cf-slide', cf);
  const n = slides.length;
  let cur = 0, timer = null;
  const wrap = (i) => ((i % n) + n) % n;

  const layout = () => {
    const w = slides[0].offsetWidth;
    slides.forEach((s, i) => {
      let d = i - cur;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      const a = Math.abs(d);
      const x = Math.sign(d) * (a === 0 ? 0 : w * 0.42 + (a - 1) * w * 0.26);
      s.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${-a * 160}px) rotateY(${-Math.sign(d) * Math.min(a, 1) * 38}deg)`;
      s.style.zIndex = 50 - a;
      s.style.opacity = a > 2 ? 0 : 1;
      s.style.filter = a ? `brightness(${1 - Math.min(a, 2) * 0.22})` : 'none';
      s.style.pointerEvents = a > 2 ? 'none' : 'auto';
      s.classList.toggle('is-active', a === 0);
      s.setAttribute('aria-hidden', a !== 0);
    });
  };
  const go = (i) => { cur = wrap(i); layout(); };
  const play = () => { if (!reduceMotion) { stop(); timer = setInterval(() => go(cur + 1), 4500); } };
  const stop = () => clearInterval(timer);

  $('.cf-prev', cf).addEventListener('click', () => go(cur - 1));
  $('.cf-next', cf).addEventListener('click', () => go(cur + 1));
  slides.forEach((s, i) => s.addEventListener('click', () => go(i)));
  cf.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1); }
  });
  // Swipe
  let sx = null;
  cf.addEventListener('pointerdown', e => { sx = e.clientX; });
  cf.addEventListener('pointerup', e => {
    if (sx === null) return;
    const dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
  });
  ['mouseenter', 'focusin'].forEach(ev => cf.addEventListener(ev, stop));
  ['mouseleave', 'focusout'].forEach(ev => cf.addEventListener(ev, play));
  window.addEventListener('resize', layout);
  layout(); play();
}

/* ---------- Services page ---------- */
const grid = $('#serviceGrid');
if (grid) {
  grid.innerHTML = SERVICES.map((s, i) => `
    <button class="svc-card" data-svc="${i}" aria-haspopup="dialog">
      <span class="svc-img"><img src="${img(s.img)}" alt="" loading="lazy"></span>
      <span class="svc-body">
        <span class="svc-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="svc-title">${esc(s.title)}</span>
        <span class="svc-short">${esc(s.short)}</span>
        <span class="svc-more">View scope <span aria-hidden="true">&rarr;</span></span>
      </span>
    </button>`).join('') + `
    <div class="svc-cta"><div><h3>Need more than one trade?</h3><p>We handle construction, civil maintenance and MEP under one roof, so one team can manage the whole job.</p></div><a href="./contact#quote" class="btn">Get a combined quote</a></div>`;

  const dlg = $('#svcDialog');
  const open = (i) => {
    const s = SERVICES[i];
    $('#dlgImg').src = img(s.img); $('#dlgImg').alt = s.title;
    $('#dlgNum').textContent = 'Service ' + String(i + 1).padStart(2, '0');
    $('#dlgTitle').textContent = s.title;
    $('#dlgText').textContent = s.text;
    $('#dlgList').innerHTML = s.list.map(x => `<li>${esc(x)}</li>`).join('');
    $('#dlgQuote').href = `mailto:info@orientcontracting.com?subject=${encodeURIComponent('Quote request: ' + s.title)}`;
    dlg.showModal();
  };
  grid.addEventListener('click', e => { const b = e.target.closest('[data-svc]'); if (b) open(+b.dataset.svc); });
  closeOnBackdrop(dlg);
  // Deep link: /services#masonry opens that service
  const idx = SERVICES.findIndex(s => s.id === location.hash.slice(1));
  if (idx > -1) open(idx);
}

/* ---------- Projects page ---------- */
const pg = $('#projectGrid');
if (pg) {
  pg.innerHTML = PROJECTS.map((p, i) => `
    <figure class="prj" data-cat="${p.cat}">
      <button class="prj-btn" data-prj="${i}" aria-label="View ${esc(p.title)}">
        <img src="${img(p.img)}" alt="${esc(p.title)}, ${esc(p.client)}" loading="lazy">
      </button>
      <figcaption><strong>${esc(p.title)}</strong><span>${esc(p.client)}</span></figcaption>
    </figure>`).join('');

  $$('.chip').forEach(c => c.addEventListener('click', () => {
    $$('.chip').forEach(x => { x.classList.toggle('is-active', x === c); x.setAttribute('aria-pressed', x === c); });
    const f = c.dataset.filter;
    $$('.prj', pg).forEach(el => el.hidden = !(f === 'all' || el.dataset.cat === f));
  }));

  const lb = $('#lightbox');
  pg.addEventListener('click', e => {
    const b = e.target.closest('[data-prj]'); if (!b) return;
    const p = PROJECTS[+b.dataset.prj];
    $('#lbImg').src = img(p.img); $('#lbImg').alt = p.title;
    $('#lbCap').innerHTML = `<strong>${esc(p.title)}</strong> &middot; ${esc(p.client)}`;
    lb.showModal();
  });
  closeOnBackdrop(lb);
}

function closeOnBackdrop(d) {
  d.addEventListener('click', e => { if (e.target === d || e.target.closest('[data-close]')) d.close(); });
}

