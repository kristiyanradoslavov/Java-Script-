function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";
  const loadBtn = document.getElementById("loadBooks");
  const tableBody = document.querySelector("table tbody");
  const bookTitle = document.querySelector("input[name=title]");
  const bookAuthor = document.querySelector("input[name=author]");
  const submitBtn = document.querySelector("#form :last-child");
  const formLabel = document.querySelector("#form :nth-child(1)");


  loadBtn.addEventListener("click", getEventHandler);
  submitBtn.addEventListener("click", handleAddEvent);



  function handleAddEvent() {
    if (bookTitle.value && bookAuthor.value) {
      let dataToPost = {
        author: bookAuthor.value,
        title: bookTitle.value
      }
      let httpHeaders = {
        method: "POST",
        body: JSON.stringify(dataToPost)
      }

      fetch(BASE_URL, httpHeaders)
        .then((postResult) => postResult.json())
        .then(() => {
          bookTitle.value = "";
          bookAuthor.value = "";
          getEventHandler();
        })
        .catch((error) => console.error(error))
    }
  }


  function getEventHandler() {
    tableBody.innerHTML = "";
    fetch(BASE_URL)
      .then((getResult) => getResult.json())
      .then((getData) => {
        for ([key, { author, title }] of Object.entries(getData)) {
          updateInnerHtml(key, author, title);
        }
        let editBtn = document.querySelectorAll("tbody tr :last-child :nth-child(1)");
        let deleteBtn = document.querySelectorAll("tbody tr :last-child :nth-child(2)");

        editBtn.forEach((currentBtn) => currentBtn.addEventListener("click", editHandler));
        deleteBtn.forEach((currentBtn) => currentBtn.addEventListener("click", deleteHandler));
      })

      .catch((error) => console.error(error))


    // edit handler function
    function editHandler(e) {
      bookTitle.value = "";
      bookAuthor.value = "";
      submitBtn.textContent = "Save";
      formLabel.textContent = "Edit FORM";

      let btn = e.currentTarget;
      let editContainerId = btn.parentNode.parentNode.id;
      submitBtn.addEventListener("click", saveEditHandler);
      submitBtn.removeEventListener("click", handleAddEvent);

      // saveHandler function and fetch edit request
      function saveEditHandler() {
        let informationContent = {
          author: bookAuthor.value,
          title: bookTitle.value,
        }

        let httpHeaders = {
          method: "PUT",
          body: JSON.stringify(informationContent)
        }

        if (bookAuthor.value.length > 0 && bookTitle.value.length > 0) {
          fetch(`${BASE_URL}${editContainerId}`, httpHeaders)
            .then((putResult) => putResult.json())
            .then(() => {
              getEventHandler();
              submitBtn.textContent = "Submit";
              formLabel.textContent = "FORM";
              bookTitle.value = "";
              bookAuthor.value = "";
              submitBtn.removeEventListener("click", saveEditHandler);
              submitBtn.addEventListener("click", handleAddEvent)
            })
            .catch((error) => console.error(error))
        }
      }
    }

    // delete handler function//
    function deleteHandler(event) {
      let btn = event.currentTarget;
      let editContainerId = btn.parentNode.parentNode.id;
      fetch(`${BASE_URL}${editContainerId}`, {
        method: "DELETE"
      })
        .then((deleteResult) => deleteResult.json())
        .then(() => {
          getEventHandler();
        })
    }


    function updateInnerHtml(currKey, currAuthor, curTitle) {
      let newRow = document.createElement("tr");
      newRow.innerHTML =
        `<tr>
          <td>${curTitle}</td>
          <td>${currAuthor}</td>
          <td>
              <button>Edit</button>
              <button>Delete</button>
          </td>
        </tr>`
      newRow.id = currKey;
      tableBody.appendChild(newRow);
    }
  }
}

attachEvents();