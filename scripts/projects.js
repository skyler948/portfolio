const projects = [];

let toggled = false;
let button;
let largest = 0;

function getCards() {
    // Get all elements
    for (let i = 0; i < 9; i++) {
        projects[i] = document.getElementById('s' + i);
        if (largest < projects[i].offsetHeight) {
            largest = projects[i].offsetHeight;
        }
    }

    // Only the first 3 should be visible by default
    hideRevealedCards();

    button = document.getElementById('project-btn');
}

function revealHiddenCards() {
    for (let i = 3; i < projects.length; i++) {
        projects[i].style.display = 'grid';
    }
    toggled = true;
}

function hideRevealedCards() {
    for (let i = 3; i < projects.length; i++) {
        projects[i].style.display = 'none';
    }
    toggled = false;
}

function toggleCards() {
    if (toggled) {
        hideRevealedCards();
        button.textContent = "⬇️";
    } else {
        revealHiddenCards();
        button.textContent = "⬆️";
    }
}