// TODO:
function attachEvents() {
    let BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    let loadBtn = document.getElementById("load-board-btn");
    let createBtn = document.getElementById("create-task-btn");

    let taskTitle = document.getElementById("title");
    let taskDesc = document.getElementById("description");

    // sections
    let sections = {
        toDo: document.getElementById("board-section"),
        inProgress: document.getElementById("in-progress-section"),
        codeReview: document.getElementById("code-review-section"),
        done: document.getElementById("done-section"),
    }

    let sortTasks = {
        ToDo: toDoHandler,
        InProgress: inProgressHandler,
        CodeReview: codeReviewHandler,
        Done: doneHandler,
    }

    loadBtn.addEventListener("click", loadHandler);

    function loadHandler() {
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

    function toDoHandler(obj) {

    }

    function inProgressHandler(obj) {

    }

    function codeReviewHandler(obj) {

    }

    function doneHandler(obj) {

    }


}

attachEvents();