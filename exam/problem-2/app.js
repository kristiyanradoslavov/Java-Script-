window.addEventListener('load', solve);

function solve() {
    let inputFields = {
        title: document.getElementById("title"),
        description: document.getElementById("description"),
        label: document.getElementById("label"),
        points: document.getElementById("points"),
        assignee: document.getElementById("assignee"),
    }

    let buttons = {
        createBtn: document.getElementById("create-task-btn"),
        deleteMainBtn: document.getElementById("delete-task-btn"),
    }

    let totalPoints = document.getElementById("total-sprint-points");
    let newSprints = document.getElementById("tasks-section");

    let generatedId = 1;
    let createdInputValues = [];
    let currentIdToDelete = null;
    let allPoints = 0;


    buttons["createBtn"].addEventListener("click", createHandler);
    buttons["deleteMainBtn"].addEventListener("click", deleteMainHandler);

    function createHandler() {
        let filledInputs = Object.values(inputFields)
            .every((currentInput) => currentInput.value != "")

        if (!filledInputs) {
            return;
        }

        let newArticle = addELements("article", newSprints, "task-card");
        addELements("div", newArticle, "task-card-label", null, inputFields.label.value);
        addELements("h3", newArticle, "task-card-title", null, inputFields.title.value);
        addELements("p", newArticle, "task-card-description", null, inputFields.description.value);
        addELements("div", newArticle, "task-card-points", null, `Estimated at ${inputFields.points.value} pts`);
        addELements("div", newArticle, "task-card-assignee", null, `Assigned to: ${inputFields.assignee.value}`);
        let actions = addELements("div", newArticle, "task-card-actions");
        let delBtn = addELements("button", actions, null, null, "Delete");

        let title = inputFields.title.value;
        let description = inputFields.description.value;
        let label = inputFields.label.value;
        let points = inputFields.points.value;
        let assignee = inputFields.assignee.value;

        let newObject = {};
        newObject[newArticle.id] = { title, description, label, points, assignee }

        allPoints += Number(points);
        totalPoints.textContent = `Total Points ${allPoints}pts`

        createdInputValues.push(newObject)
        clearInputs()

        delBtn.addEventListener("click", firstDelHandler);

    }

    let valueIdx = null;
    let currentValues = null;

    function firstDelHandler() {
        let currentId = this.parentNode.parentNode.id;

        for (let currentIDx = 0; currentIDx < createdInputValues.length; currentIDx++) {
            let obj = Object.keys(createdInputValues[currentIDx]);
            if (obj[0] === currentId) {
                valueIdx = currentIDx
                currentValues = Object.values(createdInputValues[currentIDx])
                break;
            }
        }

        inputFields.title.value = currentValues[0].title;
        inputFields.points.value = currentValues[0].points;
        inputFields.label.value = currentValues[0].label;
        inputFields.description.value = currentValues[0].description;
        inputFields.assignee.value = currentValues[0].assignee;

        inputFields.title.disabled = true;
        inputFields.points.disabled = true;
        inputFields.label.disabled = true;
        inputFields.description.disabled = true;
        inputFields.assignee.disabled = true;

        buttons["createBtn"].disabled = true;
        buttons["deleteMainBtn"].disabled = false;
        currentIdToDelete = currentId;
    }

    function deleteMainHandler() {
        let pointsToDeduct = currentValues[0].points;
        let deleteEl = document.getElementById(currentIdToDelete)
        deleteEl.remove();
        buttons["createBtn"].disabled = false;
        buttons["deleteMainBtn"].disabled = true;
        allPoints -= Number(pointsToDeduct);
        totalPoints.textContent = `Total Points ${allPoints}pts`

        inputFields.title.disabled = false;
        inputFields.points.disabled = false;
        inputFields.label.disabled = false;
        inputFields.description.disabled = false;
        inputFields.assignee.disabled = false;
        createdInputValues.splice(valueIdx, 1);
        clearInputs()
    }


    function addELements(element, parent, currentClass, id, text) {
        let newElement = document.createElement(element);

        if (currentClass) {
            newElement.className = currentClass;
        }

        if (id) {
            newElement.id = id;
        }

        if (element === "input" || element === "textarea") {
            newElement.value = text;
        }

        if (element != "input" && element != "textarea") {
            newElement.textContent = text;
        }

        if (element === "article") {
            newElement.id = `task-${generatedId}`;
            generatedId++;
        }

        if (currentClass === "task-card-label") {
            if (inputFields.label.value === "Feature") {
                newElement.className += " feature";
                newElement.innerHTML += " &#8865;"
            } else if (inputFields.label.value === "Low Priority Bug") {
                newElement.className += " low-priority";
                newElement.innerHTML += " &#9737;"
            } else if (inputFields.label.value === "High Priority Bug") {
                newElement.className += " high-priority";
                newElement.innerHTML += " &#9888;";
            }
        }

        parent.appendChild(newElement)

        return newElement
    }

    function clearInputs() {
        for (const currentInput of Object.values(inputFields)) {
            currentInput.value = "";
        }
    }
}