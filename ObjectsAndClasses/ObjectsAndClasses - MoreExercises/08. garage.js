function solve(input) {
    let garage = {};

    for (const currentCar of input) {
        let [garageNum, carInfo] = currentCar.split(" - ");
        let carInformation = carInfo.split(", ");

        for (let i = 0; i < carInformation.length; i++) {
            carInformation[i] = carInformation[i].replace(":", " -");
        }

        if (!garage.hasOwnProperty(garageNum)) {
            garage[garageNum] = [];
            garage[garageNum].push(carInformation)
        } else {
            garage[garageNum].push(carInformation)
        }
    }

    for ([key, value] of Object.entries(garage)) {
        console.log(`Garage № ${key}`);
        for (const currentValue of value) {
            
            console.log(`--- ${currentValue.join(", ")}`)
        }
    }
}



solve(
    ['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
    
)