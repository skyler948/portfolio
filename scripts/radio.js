const radios = [];
const radioProjects = [];

function getRadios() {
    // Get all elements
    for (let i = 0; i < 2; i++) {
        radios[i] = document.getElementById('radio-' + i);
    }

    // Set active radio to 0
    resetRadios();
}

function getRadioCards() {
    for (let i = 0; i < radios.length * 2; i++) {
        radioProjects[i] = document.getElementById('p' + i);
    }

    // Set active page to 0
    selectRadioPage(0);
}

function selectRadioPage(page) {
    // Loop through every object
    for (let i = 0; i < radioProjects.length; i++) {
        if (i == page * 2 || i == (page * 2) + 1) {
            radioProjects[i].style.display = 'grid';
        } else {
            radioProjects[i].style.display = 'none';
        }
    }
}

function resetRadios() {
    radios[0].checked = true;
    for (let i = 1; i < radios.length; i++) {
        radios[i].checked = false;
    }
}

function updatePage() {
    document.querySelectorAll('input[type="radio"][name="optradio"]').forEach(e => {
        e.addEventListener('change', function() {
            var lastChar = this.id.substr(this.id.length - 1);
            selectRadioPage(lastChar);
        })
    })
}