function goldMining(gold){
    let totalBitcoins = 0;
    let totalDays = 0;
    let firstBitcoinDay = 0;
    let bitcoinIsBought = false

    let totalGoldMined = 0
    let totalLv = 0

    for (let i = 0; i < gold.length; i++){
        totalDays ++

        if (totalDays % 3 === 0 && i != 0){
            gold[i] -= gold[i] * 0.30
        }

        totalGoldMined += gold[i]

        totalLv += totalGoldMined * 67.51
        totalGoldMined = 0

        while (totalLv >= 11949.16){
            let bitcoinsAvailable = Math.floor(totalLv / 11949.16)
            let BitcoinsBought = bitcoinsAvailable * 11949.16

            totalBitcoins += bitcoinsAvailable
            totalLv -= BitcoinsBought

            if (bitcoinsAvailable > 0 && bitcoinIsBought === false){
                bitcoinIsBought = true
                firstBitcoinDay = totalDays
            }
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`)
    
    if(bitcoinIsBought){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
    }

    console.log(`Left money: ${totalLv.toFixed(2)} lv.`)
}

goldMining(
    [3124.15, 504.212, 2511.124]
)