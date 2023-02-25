function solve(sentence, word){
    let result = sentence.split(" ");
    let counter = 0;

    for (let i = 0; i < result.length; i++){
        if (result[i] === word) {
            counter += 1
        }
    }

    console.log(counter)
}

solve('softuni is great place for learning new programming languages','softuni')