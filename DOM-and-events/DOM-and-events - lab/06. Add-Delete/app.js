function addItem() {
    const newtText = document.getElementById("newItemText").value

    const unorderedList = document.getElementById("items");
    let newItem = document.createElement("li");
    newItem.textContent = newtText;
    unorderedList.appendChild(newItem);

    let newAnchor = document.createElement("a");
    newAnchor.textContent = "[Delete]";
    newAnchor.href = "#"
    newItem.appendChild(newAnchor)

    newItem.addEventListener("click", eventHandler);

    function eventHandler(){
        newItem.remove();
    }
}