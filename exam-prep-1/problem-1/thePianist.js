function solve(information) {
    let pricesNum = Number(information.shift());
    let collection = {};

    for (let i = 0; i < pricesNum; i++) {
        let [piece, composer, key] = information[i].split("|");
        information.shift();
        collection[piece] = { composer, key }
    }

    let index = 0;
    let CurrentCommand = information[index];

    while (CurrentCommand != "Stop") {
        let commandInformation = CurrentCommand.split("|");
        index ++;
        CurrentCommand = information[index]
        let command = commandInformation[0];

        switch (command) {
            case "Add":
                let currentPiece = commandInformation[1]
                let currentComposer = commandInformation[2];
                let currentKey = commandInformation[3];
                if (collection.hasOwnProperty(currentPiece)){
                    console.log(`${currentPiece} is already in the collection!`)
                } else {
                    collection[currentPiece] = {
                        composer: currentComposer,
                        key: currentKey,
                    }
                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`)
                }

                break;
            case "Remove":
                console.log("No")
        }

    }
}



solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]

)