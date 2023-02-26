function solve(first, last) {
    let totaSum = 0;
    let numbers = [];

    for (let index = first; index <= last; index++) {
        totaSum += index
        numbers.push(index)
    }

    console.log(numbers.join(" "))
    console.log(`Sum: ${totaSum}`)
}

solve(0, 26)