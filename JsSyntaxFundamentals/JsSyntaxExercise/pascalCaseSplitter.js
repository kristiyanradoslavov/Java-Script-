function split(text) {
    let pattern = /[A-Z]/
    let result = ""

    for (const letter of text) {
        if (letter.match(pattern) && result.length > 0) {
            result += ", "
        } 
        result += letter
    }

    console.log(result)
}


split('SplitMeIfYouCanHaHaYouCantOrYouCan')