function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let totalHeight = 0;


    while (base > 0) {
        totalHeight ++;

        if (base - 2 <= 0){
            gold += base * base * increment;
            break;
        }

        if (totalHeight % 5 === 0) {
            let outerSpecialLayer = (base * 4 - 4) * increment;
            lapis += outerSpecialLayer;

            let innerSpecialLayer = ((base - 2) ** 2) * increment;
            stone += innerSpecialLayer;
            base -= 2;
            continue;
        }

        let outerLayer = (base * 4 - 4) * increment;
        let innerLayer = ((base - 2) ** 2) * increment;

        marble += outerLayer;
        stone += innerLayer;

        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(totalHeight * increment)}`)
}


pyramid(12,
    1    
    )