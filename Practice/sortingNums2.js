function solve(arr) {

    let sortedNumbers = arr.sort((a, b) => a - b)

    let result = []

    while (sortedNumbers.length > 0) {
        let smallestNumber = Math.min(...sortedNumbers)
        let smallNumIndex = sortedNumbers.indexOf(smallestNumber)
        sortedNumbers.splice(smallNumIndex, 1)
        result.push(smallestNumber)

        if (sortedNumbers.length > 0) {
            let biggestNumber = Math.max(...sortedNumbers)
            let biggestIndex = sortedNumbers.indexOf(biggestNumber)
            sortedNumbers.splice(biggestIndex, 1)
            result.push(biggestNumber)
        }
    }

    return result
}


console.log(solve(
    [1, 65, 3, 52, 48, 63, 31, -3, 18]
))