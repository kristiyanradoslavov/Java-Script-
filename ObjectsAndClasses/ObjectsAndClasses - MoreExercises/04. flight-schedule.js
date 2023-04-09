function solve(input) {
    let [flights, newStatus, statusCheck] = input;

    let allFlights = {};
    let changedStatus = [];

    for (const currentFlight of flights) {
        let flightInformation = currentFlight.split(" ");
        let flightNum = flightInformation.shift();
        let direction = flightInformation.join(" ")
        allFlights[flightNum] = direction;
    }

    for (const currentFlight of newStatus) {
        let [flightNum, status] = currentFlight.split(" ");
        if (allFlights.hasOwnProperty(flightNum)) {
            changedStatus.push({
                Destination: allFlights[flightNum],
                Status: status,
            })

            delete allFlights[flightNum]
        }
    }

    if (statusCheck[0] === 'Ready to fly'){
        for (const flight of Object.values(allFlights)) {
            console.log(`{ Destination: '${flight}', Status: 'Ready to fly' }`)
        }
    } else {
        let sortedArray = changedStatus.sort((a, b) => a.Destination.localeCompare(b.Destination))
        for (const cFligh of sortedArray) {
            console.log(cFligh)
        }
    }

}


solve(
    [['WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK330 Cancelled'],
     ['Ready to fly']
 ]
 
)