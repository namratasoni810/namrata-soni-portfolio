/* =====================================================================
   theme.js  →  Dark / Light theme toggle
   ---------------------------------------------------------------------
   - Dark mode is the default (matches the "dark-first" design brief).
   - The chosen theme is saved in localStorage, so it survives reload.
   - The <html> element gets data-theme="dark" or data-theme="light";
     all colours are driven by CSS variables in css/style.css.
   ===================================================================== */

const THEME_KEY = "namrata-portfolio-theme";

/* Apply a theme to the document and remember it */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (err) {
    // localStorage can be blocked in private browsing — fail silently
    console.warn("Could not save theme preference:", err);
  }
}

/* Read the saved theme, falling back to dark */
function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || "dark";
  } catch (err) {
    return "dark";
  }
}

/* Set up the toggle button in the navbar */
function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.setAttribute("aria-label", "Toggle dark and light theme");

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

/* Apply the stored theme BEFORE the page paints to avoid a flash */
setTheme(getStoredTheme());

/* Once the DOM is ready, wire up the button */
document.addEventListener("DOMContentLoaded", initThemeToggle);
