function loadCommits() {
    const nameInput = document.getElementById("username").value;
    const repoName = document.getElementById("repo").value;
    const resultUl = document.getElementById("commits");
    const currentURI = "https://api.github.com/repos";

    fetch(`${currentURI}/${nameInput}/${repoName}/commits`)
        .then((result) => result.json())
        .then((data) => {
            let newList = document.createElement("li");
            for (const currentEl of data) {
                console.log(currentEl)
                // let currentName = currentEl.author.name;
                // let message = currentEl.commits.message;
                // newList.textContent = `${currentName}:${message}`
            };
        })
        .catch((error) => {
            console.error("Ebasi")
        })
}