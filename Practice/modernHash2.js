function solution(sentence) {
    let sentenceArray = sentence.split(' ');
    let result = [];

    for (const word of sentenceArray) {
        if (word[0] === "#" && word.length > 1) {
            let invalidWord = false
            for (let currentLetterIdx = 1; currentLetterIdx < word.length; currentLetterIdx++) {
                if (word[currentLetterIdx].toLowerCase().charCodeAt(0) < 97 || word[currentLetterIdx].toLowerCase().charCodeAt(0) > 122 ) {
                    invalidWord = true
                    break;
                }
            }
            
            if (!invalidWord) {
                let currentWord = word.replace('#', '')
                result.push(currentWord)
            }
        }
    }

    console.log(result.join('\n'));
}


solution(
    'The symbol # is known #variously in English-speaking #regions as the #number sign'
    )