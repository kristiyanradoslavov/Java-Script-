window.addEventListener("load", solve);

function solve() {
  let inputs = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    gender: document.getElementById("genderSelect"),
    description: document.getElementById("task"),
  }

  let inProgressSection = document.getElementById("in-progress");
  let finishedSection = document.getElementById("finished");

  let progressCounter = document.getElementById("progress-count");
  let clearBtn = document.getElementById("clear-btn");


  let internalCounter = 0;
  let uniqueId = 1;
  let inputDuplicates = {};

  let submitBtn = document.getElementById("form-btn");

  submitBtn.addEventListener("click", submitHandler);
  clearBtn.addEventListener("click", clearHandler);


  function submitHandler() {
    let emptyInputs = Object.values(inputs)
      .every((currentInput) => currentInput.value != "");

    if (!emptyInputs) {
      return;
    }

    let newLi = addELement("li", inProgressSection, "each-line", uniqueId);
    let newArticle = addELement("article", newLi);
    addELement("h4", newArticle, null, null, `${inputs["firstName"].value} ${inputs["lastName"].value}`);
    addELement("p", newArticle, null, null, `${inputs["gender"].value}, ${inputs["age"].value}`);
    addELement("p", newArticle, null, null, `Dish description: ${inputs["description"].value}`);
    let editBtn = addELement("button", newLi, "edit-btn", null, "Edit");
    let completeBtn = addELement("button", newLi, "complete-btn", null, "Mark as complete");
    
    increaseCounter();
    cloneInputs();
    clearInputs();

    editBtn.addEventListener("click", editHandler);
    completeBtn.addEventListener("click", completeHandler);
  }

  function editHandler(event) {
    let currentParent = event.currentTarget.parentNode;
    let currentInputs = inputDuplicates[currentParent.id];
    inputs["firstName"].value = currentInputs["firstName"];
    inputs["lastName"].value = currentInputs["lastName"];
    inputs["age"].value = currentInputs["age"];
    inputs["gender"].value = currentInputs["gender"];
    inputs["description"].value = currentInputs["description"];

    currentParent.remove();
    decreaseCounter();
    delete inputDuplicates[currentParent];
  }

  function completeHandler(event) {
    let currentParent = event.currentTarget.parentNode;
    let currentInputsId = currentParent.id;

    let newLi = addELement("li", finishedSection, "each-line", uniqueId);
    let newArticle = addELement("article", newLi);
    addELement("h4", newArticle, null, null, `${inputDuplicates[currentInputsId].firstName} ${inputDuplicates[currentInputsId].lastName}`);
    addELement("p", newArticle, null, null, `${inputDuplicates[currentInputsId].gender}, ${inputDuplicates[currentInputsId].age}`);
    addELement("p", newArticle, null, null, `Dish description: ${inputDuplicates[currentInputsId].description}`);

    currentParent.remove();
    delete inputDuplicates[currentInputsId];
    decreaseCounter();
  }

  function clearHandler() {
    finishedSection.innerHTML = "";
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

  function clearInputs() {
    for (const currentInput of Object.values(inputs)) {
      currentInput.value = "";
    }
  }

  function cloneInputs() {
    let firstName = inputs["firstName"].value;
    let lastName = inputs["lastName"].value;
    let age = inputs["age"].value;
    let gender = inputs["gender"].value;
    let description = inputs["description"].value;

    inputDuplicates[uniqueId] = { firstName, lastName, age, gender, description };
    uniqueId ++;
  }

  function increaseCounter() {
    internalCounter ++;
    progressCounter.textContent = internalCounter;
  }

  function decreaseCounter() {
    internalCounter --;
    progressCounter.textContent = internalCounter;
  }
}
