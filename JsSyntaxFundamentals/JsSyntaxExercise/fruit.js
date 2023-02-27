function fruitsPrice(fruit, weight, price) {
    let weightKg = weight / 1000
    let result = price * weightKg
    console.log(`I need $${result.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}


fruitsPrice('apple', 1563, 2.35)