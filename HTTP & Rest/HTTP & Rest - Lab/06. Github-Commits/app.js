function loadCommits() {
    const nameInput = document.getElementById("username").value;
    const repoName = document.getElementById("repo").value;
    const resultUl = document.getElementById("commits");
    const currentURI = "https://api.github.com/repos";

    fetch(`${currentURI}/${nameInput}/${repoName}/commitss`)
        .then((result) => result.json())
        .then((data) => {
            for (const currentEl of data) {
                let newList = document.createElement("li");
                let currentName = currentEl.commit.author.name;
                let message = currentEl.commit.message;
                newList.textContent = `${currentName}:${message}`
                resultUl.appendChild(newList)
            };
        })
        .catch((error) => {
            let newList = document.createElement("li");
            newList.textContent = `Error: ${error} (Not Found)`;
            resultUl.appendChild(newList)

        })
}