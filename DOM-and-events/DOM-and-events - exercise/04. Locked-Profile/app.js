function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll(".profile button"));

    for (const currentButton of buttons) {
        currentButton.addEventListener("click", eventHandler);
    }


    function eventHandler(e) {
        const currentButton = e.currentTarget
        const currentProfile = e.currentTarget.parentElement;
        const currentDiv = currentProfile.children[9];
        const currentInput = currentProfile.children[4]

        if (currentInput.checked && currentButton.textContent === "Show more") {
            currentDiv.style.display = "block";
            currentButton.textContent = "Hide it";
        } else if (currentInput.checked && currentButton.textContent === "Hide it") {
            currentDiv.style.display = "None";
            currentButton.textContent = "Show more"
        }
    }
}