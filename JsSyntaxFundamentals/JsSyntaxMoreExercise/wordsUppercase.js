function capitalize(text) {

    let result = []

    let ex = text.matchAll(/\w+/g);

    for (word of ex){
        result.push(word[0].toUpperCase())
    }

    console.log(result.join(", "));

}


capitalize('Hi, how are you?')
capitalize("'hello'")
capitalize('Functions, in JS can be nested, i.e. hold other functions')