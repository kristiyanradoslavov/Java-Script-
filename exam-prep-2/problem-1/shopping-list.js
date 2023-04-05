function solve(information) {
    let groceries = information.shift().split("!")

    let currentCommand = information.shift();

    while(currentCommand != "Go Shopping!") {
        let keyCom = currentCommand.split(" ");
        let item = keyCom[1];
        switch (keyCom[0]) {
            case "Urgent":
                if (!groceries.includes(item)) {
                    groceries.unshift(item);
                }
                break;
            
            case "Unnecessary":
                if (groceries.includes(item)) {
                    let currentIdx = groceries.indexOf(item);
                    groceries.splice(currentIdx, 1);
                }
                break;
            
            case "Correct":
                if (groceries.includes(item)) {
                    let currentIdx = groceries.indexOf(item);
                    let newProduct = keyCom[2];
                    groceries.splice(currentIdx, 1, newProduct);
                }

                break;
            
            case "Rearrange":
                if (groceries.includes(item)) {
                    let currentIdx = groceries.indexOf(item);
                    let currentGrocery = groceries.splice(currentIdx, 1);
                    groceries.push(currentGrocery);
                }

                break;
        }

        currentCommand = information.shift();
    }

    console.log(groceries.join(", "))
}


solve(
    (["Tomatoes!Potatoes!Bread",
    "Rearrange Bread",
    "Go Shopping!"])
    
    

)