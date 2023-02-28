function hashtag(sentence) {
    let info = sentence.split(" ");
    let pattern = /#[a-zA-Z]+\b/

    for (word of info) {
        if (word.startsWith("#") && word.match(pattern) && word.length > 1) {
            let result = word.replace("#", "")
            console.log(result)
        }
    }
}

hashtag(
    'Nowadays everyone uses #123 to tag a #special word in #socialMedia'
)

hashtag (
    'The symbol # is known #variously in English-speaking #regions as the #number sign'
)