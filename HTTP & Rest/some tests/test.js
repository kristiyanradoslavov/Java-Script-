function test() {
    const GIT_API = "https://api.github.com/repos/testnakov/test-nakov-repo/issues"
    let someTests = {
        title: "New issue here maaan",
        body: "nasty bug",
        labels: ["bug", "nasty"]
    }



    fetch(GIT_API, {
        method: 'Post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(someTests)
    })

}