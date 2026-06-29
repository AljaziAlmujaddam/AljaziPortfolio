/**
 * Project Detail Page Script
 */

(function () {
  "use strict";

  const data = PORTFOLIO_DATA;
  const ui = data.ui.projectPage || {};
  const isRtl = data.dir === "rtl";
  const homePage = isRtl ? "index-ar.html#projects" : "index.html#projects";

  const labels = {
    back: ui.back || "Back to Projects",
    notFound: ui.notFound || "Project not found.",
    overview: ui.overview || "Overview",
    problem: ui.problem || "Problem",
    solution: ui.solution || "Solution",
    keyFeatures: ui.keyFeatures || "Key Features",
    technologies: ui.technologies || "Technologies",
    contributions: ui.contributions || "Contributions",
    challenges: ui.challenges || "Challenges",
    lessonsLearned: ui.lessonsLearned || "Lessons Learned",
    resources: ui.resources || "Resources",
    btnOpen: ui.btnOpen || "Open",
  };

  const RESOURCE_ICONS = {
    pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
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

  function getProjectId() {
    return new URLSearchParams(window.location.search).get("id");
  }

  function renderSection(title, content) {
    if (!content) return "";
    return `
      <section class="modal__section">
        <h3 class="modal__section-title">${escapeHtml(title)}</h3>
        <p>${escapeHtml(content)}</p>
      </section>`;
  }

  function renderFeatures(title, features) {
    if (!features || !features.length) return "";
    return `
      <section class="modal__section">
        <h3 class="modal__section-title">${escapeHtml(title)}</h3>
        <ul class="modal__features">
          ${features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
        </ul>
      </section>`;
  }

  function renderTechnologies(title, technologies) {
    if (!technologies || !technologies.length) return "";
    return `
      <section class="modal__section">
        <h3 class="modal__section-title">${escapeHtml(title)}</h3>
        <div class="modal__tech">
          ${technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
        </div>
      </section>`;
  }

  function renderResources(title, resources) {
    if (!resources || !resources.length) return "";
    return `
      <section class="modal__resources">
        <h3 class="modal__resources-title">${escapeHtml(title)}</h3>
        <div class="resources__grid">
          ${resources
            .map((resource) => {
              const href = resource.url || toAssetUrl(resource.path);
              const icon = RESOURCE_ICONS[resource.type] || RESOURCE_ICONS.pdf;
              return `
              <a href="${escapeAttr(href)}" class="resource-card" target="_blank" rel="noopener noreferrer">
                <span class="resource-card__icon">${icon}</span>
                <span class="resource-card__label">${escapeHtml(resource.label)}</span>
                <span class="resource-card__btn btn btn--secondary btn--small btn--full">${escapeHtml(labels.btnOpen)}</span>
              </a>`;
            })
            .join("")}
        </div>
      </section>`;
  }

  function renderProject(project) {
    const modal = project.modal || {};
    const techList = modal.technologies || project.technologies || [];

    return `
      <article class="project-detail card">
        <div class="project-detail__thumb">
          <img src="${escapeAttr(toAssetUrl(project.thumbnail))}" alt="${escapeAttr(project.title)}" />
        </div>
        <header class="modal__header">
          <h1 class="modal__title">${escapeHtml(project.title)}</h1>
          <p class="project-card__desc">${escapeHtml(project.description)}</p>
          <div class="modal__tech">
            ${project.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
          </div>
        </header>
        ${renderSection(labels.overview, modal.overview)}
        ${renderSection(labels.problem, modal.problem)}
        ${renderSection(labels.solution, modal.solution)}
        ${renderFeatures(labels.keyFeatures, modal.keyFeatures)}
        ${renderTechnologies(labels.technologies, techList)}
        ${renderSection(labels.contributions, modal.contributions)}
        ${renderSection(labels.challenges, modal.challenges)}
        ${renderSection(labels.lessonsLearned, modal.lessonsLearned)}
        ${renderResources(labels.resources, project.resources)}
      </article>`;
  }

  function init() {
    document.documentElement.lang = data.lang;
    document.documentElement.dir = data.dir;

    const backLink = document.getElementById("project-back");
    if (backLink) {
      backLink.href = homePage;
      backLink.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
        </svg>
        ${escapeHtml(labels.back)}`;
    }

    const container = document.getElementById("project-content");
    const projectId = getProjectId();
    const project = data.projects.find((p) => p.id === projectId);

    if (!project) {
      container.innerHTML = `<p class="empty-state">${escapeHtml(labels.notFound)}</p>`;
      document.title = labels.notFound;
      return;
    }

    container.innerHTML = renderProject(project);
    document.title = `${project.title} - ${data.site.brandName}`;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
