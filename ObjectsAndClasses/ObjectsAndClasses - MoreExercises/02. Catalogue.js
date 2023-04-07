function solve(products) {
    let sortedProducts = products.sort((a, b) => a.localeCompare(b));
    let resultDict = {};

    for (let i = 65; i <= 90; i++) {
        let currentLetter = String.fromCharCode(i);
        for (const currentProduct of sortedProducts) {
            let [name, price] = currentProduct.split(" : ")
            if (currentProduct[0] === currentLetter) {
                if (!resultDict.hasOwnProperty(currentLetter)) {
                    resultDict[currentLetter] = [];
                } 
                resultDict[currentLetter].push(`  ${name}: ${price}`);
                
            }
        }
    }

    for ([key, value] of Object.entries(resultDict)) {
        console.log(key);
        console.log(value.join("\n"))
    }
}


// solve(
//     [
//         'Appricot : 20.4',
//         'Fridge : 1500',
//         'TV : 1499',
//         'Deodorant : 10',
//         'Boiler : 300',
//         'Apple : 1.25',
//         'Anti-Bug Spray : 15',
//         'T-Shirt : 10'
//     ]

// )

solve(
    [
        'Omlet : 5.4',
        'Shirt : 15',
        'Cake : 59'
    ]

)