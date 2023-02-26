function solve (digit) {
    let number = String(digit);

    let result = 0;

    for (let i of number) {
        result += Number(i);
    }

    console.log(result)
}

solve(97561)