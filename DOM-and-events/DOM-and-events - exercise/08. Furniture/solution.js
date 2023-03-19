function solve() {
  const generateBtn = document.querySelector("#exercise > :nth-child(3)");
  const buyBtn = document.querySelector("#exercise > :nth-child(6)");
  const input = document.querySelector("#exercise > :nth-child(2)");
  const output = document.querySelector("#exercise > :nth-child(5)");
  const tableBody = document.querySelector(".table > tbody");

  generateBtn.addEventListener("click", generateBtnHandler);
  buyBtn.addEventListener("click", buyBtnHandler);

  function generateBtnHandler(event) {
    let inputText;
    
    try {
      inputText = JSON.parse(input.value);
    } catch (error) {
      console.log("The input must be Array of JSON objects!");
      return;
    }
    for (currentInput of inputText) {
      let newRow = document.createElement("tr");

      //add img//
      let imgCol = document.createElement("td");
      let newImg = document.createElement("img");
      newImg.src = currentInput.img;
      imgCol.appendChild(newImg);

      //add all other elements//
      let nameCol = document.createElement("td");
      let priceCol = document.createElement("td");
      let decFacCol = document.createElement("td");

      // add new paragraphs//
      let namePar = document.createElement("p");
      let pricePar = document.createElement("p");
      let decFacColPar = document.createElement("p");

      // add the text content to all new elements//
      namePar.textContent = currentInput.name;
      pricePar.textContent = currentInput.price;
      decFacColPar.textContent = currentInput.decFactor;

      // add the paragraphs in the new elements//
      nameCol.appendChild(namePar);
      priceCol.appendChild(pricePar);
      decFacCol.appendChild(decFacColPar);

      // add checkbox//
      let checkCol = document.createElement("td");
      let newCheckBoxInput = document.createElement("input");
      newCheckBoxInput.type = "checkbox";
      checkCol.appendChild(newCheckBoxInput);

      //append all new elements//
      newRow.appendChild(imgCol);
      newRow.appendChild(nameCol);
      newRow.appendChild(priceCol);
      newRow.appendChild(decFacCol);
      newRow.appendChild(checkCol);
      tableBody.appendChild(newRow);
    }
  }

  function buyBtnHandler(e) {
    output.textContent = ""

    const tableRows = Array.from(document.querySelectorAll(".table > tbody  tr"));
    let boughtFurniture = [];
    let totalPrice = 0;
    let finalDecorationFac = 0;

    for (const currentRow of tableRows) {

      if (currentRow.children[4].lastChild.checked) {
        totalPrice += Number(currentRow.children[2].textContent);
        finalDecorationFac += Number(currentRow.children[3].textContent);
        boughtFurniture.push(currentRow.children[1].textContent);
      }
    }

    if (boughtFurniture.length > 0) {
      output.textContent += `Bought furniture: ${boughtFurniture.join(", ")}\n`;
      output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      output.textContent += `Average decoration factor: ${finalDecorationFac / boughtFurniture.length}`;
    }
  }
}