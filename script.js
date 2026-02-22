const HERO_TITLE = "\u4f5c\u54c1\u7d39\u4ecb";
const HERO_NAME = "YOUR NAME";
const WORKS = [
  {
    id: "work-1",
    title: "Work 1",
    pages: [
      { heading: "1-1", body: "..." },
      { heading: "1-2", body: "..." },
      { heading: "1-3", body: "..." }
    ]
  },
  {
    id: "work-2",
    title: "Work 2",
    pages: [
      { heading: "2-1", body: "..." },
      { heading: "2-2", body: "..." },
      { heading: "2-3", body: "..." }
    ]
  },
  {
    id: "work-3",
    title: "Work 3",
    pages: [
      { heading: "3-1", body: "..." },
      { heading: "3-2", body: "..." },
      { heading: "3-3", body: "..." }
    ]
  },
  {
    id: "work-4",
    title: "Work 4",
    pages: [
      { heading: "4-1", body: "..." },
      { heading: "4-2", body: "..." },
      { heading: "4-3", body: "..." }
    ]
  }
];

const heroTitleEl = document.getElementById("hero-title");
const heroNameEl = document.getElementById("hero-name");
const worksGridEl = document.getElementById("works-grid");

const modalEl = document.getElementById("work-modal");
const modalTitleEl = document.getElementById("modal-work-title");
const modalPageHeadingEl = document.getElementById("modal-page-heading");
const modalPageBodyEl = document.getElementById("modal-page-body");
const modalPrevEl = document.getElementById("modal-prev");
const modalNextEl = document.getElementById("modal-next");
const modalDotsEl = document.getElementById("modal-dots");

let activeWorkIndex = -1;
let activePageIndex = 0;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setHeroContent() {
  heroTitleEl.textContent = HERO_TITLE;
  heroNameEl.textContent = HERO_NAME;
}

function createWorkCard(work, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "work-card";
  card.dataset.index = String(index);
  card.setAttribute("aria-label", `Open ${work.title} details`);

  const thumb = document.createElement("div");
  thumb.className = "thumb-placeholder";
  thumb.setAttribute("aria-hidden", "true");

  const title = document.createElement("p");
  title.className = "work-title";
  title.textContent = work.title;

  card.append(thumb, title);
  return card;
}

function renderWorkCards() {
  const fragment = document.createDocumentFragment();

  WORKS.forEach((work, index) => {
    fragment.appendChild(createWorkCard(work, index));
  });

  worksGridEl.innerHTML = "";
  worksGridEl.appendChild(fragment);
}

function updateScrollAnimation() {
  const progress = clamp(window.scrollY / window.innerHeight, 0, 1);

  document.documentElement.style.setProperty("--hero-opacity", String(1 - progress));
  document.documentElement.style.setProperty("--works-opacity", String(0.1 + progress * 0.9));
  document.documentElement.style.setProperty("--works-shift", `${(1 - progress) * 24}px`);
}

function isModalOpen() {
  return modalEl.classList.contains("is-open");
}

function updateModalView() {
  const work = WORKS[activeWorkIndex];
  if (!work) {
    return;
  }

  const page = work.pages[activePageIndex];
  modalTitleEl.textContent = work.title;
  modalPageHeadingEl.textContent = page.heading;
  modalPageBodyEl.textContent = page.body;

  modalPrevEl.disabled = activePageIndex === 0;
  modalNextEl.disabled = activePageIndex === work.pages.length - 1;

  modalDotsEl.innerHTML = "";
  work.pages.forEach((_, pageIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "modal-dot";
    dot.setAttribute("aria-label", `Go to page ${pageIndex + 1}`);
    if (pageIndex === activePageIndex) {
      dot.classList.add("is-active");
    }
    dot.addEventListener("click", () => {
      activePageIndex = pageIndex;
      updateModalView();
    });
    modalDotsEl.appendChild(dot);
  });
}

function openModal(workIndex) {
  activeWorkIndex = workIndex;
  activePageIndex = 0;
  updateModalView();

  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeWorkIndex = -1;
}

function setupCardEvents() {
  worksGridEl.addEventListener("click", (event) => {
    const button = event.target.closest(".work-card");
    if (!button) {
      return;
    }
    const workIndex = Number(button.dataset.index);
    if (Number.isNaN(workIndex)) {
      return;
    }
    openModal(workIndex);
  });
}

function setupModalEvents() {
  modalEl.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) {
      closeModal();
    }
  });

  modalPrevEl.addEventListener("click", () => {
    const work = WORKS[activeWorkIndex];
    if (!work) {
      return;
    }
    activePageIndex = clamp(activePageIndex - 1, 0, work.pages.length - 1);
    updateModalView();
  });

  modalNextEl.addEventListener("click", () => {
    const work = WORKS[activeWorkIndex];
    if (!work) {
      return;
    }
    activePageIndex = clamp(activePageIndex + 1, 0, work.pages.length - 1);
    updateModalView();
  });

  document.addEventListener("keydown", (event) => {
    if (!isModalOpen()) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "ArrowLeft") {
      modalPrevEl.click();
      return;
    }

    if (event.key === "ArrowRight") {
      modalNextEl.click();
    }
  });
}

function setupScrollAnimation() {
  updateScrollAnimation();
  window.addEventListener("scroll", updateScrollAnimation, { passive: true });
  window.addEventListener("resize", updateScrollAnimation);
}

function init() {
  setHeroContent();
  renderWorkCards();
  setupCardEvents();
  setupModalEvents();
  setupScrollAnimation();
}

init();
