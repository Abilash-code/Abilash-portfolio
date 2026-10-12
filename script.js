/* ==========================================================================
   ABILASH JAYAN - PORTFOLIO INTERACTION ENGINE
   High-performance particle canvas, dynamic typist, modal system, & utilities
   ========================================================================== */

// Project Deep Dive Database
const PROJECT_DETAILS = {
  p1: {
    title: "Regional Video Game Price Aggregator (DesiCheapShark)",
    category: "Automation, Scraping & APIs",
    badge: "Python • Playwright • BS4 • IGDB API",
    videoUrl: "demos/desi_cheap_shark_demo.mp4",
    overview: "A localized price tracking and arbitrage detection platform specifically engineered for Indian gamers. Bypasses client-side rendering bottlenecks and dynamic anti-bot protections to harvest real-time regional INR pricing across digital storefronts.",
    architecturalHighlights: [
      "Engineered automated browser instances using Playwright to bypass dynamic SPA rendering barriers on Steam and Epic Games Store.",
      "Developed high-throughput HTML extraction pipelines using BeautifulSoup4 with resilient CSS selectors and regex extractors.",
      "Integrated the Twitch / IGDB API to normalize game titles, metadata, cover artwork, and genres into canonical entities.",
      "Implemented intelligent caching and rate-limiting routines to maintain scraping stealth and avoid IP blocks."
    ],
    techStack: ["Python 3.11", "Playwright", "BeautifulSoup4", "IGDB API", "Requests", "JSON Parser"],
    githubUrl: "https://github.com/Abilash-code"
  },
  p2: {
    title: "Full-Stack CRUD Inquiry System & Data Exporter",
    category: "Full-Stack Web Development & Systems",
    badge: "Node.js • Express.js • SQLite3 • ExcelJS",
    videoUrl: "demos/crud_site_demo.mp4",
    overview: "A responsive, production-ready enterprise inquiry management platform built from scratch. Features lightweight relational data persistence and real-time multi-format streaming export routines directly to the browser.",
    architecturalHighlights: [
      "Engineered a modular RESTful backend in Node.js and Express.js with robust route separation and parameter validation.",
      "Designed an embedded SQLite3 relational database schema with custom indexed SQL queries yielding sub-millisecond responses.",
      "Built multi-format stream-based export pipelines supporting JSON, CSV (via csv-stringify), and multi-sheet Excel workbooks (via ExcelJS).",
      "Crafted an interactive, reactive vanilla JavaScript UI leveraging the Fetch API for smooth asynchronous CRUD operations without page reloads."
    ],
    techStack: ["Node.js", "Express.js", "SQLite3", "ExcelJS", "csv-stringify", "HTML5/CSS3", "Fetch API"],
    githubUrl: "https://github.com/Abilash-code"
  },
  p3: {
    title: "SalesSequencer | Automated CRM Lead Pipeline",
    category: "Full-Stack & Workflow Automation",
    badge: "Node.js • Express • SQLite • Resend API",
    overview: "An automated lead ingestion, intent qualification, and programmatic email dispatch engine designed to streamline outbound sales conversions for distributed sales teams.",
    architecturalHighlights: [
      "Engineered an automated ingestion pipeline capturing prospective leads from web forms, Google Ads, and Facebook Ads webhooks.",
      "Implemented a dynamic scoring heuristic that computes buyer intent metrics based on form interactions, budget criteria, and channel source.",
      "Designed conditional dispatch rules routing high-priority leads immediately to regional sales managers.",
      "Integrated the Resend API to trigger customized transactional emails and outreach sequences with tracking."
    ],
    techStack: ["Node.js", "Express.js", "SQLite", "Resend API", "REST Architecture", "Lead Scoring Engine"],
    githubUrl: "https://github.com/Abilash-code"
  },
  p4: {
    title: "Auto-Ballooning Software for Technical Blueprints",
    category: "Computer Vision & Engineering Automation",
    badge: "Python • Computer Vision • CAD Blueprints",
    overview: "A specialized engineering inspection automation software that eliminates manual quality assurance bottleneck by programmatically identifying inspection dimensions and overlaying numbered balloon callouts onto technical drawings.",
    architecturalHighlights: [
      "Designed image processing and OCR routines to parse mechanical drawing sheets, detecting dimensions, tolerances, and annotations.",
      "Automated the geometric overlay of sequential numbered inspection balloons onto PDF and image CAD drawings.",
      "Exported serialized First Article Inspection (FAI) inspection reports aligned with aerospace and manufacturing standards.",
      "Significantly accelerated engineering drawing sign-off timelines from hours to seconds."
    ],
    techStack: ["Python", "Computer Vision", "PDF Processing", "Image Transforms", "Automation Engine"],
    githubUrl: "https://github.com/Abilash-code/Auto-ballooning-software"
  },
  p5: {
    title: "High-Yield YouTube Metadata Scraper & Extractor",
    category: "Data Pipelines & Web Scraping",
    badge: "Python • JSON Extractor • ETL",
    videoUrl: "demos/youtube_scrapper_demo.mp4",
    overview: "A targeted extraction utility designed to parse nested JSON responses and extract structured video attributes, transcript segments, and engagement metrics at scale.",
    architecturalHighlights: [
      "Decoded and parsed deeply nested innerTube JSON payloads returned from video requests without requiring heavy official API quotas.",
      "Extracted rich video metrics including view count velocity, category tags, author details, and comment threads.",
      "Implemented robust sanitization and schema standardization for downstream sentiment analysis and model training.",
      "Modular command-line interface with customizable target query lists and export formats."
    ],
    techStack: ["Python", "JSON Processing", "Regex", "ETL Pipelines", "Data Sanitization"],
    githubUrl: "https://github.com/Abilash-code"
  }
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initTypingEffect();
  initProjectFilters();
  initNavigation();
  initFooterYear();
  initScrollSpy();
});

