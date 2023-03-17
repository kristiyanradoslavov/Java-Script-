function create(words) {
   const currentParent = document.getElementById("content");

   for (const currentString of words) {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");
      newParagraph.textContent = currentString;
      newDiv.appendChild(newParagraph);

      newDiv.addEventListener("click", eventHandler);

      currentParent.appendChild(newDiv)
   }

   function eventHandler(e) {
      e.target.style.display = "none"
   }

}