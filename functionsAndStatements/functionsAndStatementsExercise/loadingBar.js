function loading(number) {
    let num = [];
    let counter = 0


    for (let i = 10; i <= 100; i += 10) {
        if (number > 0) {
            num.push("%")
            counter += 10
        } else {
            num.push(".")
        }

        number -= 10
    }
    
    if (counter == 100){
        return "100% Complete!"
    } else {
        return `${counter}% [${num.join("")}]\nStill loading...`
    }
}


console.log(loading(50))