/* ==========================================================================
   PARTICLE CONSTELLATION CANVAS
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById("canvas-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 16000), 65);
  const maxDistance = 120;

  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.6 + 0.8;
      this.color = "rgba(100, 116, 139, ";
      this.baseAlpha = Math.random() * 0.25 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.2;
          this.y -= (dy / dist) * force * 1.2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.baseAlpha + ")";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   DYNAMIC TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const target = document.getElementById("typing-text");
  if (!target) return;

  const roles = [
    "Full-Stack & Backend Developer",
    "Playwright Automation & Web Scraper",
    "Python & Node.js Specialist",
    "1st Place Winner @ Metaverse '25 Hackathon",
    "AI-Native Software Engineer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 65;
  const eraseSpeed = 35;
  const delayBetweenWords = 1900;

  function type() {
    const currentWord = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentWord.substring(0, charIndex);
    }

    let delta = isDeleting ? eraseSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delta = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delta = 400;
    }

    setTimeout(type, delta);
  }

  type();
}

/* ==========================================================================
   PROJECT FILTERING SYSTEM
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        const hasVideo = card.getAttribute("data-has-video") === "true";

        let show = false;
        if (filterValue === "all") {
          show = true;
        } else if (filterValue === "video") {
          show = hasVideo;
        } else if (category === filterValue) {
          show = true;
        }

        if (show) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   MODAL WINDOW CONTROLLER & VIDEO DEMO PLAYER
   ========================================================================== */
