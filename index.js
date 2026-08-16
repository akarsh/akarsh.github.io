const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const darkModeMediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

let darkMode =
    localStorage.getItem("dark-mode") ?? darkModeMediaQuery.matches;

if (darkMode) {
    document.body.classList.add("dark-mode");
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
} else {
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
}

darkModeMediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        darkMode = true;
    } else {
        darkMode = false;
    }
    document.body.classList.toggle("dark-mode");

    if (darkMode) {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    }
});

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("dark-mode", darkMode);
    document.body.classList.toggle("dark-mode");

    if (darkMode) {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    }
}
