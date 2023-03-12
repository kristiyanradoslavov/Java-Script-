function hero(input) {
    let heroInformation = [];

    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(" / ");

        heroInformation.push({});
        heroInformation[i]["Hero"] = name;
        heroInformation[i]["level"] = level;
        heroInformation[i]["items"] = [items];
    }

    let sortedResult = [...heroInformation].sort((aNum, bNum) => aNum.level - bNum.level)

    for (let j of sortedResult) {
        for ([key, value] of Object.entries(j)) {
            if (key === "Hero") {
                console.log(`${key}: ${value}`)
            } else{
                console.log(`${key} => ${value}`)
            }
        }
    }

}



hero(
    [
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
        ]        
)