window.openProjectModal = function (projectId) {
  const modal = document.getElementById("project-modal");
  const slot = document.getElementById("modal-content-slot");
  const data = PROJECT_DETAILS[projectId];

  if (!modal || !slot || !data) return;

  let highlightsHtml = data.architecturalHighlights
    .map((item) => `<li>${item}</li>`)
    .join("");

  let techPillsHtml = data.techStack
    .map((tech) => `<span class="tech-pill">${tech}</span>`)
    .join(" ");

  let videoSectionHtml = "";
  if (data.videoUrl) {
    videoSectionHtml = `
      <div class="modal-section-title">Recorded Project Demo</div>
      <div class="video-player-wrapper">
        <video controls playsinline preload="metadata">
          <source src="${data.videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  }

  slot.innerHTML = `
    <div class="modal-category">${data.category}</div>
    <h2 class="modal-title">${data.title}</h2>
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.2rem;">
      ${data.badge}
    </div>
    
    ${videoSectionHtml}

    <div class="modal-section-title">Architectural Overview</div>
    <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">${data.overview}</p>

    <div class="modal-section-title">Key Engineering Innovations</div>
    <ul class="modal-highlights-list">
      ${highlightsHtml}
    </ul>

    <div class="modal-section-title">Technologies Utilized</div>
    <div class="project-tech-stack">
      ${techPillsHtml}
    </div>

    <div class="modal-actions">
      ${data.videoUrl ? `<button class="btn btn-primary btn-sm" onclick="closeProjectModal(); openVideoModal('${projectId}')">▶ Fullscreen Video</button>` : ''}
      <a href="${data.githubUrl}" target="_blank" class="btn btn-secondary btn-sm">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        GitHub Source
      </a>
      <button class="btn btn-outline-cyan btn-sm" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function () {
  const modal = document.getElementById("project-modal");
  if (modal) {
    const video = modal.querySelector("video");
    if (video) {
      video.pause();
    }
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

window.closeModalOnBackdrop = function (e) {
  if (e.target.id === "project-modal") {
    closeProjectModal();
  }
};

/* Dedicated Video Player Modal */
window.openVideoModal = function (projectId) {
  const modal = document.getElementById("video-modal");
  const slot = document.getElementById("video-modal-content-slot");
  const data = PROJECT_DETAILS[projectId];

  if (!modal || !slot || !data || !data.videoUrl) return;

  slot.innerHTML = `
    <div class="video-modal-header">
      <div class="modal-category">${data.category}</div>
      <h2 class="video-modal-title">${data.title}</h2>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: var(--text-muted);">
        ${data.badge}
      </div>
    </div>

    <div class="video-player-wrapper">
      <video controls autoplay playsinline>
        <source src="${data.videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <p style="color: var(--text-body); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem;">
      ${data.overview}
    </p>

    <div class="modal-actions" style="margin-top: 0; padding-top: 1rem;">
      <button class="btn btn-secondary btn-sm" onclick="closeVideoModal()">Close Video</button>
      <button class="btn btn-primary btn-sm" onclick="closeVideoModal(); openProjectModal('${projectId}')">Technical Deep Dive</button>
      <a href="${data.githubUrl}" target="_blank" class="btn btn-outline-cyan btn-sm">GitHub Repo</a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeVideoModal = function () {
  const modal = document.getElementById("video-modal");
  if (modal) {
    const video = modal.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

window.closeVideoModalOnBackdrop = function (e) {
  if (e.target.id === "video-modal") {
    closeVideoModal();
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    closeVideoModal();
  }
});

/* ==========================================================================
   CLIPBOARD & TOAST NOTIFICATION UTILITIES
   ========================================================================== */
window.copyToClipboard = function (text, message = "Copied to clipboard!") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast(message))
      .catch(() => fallbackCopy(text, message));
  } else {
    fallbackCopy(text, message);
  }
};

function fallbackCopy(text, message) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(message);
  } catch (err) {
    showToast("Failed to copy");
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 20);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

/* ==========================================================================
   CONTACT FORM SUBMISSION HANDLER
   ========================================================================== */
window.handleContactSubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const subject = document.getElementById("contact-subject").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (!name || !email || !message) {
    showToast("Please fill out all required fields.");
    return;
  }

  // Construct mailto URI
  const mailtoUrl = `mailto:abilashjayan123@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${subject} - from ${name}`
  )}&body=${encodeURIComponent(
    `Hello Abilash,\n\n${message}\n\nFrom: ${name} (${email})`
  )}`;

  window.open(mailtoUrl, "_blank");
  showToast("Opening email client. Thank you, Abilash will reply shortly!");
  e.target.reset();
};

/* ==========================================================================
   NAVIGATION & SCROLL SPY
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const navMenu = document.getElementById("nav-links-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

function initFooterYear() {
  const yr = document.getElementById("current-year");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }
}
