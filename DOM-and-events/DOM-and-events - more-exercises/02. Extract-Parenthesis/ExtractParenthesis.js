function extract(content) {
    let regexPattern = /\(([\w]+ ?)*\)/g;
    let replacePattern = new RegExp(/\(|\)/, "g");

    let paragraph = document.getElementById(content)
    let result = paragraph.textContent.match(regexPattern);

    let finalResult = []

    for (let i = 0; i < result.length; i++){
        result[i] = result[i].replace(replacePattern, "")
        finalResult.push(result[i])
    }

    return finalResult.join("; ")

}