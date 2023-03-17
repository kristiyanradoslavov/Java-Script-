function create(words) {
   const currentParent = document.getElementById("content");

   for (const currentString of words) {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");
      newParagraph.style.display = "none";

      newParagraph.textContent = currentString;
      newDiv.appendChild(newParagraph);

      newDiv.addEventListener("click", eventHandler);

      currentParent.appendChild(newDiv)
   }

   function eventHandler(e) {
      const div = e.currentTarget;
      const p = div.children[0];

      p.style.display = "block"
   }

}