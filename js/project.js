/**
 * Project detail page — renders a single project from ?id= in the URL.
 */

(function () {
  "use strict";

  const data = PORTFOLIO_DATA;

  const RESOURCE_ICONS = {
    pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    pptx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    demo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  };

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function toAssetUrl(path) {
    return String(path)
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/");
  }

  function projectSection(title, content) {
    return `
      <div class="modal__section">
        <h2 class="modal__section-title">${title}</h2>
        ${content}
      </div>`;
  }

  function resourceCard(resource) {
    const icon = RESOURCE_ICONS[resource.type] || RESOURCE_ICONS.demo;
    const href = resource.url || (resource.path ? toAssetUrl(resource.path) : "#");
    const isExternal = ["github", "demo"].includes(resource.type);
    const btnLabel = isExternal ? "Open" : "View";

    return `
      <div class="resource-card">
        <div class="resource-card__icon">${icon}</div>
        <p class="resource-card__label">${escapeHtml(resource.label)}</p>
        <a
          href="${escapeAttr(href)}"
          class="btn btn--secondary btn--small"
          target="_blank"
          rel="noopener noreferrer"
        >${btnLabel}</a>
      </div>`;
  }

  function renderProject(project) {
    const m = project.modal;
    const hasResources = project.resources && project.resources.length > 0;

    document.title = `${project.title} | ${data.site.brandName}`;
    document.querySelector('meta[name="description"]').setAttribute(
      "content",
      project.description
    );

    document.getElementById("project-detail").innerHTML = `
      <div class="project-detail__thumb">
        <img src="${escapeAttr(toAssetUrl(project.thumbnail))}" alt="${escapeAttr(project.title)} thumbnail" />
      </div>

      <div class="modal__header">
        <h1 class="modal__title">${escapeHtml(project.title)}</h1>
        <div class="modal__tech">
          ${m.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>

      ${projectSection("Project Overview", `<p>${escapeHtml(m.overview)}</p>`)}
      ${projectSection("Problem", `<p>${escapeHtml(m.problem)}</p>`)}
      ${projectSection("Solution", `<p>${escapeHtml(m.solution)}</p>`)}
      ${projectSection(
        "Key Features",
        `<ul class="modal__features">${m.keyFeatures.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>`
      )}
      ${projectSection("Technologies Used", `<p>${escapeHtml(m.technologies.join(", "))}</p>`)}
      ${projectSection("My Contributions", `<p>${escapeHtml(m.contributions)}</p>`)}
      ${projectSection("Challenges", `<p>${escapeHtml(m.challenges)}</p>`)}
      ${projectSection("Lessons Learned", `<p>${escapeHtml(m.lessonsLearned)}</p>`)}

      ${
        hasResources
          ? `
        <div class="modal__resources">
          <h2 class="modal__resources-title">Project Resources</h2>
          <div class="resources__grid">
            ${project.resources.map((res) => resourceCard(res)).join("")}
          </div>
        </div>`
          : ""
      }
    `;
  }

  function renderNotFound() {
    document.title = `Project Not Found | ${data.site.brandName}`;
    document.getElementById("project-detail").innerHTML = `
      <h1 class="modal__title">Project Not Found</h1>
      <p class="about__text">This project link may be incorrect or no longer available.</p>
      <a href="index.html#projects" class="btn btn--primary">View All Projects</a>
    `;
  }

  function initNavigation() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    navMenu.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function init() {
    document.getElementById("nav-logo").textContent = data.site.brandName;
    document.getElementById("footer-year").textContent = new Date().getFullYear();
    document.getElementById("footer-name").textContent = data.site.name;

    const projectId = new URLSearchParams(window.location.search).get("id");
    const project = data.projects.find((item) => item.id === projectId);

    if (project) {
      renderProject(project);
    } else {
      renderNotFound();
    }

    initNavigation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
