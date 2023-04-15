function solve(input) {
    let transformedElement = [];

    for (const currentEl of input) {
        transformStr(currentEl)
    }

    for (const currentElement of transformStr) {
        
    }



    function transformStr(currentString) {
        let firstRes = currentString.replace("[", "")
        firstRes = firstRes.replace("]", "")
        
        let numbers = firstRes.split(", ").map((currentNum) => Number(currentNum));
        transformedElement.push(numbers)
    }
}


solve(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"]

)