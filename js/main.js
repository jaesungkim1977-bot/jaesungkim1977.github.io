(function () {
  const D = window.LAB_DATA;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const badge = (v) => (v === false ? '<span class="badge-ex">예시</span>' : "");
  const SHOW = !(D.site && D.site.showExamples === false);
  if (!SHOW) {
    D.research = D.research.filter((r) => r.verified !== false);
    if (D.pipeline.verified === false) D.pipeline.items = [];
    if (D.projects.verified === false) D.projects.items = [];
    D.news.items = D.news.items.filter((n) => n.verified === true || D.news.verified !== false);
    D.news.verified = true;
  }
  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), D);

  // simple bindings
  document.querySelectorAll("[data-bind]").forEach((el) => { el.textContent = get(el.dataset.bind) ?? ""; });
  $("#year").textContent = new Date().getFullYear();

  // ABOUT
  $("#aboutText").innerHTML = D.about.text.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#aboutSource").textContent = D.about.source;
  $("#aboutStats").innerHTML = D.about.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

  // RESEARCH
  const icons = {
    target: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3" fill="currentColor"/><path d="M24 2v8M24 38v8M2 24h8M38 24h8"/></svg>',
    molecule: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="14" r="5"/><circle cx="36" cy="12" r="5"/><circle cx="24" cy="34" r="6"/><path d="M16 17l5 12M32 16l-5 13M17 14h14"/></svg>',
    radiation: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="4" fill="currentColor"/><path d="M24 20L16 6a20 20 0 0 1 16 0zM27.5 26l14 8a20 20 0 0 1-8 14zM20.5 26l-6 22a20 20 0 0 1-8-14z"/></svg>',
    ai: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="12" width="24" height="24" rx="4"/><path d="M18 2v10M30 2v10M18 36v10M30 36v10M2 18h10M2 30h10M36 18h10M36 30h10"/><path d="M19 29l5-11 5 11M21 25h6"/></svg>',
  };
  $("#researchGrid").innerHTML = D.research.map((r, i) => `
    <article class="r-card reveal" style="transition-delay:${i * 90}ms">
      <div class="r-icon">${icons[r.icon] || ""}</div>
      <h3>${esc(r.title)}${badge(r.verified)}</h3>
      <div class="en">${esc(r.en)}</div>
      <p>${esc(r.desc)}</p>
    </article>`).join("");

  // PIPELINE (신약회사 홈페이지 형식)
  const P = D.pipeline;
  const MOD = P.modalities || {};
  const NS = P.stages.length;
  $("#pipelineNote").innerHTML = P.verified === false ? `${badge(false)} ${esc(P.note)}` : esc(P.subtitle || "");
  $("#pipelineFilters").innerHTML = ['<button class="chip on" data-m="all">All</button>']
    .concat(Object.keys(MOD).map((k) => `<button class="chip" data-m="${esc(k)}"><i class="dot" style="background:${esc(MOD[k].color)}"></i>${esc(MOD[k].label)}</button>`)).join("");
  $("#pipelineStages").innerHTML = "<span>Program</span>" + P.stages.map((st) => `<span>${esc(st)}</span>`).join("") + "<span>Partner</span>";
  $("#pipelineRows").innerHTML = P.items.map((it) => {
    const mods = it.modality || [];
    const col = (MOD[mods[0]] || {}).color || "#19d3c5";
    return `
    <div class="pl-row" data-mod="${esc(mods.join(" "))}">
      <div class="pl-name">
        <b>${mods.map((m) => `<i class="dot" title="${esc((MOD[m] || {}).label)}" style="background:${esc((MOD[m] || {}).color)}"></i>`).join("")}${esc(it.name)}</b>
        ${it.code ? `<small>${esc(it.code)}</small>` : ""}
      </div>
      <div class="pl-bar"><i data-w="${Math.min(100, (it.stage / NS) * 100)}%" style="--c:${esc(col)}"><em>${esc(it.status || "")}</em></i></div>
      <div class="pl-status">${esc(it.status || "")}</div>
      <div class="pl-partner">${(it.partners || []).map((x) => `<span>${esc(x)}</span>`).join("") || "<span class='muted'>–</span>"}</div>
    </div>`;
  }).join("");
  $("#pipelineFilters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    document.querySelectorAll("#pipelineFilters .chip").forEach((c) => c.classList.toggle("on", c === b));
    const m = b.dataset.m;
    document.querySelectorAll("#pipelineRows .pl-row").forEach((r) => {
      r.style.display = m === "all" || r.dataset.mod.split(" ").includes(m) ? "" : "none";
    });
  });

  // TEAM
  const M = D.members;
  const pic = (o, cls, n) => o.photo
    ? `<img class="${cls}" src="${esc(o.photo)}" alt="${esc(o.name)}" loading="lazy" />`
    : `<div class="${cls} ph">${esc(o.name.slice(-n))}</div>`;
  $("#membersBadge").innerHTML = badge(M.verified);
  $("#membersNote").textContent = M.verified === false ? M.note : "";
  $("#teamIntro").textContent = M.intro || "";
  const pi = M.pi;
  const groupsHtml = [`
    <div class="t-group reveal">
      <h3 class="t-head">Principal Investigator</h3>
      <a class="person person-pi" href="#pi">
        ${pic(pi, "avatar sm", 1)}
        <div><b>${esc(pi.name)}</b><span>${esc(pi.nameEn)}</span><em>프로필 보기 →</em></div>
      </a>
    </div>`].concat(M.groups.map((g) => {
      const ps = M.people.filter((p) => p.group === g);
      if (!ps.length) return "";
      return `<div class="t-group reveal"><h3 class="t-head">${esc(g)}</h3><div class="people-grid">${ps.map((p) => `
        <div class="person">${pic(p, "avatar sm", 1)}<div><b>${esc(p.name)}</b><span>${esc(p.role)}</span></div></div>`).join("")}</div></div>`;
    }));
  $("#teamGroups").innerHTML = groupsHtml.join("");
  $("#alumni").innerHTML = M.alumni.length
    ? `<h3 class="t-head">Alumni</h3><ul>${M.alumni.map((a) => `<li><b>${esc(a.name)}</b>${a.now ? ` · ${esc(a.now)}` : ""}</li>`).join("")}</ul>`
    : "";

  // ABOUT PI
  const tl = (arr) => `<ul class="tl">${arr.map((e) => `<li><span>${esc(e.period)}</span><p>${esc(e.text)}</p></li>`).join("")}</ul>`;
  $("#piWrap").innerHTML = `
    <aside class="pi-side reveal">
      ${pic(pi, "pi-photo", 2)}
      <h2>${esc(pi.nameEn)}</h2>
      <p class="pi-ko">${esc(pi.name)}</p>
      <p class="pi-title">${esc(pi.title)}</p>
      <div class="pi-tags">${(pi.interests || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="pi-contact"><small>Get in Touch</small><a href="mailto:${esc(pi.email)}">${esc(pi.email)}</a>${pi.phone ? `<span class="pi-phone">${esc(pi.phone)}</span>` : ""}</div>
    </aside>
    <div class="pi-main reveal">
      <div class="pi-greet">${pi.greeting.map((g) => `<p>${esc(g)}</p>`).join("")}
        ${pi.greetingNote ? `<p class="source">${esc(pi.greetingNote)}</p>` : ""}</div>
      ${pi.highlights && pi.highlights.length ? `<div class="pi-hl">${pi.highlights.map((h) => `<div><b>${esc(h.value)}</b><span>${esc(h.label)}</span></div>`).join("")}</div>` : ""}
      <div class="pi-block"><h3>Education</h3>${tl(pi.education)}</div>
      <div class="pi-block"><h3>Professional Career</h3>${tl(pi.career)}</div>
      ${pi.awards && pi.awards.length ? `<div class="pi-block"><h3>Awards</h3>${tl(pi.awards)}</div>` : ""}
      <div class="pi-block"><h3>Selected Publications</h3><ol class="pi-pubs">${D.publications.items.filter((p) => p.selected).slice(0, 6).map((p) => `<li>${esc(p.title)} <i>${esc(p.journal)}</i> ${p.year}</li>`).join("")}</ol>
        <a class="more-link" href="#publications">전체 논문 보기 →</a></div>
    </div>`;

  // PUBLICATIONS
  const pubs = D.publications.items;
  $("#pubNote").textContent = D.publications.note || "";
  const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
  let fYear = "all", q = "", onlyCorr = false, onlySel = false;
  $("#pubFilters").innerHTML = ['<button class="chip on" data-y="all">전체</button>']
    .concat(years.map((y) => `<button class="chip" data-y="${y}">${y}</button>`)).join("")
    + '<button class="chip chip-corr" id="selToggle" aria-pressed="false">대표 논문</button>'
    + '<button class="chip chip-corr" id="corrToggle" aria-pressed="false">교신저자 논문만</button>';
  function renderPubs() {
    const list = pubs.filter((p) => (fYear === "all" || String(p.year) === fYear) && (!onlyCorr || p.corresponding) && (!onlySel || p.selected) &&
      (!q || (p.title + " " + p.journal + " " + (p.tags || []).join(" ")).toLowerCase().includes(q)));
    $("#pubCount").textContent = `${list.length}편 / 전체 ${pubs.length}편`;
    $("#pubList").innerHTML = list.length ? list.map((p) => `
      <li class="pub">
        <div class="yr">${p.year}</div>
        <div>
          <div class="t">${esc(p.title)}${p.corresponding ? ' <span class="corr" title="교신저자">Corresponding</span>' : ""}</div>
          ${p.authors ? `<div class="au">${esc(p.authors).replace(/Kim JS/g, "<b>Kim JS</b>")}</div>` : ""}
          <div class="j">${esc(p.journal)}${p.doi ? ` · <a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI</a>` : ""}</div>
          <div class="tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
      </li>`).join("") : '<li class="pub-empty">검색 결과가 없습니다.</li>';
  }
  $("#pubFilters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    if (b.id === "selToggle") { onlySel = !onlySel; b.classList.toggle("on", onlySel); b.setAttribute("aria-pressed", onlySel); renderPubs(); return; }
    if (b.id === "corrToggle") { onlyCorr = !onlyCorr; b.classList.toggle("on", onlyCorr); b.setAttribute("aria-pressed", onlyCorr); renderPubs(); return; }
    document.querySelectorAll("#pubFilters .chip:not(.chip-corr)").forEach((c) => c.classList.toggle("on", c === b));
    fYear = b.dataset.y; renderPubs();
  });
  $("#pubSearch").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); renderPubs(); });
  renderPubs();

  // PROJECTS
  const PR = D.projects;
  $("#projBadge").innerHTML = badge(PR.verified);
  $("#projNote").textContent = PR.verified === false ? PR.note : "";
  $("#projRows").innerHTML = PR.items.map((p) => `
    <tr>
      <td>${esc(p.title)}</td><td>${esc(p.agency)}</td><td>${esc(p.program)}</td>
      <td>${esc(p.period)}</td><td>${esc(p.role)}</td>
      <td><span class="status ${p.status === "진행" ? "on" : "off"}">${esc(p.status)}</span></td>
    </tr>`).join("");

  // NEWS
  const N = D.news;
  $("#newsNote").textContent = N.verified === false ? N.note : "";
  const byYear = {};
  N.items.forEach((n) => { const y = String(n.date).slice(0, 4); (byYear[y] = byYear[y] || []).push(n); });
  $("#newsTrack").innerHTML = Object.keys(byYear).sort((a, b) => b.localeCompare(a)).map((y) => `
    <div class="news-year reveal">
      <h3 class="news-y">${esc(y)}</h3>
      <div class="news-list">${byYear[y].map((n) => `
        <article class="news-card">
          <div class="news-meta"><span class="news-cat">${esc(n.category)}</span><span>${esc(n.date)}${n.source ? ` · ${esc(n.source)}` : ""}</span></div>
          <h4>${esc(n.title)}${badge(n.verified === true ? true : N.verified)}</h4>
          <p>${esc(n.body)}</p>
          ${n.link ? `<a class="more" href="${esc(n.link)}" target="_blank" rel="noopener">기사 보기 →</a>` : ""}
        </article>`).join("")}</div>
    </div>`).join("");

  // CONTACT
  const C = D.contact;
  $("#contactRecruit").textContent = C.recruit;
  $("#contactCard").innerHTML = `
    <dl>
      <dt>EMAIL</dt><dd><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></dd>
      <dt>ADDRESS ${badge(C.verified)}</dt><dd>${esc(C.address)}</dd>
    </dl>
    ${C.verified === false ? `<small style="opacity:.6">${esc(C.note)}</small>` : ""}`;

  // 비어 있는 블록 숨기기
  if (!D.research.length) $("#researchGrid").style.display = "none";
  if (!D.pipeline.items.length) $("#pipeline").style.display = "none";
  if (!D.projects.items.length) {
    document.querySelector("#projects").style.display = "none";
    document.querySelector('.nav-links a[href="#projects"]').style.display = "none";
  }

  // NAV: scrolled state + active link + mobile toggle
  const nav = $("#nav");
  const links = [...document.querySelectorAll(".nav-links a")];
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    let cur = "";
    document.querySelectorAll("section[id]").forEach((s) => { if (s.getBoundingClientRect().top < 120) cur = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $("#navToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  links.forEach((a) => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

  // Reveal on scroll + pipeline bars (오류가 나면 내용이 숨겨지지 않도록 마지막에 켭니다)
  document.documentElement.classList.add("reveal-on");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      en.target.querySelectorAll?.(".pl-bar i").forEach((b) => (b.style.width = b.dataset.w));
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  document.querySelectorAll(".pl-bar i").forEach((b) => { if (!b.closest(".reveal")) b.style.width = b.dataset.w; });
})();
