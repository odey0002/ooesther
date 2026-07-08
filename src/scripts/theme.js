const storageKey = "portfolio-theme";
const root = document.documentElement;
const toggleButton = document.querySelector("[data-theme-toggle]");

const savedTheme = localStorage.getItem(storageKey);

if (savedTheme === "light" || savedTheme === "dark") {
  root.setAttribute("data-theme", savedTheme);
}

function getCurrentTheme() {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "light" || currentTheme === "dark") {
    return currentTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function updateButtonLabel() {
  if (!toggleButton) return;

  const currentTheme = getCurrentTheme();
  toggleButton.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  toggleButton.setAttribute(
    "aria-label",
    currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
}

toggleButton?.addEventListener("click", () => {
  const currentTheme = getCurrentTheme();
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem(storageKey, nextTheme);
  updateButtonLabel();
});

updateButtonLabel();
