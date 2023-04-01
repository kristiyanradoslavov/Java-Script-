window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const storyTitle = document.getElementById("story-title");
  const genre = document.getElementById("genre");
  const story = document.getElementById("story")
  const btn = document.getElementById("form-btn");
  const previewList = document.getElementById("preview-list");
  const mainDiv = document.getElementById("main");

  btn.addEventListener("click", btnEventHandler);

  function btnEventHandler() {
    if (firstName.value && lastName.value && age.value && storyTitle.value && genre.value && story.value) {
      let newLi = addEle("li", previewList, "story-info");
      let newArticle = addEle("article", newLi);
      let newName = addEle("h4", newArticle, "", `Name: ${firstName.value} ${lastName.value}`);
      let newAge = addEle("p", newArticle, "", `Age: ${age.value}`);
      let newTitle = addEle("p", newArticle, "", `Title: ${storyTitle.value}`);
      let newGenre = addEle("p", newArticle, "", `Genre: ${genre.value}`);
      let newStory = addEle("p", newArticle, "", story.value);

      let saveBtn = addEle("button", newLi, "save-btn", "Save Story");
      let editBtn = addEle("button", newLi, "edit-btn", "Edit Story");
      let deleteBtn = addEle("button", newLi, "delete-btn", "Delete Story");
      firstName.value = "";
      lastName.value = ""
      age.value = "";
      storyTitle.value = "";
      genre.value = "";
      story.value = "";
      btn.disabled = true;

      editBtn.addEventListener("click", () => {
        // debugger
        previewList.innerHTML = `<h3>Preview</h3>`;
        console.log(newName.textContent)
        let [_, fName, lName] = newName.textContent.split(" ");
        firstName.value = fName.textContent;
        lastName.value = lName.textContent;
        age.value = newAge.textContent;
        storyTitle.value = newTitle.textContent;
        genre.value = newGenre.textContent;
        story.value = newStory.textContent;
        btn.disabled = false;
      });

      // saveBtn.addEventListener("click", saveHandler)
    }
  }

  function addEle(element, parent, classInfo, textInfo) {
    let newElement = document.createElement(element);

    if (classInfo) {
      newElement.className = classInfo;
    }

    if (textInfo) {
      newElement.textContent = textInfo
    }

    parent.appendChild(newElement)

    return newElement;
  }
}
