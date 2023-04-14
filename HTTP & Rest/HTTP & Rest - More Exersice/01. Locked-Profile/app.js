function lockedProfile() {
    let BASE_URL = "http://localhost:3030/jsonstore/advanced/profiles/";
    let mainContainer = document.getElementById("main");
    let nameNumber = 1
    mainContainer.innerHTML = ""

    fetch(BASE_URL)
        .then((getResult) => getResult.json())
        .then((getData) => {

            for (const currentUser of Object.values(getData)) {
                let newDiv = createElement("div", mainContainer, null, ["profile"]);
                createElement("img", newDiv, null, ["userIcon"], null, { src: "./iconProfile2.png" });
                createElement("label", newDiv, "Lock");
                let checkElement = createElement("input", newDiv, null, null, null, { type: "radio", name: `user${nameNumber}Locked`, value: "lock" }).checked = true;
                createElement("label", newDiv, "Unlock");
                createElement("input", newDiv, null, null, null, { type: "radio", name: `user${nameNumber}Locked`, value: "unlock" });
                createElement("br", newDiv);
                createElement("hr", newDiv);
                createElement("label", newDiv, "Username");
                createElement("input", newDiv, null, null, null, { type: "text", name: `user${nameNumber}Username`, value: `${currentUser.username}`, disabled: true, readonly: true });
                let hiddenFieldsDiv = createElement("div", newDiv, null, null, `user${nameNumber}HiddenFields`);
                createElement("hr", hiddenFieldsDiv);
                createElement("label", hiddenFieldsDiv, "Email:");
                createElement("input", hiddenFieldsDiv, null, null, null, { type: "email", name: `user${nameNumber}Email`, value: `${currentUser.email}`, disabled: true, readonly: true });
                createElement("label", hiddenFieldsDiv, "Age:");
                createElement("input", hiddenFieldsDiv, null, null, null, { type: "email", name: `user${nameNumber}Age`, value: `${currentUser.age}`, disabled: true, readonly: true });
                let btn = createElement("button", newDiv, "Show More");
                hiddenFieldsDiv.style.display = "none";
                nameNumber++;

                btn.addEventListener("click", btnHandler);
            }

        })

    function btnHandler() {
        let parent = this.parentNode;
        let inputField = parent.querySelector(":nth-child(3)");
        let hiddenFields = parent.querySelector(":nth-child(10)")
        if (inputField.checked === true) {
            return;
        }
        if (this.textContent === "Show More") {
            hiddenFields.style.display = "block";
            this.textContent = "Hide it";
        } else {
            hiddenFields.style.display = "none";
            this.textContent = "Show More";
        }
    }



    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }

            if (content && type === 'input') {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        // { src: 'link', href: 'http' }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}
