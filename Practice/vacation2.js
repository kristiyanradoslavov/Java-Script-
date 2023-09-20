function solution(group, type, day) {
    let prices = {
        Students: {
            Friday: 8.45,
            Saturday: 9.80,
            Sunday: 10.46,
        },
        Business: {
            Friday: 10.90,
            Saturday: 15.60,
            Sunday: 16,
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.50,
        }
    }

    let discounts = {
        Students: 0.15,
        Business: 10,
        Regular: 0.05,
    }

    let finalPrice = prices[type][day] * group;

    if (type === "Students" && group >= 30) {
        finalPrice -= finalPrice * discounts[type];
    } else if (type === "Business" && group >= 100) {
        finalPrice = prices[type][day] * (group - discounts.type);
    } else if (type == "Regular" && group >= 10 && group <= 20) {
        finalPrice -= finalPrice * discounts[type];
    }

    console.log(`Total price: ${finalPrice.toFixed(2)}`)

}

solution(
    40,
    "Regular",
    "Saturday"    
)