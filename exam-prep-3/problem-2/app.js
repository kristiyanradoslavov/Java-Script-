window.addEventListener("load", solve);

function solve() {
  let inputCopy = {
    firstName: null,
    lastName: null,
    age: null,
    storyTitle: null,
    genre: null,
    story: null,
  }

  let inputFields = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    storyTitle: document.getElementById("story-title"),
    genre: document.getElementById("genre"),
    story: document.getElementById("story"),
  }

  let publishBtn = document.getElementById("form-btn");
  let previewList = document.getElementById("preview-list");
  let mainDIv = document.getElementById("main");

  publishBtn.addEventListener("click", publishHandler)


  function publishHandler() {
    let allInputsEmpty = Object.values(inputFields)
      .every((currentInput) => currentInput.value != "");

    if (!allInputsEmpty) {
      return;
    }

    let newLi = addElement("li", previewList, "story-info");
    let newArticle = addElement("article", newLi);
    addElement("h4", newArticle, null, `Name: ${inputFields.firstName.value} ${inputFields.lastName.value}`);
    addElement("p", newArticle, null, `Age: ${inputFields.age.value}`);
    addElement("p", newArticle, null, `Title: ${inputFields.storyTitle.value}`);
    addElement("p", newArticle, null, `Genre: ${inputFields.genre.value}`);
    addElement("p", newArticle, null, inputFields.story.value);
    let saveBtn = addElement("button", newLi, "save-btn", "Save Story");
    let editStory = addElement("button", newLi, "edit-btn", "Edit Story");
    let deleteBtn = addElement("button", newLi, "delete-btn", "Delete Story");

    publishBtn.disabled = true;

    editStory.addEventListener("click", editHandler);
    saveBtn.addEventListener("click", saveHandler);
    deleteBtn.addEventListener("click", deleteHandler);


    for (const cInput in inputFields) { 
      inputCopy[cInput] = inputFields[cInput].value;
      inputFields[cInput].value = ""
    }
  }

  function editHandler() {
    inputFields.firstName.value = inputCopy.firstName;
    inputFields.lastName.value = inputCopy.lastName;
    inputFields.age.value = inputCopy.age;
    inputFields.storyTitle.value = inputCopy.storyTitle;
    inputFields.genre.value = inputCopy.genre;
    inputFields.story.value = inputCopy.story;
    previewList.innerHTML = `<h3>Preview</h3>`;
    publishBtn.disabled = false;
    
  }

  function saveHandler() {
    mainDIv.innerHTML = `<h1>Your scary story is saved!</h1>`;
  }

  function deleteHandler() {
    previewList.innerHTML = `<h3>Preview</h3>`;
    publishBtn.disabled = false;
  }

  function addElement(element, parent, classInfo, text) {
    let newElement = document.createElement(element);

    if (classInfo) {
      newElement.className = classInfo;
    }

    if (text) {
      newElement.textContent = text;
    }

    parent.appendChild(newElement);
    return newElement
  }
}
