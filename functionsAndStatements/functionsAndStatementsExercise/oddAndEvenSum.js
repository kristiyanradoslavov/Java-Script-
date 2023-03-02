function oddAndEven(number) {
    let numString = number.toString().split("");
    let even = 0
    let odd = 0

    for (const num of numString) {
        if (Number(num) % 2 === 0) {
            even += Number(num)
        }else {
            odd += Number(num)
        }
    }

    return `Odd sum = ${odd}, Even sum = ${even}`;
}

console.log(oddAndEven(3495892137259234));