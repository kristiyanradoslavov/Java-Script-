function loadRepos() {
	const currentUl = document.getElementById("repos");
	const currentUsername = document.getElementById("username").value;
	const URI = "https://api.github.com/users"

	fetch(`${URI}/${currentUsername}/repos`)
		.then((result) => result.json())
		.then((res) => {
			Array.from(currentUl.children)
				.map((current) => current.remove())

			for (const currentRepo of res) {
				let newList = document.createElement("li");
				let newATag = document.createElement("a");
				let currentUrl = currentRepo.html_url;
				let currentName = currentRepo.full_name;

				newATag.href = currentUrl;
				newATag.textContent = currentName;
				newList.appendChild(newATag);
				currentUl.appendChild(newList);
			}
		})
		.catch((error) => {
			let newList = document.createElement("li");
			newList.textContent = error;
			currentUl.appendChild(newList)

		})

}	