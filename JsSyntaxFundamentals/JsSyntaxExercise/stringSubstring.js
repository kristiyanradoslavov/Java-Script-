function wordCheck(word, text) {
    let textArray = text.split(" ");
    let wordLower = word.toLowerCase();
    let wordFound = false;

    for (const currentWord of textArray) {
        if (currentWord.toLowerCase() === wordLower) {
            console.log(word);
            wordFound = true;
            break;
        }
    }

    if (!wordFound) {
        console.log(`${word} not found!`);
    }
}


wordCheck(
    'javascript',
    'JavaScript is the best programming language'

);

wordCheck(
    'python',
    'JavaScript is the best programming language'

)