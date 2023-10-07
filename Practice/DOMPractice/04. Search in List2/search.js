function search() {
   let townList = document.getElementById('towns');
   let searchedText = document.getElementById('searchText');
   let result = document.getElementById('result');

   let totalCount = 0;

   for (let i = 0; i < townList.children.length; i++) {
      let currentTown = townList.children[i];

      if (currentTown.textContent.includes(searchedText.value)) {
         currentTown.style.textDecoration = 'underline';
         currentTown.style.fontWeight = 'bold';
         totalCount ++;
      } else {
         currentTown.style.textDecoration = 'none';
         currentTown.style.fontWeight = '200';
      }
   }

   result.textContent = `${totalCount} matches found`;
}