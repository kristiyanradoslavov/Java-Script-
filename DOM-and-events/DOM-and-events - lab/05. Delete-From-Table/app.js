function deleteByEmail() {
    const inputText = document.querySelector("label input");
    const allEmails = document.querySelectorAll("tbody tr :nth-child(2)");
    const resultInfo = document.getElementById("result");
    
    for (const currentRow of allEmails) {
        if (currentRow.textContent === inputText.value) {
            currentRow.parentElement.remove();
            resultInfo.textContent = "Deleted";
            inputText.value = ""
            break
        }

        resultInfo.textContent = "Not found."
    }

}   