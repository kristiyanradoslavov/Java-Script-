function attachEvents() {
    const MAIN_URL = "http://localhost:3030/jsonstore/tasks/";
    const addBtn = document.getElementById("add-button");
    const loadBtn = document.getElementById("load-button");
    const toDoUl = document.getElementById("todo-list");
    const inputValue = document.getElementById("title");

    loadBtn.addEventListener("click", loadHandler);
    addBtn.addEventListener("click", addHandler);

    function loadHandler(event) {
        if (event) {
            event.preventDefault();
        }

        toDoUl.innerHTML = "";
        fetch(MAIN_URL)
            .then((getResult) => getResult.json())
            .then((getData) => {
                for (const { name, _id } of Object.values(getData)) {
                    let newLi = document.createElement("li");
                    let newSpan = document.createElement("span");
                    let newRButton = document.createElement("button");
                    let newDButton = document.createElement("button");
                    newSpan.textContent = name;
                    newRButton.textContent = "Remove";
                    newDButton.textContent = "Edit";
                    newLi.id = _id;
                    newLi.append(newSpan, newRButton, newDButton);
                    toDoUl.appendChild(newLi);
                }
                
                let removeBtn = Array.from(document.querySelectorAll("#todo-list li :nth-child(2)"));
                let editBtn = Array.from(document.querySelectorAll("#todo-list li :nth-child(3)"))
                for (const currentBtn of removeBtn) {
                    currentBtn.addEventListener("click", removeHandler);
                }

                for (const currentEditBtn of editBtn) {
                    currentEditBtn.addEventListener("click", editHandler);
                }

                function removeHandler() {
                    let idToRemove = this.parentNode.id;
                    fetch(`${MAIN_URL}${idToRemove}`, {
                        method: "DELETE"
                    })
                        .then(() => {
                            loadHandler();
                        })
                }

                function editHandler(event) {
                    let currentBtn = event.target;
                    currentBtn.textContent = "Submit";
                    currentBtn.removeEventListener("click", editHandler);
                    let textEle = currentBtn.parentNode.querySelector(":nth-child(1)");
                    let newInput = document.createElement("input");
                    newInput.value = textEle.textContent;
                    currentBtn.parentNode.replaceChild(newInput, textEle);
                    currentBtn.addEventListener("click", submitHandler);

                    function submitHandler() {
                        let idToRemove = this.parentNode.id;
                        let patchInfo = {
                            name: `${newInput.value}`
                        }
                        let httpHeaders = {
                            method: "PATCH",
                            body: JSON.stringify(patchInfo)
                        }
                        fetch(`${MAIN_URL}${idToRemove}`, httpHeaders)
                            .then(() => {
                                loadHandler();
                            })
                    }
                }

            })
    }

    function addHandler(event) {
        event.preventDefault();
        let infoToPost = {
            name: inputValue.value
        }

        let httpHeaders = {
            method: "POST",
            body: JSON.stringify(infoToPost)
        }

        fetch(MAIN_URL, httpHeaders)
            .then(() => {
                loadHandler();
                inputValue.value = "";
            })
    }
}

attachEvents();
