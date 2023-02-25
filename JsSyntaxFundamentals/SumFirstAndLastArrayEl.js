function solve(array) {
    let first = array.shift()
    let last = array.pop()
    console.log(first + last)
}

solve([10, 17, 22, 33])