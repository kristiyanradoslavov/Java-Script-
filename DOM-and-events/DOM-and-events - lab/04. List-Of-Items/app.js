function addItem() {
    const currentUl = document.querySelector("#items")
    const currentInput = document.getElementById("newItemText")

    let newList = document.createElement("li")
    newList.textContent = currentInput.value

    currentUl.appendChild(newList)
}