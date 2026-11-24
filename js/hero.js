/*
 * Hero animation: "Cancer X"
 * 정상세포(중심체 2개) 사이에 섞인 암세포(다중 중심체)를
 * 표적 입자가 찾아가 선택적으로 제거하는 장면을 추상적으로 표현합니다.
 * 클릭하면 그 위치에서 표적 입자가 추가로 방출됩니다.
 */
(function () {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let W = 0, H = 0, dpr = 1;
  let cells = [], drugs = [], sparks = [];
  const mouse = { x: -9999, y: -9999 };

  const rand = (a, b) => a + Math.random() * (b - a);

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    init();
  }

  function makeCell(cancer) {
    // 오른쪽 영역에 더 많이 배치 (왼쪽은 텍스트)
    const x = W < 760 ? rand(0, W) : rand(W * 0.35, W);
    const r = cancer ? rand(22, 34) : rand(16, 26);
    const n = cancer ? Math.floor(rand(3, 6)) : 2;
    const cs = [];
    for (let i = 0; i < n; i++) cs.push({ a: rand(0, Math.PI * 2), d: rand(0.25, 0.55), s: rand(0.004, 0.012) });
    return {
      x, y: rand(0, H), r, cancer,
      vx: rand(-0.15, 0.15), vy: rand(-0.15, 0.15),
      phase: rand(0, 6.28), cs,
      hits: 0, need: Math.floor(rand(5, 9)),
      dying: 0, alpha: reduce ? 1 : 0,
    };
  }

  function init() {
    const area = W * H;
    const nNormal = Math.round(area / 26000);
    const nCancer = Math.max(4, Math.round(area / 110000));
    cells = [];
    for (let i = 0; i < nNormal; i++) cells.push(makeCell(false));
    for (let i = 0; i < nCancer; i++) cells.push(makeCell(true));
    drugs = []; sparks = [];
  }

  function spawnDrug(x, y) {
    drugs.push({
      x: x ?? rand(W * 0.3, W), y: y ?? (Math.random() < 0.5 ? -10 : H + 10),
      vx: rand(-1, 1), vy: rand(-1, 1), target: null, life: 0, trail: [],
    });
  }

  function nearestCancer(d) {
    let best = null, bd = Infinity;
    for (const c of cells) {
      if (!c.cancer || c.dying) continue;
      const dd = (c.x - d.x) ** 2 + (c.y - d.y) ** 2;
      if (dd < bd) { bd = dd; best = c; }
    }
    return best;
  }

  function burst(c) {
    for (let i = 0; i < 26; i++) {
      const a = rand(0, Math.PI * 2), s = rand(0.6, 2.8);
      sparks.push({ x: c.x, y: c.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, cancer: Math.random() < 0.6 });
    }
  }

  function drawCell(c, t) {
    const a = c.alpha * (c.dying ? Math.max(0, 1 - c.dying) : 1);
    if (a <= 0) return;
    const R = c.r * (c.dying ? 1 + c.dying * 0.4 : 1);
    ctx.save();
    ctx.globalAlpha = a;
    ctx.beginPath();
    const pts = 28;
    for (let i = 0; i <= pts; i++) {
      const th = (i / pts) * Math.PI * 2;
      const wob = c.cancer
        ? 1 + 0.12 * Math.sin(th * 3 + t * 0.0012 + c.phase) + 0.06 * Math.sin(th * 5 - t * 0.002)
        : 1 + 0.03 * Math.sin(th * 2 + t * 0.001 + c.phase);
      const px = c.x + Math.cos(th) * R * wob, py = c.y + Math.sin(th) * R * wob;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath();
    if (c.cancer) {
      const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, R * 1.2);
      const heat = Math.min(1, c.hits / c.need);
      g.addColorStop(0, `rgba(255,${90 + heat * 80},${120 + heat * 60},0.55)`);
      g.addColorStop(1, "rgba(255,77,109,0.08)");
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = "rgba(255,110,140,0.85)"; ctx.lineWidth = 1.4; ctx.stroke();
      ctx.shadowColor = "rgba(255,77,109,0.8)"; ctx.shadowBlur = 18; ctx.stroke(); ctx.shadowBlur = 0;
    } else {
      ctx.fillStyle = "rgba(120,160,230,0.07)"; ctx.fill();
      ctx.strokeStyle = "rgba(143,179,232,0.45)"; ctx.lineWidth = 1; ctx.stroke();
    }
    // nucleus
    ctx.beginPath(); ctx.arc(c.x, c.y, R * 0.32, 0, Math.PI * 2);
    ctx.fillStyle = c.cancer ? "rgba(255,160,180,0.35)" : "rgba(143,179,232,0.18)"; ctx.fill();
    // centrosomes
    for (const s of c.cs) {
      s.a += s.s;
      const px = c.x + Math.cos(s.a) * R * s.d * 1.3, py = c.y + Math.sin(s.a) * R * s.d * 1.3;
      ctx.beginPath(); ctx.arc(px, py, c.cancer ? 2.4 : 1.8, 0, Math.PI * 2);
      ctx.fillStyle = c.cancer ? "#ffd1db" : "rgba(190,210,245,0.8)"; ctx.fill();
    }
    ctx.restore();
  }

  let last = 0, spawnTimer = 0;
  function frame(t) {
    const dt = Math.min(50, t - last || 16); last = t;
    ctx.clearRect(0, 0, W, H);

    // cells
    for (const c of cells) {
      c.alpha = Math.min(1, c.alpha + 0.01);
      c.x += c.vx; c.y += c.vy;
      const dx = c.x - mouse.x, dy = c.y - mouse.y, md = Math.hypot(dx, dy);
      if (md < 140 && md > 0) { c.x += (dx / md) * 0.8; c.y += (dy / md) * 0.8; }
      if (c.x < -40) c.x = W + 40; if (c.x > W + 40) c.x = -40;
      if (c.y < -40) c.y = H + 40; if (c.y > H + 40) c.y = -40;
      if (c.dying) {
        c.dying += 0.02;
        if (c.dying >= 1) Object.assign(c, makeCell(true));
      }
      drawCell(c, t);
    }

    // drugs
    spawnTimer += dt;
    if (spawnTimer > 260 && drugs.length < 60) { spawnTimer = 0; spawnDrug(); }
    ctx.save();
    for (let i = drugs.length - 1; i >= 0; i--) {
      const d = drugs[i];
      d.life++;
      if (!d.target || d.target.dying || !d.target.cancer) d.target = nearestCancer(d);
      if (d.target) {
        const dx = d.target.x - d.x, dy = d.target.y - d.y, dist = Math.hypot(dx, dy);
        d.vx += (dx / dist) * 0.12; d.vy += (dy / dist) * 0.12;
        // 정상세포 회피
        for (const c of cells) {
          if (c.cancer) continue;
          const ex = d.x - c.x, ey = d.y - c.y, ed = Math.hypot(ex, ey);
          if (ed < c.r + 14 && ed > 0) { d.vx += (ex / ed) * 0.35; d.vy += (ey / ed) * 0.35; }
        }
        if (dist < d.target.r * 0.9) {
          d.target.hits++;
          if (d.target.hits >= d.target.need && !d.target.dying) { d.target.dying = 0.001; burst(d.target); }
          drugs.splice(i, 1); continue;
        }
      }
      const sp = Math.hypot(d.vx, d.vy), max = 2.6;
      if (sp > max) { d.vx = (d.vx / sp) * max; d.vy = (d.vy / sp) * max; }
      d.x += d.vx; d.y += d.vy;
      d.trail.push([d.x, d.y]); if (d.trail.length > 14) d.trail.shift();
      if (d.life > 900) { drugs.splice(i, 1); continue; }

      ctx.beginPath();
      d.trail.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.strokeStyle = "rgba(25,211,197,0.35)"; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.beginPath(); ctx.arc(d.x, d.y, 2.6, 0, Math.PI * 2);
      ctx.fillStyle = "#19d3c5"; ctx.shadowColor = "#19d3c5"; ctx.shadowBlur = 12; ctx.fill(); ctx.shadowBlur = 0;
    }
    ctx.restore();

    // sparks
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx; s.y += s.vy; s.vx *= 0.96; s.vy *= 0.96; s.life -= 0.02;
      if (s.life <= 0) { sparks.splice(i, 1); continue; }
      ctx.globalAlpha = s.life;
      ctx.beginPath(); ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = s.cancer ? "#ff8fa6" : "#19d3c5"; ctx.fill();
      ctx.globalAlpha = 1;
    }

    if (!reduce) requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  canvas.parentElement.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
  canvas.parentElement.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const r = canvas.getBoundingClientRect();
    for (let i = 0; i < 10; i++) spawnDrug(e.clientX - r.left + rand(-6, 6), e.clientY - r.top + rand(-6, 6));
  });

  resize();
  requestAnimationFrame(frame);
})();
