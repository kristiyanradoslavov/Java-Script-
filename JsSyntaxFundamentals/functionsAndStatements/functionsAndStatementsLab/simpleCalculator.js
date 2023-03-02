function calculate(firstNum, secondNum, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operator) {
        case "multiply":
            return multiply(firstNum, secondNum);

        case "divide":
            return divide(firstNum, secondNum)

        case "add":
            return add(firstNum, secondNum)

        case "subtract":
            return subtract(firstNum, secondNum)
    }   
}


console.log(
    calculate(
        5,
        5,
        'multiply'
    )
);

console.log(
    calculate(
        40,
        8,
        'divide'
    )
);