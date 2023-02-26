function solve(count, type, day) {
    let groups  = {"Students":0.15, "Business": 10, "Regular": 0.05};
    let totalPrice = 0;

    if (type === "Students") {
        if (day === "Friday") {
            totalPrice += count * 8.45;
        } else if (day === "Saturday") {
            totalPrice += count * 9.80;
        } else if (day === "Sunday") {
            totalPrice += count * 10.46;
        }
    } 
    else if (type === "Business") {
        let bDiscount = 0;
        if (count >= 100){
            bDiscount = groups["Business"]
        }

        if (day === "Friday") {
            totalPrice += (count - bDiscount) * 10.90;
        } else if (day === "Saturday") {
            totalPrice += (count - bDiscount) * 15.60;
        } else if (day === "Sunday") {
            totalPrice += (count - bDiscount) * 16;
        }
    }

    else if (type === "Regular") {
        if (day === "Friday") {
            totalPrice += count * 15;
        } else if (day === "Saturday") {
            totalPrice += count * 20;
        } else if (day === "Sunday") {
            totalPrice += count * 22.50;
        }
    }
    

    if (type === "Students" && count >= 30) {
        totalPrice -= groups["Students"] * totalPrice
    }

    if (type === "Regular" && count >= 10 && count <= 20) {
        totalPrice -= groups["Regular"] * totalPrice
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}


solve(40,
    "Regular",
    "Saturday"
    )
