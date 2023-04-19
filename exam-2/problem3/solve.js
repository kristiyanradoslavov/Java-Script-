// TODO:
function attachEvents() {
    let BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    let loadBtn = document.getElementById("load-board-btn");
    let createBtn = document.getElementById("create-task-btn");

    let taskTitle = document.getElementById("title");
    let taskDesc = document.getElementById("description");

    // sections
    let sections = {
        toDo: document.querySelector("#todo-section .task-list"),
        inProgress: document.querySelector("#in-progress-section .task-list"),
        codeReview: document.querySelector("#code-review-section .task-list"),
        done: document.querySelector("#done-section .task-list"),
    }

    let sortTasks = {
        ToDo: toDoHandler,
        InProgress: inProgressHandler,
        CodeReview: codeReviewHandler,
        Done: doneHandler,
    }

    loadBtn.addEventListener("click", loadHandler);
    createBtn.addEventListener("click", addHandler);

    function loadHandler() {
        clearSections()
        fetch(BASE_URL)
            .then((getResult) => getResult.json())
            .then((getData) => {
                for (const currentObj of Object.values(getData)) {
                    let currentStatus = currentObj.status.split(" ").join("");
                    sortTasks[currentStatus](currentObj);
                }


            })
            .catch((error) => console.error(error))
    }

    function addHandler() {
        let postBody = {
            title: taskTitle.value,
            description: taskDesc.value,
            status: "ToDo"
        }

        let httpHeaders = {
            method: "POST",
            body: JSON.stringify(postBody)
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadHandler();
                taskTitle.value = "";
                description.value = "";
            })
            .catch((error) => console.error(error))
    }

    function toDoHandler(obj) {
        let currentParent = sections["toDo"];
        let newLi = addELement("li", currentParent, null, ["task"], obj._id);
        addELement("h3", newLi, obj.title);
        addELement("p", newLi, obj.description);
        let moveBtn = addELement("button", newLi, "Move to In Progress");
        moveBtn.addEventListener("click", moveHandler);
    }

    function inProgressHandler(obj) {
        let currentParent = sections["inProgress"];
        let newLi = addELement("li", currentParent, null, ["task"], obj._id);
        addELement("h3", newLi, obj.title);
        addELement("p", newLi, obj.description);
        let moveBtn = addELement("button", newLi, "Move to Code Review");
        moveBtn.addEventListener("click", moveHandler);
    }

    function codeReviewHandler(obj) {
        let currentParent = sections["codeReview"];
        let newLi = addELement("li", currentParent, null, ["task"], obj._id);
        addELement("h3", newLi, obj.title);
        addELement("p", newLi, obj.description);
        let moveBtn = addELement("button", newLi, "Move to Done");
        moveBtn.addEventListener("click", moveHandler);
    }

    function doneHandler(obj) {
        let currentParent = sections["done"];
        let newLi = addELement("li", currentParent, null, ["task"], obj._id);
        addELement("h3", newLi, obj.title);
        addELement("p", newLi, obj.description);
        let moveBtn = addELement("button", newLi, "Close");
        moveBtn.addEventListener("click", moveHandler);
    }

    function moveHandler() {
        let currentParentId = this.parentNode.id;
        let currentStatus = this.textContent.split(" ").join("");
        if (currentStatus === "Close") {
            deleteHandler(currentParentId)
            return;
        }

        let statuses = {
            MovetoInProgress: "In Progress",
            MovetoCodeReview: "Code Review",
            MovetoDone: "Done",
        }
        let httpHeaders = {
            method: "PATCH",
            body: JSON.stringify({
                status: statuses[currentStatus]
            })
        }

        fetch(`${BASE_URL}${currentParentId}`, httpHeaders)
            .then(() => {
                loadHandler();
            })
            .catch((error) => console.error(error))
    }

    function deleteHandler(id) {
        httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadHandler();
            })
            .catch((error) => console.error(error))
    }

    function addELement(element, parent, text, classInfo, idInfo) {
        let newELement = document.createElement(element);

        if (text) {
            newELement.textContent = text;
        }

        if (classInfo) {
            newELement.classList.add(...classInfo);
        }

        if (idInfo) {
            newELement.id = idInfo;
        }

        parent.appendChild(newELement);
        return newELement;
    }

    function clearSections() {
        sections["toDo"].innerHTML = ""
        sections["inProgress"].innerHTML = ""
        sections["codeReview"].innerHTML = ""
        sections["done"].innerHTML = ""
    }
}

attachEvents();