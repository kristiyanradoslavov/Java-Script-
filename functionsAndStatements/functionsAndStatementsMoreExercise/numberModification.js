function number(num){
    let numString = num.toString().split("");
    let sum = 0;
    let totalLength = numString.length
    for (const num of numString){
        sum += Number(num);
    }

    let result = sum / totalLength;

    while (result < 5){
        numString.push('9');
        sum += 9;
        totalLength += 1;
        result = sum / totalLength
    }

    console.log(numString.map(num => Number(num)).join(""))
}

number(5835)