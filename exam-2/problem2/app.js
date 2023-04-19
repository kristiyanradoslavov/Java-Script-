window.addEventListener('load', solve);

function solve() {
    let inputs = {
        title: document.getElementById("title"),
        description: document.getElementById("description"),
        type: document.getElementById("label"),
        points: document.getElementById("points"),
        assignee: document.getElementById("assignee"),
    }

    // buttons
    let createBtn = document.getElementById("create-task-btn");
    let deleteBtn = document.getElementById("delete-task-btn");

    let newTasks = document.getElementById("tasks-section");
    let totalPoints = document.getElementById("total-sprint-points");
    let hiddenInputs = document.getElementById("task-id");

    let pointsCounter = 0;

    createBtn.addEventListener("click", createHandler);
    deleteBtn.addEventListener("click", deleteHandler);

    let generatedId = 1;
    let duplicatedInputs = {}
    


    function createHandler() {
        let filledInputs = Object.values(inputs)
            .every((currentInput) => currentInput.value != "");

        if (!filledInputs) {
            return;
        }

        duplicate();
        let newArticle = addElement("article", newTasks, null, "task-card");
        addElement("div", newArticle, inputs.type.value, "task-card-label");
        addElement("h3", newArticle, inputs.title.value, "task-card-title");
        addElement("p", newArticle, inputs.description.value, "task-card-description");
        addElement("div", newArticle, `Estimated at ${inputs.points.value} pts`, "task-card-points");
        addElement("div", newArticle, `Assigned to: ${inputs.assignee.value}`, "task-card-assignee");
        let actionWrapper = addElement("div", newArticle, null, "task-card-actions");
        let innerDelBtn = addElement("button", actionWrapper, "Delete");
        increasePoints();
        clearInputs();

        innerDelBtn.addEventListener("click", innerDelHandler);
    }

    function innerDelHandler() {
        let currentId = this.parentNode.parentNode.id;
        loadDuplicates(currentId);
        disableInputs();
        createBtn.disabled = true;
        deleteBtn.disabled = false;
        hiddenInputs.value = currentId;
    }

    function deleteHandler() {
        let currentELement = document.getElementById(hiddenInputs.value);
        currentELement.remove();
        decreasePoints();
        enableInputs();
        clearInputs();
        createBtn.disabled = false;
        deleteBtn.disabled = true;
    }

    function addElement(element, parent, text, classInfo, newId) {
        let newElement = document.createElement(element);

        if (text) {
            newElement.textContent = text;
        }

        if (classInfo) {
            newElement.className = classInfo;
        }

        if (newId) {
            newElement.id = newId;
        }

        if (element === "article") {
            newElement.id = `task-${generatedId}`;
            generatedId++;
        }

        if (newElement.className === "task-card-label") {
            if (inputs.type.value === "Feature") {
                newElement.classList.add("feature");
                newElement.innerHTML += " &#8865;"
            } else if (inputs.type.value === "Low Priority Bug") {
                newElement.classList.add("low-priority");
                newElement.innerHTML += " &#9737;"
            } else if (inputs.type.value === "High Priority Bug") {
                newElement.classList.add("high-priority");
                newElement.innerHTML += " &#9888;"
            }
        }

        parent.appendChild(newElement);

        return newElement;
    }

    function clearInputs() {
        for (const currentInput of Object.values(inputs)) {
            currentInput.value = ""
        }
    }

    function increasePoints() {
        pointsCounter += Number(inputs.points.value);
        totalPoints.textContent = `Total Points ${pointsCounter}pts`
    }

    function decreasePoints() {
        let currentPoints = duplicatedInputs[hiddenInputs.value].points;
        pointsCounter -= Number(currentPoints);
        totalPoints.textContent = `Total Points ${pointsCounter}pts`;
    }

    function duplicate() {
        let currentId = `task-${generatedId}`;
        let [title, description, type, points, assignee] = Object.values(inputs);
        duplicatedInputs[currentId] = {
            title: title.value,
            description: description.value,
            type: type.value,
            points: points.value,
            assignee: assignee.value,
        }
    }

    function loadDuplicates(id) {
        let currentObj = duplicatedInputs[id];
        inputs["title"].value = currentObj.title;
        inputs["description"].value = currentObj.description;
        inputs["type"].value = currentObj.type;
        inputs["points"].value = currentObj.points;
        inputs["assignee"].value = currentObj.assignee;
    }

    function disableInputs() {
        inputs.title.disabled = true;
        inputs.assignee.disabled = true;
        inputs.description.disabled = true;
        inputs.points.disabled = true;
        inputs.type.disabled = true;
    }

    function enableInputs() {
        inputs.title.disabled = false;
        inputs.assignee.disabled = false;
        inputs.description.disabled = false;
        inputs.points.disabled = false;
        inputs.type.disabled = false;
    }
}