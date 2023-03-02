function getCharacters(first, second) {
    let result = []
    let firstNum = first.charCodeAt()
    let secondNum = second.charCodeAt()

    if (firstNum < secondNum) {
        for (let i = firstNum + 1; i < secondNum; i++) {
            result.push(String.fromCharCode(i))
        }
    } else {
        for (let i = secondNum + 1; i < firstNum; i++) {
            result.push(String.fromCharCode(i))
        }
    }

    return result.join(" ")
}


console.log(
    getCharacters(
        'a',
        'd'

    )
)


console.log(
    getCharacters(
        'C',
        '#'        
    )
)



