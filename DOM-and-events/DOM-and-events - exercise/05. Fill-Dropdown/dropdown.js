function addItem() {
    const dropDownMenu = document.getElementById("menu");
    const [text, value, btn] = document.getElementsByTagName("input");

    let newOption = document.createElement("option");
    newOption.textContent = text.value;
    newOption.value = value.value;

    dropDownMenu.appendChild(newOption)

    text.value = "";
    value.value = "";
}