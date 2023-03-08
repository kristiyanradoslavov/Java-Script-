function cityInformation(infoObj) {

    for (const [key, value] of Object.entries(infoObj)){
        console.log(`${key} -> ${value}`)
    }
}

cityInformation(
    {
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }    
)