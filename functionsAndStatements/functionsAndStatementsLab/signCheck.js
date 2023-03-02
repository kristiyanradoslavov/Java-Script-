function signCheck(...numbers) {
    let result = numbers.filter((num) => num < 0)
    let finalResult = result.length

    return result.length % 2 == 0 ? "Positive" : "Negative"
}


console.log(
    signCheck(
        5,
        12,
        -15

    )
)

console.log(
    signCheck(
        -6,
        -12,
         14        
    )
)

console.log(
    signCheck(
        -1,
        -2,
        -3        
    )
)