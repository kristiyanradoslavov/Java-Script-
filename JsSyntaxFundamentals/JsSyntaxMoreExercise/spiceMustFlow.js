function yieldSpices(totalYield){
    let currentYield = totalYield
    let daysCounter = 0
    let spice = 0

    let minorsCut = 26
    let remove = (current, worker) => {
        if (current - worker >= 0){
            let result = current - worker
            return result
        }

        return current
    }

    while (currentYield >= 100){
        let result = remove(currentYield, minorsCut)
        spice += result

        currentYield -= 10
        daysCounter += 1

    }

    spice = remove(spice, minorsCut)
    
    console.log(daysCounter)
    console.log(spice)

    
}

yieldSpices(111)