function solve(num) {
    if (typeof num === "number") {
        let result = Math.PI * num ** 2;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof num}.`);
    }
}


solve(5)