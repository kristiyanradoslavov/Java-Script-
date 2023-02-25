function solve(text, word) {

    let result = text.replace(word, "*".repeat(word.length))

    while (result.includes(word)) {
        result = result.replace(word, "*".repeat(word.length))

    }

    console.log(result)

}
 
solve('Find the hidden word hidden hidden', 'hidden')
