function solve(input) {
    let n = Number(input.shift());
    let allPieces = {};

    let commands = {
        Add: addFunc,
        Remove: removeFunc,
        ChangeKey: changeFunc,
    }

    for (let i = 0; i < n; i++) {
        let [pice, composer, key] = input.shift().split("|");
        allPieces[pice] = { composer, key }
    }

    let currentCommand = input.shift();

    while (currentCommand != "Stop") {
        let command = currentCommand.split("|");
        let keyCommand = command.shift();
        commands[keyCommand](command);


        currentCommand = input.shift();
    }

    for (const cPiece in allPieces) {
        console.log(`${cPiece} -> Composer: ${allPieces[cPiece].composer}, Key: ${allPieces[cPiece].key}`)
    }

    function addFunc(arguments) {
        let [currentPiece, composer, key] = arguments;

        if (!allPieces.hasOwnProperty(currentPiece)) {
            allPieces[currentPiece] = { composer, key };
            console.log(`${currentPiece} by ${composer} in ${key} added to the collection!`)
        } else {
            console.log(`${currentPiece} is already in the collection!`)
        }
    }

    function removeFunc(piece) {
        if (allPieces.hasOwnProperty(piece)) {
            delete allPieces[piece];
            console.log(`Successfully removed ${piece}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }


    function changeFunc(arguments) {
        let [piece, newKey] = arguments;

        if (allPieces.hasOwnProperty(piece)) {
            allPieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
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