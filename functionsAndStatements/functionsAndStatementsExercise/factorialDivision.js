function factorialNumber(first, second) {

    let result = fact(first) / fact(second)

    function fact (num) {
        let result = 1

        if (num === 0) {
            return result
        }

        result = num * fact(num - 1)

        return result
    }

    return result.toFixed(2)
}

console.log(factorialNumber(6, 2))

