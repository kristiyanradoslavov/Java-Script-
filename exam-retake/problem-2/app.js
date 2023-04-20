window.addEventListener("load", solve);

function solve() {
    let inputs = {
        title: document.getElementById("task-title"),
        category: document.getElementById("task-category"),
        content: document.getElementById("task-content"),
    }

    let publishBtn = document.getElementById("publish-btn");

    let reviewList = document.getElementById("review-list");
    let publishedList = document.getElementById("published-list");


    let duplicatedInputs = {};
    let generatedId = 1;

    publishBtn.addEventListener("click", addHandler);


    function addHandler() {
        let filledInputs = Object.values(inputs)
            .every((currentInput) => currentInput.value != "");

        if (!filledInputs) {
            return;
        }

        let newLi = addELement("li", reviewList, ["rpost"], `task-${generatedId}`);
        let newArticle = addELement("article", newLi);
        addELement("h4", newArticle, null, null, inputs["title"].value);
        addELement("p", newArticle, null, null, `Category: ${inputs["category"].value}`)
        addELement("p", newArticle, null, null, `Content: ${inputs["content"].value}`)
        let editBtn = addELement("button", newLi, ["action-btn", "edit"], null, "Edit");
        let postBtn = addELement("button", newLi, ["action-btn", "post"], null, "Post");
        duplicate()
        clearInputs();

        editBtn.addEventListener("click", editHandler);
        postBtn.addEventListener("click", postHandler);
    }

    function editHandler() {
        let currentId = this.parentNode.id;
        let currentLi = this.parentNode;
        loadDuplicates(currentId);
        currentLi.remove();
        delete duplicatedInputs[currentId];
    }

    function postHandler() {
        let currentId = this.parentNode.id;
        let currentLi = this.parentNode;
        let currentObj = duplicatedInputs[currentId];
        currentLi.remove();
        
        let newLi = addELement("li", publishedList, ["rpost"]);
        let newArticle = addELement("article", newLi);
        addELement("h4", newArticle, null, null, currentObj["title"]);
        addELement("p", newArticle, null, null, `Category: ${currentObj["category"]}`)
        addELement("p", newArticle, null, null, `Content: ${currentObj["content"]}`)
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

    function duplicate() {
        let currentId = `task-${generatedId}`;
        generatedId ++;
        let [title, category, content] = Object.values(inputs);
        duplicatedInputs[currentId] = {
            title: title.value,
            category: category.value,
            content: content.value,
        }
    }

    function loadDuplicates(id) {
        let currentObj = duplicatedInputs[id];
        inputs["title"].value = currentObj.title;
        inputs["category"].value = currentObj.category;
        inputs["content"].value = currentObj.content;
    }
}