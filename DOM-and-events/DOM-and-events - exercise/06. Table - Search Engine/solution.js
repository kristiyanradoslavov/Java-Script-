function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const allRows = Array.from(document.querySelectorAll("tbody tr"))
      for (const currentRow of allRows) {
         if (currentRow.classList == "select") {
            currentRow.classList = ""
         }
      }

      const allInputs = Array.from(document.querySelectorAll("tbody tr td"));
      const currentInput = document.getElementById("searchField")

      for (const i of allInputs) {
         if (i.textContent.toLowerCase().includes(currentInput.value.toLowerCase()) && currentInput.value !== "") {
            const parent = i.parentElement;
            parent.classList = "select"
            console.log()
         }
      }

      currentInput.value = ""
   }
}