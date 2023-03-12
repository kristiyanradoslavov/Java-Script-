function parkingLot(input) {
    let parking = [];

    for (const currentInput of input) {
        let [direction, car] = currentInput.split(", ");

        if (direction === "IN" && !parking.includes(car)) {
            parking.push(car);
        } else if (direction === "OUT" && parking.includes(car)){
            let carIdx = parking.indexOf(car);
            parking.splice(carIdx, 1)
        }
    }

    let sortedLot = parking.sort((aNum, bNum) => aNum.localeCompare(bNum))
        // let pattern = /\d+/
        // let aDigits = aNum.split("").filter((d) => d.match(pattern)).join("")
        // let bDigits = bNum.split("").filter((d) => d.match(pattern)).join("")

        // return aDigits - bDigits
    // )


    if (parking.length === 0) {
        console.log("Parking Lot is Empty")
    } else {
        console.log(sortedLot.join("\n"))
    }
}

parkingLot(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    
)