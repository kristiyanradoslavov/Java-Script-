function replacement(words, sentence) {
    let info = sentence.split(" ")
    let allWords = words.split(", ")

    for (let i = 0; i < info.length; i++) {
        if (info[i].includes("*")) {
            for (word of allWords) {
                if (word.length === info[i].length) {
                    info[i] = word
                }
            }
        }
    }

    console.log(info.join(" "))
}

replacement(
    'great',
    'softuni is ***** place for learning new programming languages'

)

replacement(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'

)