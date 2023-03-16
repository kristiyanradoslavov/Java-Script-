function addItem() {
    const newtText = document.getElementById("newItemText");

    const unorderedList = document.getElementById("items");
    let newItem = document.createElement("li");
    newItem.textContent = newtText.value;
    unorderedList.appendChild(newItem);

    let newAnchor = document.createElement("a");
    newAnchor.textContent = "[Delete]";
    newAnchor.href = "#"
    newItem.appendChild(newAnchor);
    
    newtText.value = ""

    newAnchor.addEventListener("click", eventHandler);

    function eventHandler(){
        newItem.remove();
    }
}