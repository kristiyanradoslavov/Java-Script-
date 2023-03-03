function matrix(number) {
    let matrix = []

    for (let row = 0; row < number; row++) {
        matrix.push([])

        for (let col = 0; col < number; col++) {
            matrix[row].push(number)
        }
    }

    let result = matrix.map(num => num.join(" "))
    return result.join("\n")
}

console.log(matrix(2))