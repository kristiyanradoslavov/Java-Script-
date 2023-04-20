function solve() {

    let currentInput = {
        pass
    }

    let duplicatedInputs = {};

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

    // function duplicate() {
    //     // let currentId = `task-${generatedId}`;
    //     let [title, description, type, points, assignee] = Object.values(inputs);
    //     duplicatedInputs[currentId] = {
    //         title: title.value,
    //         description: description.value,
    //         type: type.value,
    //         points: points.value,
    //         assignee: assignee.value,
    //     }
    // }
}