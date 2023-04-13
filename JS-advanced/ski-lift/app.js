window.addEventListener('load', solve);

function solve() {

    // input fields //
    let inputs = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        peopleCount: document.getElementById("people-count"),
        startDate: document.getElementById("from-date"),
        daysCount: document.getElementById("days-count")
    }

    let ticketInputs = {};

    // buttons //
    let nextBtn = document.getElementById("next-btn");

    // ticketPreview //
    let ticketInfoList = document.getElementsByClassName("ticket-info-list")[0];

    // confirm ticket section //

    let confirmInfoList = document.getElementsByClassName("confirm-ticket")[0];

    let mainDiv = document.getElementById("main");
    let body = document.getElementById("body");


    nextBtn.addEventListener("click", nextBtnHandler);



    function nextBtnHandler(event) {
        if (event) {
            event.preventDefault();
        }

        let allFields = Object.values(inputs)
            .every((currentValue) => currentValue.value != "");

        if (!allFields) {
            return;
        }

        let newList = addELement("li", ticketInfoList, "ticket");
        let newArticle = addELement("article", newList);
        addELement("h3", newArticle, null, null, `Name: ${inputs["firstName"].value} ${inputs["lastName"].value}`);
        addELement("p", newArticle, null, null, `From date: ${inputs["startDate"].value}`);
        addELement("p", newArticle, null, null, `For ${inputs["daysCount"].value} days`);
        addELement("p", newArticle, null, null, `For ${inputs["peopleCount"].value} people`);
        let editBtn = addELement("button", newList, "edit-btn", null, "Edit");
        let continueBtn = addELement("button", newList, "continue-btn", null, "Continue");
        
        nextBtn.disabled = true;
        cloneInputs();
        clearInputs(inputs);

        editBtn.addEventListener("click", editHandler);
        continueBtn.addEventListener("click", continueHandler);
    }


    function editHandler() {
        inputs["firstName"].value = ticketInputs["firstName"];
        inputs["lastName"].value = ticketInputs["lastName"];
        inputs["peopleCount"].value = ticketInputs["peopleCount"];
        inputs["startDate"].value = ticketInputs["startDate"];
        inputs["daysCount"].value = ticketInputs["daysCount"];
        ticketInfoList.innerHTML = "";
        nextBtn.disabled = false;
    }

    function continueHandler() {
        ticketInfoList.innerHTML = "";
        let newList = addELement("li", confirmInfoList, "ticket-content");
        let newArticle = addELement("article", newList);
        addELement("h3", newArticle, null, null, `Name: ${ticketInputs["firstName"]} ${ticketInputs["lastName"]}`);
        addELement("p", newArticle, null, null, `From date: ${ticketInputs["startDate"]}`);
        addELement("p", newArticle, null, null, `For ${ticketInputs["daysCount"]} days`);
        addELement("p", newArticle, null, null, `For ${ticketInputs["peopleCount"]} people`);
        let confirmBtn = addELement("button", newList, "confirm-btn", null, "Confirm");
        let cancelBtn = addELement("button", newList, "cancel-btn", null, "Cancel");

        cancelBtn.addEventListener("click", cancelHandler);
        confirmBtn.addEventListener("click", confirmBtnHandler);
    }

    function confirmBtnHandler() {
        mainDiv.innerHTML = "";
        addELement("h1", body, null, "thank-you", "Thank you, have a nice day! ");
        let backBtn = addELement("button", body, null, "back-btn", "Back ");

        backBtn.addEventListener("click", backHandler);
    }

    function backHandler() {
        location.reload();
    }

    function cancelHandler() {
        confirmInfoList.innerHTML = "";
        nextBtn.disabled = false;
    }


    function clearInputs() {
        for (const currentObj of Object.values(inputs)) {
            currentObj.value = "";
        }
    }

    function cloneInputs() {
        for (const [key, value] of Object.entries(inputs)) {
            ticketInputs[key] = value.value;
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




