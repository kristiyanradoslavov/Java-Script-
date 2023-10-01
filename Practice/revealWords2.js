function solution(words, sentence) {
    let wordsList = words.split(', ')
    let sentenceList = sentence.split(' ')

    for (const word of wordsList) {
        for (let i = 0; i < sentence.length; i++) {
            if (sentenceList[i].includes("*")) {
                if (sentenceList[i].length === word.length) {
                    sentenceList[i] = word;
                    break;
                }
            }
        }
    }

    console.log(sentenceList.join(' '))
}

solution(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)