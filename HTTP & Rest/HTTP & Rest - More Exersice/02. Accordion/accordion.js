function solution() {
    let BASE_URL = "http://localhost:3030/jsonstore/advanced/articles/list/";
    let DETAILS_URL = "http://localhost:3030/jsonstore/advanced/articles/details/"
    let mainElement = document.getElementById("main");

    window.addEventListener("load", loadHandler);

    function loadHandler() {
        fetch(BASE_URL)
            .then((getResult) => getResult.json())
            .then((getData) => {
                for (const currentObj of Object.values(getData)) {
                    let wrapDiv = addElement("div", mainElement, null, ["accordion"]);
                    let headDiv = addElement("div", wrapDiv, null, ["head"]);
                    addElement("span", headDiv, currentObj.title);
                    let newBtn = addElement("button", headDiv, "More", ["button"], currentObj._id);
                    let extraDiv = addElement("div", wrapDiv, null, ["extra"]);
                    fetch(`${DETAILS_URL}${currentObj._id}`)
                        .then((detailsResult) => detailsResult.json())
                        .then((detailsData) => {
                            addElement("p", extraDiv, `${detailsData.content}`);

                        })
                        .catch((error) => console.error(error))

                    newBtn.addEventListener("click", btnHandler);
                }
            })
            .catch((error) => console.error(error))
    }

    function btnHandler() {
        let parent = this.parentNode.parentNode;
        let extra = parent.querySelector(".extra");

        if (this.textContent === "More") {
            extra.style.display = "block";
            this.textContent = "Less";
        } else {
            extra.style.display = "none";
            this.textContent = "More";
        }
    }


    function addElement(element, parent, text, classInfo, idInfo) {
        let newElement = document.createElement(element);

        if (text) {
            newElement.textContent = text;
        }

        if (classInfo) {
            newElement.classList.add(...classInfo);
        }

        if (idInfo) {
            newElement.id = idInfo;
        }

        parent.appendChild(newElement);
        return newElement;
    }

}

solution()