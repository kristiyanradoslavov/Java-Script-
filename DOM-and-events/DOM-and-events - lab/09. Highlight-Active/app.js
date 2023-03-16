function focused() {
    const allInputs = Array.from(document.querySelectorAll("div div input"))
    
    allInputs.forEach(currentInput => currentInput.addEventListener("focus", focusHandler))
    allInputs.forEach(currentInput => currentInput.addEventListener("blur", blurHandler))

    function focusHandler(event) {
        let result = event.target;
        result.parentElement.classList.add("focused")
    }

    function blurHandler (event) {
        event.target.parentElement.classList.remove("focused")
    }
}