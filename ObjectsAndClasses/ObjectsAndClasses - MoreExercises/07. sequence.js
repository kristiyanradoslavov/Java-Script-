function solve(input) {
    let transformedElement = [];

    let result = [];

    for (const currentEl of input) {
        transformStr(currentEl)
    }

    let currentArray = transformedElement.shift();

    while (transformedElement.length > 0) {
        for (const array of transformedElement) {
            let controlNumber = 0;
            let roundedArray = array.map((currentNum) => currentNum.toFixed(0))
            for (const currentNumber of currentArray) {
                if (roundedArray.includes(currentNumber.toFixed(0))) {
                    controlNumber++;
                } else {
                    break;
                }
            }

            if (array.length === controlNumber && transformedElement.length > 1) {
                let idx = transformedElement.indexOf(array);
                transformedElement.splice(idx, 1);
            } else{
                result.push(currentArray);
            }
        }
        currentArray = transformedElement.shift();
    }

    let sortedArrays = result.map((arr) => arr.sort((a, b) => {
        let sortedResult = b - a;
        return sortedResult;
    }))

    let finalSorting = sortedArrays.sort((a, b) => a.length - b.length);

    for (const arr of finalSorting) {
        console.log(arr)
    }





    function transformStr(currentString) {
        let firstRes = currentString.replace("[", "")
        firstRes = firstRes.replace("]", "")

        let numbers = firstRes.split(", ").map((currentNum) => Number(currentNum))
        transformedElement.push(numbers)
    }
}


solve(
    ["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
)