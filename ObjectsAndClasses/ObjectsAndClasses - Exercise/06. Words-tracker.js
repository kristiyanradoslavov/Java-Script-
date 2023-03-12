function words(input) {
    let controlWords = input.shift().split(" ");

    let result = [];

    for (let i = 0; i < controlWords.length; i++) {
        result.push({});
        result[i]["name"] = controlWords[i];
        result[i]["count"] = 0;
    }

    for (const wordToCheck of input) {
        for (const currentObj of result) {
            if (Object.values(currentObj).includes(wordToCheck)) {
                currentObj["count"]++;
            }
        }
    }

    let sortedResult = [...result].sort((aNum, bNum) => bNum.count - aNum.count)

    for (let word of sortedResult) {
        console.log(`${word.name} - ${word.count}`)
    }
}


words(
    [
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
        

)