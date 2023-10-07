function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let element = document.getElementById('extra');

    if (button.textContent === 'More') {
        element.style.display = 'block'
        button.textContent = 'Less'
    } else {
        element.style.display = 'none';
        button.textContent = 'More'
    }
}