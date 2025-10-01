// Toggle theme with button press
function toggleTheme() {
    let theme = document.getElementById('theme');
    let button = document.getElementById('switch');

    // Swap theme
    if (theme.getAttribute('href') == 'styles/lightmode.css') {
        theme.setAttribute('href', 'styles/darkmode.css');
        button.textContent = "💡";
    } else {
        theme.setAttribute('href', 'styles/lightmode.css');
        button.textContent = "🌙";
    }

    // Create new cookie for theme
    localStorage.setItem("theme", theme.getAttribute('href'));
}

// Set theme from cookie on site startup
function setTheme() {
    let theme = document.getElementById('theme');
    let button = document.getElementById('switch');

    // Fallback
    if (localStorage.length == 0) {
        localStorage.setItem("theme", "styles/darkmode.css");
    }
    theme.setAttribute('href', localStorage.getItem("theme"));

    // Set button text accordingly
    if (theme.getAttribute('href') == 'styles/darkmode.css') {
        button.textContent = "💡";
    } else {
        button.textContent = "🌙";
    }
}