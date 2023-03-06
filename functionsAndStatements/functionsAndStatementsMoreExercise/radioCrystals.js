function crystal(array) {
    let desiredThickness = array.shift();

    for (const currentCrystal of array) {
        let finalThickness = currentCrystal;
        console.log(`Processing chunk ${currentCrystal} microns`)

        let cut = 0;


        while (finalThickness !== desiredThickness) {

            finalThickness = process(finalThickness, desiredThickness);


            if (finalThickness !== desiredThickness) {
                finalThickness = Math.floor(finalThickness);
                console.log("Transporting and washing");
            }
        }

        if (array.length > 1){
            finalThickness = Math.floor(finalThickness);
            console.log("Transporting and washing");
        }

        console.log(`Finished crystal ${desiredThickness} microns`)


    }

    function process(currentThickness, desired) {
        let result = currentThickness;
        let steps = 0;

        if (result / 4 >= desired) {
            while (result / 4 >= desired) {
                result /= 4;
                steps++;
            }
            console.log(`Cut x${steps}`);

        } else if (result - result * 0.20 >= desired) {
            while (result - result * 0.20 >= desired) {
                result -= result * 0.20;
                steps++;
            }
            console.log(`Lap x${steps}`);

        } else if (result - 20 >= desired) {
            while (result - 20 >= desired) {
                result -= 20;
                steps++;
            }
            console.log(`Grind x${steps}`);

        } else if (result - 2 >= desired || result - 2 === desired - 1) {
            while (result - 2 === desired - 1 || result - 2 >= desired) {
                result -= 2;
                steps++;
            }
            console.log(`Etch x${steps}`);
        } else {
            result++;
            console.log("X-ray x1");
        }

        return result
    }

}


crystal(
    [1375, 50000]
)