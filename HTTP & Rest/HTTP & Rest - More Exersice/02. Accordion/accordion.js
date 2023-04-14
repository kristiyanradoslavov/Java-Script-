function solution() {
    let BASE_URL = "http://localhost:3030/jsonstore/advanced/articles/list/";
    let mainElement = document.getElementById("main");

    window.addEventListener("load", loadHandler);

    function loadHandler() {
        fetch(BASE_URL)
            .then((getResult) => getResult.json())
            .then((getData) => {
                for (const currentObj of Object.values(getData)) {

                }
            })
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