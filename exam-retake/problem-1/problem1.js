function solve(input) {
    let horseList = input.shift().split("|");

    let commands = {
        Retake: retakeHandler,
        Rage: rageHandler,
        Trouble: troubleHandler,
        Miracle: miracleHandler,
    }

    let currentCommand = input.shift();

    while (currentCommand != "Finish") {
        let splitCom = currentCommand.split(" ");
        let keyCommand = splitCom.shift();

        commands[keyCommand](splitCom)

        currentCommand = input.shift();
    }

    console.log(horseList.join("->"))
    console.log(`The winner is: ${horseList[horseList.length - 1]}`)


    function retakeHandler(horses) {
        let [overtakingHorse, overtaken] = horses;
        let overtakingHorseIdx = horseList.indexOf(overtakingHorse);
        let overtakenHorseIdx = horseList.indexOf(overtaken);
        if (overtakingHorseIdx < overtakenHorseIdx) {
            horseList[overtakenHorseIdx] = overtakingHorse;
            horseList[overtakingHorseIdx] = overtaken;
            console.log(`${overtakingHorse} retakes ${overtaken}.`)
        }
    }

    function rageHandler(horses) {
        let horseCurPos = horseList.indexOf(...horses);
        let firstPosition = horseList.length - 1;

        if (horseCurPos === firstPosition - 1) {
            let firstHorse = horseList[firstPosition];
            horseList[firstPosition] = horses.join("");
            horseList[horseCurPos] = firstHorse;
            // console.log(`${horses.join("")} rages 2 positions ahead.`)
        } else if (horseCurPos != firstPosition) {
            let firstHorse = horseList[horseCurPos + 1];
            let secondHOrse = horseList[horseCurPos + 2];

            horseList[horseCurPos + 2] = horses.join("");
            horseList[horseCurPos] = firstHorse;
            horseList[horseCurPos + 1] = secondHOrse;
            // console.log(`${horses.join("")} rages 2 positions ahead.`)
        }

        console.log(`${horses.join("")} rages 2 positions ahead.`)
    }

    function troubleHandler(horses) {
        let horsePosition = horseList.indexOf(...horses);

        if (horsePosition > 0) {
            let previousHorse = horseList[horsePosition - 1]
            horseList[horsePosition - 1] = horses.join("");
            horseList[horsePosition] = previousHorse;
            console.log(`Trouble for ${horses} - drops one position.`)
        }

    }

    function miracleHandler(horses) {
        let lastHorse = horseList.shift();
        horseList.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`)
    }

}


solve(
    (['som|som|Domino|som',
    // 'Trouble Onyx',
    // 'Retake Onyx Sugar',
    'Rage Domino',
    // 'Miracle',
    'Finish'])
)