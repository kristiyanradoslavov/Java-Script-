function store(stock, order) {
    let total = {};

    for (let i = 0; i < stock.length; i += 2) {
        total[stock[i]] = Number(stock[i + 1]);
    }

    for (let i = 0; i < order.length; i += 2) {
        if (total.hasOwnProperty(order[i])){
            total[order[i]] += Number(order[i + 1]);
            continue;
        }

        total[order[i]] = Number(order[i + 1]);
    }

    for ([key, value] of Object.entries(total)) {
        console.log(`${key} -> ${value}`);
    }
}

store(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
        

)