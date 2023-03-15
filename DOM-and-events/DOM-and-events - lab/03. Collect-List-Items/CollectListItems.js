function extractText() {
    const content = document.getElementsByTagName("li");
    const resultArea = document.getElementById("result")

    let result = [];

    for (const currentLi of content) {
        result.push(currentLi.textContent)
    }

    resultArea.value = result.join("\n")
}