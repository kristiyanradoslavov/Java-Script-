function wash(commands){
    let cleanPercent = 0;

    for (const currentCommand of commands){

        switch(currentCommand){
            case "soap":
                cleanPercent += 10;
                break;
            
            case "water":
                cleanPercent += cleanPercent * 0.20;
                break;
            
            case "vacuum cleaner":
                cleanPercent += cleanPercent * 0.25;
                break;
            
            case "mud":
                cleanPercent -= cleanPercent * 0.10;
        }
    }

    console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`)
}

wash(
    ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']
)

wash(
    ["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]
)