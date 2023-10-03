function resolution(stock, orderedProducts) {
    let products = {};

    for (let i = 0; i < stock.length; i += 2) {
        products[stock[i]] = Number(stock[i + 1]);
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        if (!products.hasOwnProperty(orderedProducts[i])) {
            products[orderedProducts[i]] = 0;
        }

        products[orderedProducts[i]] += Number(orderedProducts[i + 1]);
    }

    for (const currentProduct in products) {
        console.log(
            `${currentProduct} -> ${products[currentProduct]}`
        )
    }
}


resolution(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)