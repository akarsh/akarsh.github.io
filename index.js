const root = document.documentElement;
const themeButton = document.getElementById("btn-dark-and-light-mode");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function preferredTheme() {
    return localStorage.getItem("theme") ??
        (darkModeMediaQuery.matches ? "dark" : "light");
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    root.setAttribute("data-bs-theme", theme);
    lightIcon.hidden = !isDark;
    darkIcon.hidden = isDark;
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute(
        "aria-label",
        `Switch to ${isDark ? "light" : "dark"} theme`
    );
}

applyTheme(preferredTheme());

themeButton.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-bs-theme") === "dark"
        ? "light"
        : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
});

darkModeMediaQuery.addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
        applyTheme(event.matches ? "dark" : "light");
    }
});

document.getElementById("current-year").textContent = new Date().getFullYear();

document.querySelectorAll("#navbar-content .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const navbar = document.getElementById("navbar-content");
        const collapse = bootstrap.Collapse.getInstance(navbar);
        collapse?.hide();
    });
});
