function operations(first, second, third) {
    let sum = (a, b) => a + b;
    let subtract = (firstSum, c) => firstSum - c;

    return subtract(sum(first, second), third)
}

console.log(operations(23, 6, 10))
console.log(operations(1, 17, 30))
console.log(operations(42, 58, 100))