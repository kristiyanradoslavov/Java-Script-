window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById("genre");
    const songName = document.getElementById("name");
    const author = document.getElementById("author");
    const date = document.getElementById("date");
    const addBtn = document.getElementById("add-btn");
    const songList = document.getElementById("all-hits-container");

    addBtn.addEventListener("click", addHandler);

    function addHandler(event) {
        event.preventDefault();
        
        if (genre && songName && author && date) {

        }
    }

    function addElement(element, parent, text, classInfo, imgSrc) {
        let newElement = document.createElement(element);

        if (text) {
            newElement.textContent = text;
        }

        if (classInfo) {
            newElement.className = classInfo;
        }

        if (imgSrc) {
            newElement.src = imgSrc
        }

        parent.appendChild(newElement);

        return newElement;
    }
}