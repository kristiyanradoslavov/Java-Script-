function sortNums(nums) {
    let sortedList = [...nums].sort((a, b) => a - b)
    let result = []

    while (sortedList.length > 0) {
        if (sortedList.length > 0) {
            firstNum = sortedList.shift()
            result.push(firstNum)

        }

        if (sortedList.length > 0) {
            lastNum = sortedList.pop()
            result.push(lastNum)

        }
    }

    return result
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18]))