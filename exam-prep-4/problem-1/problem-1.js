function shopping(information) {
    let groceries = information.shift().split("!");

    let commands = {
        Urgent: urgentHandler,
        Unnecessary: unnecessaryHandler,
        Correct: correctHandler,
        Rearrange: rearrangeHandler,
    }

    let currentCommand = information.shift();

    while (currentCommand != "Go Shopping!") {
        let products = currentCommand.split(" ");
        let keyCommand = products.shift();
        commands[keyCommand](products);


        currentCommand = information.shift();
    }

    console.log(groceries.join(", "))

    function urgentHandler(product) {
        if (!groceries.includes(...product)) {
            groceries.unshift(product)
        }
    }

    function unnecessaryHandler(product) {
        if (groceries.includes(...product)) {
            let itemIdx = groceries.indexOf(...product);
            groceries.splice(itemIdx, 1);
        }
    }

    function correctHandler(items) {
        let [oldItem, newItem] = items;
        if (groceries.includes(oldItem)) {
            let oldItemIdx = groceries.indexOf(oldItem);
            groceries[oldItemIdx] = newItem;
        }
    }

    function rearrangeHandler(item) {
        if (groceries.includes(...item)) {
            let oldItemIdx = groceries.indexOf(...item);
            let oldItem = groceries.splice(oldItemIdx, 1);
            groceries.push(oldItem);
        }
    }
    
}

shopping(
    (["Milk!Pepper!Salt!Water!Banana!Grapes",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Salt",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
    
    

)