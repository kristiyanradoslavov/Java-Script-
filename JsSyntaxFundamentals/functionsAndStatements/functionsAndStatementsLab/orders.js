function calculatePrice(product, quantity) {
    let prices = {
        coffee: 1.50,
        coke: 1.40,
        water: 1.00,
        snacks: 2.00
    }

    let result = prices[product] * quantity
    return result.toFixed(2)
}

console.log(calculatePrice("coffee", 2))