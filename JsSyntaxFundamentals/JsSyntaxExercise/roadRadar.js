function radar(speed, currArea) {
    let Areas = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    if (speed <= Areas[currArea]) {
        console.log(`Driving ${speed} km/h in a ${Areas[currArea]} zone`);

    } else {
        let difference = speed - Areas[currArea];
        let status = "";

        if (difference <= 20){
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${Areas[currArea]} - ${status}`);
    }
}


radar(40, 'city')
radar(21, 'residential')