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
                    toDoUl.innerHTML +=
                        `<li>
                                <span>${name}</span>
                                <button>Remove</button>
                                <button>Edit</button>
                            </li>
                            `
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
                inputValue.value = "";
                loadHandler();

            })
    }
}

attachEvents();
