function dictionary(input) {
    let result = {};

    for (const currentInput of input) {
        let parsedInput = JSON.parse(currentInput);
        result[Object.keys(parsedInput)] = Object.values(parsedInput).join("");

    }

    let sortedResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))

    for ([key, value] of sortedResult) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }
}

    dictionary(
        [
            '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
            '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
            '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
            '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
            '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
            ]
                    
    )