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

  // PIPELINE
  const P = D.pipeline;
  $("#pipelineNote").innerHTML = P.verified === false ? `${badge(false)} ${esc(P.note)}` : "";
  $("#pipelineStages").innerHTML = "<span></span>" + P.stages.map((s) => `<span>${esc(s)}</span>`).join("");
  $("#pipelineRows").innerHTML = P.items.map((it) => `
    <div class="pl-row">
      <div class="pl-name"><b>${esc(it.name)}</b><small>${esc(it.target)}</small></div>
      <div class="pl-bar"><i data-w="${(it.stage / P.stages.length) * 100}%"></i></div>
    </div>`).join("");

  // MEMBERS
  const M = D.members;
  $("#membersBadge").innerHTML = badge(M.verified);
  $("#membersNote").textContent = M.verified === false ? M.note : "";
  const pi = M.pi;
  $("#piCard").innerHTML = `
    <div class="avatar">${esc(pi.name.slice(-2))}</div>
    <div class="pi-info">
      <div class="role">Principal Investigator · ${esc(pi.title)}</div>
      <h3>${esc(pi.name)}</h3>
      <div class="en">${esc(pi.nameEn)} · <a href="mailto:${esc(pi.email)}">${esc(pi.email)}</a></div>
      <div class="pi-cols">
        <div><h4>EDUCATION</h4><ul>${pi.education.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></div>
        <div><h4>CAREER</h4><ul>${pi.career.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></div>
      </div>
    </div>`;
  $("#peopleGrid").innerHTML = M.people.map((p, i) => `
    <div class="person reveal" style="transition-delay:${i * 70}ms">
      <div class="avatar sm">${esc(p.name.slice(-1))}</div>
      <div><b>${esc(p.name)}</b><span>${esc(p.role)}</span></div>
    </div>`).join("");

  // PUBLICATIONS
  const pubs = D.publications.items;
  $("#pubNote").textContent = D.publications.note || "";
  const years = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
  let fYear = "all", q = "", onlyCorr = false;
  $("#pubFilters").innerHTML = ['<button class="chip on" data-y="all">전체</button>']
    .concat(years.map((y) => `<button class="chip" data-y="${y}">${y}</button>`)).join("")
    + '<button class="chip chip-corr" id="corrToggle" aria-pressed="false">교신저자 논문만</button>';
  function renderPubs() {
    const list = pubs.filter((p) => (fYear === "all" || String(p.year) === fYear) && (!onlyCorr || p.corresponding) &&
      (!q || (p.title + " " + p.journal + " " + (p.tags || []).join(" ")).toLowerCase().includes(q)));
    $("#pubCount").textContent = `${list.length}편 / 전체 ${pubs.length}편`;
    $("#pubList").innerHTML = list.length ? list.map((p) => `
      <li class="pub">
        <div class="yr">${p.year}</div>
        <div>
          <div class="t">${esc(p.title)}${p.corresponding ? ' <span class="corr" title="교신저자">Corresponding</span>' : ""}</div>
          <div class="j">${esc(p.journal)}${p.doi ? ` · <a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI</a>` : ""}</div>
          <div class="tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
      </li>`).join("") : '<li class="pub-empty">검색 결과가 없습니다.</li>';
  }
  $("#pubFilters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    if (b.id === "corrToggle") { onlyCorr = !onlyCorr; b.classList.toggle("on", onlyCorr); b.setAttribute("aria-pressed", onlyCorr); renderPubs(); return; }
    document.querySelectorAll("#pubFilters .chip:not(#corrToggle)").forEach((c) => c.classList.toggle("on", c === b));
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
  $("#newsTrack").innerHTML = N.items.map((n, i) => `
    <article class="news-card reveal" style="transition-delay:${i * 80}ms">
      <div class="news-meta"><span class="news-cat">${esc(n.category)}</span><span>${esc(n.date)}</span></div>
      <h3>${esc(n.title)}${badge(n.verified === true ? true : N.verified)}</h3>
      <p>${esc(n.body)}</p>
      ${n.link ? `<a class="more" href="${esc(n.link)}" target="_blank" rel="noopener">자세히 보기 →</a>` : ""}
    </article>`).join("");

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

  // Reveal on scroll + pipeline bars
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      en.target.querySelectorAll?.(".pl-bar i").forEach((b) => (b.style.width = b.dataset.w));
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
