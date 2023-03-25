function loadRepos() {
   const resultDiv = document.getElementById('res');
   const URI = "https://api.github.com/users/testnakov/repos12";

   fetch(URI, { method: "Get" })
    .then((result) => result.text())
     .then((res) => {
      resultDiv.textContent = res;
     })
     .catch((err) => {
         console.error(err)
      })
}