function oddWords(input) {
    let splittedInput = input.split(" ")
    let allWords = {};

    for (const word of splittedInput) {
        if (!allWords.hasOwnProperty(word.toLowerCase())) {
            allWords[word.toLowerCase()] = 0;
        }

        allWords[word.toLowerCase()] += 1;
    }

    let result = [];

    for (const [key, value] of Object.entries(allWords)) {
        if (value % 2 !== 0) {
            result.push(key)
        }
    }

    console.log(result.join(" "))

}


oddWords(
    'Cake IS SWEET is Soft CAKE sweet Food'
)