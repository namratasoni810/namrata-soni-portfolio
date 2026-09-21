/* =====================================================================
   script.js  →  Page interactions and animations
   ---------------------------------------------------------------------
   Responsibilities (kept small and separate on purpose):
     1. Navbar shadow on scroll
     2. Mobile menu open/close
     3. Scroll-reveal animations (IntersectionObserver)
     4. Active nav link highlighting as you scroll
     5. Footer year auto-update

   Theme toggling lives in theme.js
   Project cards/modals live in projects.js
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- 1. Navbar shadow on scroll ---------------- */
  const navbar = document.querySelector(".navbar-custom");
  const onScroll = () => {
    if (window.scrollY > 8) navbar.classList.add("is-scrolled");
    else navbar.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- 2. Mobile menu ---------------- */
  const navToggle = document.getElementById("navToggle");
  const mobilePanel = document.getElementById("mobilePanel");

  if (navToggle && mobilePanel) {
    navToggle.setAttribute("aria-expanded", "false");

    const togglePanel = (open) => {
      const isOpen = open ?? !mobilePanel.classList.contains("open");
      mobilePanel.classList.toggle("open", isOpen);
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    };

    navToggle.addEventListener("click", () => togglePanel());

    // Close the menu when a link is tapped
    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => togglePanel(false));
    });

    // Close when resizing up to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) togglePanel(false);
    });
  }

  /* ---------------- 3. Scroll-reveal animations ---------------- */
  /* Elements with class="reveal" fade in as they enter the viewport. */
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    // Older browsers: just show everything
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  /* ---------------- 4. Active nav link highlighting ---------------- */
  /* Highlights the nav item for whichever section is in view. */
  const navLinks = document.querySelectorAll(".nav-links a[data-nav]");
  const sections = document.querySelectorAll("section[id]");

  if (navLinks.length && sections.length) {
    const sectionMap = new Map();
    sections.forEach((section) => {
      const link = document.querySelector(`.nav-links a[data-nav="${section.id}"]`);
      if (link) sectionMap.set(section.id, link);
    });

    const setActive = () => {
      let current = "";
      const offset = window.scrollY + 120;

      sections.forEach((section) => {
        if (offset >= section.offsetTop) current = section.id;
      });

      navLinks.forEach((link) => link.classList.remove("active"));
      if (current && sectionMap.has(current)) sectionMap.get(current).classList.add("active");
    };

    setActive();
    window.addEventListener("scroll", setActive, { passive: true });
  }

  /* ---------------- 5. Footer year ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
