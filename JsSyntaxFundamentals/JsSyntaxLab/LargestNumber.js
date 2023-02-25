function solve(first, second, third) {
    let largest = Number.MIN_SAFE_INTEGER

    let num_array = [first, second, third]
    
    for (let el of num_array) {
        if (el > largest){
            largest = el
        }
    }

    console.log(`The largest number is ${largest}.`)
}

solve(-3, -5, -22.5)