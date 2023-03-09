function convert(name, lastName, hairColor){
    let resultObj = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(resultObj))
}

convert('George', 'Jones', 'Brown')