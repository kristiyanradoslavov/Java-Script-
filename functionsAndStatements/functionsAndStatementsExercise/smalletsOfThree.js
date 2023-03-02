function smallestNum(...numbers) {
    let result = Number.MAX_VALUE

    for (const num of numbers) {
        if (num < result) {
            result = num
        }
    }

    return result
}

console.log(
    smallestNum(
        2,
        5,
        3
    )
)