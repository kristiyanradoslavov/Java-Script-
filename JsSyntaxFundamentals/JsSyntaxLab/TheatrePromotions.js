function solve(type, age) {
    let price;

    if (age >= 0 && age <= 18) {
        if (type.toLowerCase() === "weekday") {
            price = 12;
        } else if (type.toLowerCase() === "weekend") {
            price = 15;
        } else if (type.toLowerCase() === "holiday") {
            price = 5;
        }
    }
    else if (age > 18 && age <= 64) {
        if (type.toLowerCase() === "weekday") {
            price = 18;
        } else if (type.toLowerCase() === "weekend") {
            price = 20;
        } else if (type.toLowerCase() === "holiday") {
            price = 12;
        }   
    }

    else if (age > 64 && age <= 122) {
        if (type.toLowerCase() === "weekday") {
            price = 12;
        } else if (type.toLowerCase() === "weekend") {
            price = 15;
        } else if (type.toLowerCase() === "holiday") {
            price = 10;
        }   
    }

    else {
        price = undefined
    }

    if (price === undefined){
        console.log("Error!")
    }
    else{ 
        console.log(`${price}$`)
    }

}


solve('Holiday', 15)