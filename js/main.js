/**
 * Portfolio Main Script
 * Handles rendering, interactions, and animations.
 */

(function () {
  "use strict";

  const data = PORTFOLIO_DATA;

  const EXPERIENCE_LABELS = {
    work: "Work Experience",
    internship: "Internship",
    training: "Training",
    volunteer: "Volunteer Work",
    event: "Event",
  };

  /* ── DOM References ──────────────────────────────────────────────────────── */
  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  /* ── Navigation ────────────────────────────────────────────────────────────── */
  function initNavigation() {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile menu on link click
    navMenu.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Active link on scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    function updateActiveLink() {
      const scrollY = window.scrollY + varHeaderHeight() + 20;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    }

    function varHeaderHeight() {
      return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 72;
    }

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
      updateActiveLink();
    });

    updateActiveLink();
  }

  /* ── Scroll Animations ─────────────────────────────────────────────────────── */
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }

  /* ── Render: Hero ──────────────────────────────────────────────────────────── */
  function renderHero() {
    document.getElementById("hero-name").textContent = data.site.name;
    document.getElementById("hero-title").textContent = data.site.title;
    document.getElementById("hero-intro").textContent = data.site.intro;

    const statsContainer = document.getElementById("hero-stats");
    const stats = data.site.heroStats || [];

    statsContainer.innerHTML = stats
      .map(
        (stat) => `
        <div class="hero-stat">
          <p class="hero-stat__value">${escapeHtml(stat.value)}</p>
          <p class="hero-stat__label">${escapeHtml(stat.label)}</p>
        </div>`
      )
      .join("");

    const heroImage = document.getElementById("hero-image");
    heroImage.src = data.site.profileImage;
    heroImage.alt = `${data.site.name} profile photo`;

    const cvBtn = document.getElementById("btn-cv");
    cvBtn.href = toAssetUrl(data.site.cvPath);

    document.getElementById("footer-year").textContent = new Date().getFullYear();
    document.getElementById("footer-name").textContent = data.site.name;
    document.getElementById("nav-logo").textContent = data.site.brandName;
    document.title = data.site.brandName;
  }

  /* ── Render: About ─────────────────────────────────────────────────────────── */
  function renderAbout() {
    const bioContainer = document.getElementById("about-bio");
    bioContainer.innerHTML = data.about.biography
      .split(/\n\n+/)
      .map((paragraph) => `<p class="about__text">${escapeHtml(paragraph.trim())}</p>`)
      .join("");

    const eduContainer = document.getElementById("about-education");
    eduContainer.innerHTML = data.about.education
      .map(
        (edu) => `
        <div class="education-item">
          <p class="education-item__degree">${escapeHtml(edu.degree)}</p>
          <p class="education-item__institution">${escapeHtml(edu.institution)}</p>
          <p class="education-item__period">${escapeHtml(edu.period)}</p>
          ${edu.details ? `<p class="education-item__details">${escapeHtml(edu.details)}</p>` : ""}
        </div>`
      )
      .join("");

    const interestsContainer = document.getElementById("about-interests");
    interestsContainer.innerHTML = data.about.careerInterests
      .map((interest) => `<li>${escapeHtml(interest)}</li>`)
      .join("");
  }

  /* ── Render: Skills ──────────────────────────────────────────────────────────── */
  function renderSkills() {
    const container = document.getElementById("skills-container");

    if (!data.skills.length) {
      container.innerHTML = `<p class="empty-state">Skills will appear here once added.</p>`;
      return;
    }

    container.innerHTML = data.skills
      .map((category) => {
        const badges =
          category.items.length > 0
            ? category.items
                .map((skill) => `<span class="skill-badge">${escapeHtml(skill)}</span>`)
                .join("")
            : `<span class="skill-category__empty">Add skills to this category</span>`;

        return `
        <div class="skill-category fade-in">
          <h3 class="skill-category__title">${escapeHtml(category.category)}</h3>
          <div class="skill-category__badges">${badges}</div>
        </div>`;
      })
      .join("");

    // Re-observe newly added fade-in elements
    container.querySelectorAll(".fade-in").forEach((el) => {
      if (!el.classList.contains("visible")) {
        scrollObserver.observe(el);
      }
    });
  }

  /* ── Render: Projects ───────────────────────────────────────────────────────── */
  function renderProjects() {
    const container = document.getElementById("projects-container");
    const projectsNote = document.getElementById("projects-note");

    if (projectsNote && data.projectsNote) {
      projectsNote.innerHTML = data.projectsNote;
    }

    if (!data.projects.length) {
      container.innerHTML = `<p class="empty-state">Projects will appear here once added.</p>`;
      return;
    }

    container.innerHTML = data.projects
      .map(
        (project) => `
        <article class="project-card fade-in">
          <div class="project-card__thumb">
            <img src="${escapeAttr(toAssetUrl(project.thumbnail))}" alt="${escapeAttr(project.title)} thumbnail" loading="lazy" />
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
            <p class="project-card__desc">${escapeHtml(project.description)}</p>
            <div class="project-card__tech">
              ${project.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
            </div>
            <a href="project.html?id=${escapeAttr(project.id)}" class="btn btn--primary btn--small">
              View Project
            </a>
          </div>
        </article>`
      )
      .join("");

    container.querySelectorAll(".fade-in").forEach((el) => scrollObserver.observe(el));
  }

  /* ── Render: Certificates ────────────────────────────────────────────────────── */
  function renderCertificates() {
    const container = document.getElementById("certificates-container");

    if (!data.certificates.length) {
      container.innerHTML = `<p class="empty-state">Certificates will appear here once added.</p>`;
      return;
    }

    container.innerHTML = data.certificates
      .map(
        (cert) => `
        <article class="certificate-card fade-in">
          <div class="certificate-card__image">
            <img src="${escapeAttr(toAssetUrl(cert.image))}" alt="${escapeAttr(cert.title)} certificate" loading="lazy" />
          </div>
          <div class="certificate-card__body">
            <h3 class="certificate-card__title">${escapeHtml(cert.title)}</h3>
            <p class="certificate-card__org">${escapeHtml(cert.organization)}</p>
            <p class="certificate-card__date">${escapeHtml(cert.date)}</p>
            ${
              cert.viewPath
                ? `<a
              href="${escapeAttr(toAssetUrl(cert.viewPath))}"
              class="btn btn--secondary btn--small"
              target="_blank"
              rel="noopener noreferrer"
            >View Certificate</a>`
                : ""
            }
          </div>
        </article>`
      )
      .join("");

    container.querySelectorAll(".fade-in").forEach((el) => scrollObserver.observe(el));
  }

  /* ── Render: Courses ─────────────────────────────────────────────────────────── */
  function renderCourses() {
    const container = document.getElementById("courses-container");
    const courses = data.courses || [];

    if (!courses.length) {
      container.innerHTML = `<p class="empty-state">Courses will appear here once added.</p>`;
      return;
    }

    container.innerHTML = courses
      .map(
        (course) => `
        <article class="course-card fade-in">
          <h3 class="course-card__title">${escapeHtml(course.title)}</h3>
          <p class="course-card__provider">${escapeHtml(course.provider)}</p>
          ${
            course.viewPath
              ? `<a
            href="${escapeAttr(toAssetUrl(course.viewPath))}"
            class="btn btn--secondary btn--small"
            target="_blank"
            rel="noopener noreferrer"
          >View Certificate</a>`
              : ""
          }
        </article>`
      )
      .join("");

    container.querySelectorAll(".fade-in").forEach((el) => scrollObserver.observe(el));
  }

  /* ── Render: Experience ──────────────────────────────────────────────────────── */
  function renderExperience() {
    const container = document.getElementById("experience-container");

    if (!data.experience.length) {
      container.innerHTML = `<p class="empty-state">Experience will appear here once added.</p>`;
      return;
    }

    container.innerHTML = data.experience
      .map(
        (item) => `
        <div class="timeline-item fade-in">
          <span class="timeline-item__type">${EXPERIENCE_LABELS[item.type] || item.type}</span>
          <h3 class="timeline-item__title">${escapeHtml(item.title)}</h3>
          <p class="timeline-item__org">${escapeHtml(item.organization)}</p>
          <p class="timeline-item__period">${escapeHtml(item.period)}</p>
          <p class="timeline-item__desc">${escapeHtml(item.description)}</p>
          ${
            item.viewPath
              ? `<a
            href="${escapeAttr(toAssetUrl(item.viewPath))}"
            class="btn btn--secondary btn--small timeline-item__link"
            target="_blank"
            rel="noopener noreferrer"
          >View Certificate</a>`
              : ""
          }
        </div>`
      )
      .join("");

    container.querySelectorAll(".fade-in").forEach((el) => scrollObserver.observe(el));
  }

  /* ── Render: Contact ─────────────────────────────────────────────────────────── */
  function renderContact() {
    const container = document.getElementById("contact-links");

    container.innerHTML = `
      <a href="mailto:${escapeAttr(data.contact.email)}" class="contact__link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        ${escapeHtml(data.contact.email)}
      </a>
      <a href="tel:${escapeAttr(data.contact.phone.replace(/\s/g, ""))}" class="contact__link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        ${escapeHtml(data.contact.phone)}
      </a>
      <a href="${escapeAttr(data.contact.linkedin)}" class="contact__link" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
        LinkedIn
      </a>
      <a href="${escapeAttr(data.contact.github)}" class="contact__link" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        GitHub
      </a>`;
  }

  /* ── Utilities ───────────────────────────────────────────────────────────────── */
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

  /* ── Shared Scroll Observer (for dynamically rendered elements) ──────────────── */
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  /* ── Initialize ──────────────────────────────────────────────────────────────── */
  function init() {
    renderHero();
    renderAbout();
    renderCourses();
    renderSkills();
    renderProjects();
    renderCertificates();
    renderExperience();
    renderContact();
    initNavigation();
    initScrollAnimations();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
