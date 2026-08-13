(() => {
  const cfg = window.SITE_CONFIG;
  const $ = (s) => document.querySelector(s);
  const pad = (n) => String(Math.max(0, n)).padStart(2, "0");
  const external = (el, url) => { if (!url) return; el.href = url; if (/^https?:/.test(url)) { el.target = "_blank"; el.rel = "noopener"; } };

  document.querySelectorAll("[data-link]").forEach(el => external(el, cfg.links[el.dataset.link]));
  $("#footer-address").textContent = cfg.church.address;
  $("#year").textContent = new Date().getFullYear();

  const logo = $("#brand-logo");
  if (cfg.church.logo) { logo.src = cfg.church.logo; logo.onload = () => { logo.hidden = false; $(".brand-mark").hidden = true; }; }

  const menu = $(".menu-button"), nav = $("nav");
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") === "true"; menu.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open); });
  nav.addEventListener("click", () => { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); });

  function nextService() {
    const now = new Date();
    return cfg.weeklyServices.map(service => {
      const date = new Date(now); let days = (service.weekday - now.getDay() + 7) % 7;
      date.setDate(now.getDate() + days); date.setHours(service.hour, service.minute, 0, 0);
      if (date <= now) date.setDate(date.getDate() + 7);
      return { ...service, date };
    }).sort((a, b) => a.date - b.date)[0];
  }
  const next = nextService();
  $("#service-name").textContent = next.name;
  $("#service-date").textContent = new Intl.DateTimeFormat("pt-BR", { weekday: "long", hour: "2-digit", minute: "2-digit", timeZone: cfg.church.timezone }).format(next.date).replace(/^./, c => c.toUpperCase());
  const tick = () => { const diff = Math.max(0, next.date - new Date()); $("#days").textContent = pad(Math.floor(diff / 864e5)); $("#hours").textContent = pad(Math.floor(diff / 36e5) % 24); $("#minutes").textContent = pad(Math.floor(diff / 6e4) % 60); };
  tick(); setInterval(tick, 30000);

  const day = new Date().getDay(); const feature = day === 0 ? cfg.featured.sunday : day === 5 ? cfg.featured.friday : cfg.featured.default;
  [["#featured-tag","tag"],["#featured-title","title"],["#featured-description","description"],["#featured-date","date"],["#featured-location","location"]].forEach(([id,key]) => $(id).textContent = feature[key]);
  external($("#featured-link"), feature.link);
  const featuredImg = $("#featured-image"); featuredImg.src = feature.image; featuredImg.onload = () => { featuredImg.hidden = false; $("#featured-monogram").hidden = true; };
  if (day === 0 || day === 5) $("#context-note").textContent = "Hoje a casa se reúne. Tudo o que você precisa está aqui.";

  const grid = $("#photo-grid");
  cfg.photos.forEach((photo, i) => { const figure = document.createElement("figure"); figure.className = `photo photo-${i+1} media-fallback`; const img = document.createElement("img"); img.src = photo.src; img.alt = photo.alt; img.addEventListener("error", () => img.remove()); figure.append(img); grid.append(figure); });

  $("#message-title").innerHTML = cfg.message.title.replace(/\s+(\S+)$/, "<br><em>$1</em>"); $("#message-speaker").textContent = cfg.message.speaker; external($("#message-link"), cfg.message.url); external($("#message-play"), cfg.message.url);
  const messageImg = $("#message-image"); messageImg.src = cfg.message.image; messageImg.onload = () => messageImg.hidden = false;

  const list = $("#event-list");
  cfg.events.forEach(event => { const a = document.createElement("a"); a.className = "event-row"; external(a, event.link); a.innerHTML = `<time><b>${event.date}</b><small>${event.month}</small></time><div><h3>${event.title}</h3><p>${event.info}</p></div><span>→</span>`; list.append(a); });
  const socials = $("#social-links"); ["instagram","youtube","facebook"].forEach(name => { const a = document.createElement("a"); a.textContent = name[0].toUpperCase() + name.slice(1); external(a, cfg.links[name]); socials.append(a); });

  const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
  document.querySelectorAll(".section").forEach(section => observer.observe(section));
})();
