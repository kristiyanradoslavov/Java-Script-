function create(words) {
   let content = document.getElementById("content");

   for (const currentWord of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = currentWord;
      newP.style.display = 'none';

      newDiv.appendChild(newP);
      content.appendChild(newDiv);
   }

   for (const currentDiv of content.childNodes) {
      currentDiv.addEventListener('click', clickHandler);
   }

   function clickHandler(event) {
      let targetedDiv = event.currentTarget;
      let targetP = targetedDiv.children[0];

      targetP.style.display = 'block';
   }
}