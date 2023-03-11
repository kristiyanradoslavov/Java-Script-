function towns(input) {

    for (const i of input) {
        let [town, latitude, longitude] = i.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let result = {
            town, 
            latitude,
            longitude
        };

        console.log(result);
    }
}


towns(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']

)