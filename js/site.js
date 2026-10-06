// ==========================================================
// Site settings — edit these once and every page updates.
// Leave linkedin / github as "" to hide them.
// ==========================================================
const SITE = {
  name: "Annie Min",
  email: "anniemin2005@gmail.com",
  linkedin: "",   // e.g. "https://www.linkedin.com/in/your-handle"
  github: "",     // e.g. "https://github.com/your-username"
  resume: "assets/Annie-Min-Resume.pdf"
};

// ==========================================================
// Shared header & footer
// Each page has <header id="site-header" data-root="" data-page="home">.
// data-root is the path back to the site root ("" or "../").
// ==========================================================
(function () {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const root = (header && header.dataset.root) || "";
  const page = (header && header.dataset.page) || "";

  const icons = {
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>'
  };

  const socials = [
    { key: "email", href: "mailto:" + SITE.email, label: "Email" },
    { key: "linkedin", href: SITE.linkedin, label: "LinkedIn" },
    { key: "github", href: SITE.github, label: "GitHub" }
  ].filter((s) => s.key === "email" || s.href);

  const socialHtml = socials.map((s) => {
    const external = s.key !== "email" ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a class="social-link" href="${s.href}" aria-label="${s.label}"${external}>${icons[s.key]}</a>`;
  }).join("");

  const navItem = (href, label, key) =>
    `<li><a href="${root}${href}"${page === key ? ' aria-current="page"' : ""}>${label}</a></li>`;

  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <nav class="container nav" aria-label="Main">
        <a href="${root}index.html" class="logo">${SITE.name}</a>
        <ul class="nav-links">
          ${navItem("index.html#projects", "Projects", "home")}
          <li><a href="${root}${SITE.resume}" target="_blank" rel="noopener">Resume</a></li>
        </ul>
      </nav>`;
  }

  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container footer-inner">
        <div class="socials">${socialHtml}</div>
      </div>`;
  }

  // Fill any element marked data-site="email" / "resume"
  document.querySelectorAll('[data-site="email"]').forEach((a) => (a.href = "mailto:" + SITE.email));
  document.querySelectorAll('[data-site="resume"]').forEach((a) => (a.href = root + SITE.resume));
})();
