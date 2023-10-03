function solution(input) {
    let result = {};

    for (const currentInput of input) {
        let [town, latitude, longitude] = currentInput.split(' | ');

        result[town] = {};
        result[town]['latitude'] = Number(latitude);
        result[town]['longitude'] = Number(longitude);
    }

    for ([currentTown, value] of Object.entries(result)) {
        console.log(
            `{ town: '${currentTown}', latitude: '${value.latitude.toFixed(2)}', longitude: '${value.longitude.toFixed(2)}' }`
        )
    }
}


solution(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']

)