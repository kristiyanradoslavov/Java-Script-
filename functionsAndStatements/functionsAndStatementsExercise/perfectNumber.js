function perfectNum(number) {
    let totalSum = 0;
    

    for (let i = number - 1; i > 0; i--){
        if (number % i === 0) {
            totalSum += i
        }
    }

    if (totalSum === number) {
        return "We have a perfect number!"
    }

    return "It's not so perfect."

    
}


console.log(perfectNum(1236498))