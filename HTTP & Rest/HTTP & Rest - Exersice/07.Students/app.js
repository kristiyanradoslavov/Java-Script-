function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students/";
  const fName = document.querySelector(".inputs input[name=firstName]");
  const lName = document.querySelector(".inputs input[name=lastName]");
  const facNum = document.querySelector(".inputs input[name=facultyNumber]");
  const grading = document.querySelector(".inputs input[name=grade]");
  const tBody = document.getElementsByTagName("tbody")[0];

  fetch(BASE_URL)
    .then((result) => result.json())
    .then((data) => {
      for ({ firstName, lastName, facultyNumber, grade, _id } of Object.values(data)) {
        let newTr = document.createElement("tr");
        let firstD = document.createElement("td")
        let seconD = document.createElement("td")
        let thirdD = document.createElement("td")
        let forthD = document.createElement("td")

        firstD.textContent = firstName;
        seconD.textContent = lastName;
        thirdD.textContent = facultyNumber;
        forthD.textContent = grade;
        newTr.appendChild(firstD)
        newTr.appendChild(seconD)
        newTr.appendChild(thirdD)
        newTr.appendChild(forthD)
        tBody.appendChild(newTr)
      }
    })

  const btn = document.getElementById("submit");

  btn.addEventListener("click", btnHandler);

  function btnHandler() {
    let newStudentInfo = {
      firstName: fName.value,
      lastName: lName.value,
      facultyNumber: facNum.value,
      grade: grading.value
    }

    const httpHeaders = {
      method: "POST",
      body: JSON.stringify(newStudentInfo)
    }

    if (fName.value.length > 0 && lName.value.length > 0 && facNum.value.length > 0 && grading.value.length > 0) {
      fetch(BASE_URL, httpHeaders)
        .then((result) => result.json())
        .then(() => {
        })
        .catch((error) => console.error(error))
      fName.value = "";
      lName.value = "";
      facNum.value = "";
      grading.value = "";
    }

  }
}

attachEvents();