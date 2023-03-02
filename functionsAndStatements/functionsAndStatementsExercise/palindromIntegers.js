function palindromes(numbers) {
    let finalResult = []

    for (const num of numbers) {
        let newNumber = num.toString()
                            .split("")
                            .reverse()
                            .join("")

        finalResult.push(Number(newNumber) === num)
    }

    return finalResult.join("\n")
}


console.log(palindromes([32,2,232,1010]))