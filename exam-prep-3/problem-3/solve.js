// TODO
function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/"
    const addBtn = document.getElementById("add-button");
    const loadBtn = document.getElementById("load-button");
    const resultUl = document.getElementById("todo-list");
    const newInput = document.getElementById("title");

    loadBtn.addEventListener("click", loadHandler);
    addBtn.addEventListener("click", addHandler);

    function loadHandler(event) {
        if (event) {
            event.preventDefault();
        }
        
        resultUl.innerHTML = "";

        fetch(BASE_URL)
            .then((loadRes) => loadRes.json())
            .then((loadData) => {
                for (const currentObj of Object.values(loadData)) {
                    let { name, _id } = currentObj;

                    let newLi = document.createElement("li");
                    newLi.id = _id;
                    let newSpan = document.createElement("span");
                    let removeButton = document.createElement("button");
                    let editBtn = document.createElement("button");
    
                    newSpan.textContent = name;
                    removeButton.textContent = "Remove";
                    editBtn.textContent = "Edit";
                    newLi.append(newSpan, removeButton, editBtn);
                    resultUl.appendChild(newLi);

                    removeButton.addEventListener("click", removeHandler);
                    editBtn.addEventListener("click", editHandler);
                }

            })

            .catch((error) => console.error(error))

    }

    function addHandler(event) {
        event.preventDefault();
        let httpHeaders = {
            method: "POST",
            body: JSON.stringify({
                name: newInput.value
            })
        }

        fetch(BASE_URL, httpHeaders)
            .then((postResult) => postResult.json())
            .then(() => {
                loadHandler();
                newInput.value = "";
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function removeHandler() {
        let currentID = this.parentNode.id;
        let httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${currentID}`, httpHeaders)
            .then(() => {
                loadHandler();
            })
            .catch((error) => {
                console.error(error);
            })
    }

    function editHandler() {
        let oldChild = this.parentNode.querySelector(":nth-child(1)");
        let newChild = document.createElement("input");
        newChild.value = oldChild.textContent;
        this.parentNode.replaceChild(newChild, oldChild);
        this.textContent = "Submit";

        this.removeEventListener("click", editHandler);
        this.addEventListener("click", patchHandler);
    }

    function patchHandler() {
        let currentID = this.parentNode.id;
        let newName = this.parentNode.querySelector(":nth-child(1)")
        let httpHeaders = {
            method: "PATCH",
            body: JSON.stringify({
                name: newName.value
            })
        }

        fetch(`${BASE_URL}${currentID}`, httpHeaders)
            .then(() => {
                loadHandler();
            })
    }
}

attachEvents();
