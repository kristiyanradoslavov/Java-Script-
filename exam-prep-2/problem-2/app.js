window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById("genre");
    const songName = document.getElementById("name");
    const author = document.getElementById("author");
    const date = document.getElementById("date");
    const addBtn = document.getElementById("add-btn");
    const songList = document.getElementsByClassName("all-hits-container")[0];
    const totalLikes = document.querySelector(".likes p");
    const savedSongs = document.getElementsByClassName("saved-container")[0];

    addBtn.addEventListener("click", addHandler);

    function addHandler(event) {
        event.preventDefault();
        
        if (genre.value && songName.value && author.value && date.value) {
            let divWrapper = addElement("div", songList, null, "hits-info", null);
            addElement("img", divWrapper, null, null, "./static/img/img.png");
            addElement("h2", divWrapper, `Genre: ${genre.value}`, null, null);
            addElement("h2", divWrapper, `Name: ${songName.value}`, null, null);
            addElement("h2", divWrapper, `Author: ${author.value}`, null, null);
            addElement("h3", divWrapper, `Date: ${date.value}`, null, null);
            saveBtn = addElement("button", divWrapper, "Save song", "save-btn", null);
            likeBtn = addElement("button", divWrapper, "Like song", "like-btn", null);
            let deleteBtn = addElement("button", divWrapper, "Delete", "delete-btn", null);
            genre.value = null;
            songName.value = null;
            author.value = null;
            date.value = null;
            likeBtn.addEventListener("click", likeHandler);
            saveBtn.addEventListener("click", saveHandler);

            deleteBtn.addEventListener("click", () => {
                let currentParent = divWrapper.parentNode;
                currentParent.removeChild(divWrapper);
            });
        }
    }

    function likeHandler(event) {
        let [text, num] = totalLikes.textContent.split(": ");
        num = Number(num);
        num ++; 
        totalLikes.textContent =`${text}: ${num}`
        event.target.disabled = true;
    }

    function saveHandler(event) {
        let currentDiv = event.target.parentNode;
        let currentLike = currentDiv.getElementsByClassName("like-btn")[0];
        let currentSave = currentDiv.getElementsByClassName("save-btn")[0];
        let parent = currentDiv.parentNode;
        currentDiv.removeChild(currentLike);
        currentDiv.removeChild(currentSave);
        parent.removeChild(currentDiv);
        savedSongs.appendChild(currentDiv);
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