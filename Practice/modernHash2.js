const { toLower } = require("lodash")

function solution(sentence) {
    let result = []

    for (const word of sentence) {
        if (word[0] === "#" && word.length > 1) {
            for (const letter of word) {
                if (toLower(letter).charCodeAt(0) <= 97 && toLower(letter).charCodeAt(0) <= 122 ) {
                    
                }
            }
        }
    }
}


solution(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
)