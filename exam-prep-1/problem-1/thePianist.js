function solve(information) {
    let piecesNum = Number(information.shift());
    let collection = {};
    let controlNumber = 0

    while (controlNumber < piecesNum) {
        let [piece, composer, key] = information[0].split("|");
        controlNumber++;
        information.shift();
        collection[piece] = { composer, key }
    }

    let index = 0;
    let CurrentCommand = information[index];

    while (CurrentCommand != "Stop") {
        let commandInformation = CurrentCommand.split("|");
        index++;
        CurrentCommand = information[index];
        let command = commandInformation[0];
        let currentPiece = commandInformation[1];
        switch (command) {
            case "Add":
                let currentComposer = commandInformation[2];
                let currentKey = commandInformation[3];
                if (collection.hasOwnProperty(currentPiece)) {
                    console.log(`${currentPiece} is already in the collection!`);
                } else {
                    collection[currentPiece] = {
                        composer: currentComposer,
                        key: currentKey,
                    }
                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);
                }
                break;
            case "Remove":
                if (collection.hasOwnProperty(currentPiece)) {
                    delete collection[currentPiece];
                    console.log(`Successfully removed ${currentPiece}!`)
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`)
                }
                break;
            case "ChangeKey":
                if (collection.hasOwnProperty(currentPiece)) {
                    let newKey = commandInformation[2];
                    collection[currentPiece].key = newKey;
                    console.log(`Changed the key of ${currentPiece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`)
                }
        }

    }
    for (let [pieceInfo, valueInfo] of Object.entries(collection)) {
        console.log(`${pieceInfo} -> Composer: ${valueInfo.composer}, Key: ${valueInfo.key}`)
    }
}



solve(
    [
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
    ]
)