function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/messenger";
    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");
    const authorElement = document.querySelector("input[name=author]");
    const contentElement = document.querySelector("input[name=content]");
    const textArea = document.getElementById("messages");

    sendBtn.addEventListener("click", sendEventHandler);
    refreshBtn.addEventListener("click", refreshEventHandler);

    function sendEventHandler() {
        let contentObj = {
            author: authorElement.value,
            content: contentElement.value,
        }

        fetch(BASE_URL, {
            method: "post",
            body: JSON.stringify(contentObj)
        })
        authorElement.value = "";
        contentElement.value = "";
    }

    function refreshEventHandler() {
        textArea.innerHTML = ""
        fetch(BASE_URL)
            .then((result) => result.json())
            .then((data) => {
                for ({author, content} of Object.values(data)) {
                    textArea.textContent += `${author}: ${content}\n`
                }
            })
    }
}

attachEvents();