function cookingNumbers(num, ...args) {
    let commands = args
    let currentNum = Number(num)

    for (const i of commands) {

        switch (i) {
            case "chop":
                currentNum = currentNum / 2;
                break;

            case "dice":
                currentNum = Math.sqrt(currentNum);
                break;

            case "spice":
                currentNum = currentNum + 1;
                break;
            
            case "bake":
                currentNum = currentNum * 3;
                break;
            
            case "fillet":
                currentNum -= currentNum * 0.20;
                break;
        }

        console.log(currentNum)
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')