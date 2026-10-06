// ==========================================================
// Project data — edit this list to add, remove, or update projects.
// Set `link` to "" if a project doesn't have a public link yet.
// Set `caseStudy` to "" if it doesn't have a case study page.
// ==========================================================
const projects = [
  {
    title: "Pointing",
    category: "Design Change Challenge",
    tag: "design",
    date: "October 2025",
    location: "Carnegie Mellon University, Pittsburgh",
    bullets: [
      "Collaborated with a team of 4 to redesign and refactor an existing codebase.",
      "Redesigned a 4x4 grid-based target-selection interface, where users repeatedly clicked a highlighted box across 16 trials, using time between clicks as the core efficiency metric.",
      "Generated and evaluated multiple design concepts aimed at reducing user completion time and increasing efficiency.",
      "Documented the full design process in a presentation showcasing iteration and testing outcomes."
    ],
    thumb: "assets/thumbs/pointing.svg",
    caseStudy: "case-studies/pointing.html",
    linkLabel: "Slides",
    link: "https://docs.google.com/presentation/d/1RU4IrJyUyLe2iwohdRdCyTq388D0NrGd9GLIaGS1ISw/edit?usp=sharing"
  },
  {
    title: "Tiny Typing",
    category: "Design Change Challenge",
    tag: "design",
    date: "November 2025",
    location: "Carnegie Mellon University, Pittsburgh",
    bullets: [
      "Redesigned a miniaturized keyboard interface sized to fit an Apple Watch–scale device to maximize typing speed and accuracy in a constrained input space.",
      "Raised typing speed from 2.34 WPM (starter code) to 20.98 WPM in final testing.",
      "Implemented a prototype based on the team's top concept and conducted user testing to measure its impact on typing speed and error rate."
    ],
    thumb: "assets/thumbs/tiny-typing.svg",
    caseStudy: "case-studies/tiny-typing.html",
    linkLabel: "Slides",
    link: "https://docs.google.com/presentation/d/1CmO52Stlb7y68t36N1oe1kZbhPrxc_yevVkQ-eG7yCo/edit?usp=sharing"
  },
  {
    title: "Student Mental Health Dataset Evaluation",
    category: "Statistical Graphics & Visualization",
    tag: "data",
    date: "March 2026 – April 2026",
    location: "Carnegie Mellon University, Pittsburgh",
    bullets: [
      "Visualized and analyzed variables in RStudio to uncover trends in student mental health across a 150,000-student dataset.",
      "Summarized and presented key findings and takeaways in a slideshow."
    ],
    thumb: "assets/thumbs/mental-health.svg",
    caseStudy: "case-studies/mental-health.html",
    linkLabel: "Slides",
    link: "https://docs.google.com/presentation/d/1ZR8_kccfal4U0w3XGhmYPQA2-slTqbJr_3assf55akY/edit?usp=sharing"
  },
  {
    title: "Classic Creamery",
    category: "Application Design and Development",
    tag: "development",
    date: "February 2026 – April 2026",
    location: "Carnegie Mellon University, Pittsburgh",
    bullets: [
      "Analyzed a narrative use case to identify system actors and define core application requirements.",
      "Designed and implemented models, views, and controllers to structure the application's database.",
      "Developed test cases and test data that identified and resolved errors, improving application reliability."
    ],
    thumb: "assets/thumbs/classic-creamery.svg",
    caseStudy: "",
    linkLabel: "Link coming soon",
    link: ""
  }
];

// ==========================================================
// Rendering
// ==========================================================
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function projectCard(p, i) {
  const deck = p.link
    ? `<a class="btn btn-outline" href="${p.link}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.linkLabel)} &nearr;</a>`
    : `<span class="btn btn-outline disabled project-link" aria-disabled="true">${escapeHtml(p.linkLabel)}</span>`;
  const cs = p.caseStudy
    ? `<a class="btn btn-primary" href="${p.caseStudy}">Read case study &rarr;</a>`
    : "";
  const titleHtml = p.caseStudy
    ? `<a href="${p.caseStudy}">${escapeHtml(p.title)}</a>`
    : escapeHtml(p.title);
  const thumb = p.thumb
    ? (p.caseStudy
        ? `<a class="project-thumb" href="${p.caseStudy}" tabindex="-1" aria-hidden="true"><img src="${p.thumb}" alt="" loading="lazy"></a>`
        : `<div class="project-thumb" aria-hidden="true"><img src="${p.thumb}" alt="" loading="lazy"></div>`)
    : "";

  return `
    <article class="project-card${p.thumb ? " has-thumb" : ""} fade-up" style="animation-delay:${i * 0.08}s" data-tag="${p.tag}">
      ${thumb}
      <div>
        <p class="eyebrow">${escapeHtml(p.category)}</p>
        <h2>${titleHtml}</h2>
      </div>
      <div class="project-meta">
        <div class="meta-block"><span class="meta-label">Date</span><span class="meta-value">${escapeHtml(p.date)}</span></div>
        <div class="meta-block"><span class="meta-label">Where</span><span class="meta-value">${escapeHtml(p.location)}</span></div>
      </div>
      <ul>${p.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      <div class="project-actions">${cs}${deck}</div>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("project-list").innerHTML = projects.map(projectCard).join("");
});
