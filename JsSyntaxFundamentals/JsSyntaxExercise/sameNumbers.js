function SameNumbers (num) {
    let numToString = num.toString();
    let numbersArr = [];

    let result = 0;
    let check = false;

    for (let i = 0; i < numToString.length; i++){
        if (numbersArr.length === 0){
            numbersArr.push(numToString[i]);
            result += Number(numToString[i]);
            continue
        }

        if (numbersArr[numbersArr.length - 1] === numToString[i]){
            numbersArr.push(numToString[i])
        }

        result += Number(numToString[i]);

    }

    if (numbersArr.length === numToString.length){
        check = true;
    }

    console.log(check)
    console.log(result)

}

SameNumbers(2111111111111)