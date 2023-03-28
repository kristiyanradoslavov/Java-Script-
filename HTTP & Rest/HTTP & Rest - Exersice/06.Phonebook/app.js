function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";
    const loadBtn = document.getElementById("btnLoad");
    const createBtn = document.getElementById("btnCreate");
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const resultUl = document.getElementById("phonebook");

    loadBtn.addEventListener("click", loadEventHandler);
    createBtn.addEventListener("click", createEventHandler);


    function loadEventHandler() {
        resultUl.innerHTML = "";
        fetch(BASE_URL)
            .then((getResult) => getResult.json())
            .then((getData) => {
                for ({ person, phone, _id } of Object.values(getData)) {
                    let newLi = document.createElement("li");
                    let newDeleteBtn = document.createElement("button");
                    newDeleteBtn.textContent = "Delete";
                    newLi.innerHTML = `${person}: ${phone}`;
                    newDeleteBtn.id = _id;
                    newLi.appendChild(newDeleteBtn);
                    resultUl.appendChild(newLi);
                    newDeleteBtn.addEventListener("click", deleteEventHandler);
                }
            })
            .catch(() => {
                console.error("Error on get request")
            })
    }

    function deleteEventHandler() {
        const id = this.id;
        const httpHeaders = {
            method: "DELETE"
        };
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((result) => result.json())
            .then((delData) => {
                loadEventHandler();
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function createEventHandler() {
        let postInformation = {
            person: personInput.value,
            phone: phoneInput.value,
        }

        fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(postInformation)
        })
            .then(() => {
                loadEventHandler()
                personInput.value = "";
                phoneInput.value = "";
            })
            .catch(() => {
                console.error("error on post request")
            })

    }
}

attachEvents();