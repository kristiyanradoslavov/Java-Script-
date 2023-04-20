function solve() {

    let BASE_URL = "http://localhost:3030/jsonstore/tasks/";

    let inputs = {
        title: document.getElementById("course-name"),
        type: document.getElementById("course-type"),
        description: document.getElementById("description"),
        teacherName: document.getElementById("teacher-name"),
    }

    let duplicatedInputs = {};
    let currentIdToPut = "";

    let addBtn = document.getElementById("add-course");
    let editBtn = document.getElementById("edit-course");
    let loadBtn = document.getElementById("load-course");

    let loadList = document.getElementById("list");


    loadBtn.addEventListener("click", loadHandler);
    editBtn.addEventListener("click", editHandler);
    addBtn.addEventListener("click", addHandler);


    function loadHandler() {
        loadList.innerHTML = "";

        fetch(BASE_URL)
            .then((getResult) => getResult.json())
            .then((getData) => {
                let objValues = Object.values(getData);

                for (const currentObj of objValues) {
                    let divWrapper = addELement("div", loadList, ["container"], currentObj._id);
                    addELement("h2", divWrapper, null, null, currentObj.title);
                    addELement("h3", divWrapper, null, null, currentObj.teacher);
                    addELement("h3", divWrapper, null, null, currentObj.type);
                    addELement("h4", divWrapper, null, null, currentObj.description);
                    let innerEditBtn = addELement("button", divWrapper, ["edit-btn"], null, "Edit Course");
                    let finishBtn = addELement("button", divWrapper, ["finish-btn"], null, "Finish Course");
                    duplicate(currentObj);

                    innerEditBtn.addEventListener("click", innerEditHandler);
                    finishBtn.addEventListener("click", finishHandler);
                }
            })
            .catch((error) => console.error(error))
    }

    function innerEditHandler() {
        let currentId = this.parentNode.id;
        populate(currentId);
        addBtn.disabled = true;
        editBtn.disabled = false;
        currentIdToPut = currentId;
    }

    function editHandler(event) {
        if (event) {
            event.preventDefault();
        }

        let bodyToPatch = {
            title: inputs["title"].value,
            type: inputs["type"].value,
            description: inputs["description"].value,
            teacher: inputs["teacherName"].value,
            _id: currentIdToPut,
        }

        httpHeaders = {
            method: "PUT",
            body: JSON.stringify(bodyToPatch)
        }
        // console.log(currentIdToPut)

        fetch(`${BASE_URL}${currentIdToPut}`, httpHeaders)
            .then(() => {
                loadHandler();
                editBtn.disabled = true;
                addBtn.disabled = false;
                clearInputs();
            })
            .catch((error) => console.error(error))
    }

    function finishHandler() {
        let currentId = this.parentNode.id;
        let httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${currentId}`, httpHeaders)
            .then(() => {
                loadHandler();
            })
            .catch((error) => console.error(error))
    }

    function addHandler(event) {
        if (event) {
            event.preventDefault();
        }

        let bodyToPatch = {
            title: inputs["title"].value,
            type: inputs["type"].value,
            description: inputs["description"].value,
            teacher: inputs["teacherName"].value,
        }

        httpHeaders = {
            method: "POST",
            body: JSON.stringify(bodyToPatch)
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadHandler();
                clearInputs();
            })
    }

    function addELement(element, parent, classInfo, idInfo, text) {
        let newELement = document.createElement(element);

        if (classInfo) {
            newELement.classList.add(...classInfo);
        }

        if (idInfo) {
            newELement.id = idInfo;
        }

        if (text) {
            newELement.textContent = text;
        }

        parent.appendChild(newELement);
        return newELement
    }

    function clearInputs() {
        for (const currentInput of Object.values(inputs)) {
            currentInput.value = ""
        }
    }

    function duplicate(currentObj) {
        let { title, type, description, teacher } = currentObj;
        duplicatedInputs[currentObj._id] = { title, type, description, teacher }
    }


    function populate(currentID) {
        let currentObj = duplicatedInputs[currentID];
        inputs["title"].value = currentObj.title;
        inputs["type"].value = currentObj.type;
        inputs["description"].value = currentObj.description;
        inputs["teacherName"].value = currentObj.teacher;
    }
}


solve();