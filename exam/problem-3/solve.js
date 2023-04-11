// TODO:
function attachEvents() {
    let BASE_URL = "http://localhost:3030/jsonstore/tasks/"

    // task inputs //
    let initTitle = document.getElementById("title");
    let initDesc = document.getElementById("description");

    // buttons //
    let loadBtn = document.getElementById("load-board-btn");
    let addTaskBtn = document.getElementById("create-task-btn");

    // sections //
    let allSections = {
        ToDo: document.querySelector("#todo-section .task-list"),
        InProgress: document.querySelector("#in-progress-section .task-list"),
        CodeReview: document.querySelector("#code-review-section .task-list"),
        Done: document.querySelector("#done-section .task-list"),
    }

    loadBtn.addEventListener("click", loadHandler);
    addTaskBtn.addEventListener("click", addHandler);


    function loadHandler(event) {
        if (event) {
            event.preventDefault();
        }
        allSections["ToDo"].innerHTML = "";
        allSections["InProgress"].innerHTML = "";
        allSections["CodeReview"].innerHTML = "";
        allSections["Done"].innerHTML = "";
        fetch(BASE_URL)
            .then((getResult) => getResult.json())
            .then((getData) => {
                let dataValues = Object.values(getData);
                for (const currentObj of dataValues) {
                    addELement(currentObj)
                }
            })
            .catch((error) => errorHandler(error))
    }


    function addHandler(event) {
        event.preventDefault();
        let postBody = {
            status: 'ToDo',
            title: initTitle.value,
            description: initDesc.value,
        }

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify(postBody)
        }

        fetch(BASE_URL, httpHeaders)
            .then((postResult) => postResult.json())
            .then((postData) => {
                console.log(postData)
                initTitle.value = "";
                initDesc.value = "";
                loadHandler();

            })
            .catch((error) => errorHandler(error))
    }

    function addELement(currentObject) {
        let btnContent = {
            ToDo: "Move to In Progress",
            InProgress: "Move to Code Review",
            CodeReview: "Move to Done",
            Done: "Close",
        }

        let newLi = document.createElement("li");
        newLi.className = "task";
        newLi.id = currentObject._id;
        let currentStatus = currentObject.status.split(" ").join("");

        let newH3 = document.createElement("h3");
        let newP = document.createElement("p");
        let newBtn = document.createElement("button");
        newH3.textContent = currentObject.title;
        newP.textContent = currentObject.description;
        newBtn.textContent = btnContent[currentStatus];
        newLi.append(newH3, newP, newBtn)

        allSections[currentStatus].appendChild(newLi)
        newBtn.addEventListener("click", moveHandler)

    }

    function moveHandler() {
        let currentSectionId = this.parentNode.parentNode.parentNode.id;
        let currentElementId = this.parentNode.id;
        let newStatus = null;

        if (currentSectionId === "todo-section") {
            newStatus = "In Progress";
        } else if (currentSectionId === "in-progress-section") {
            newStatus = "Code Review";
        } else if (currentSectionId === "code-review-section") {
            newStatus = "Done";
        } else if (currentSectionId === "done-section") {
            newStatus = "DELETE"
        }

        if (newStatus === "DELETE") {
            fetch(`${BASE_URL}${currentElementId}`, {
                method: newStatus
            })
                .then(() => {
                    loadHandler();
                })
                .catch((error) => errorHandler(error))

        } else {
            let httpHeaders = {
                method: "PATCH",
                body: JSON.stringify({
                    status: newStatus
                }),
            }

            fetch(`${BASE_URL}${currentElementId}`, httpHeaders)
                .then(() => {
                    loadHandler()
                })
                .catch((error) => errorHandler(error))
        }

    }

    function errorHandler(error) {
        console.error(error)
    }
}

attachEvents();