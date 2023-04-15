function solve(input) {
    let transformedElement = [];

    let result = [];

    for (const currentEl of input) {
        transformStr(currentEl)
    }

    let currentArray = transformedElement.shift();
    result.push(currentArray)

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

            if (array.length === controlNumber) {
                let idx = transformedElement.indexOf(array);
                transformedElement.splice(idx, 1);
            } else {
                result.push(currentArray)
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
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
    "[9, -3, 3, -2, 2, -1, 1, 0]"]
    
)