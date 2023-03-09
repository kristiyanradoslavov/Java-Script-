function convert (input){
    let result = JSON.parse(input)

    for (const [key, value] of Object.entries(result)){
        console.log(`${key}: ${value}`)
    }

}

convert('{"name": "George", "age": 40, "town": "Sofia"}')