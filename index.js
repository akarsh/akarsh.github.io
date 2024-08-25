const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const darkModeMediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

let darkMode =
    localStorage.getItem("dark-mode") ?? darkModeMediaQuery.matches;

if (darkMode) {
    document.body.classList.add("dark-mode");
    darkIcon.setAttribute("display", "none");
} else {
    lightIcon.setAttribute("display", "none");
}

darkModeMediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        darkMode = true;
    } else {
        darkMode = false;
    }
    document.body.classList.toggle("dark-mode");

    if (darkMode) {
        lightIcon.setAttribute("display", "block");
        darkIcon.setAttribute("display", "none");
    } else {
        lightIcon.setAttribute("display", "none");
        darkIcon.setAttribute("display", "block");
    }
});

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("dark-mode", darkMode);
    document.body.classList.toggle("dark-mode");

    if (darkMode) {
        lightIcon.setAttribute("display", "block");
        darkIcon.setAttribute("display", "none");
    } else {
        lightIcon.setAttribute("display", "none");
        darkIcon.setAttribute("display", "block");
    }
}
