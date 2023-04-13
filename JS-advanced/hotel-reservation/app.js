window.addEventListener('load', solve);

function solve() {
    // inputs
    let inputs = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        checkIn: document.getElementById("date-in"),
        checkOut: document.getElementById("date-out"),
        peopleCount: document.getElementById("people-count"),
    }

    let infoList = document.getElementsByClassName("info-list")[0];
    let confirmList = document.getElementsByClassName("confirm-list")[0];
    let result = document.getElementById("verification");

    let clonedInputs = {};

    let nextBtn = document.getElementById("next-btn");




    nextBtn.addEventListener("click", nextHandler);

    function nextHandler(event) {
        if (event) {
            event.preventDefault();
        }

        let filledInputs = Object.values(inputs)
            .every((currentInput) => currentInput.value != "");

        if (!filledInputs) {
            return;
        }

        let newLi = addELement("li", infoList, "reservation-content");
        let newArticle = addELement("article", newLi);
        addELement("h3", newArticle, null, null, `Name: ${inputs["firstName"].value} ${inputs["lastName"].value}`);
        addELement("p", newArticle, null, null, `From date: ${inputs["checkIn"].value}`);
        addELement("p", newArticle, null, null, `To date: ${inputs["checkOut"].value}`);
        addELement("p", newArticle, null, null, `For ${inputs["peopleCount"].value} people`);
        let editBtn = addELement("button", newLi, "edit-btn", null, "Edit");
        let continueBtn = addELement("button", newLi, "continue-btn", null, "Continue");

        cloneInputs();
        clearInputs();
        nextBtn.disabled = true;

        editBtn.addEventListener("click", editHandler);
        continueBtn.addEventListener("click", continueHandler);
    }

    function editHandler() {
        infoList.innerHTML = "";
        inputs["firstName"].value = clonedInputs["firstName"];
        inputs["lastName"].value = clonedInputs["lastName"];
        inputs["checkIn"].value = clonedInputs["checkIn"];
        inputs["checkOut"].value = clonedInputs["checkOut"];
        inputs["peopleCount"].value = clonedInputs["peopleCount"];
        nextBtn.disabled = false;
    }

    function continueHandler() {
        infoList.innerHTML = "";
        let newLi = addELement("li", confirmList, "reservation-content");
        let newArticle = addELement("article", newLi);
        addELement("h3", newArticle, null, null, `Name: ${clonedInputs["firstName"]} ${clonedInputs["lastName"]}`);
        addELement("p", newArticle, null, null, `From date: ${clonedInputs["checkIn"]}`);
        addELement("p", newArticle, null, null, `To date: ${clonedInputs["checkOut"]}`);
        addELement("p", newArticle, null, null, `For ${clonedInputs["peopleCount"]} people`);
        let confirmBtn = addELement("button", newLi, "confirm-btn", null, "Confirm");
        let cancelBtn = addELement("button", newLi, "cancel-btn", null, "Cancel");

        confirmBtn.addEventListener("click", confirmHandler)
        cancelBtn.addEventListener("click", cancelHandler)
    }

    function confirmHandler() {
        nextBtn.disabled = false;
        confirmList.innerHTML = "";
        result.className = "verification reservation-confirmed"
        result.textContent = "Confirmed.";
    }

    function cancelHandler() {
        nextBtn.disabled = false;
        confirmList.innerHTML = "";
        result.className = "verification reservation-cancelled"
        result.textContent = "Cancelled.";
    }


    function clearInputs() {
        for (const currentObj of Object.values(inputs)) {
            currentObj.value = "";
        }
    }

    function cloneInputs() {
        for (const [key, value] of Object.entries(inputs)) {
            clonedInputs[key] = value.value;
            value.value = "";
        }
    }

    function addELement(element, parent, classInfo, idInfo, text) {
        let newElement = document.createElement(element);

        if (classInfo) {
            newElement.className = classInfo;
        }

        if (idInfo) {
            newElement.id = idInfo;
        }

        if (text) {
            newElement.textContent = text;
        }

        parent.appendChild(newElement);
        return newElement
    }

    }



    
    
