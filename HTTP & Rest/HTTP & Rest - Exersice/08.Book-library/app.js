function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";
  const loadBtn = document.getElementById("loadBooks");


  loadBtn.addEventListener("click", getEventHandler);


  function getEventHandler() {
    fetch(BASE_URL)
      .then((getResult) => getResult.json())
      .then((getData) => {
        for ([key, { author, title }] of Object.entries(getData)) {

        }
      })
  }
}

attachEvents();