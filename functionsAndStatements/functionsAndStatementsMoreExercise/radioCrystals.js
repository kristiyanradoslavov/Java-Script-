function crystal(array) {
    let desiredThickness = array.shift();

    for (const currentCrystal of array) {
        let finalThickness = currentCrystal;
        console.log(`Processing chunk ${currentCrystal} microns`)


        while (finalThickness !== desiredThickness) {

            finalThickness = process(finalThickness, desiredThickness);

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
            result = Math.floor(result);
            console.log("Transporting and washing");

        } else if (result - result * 0.20 >= desired) {
            while (result - result * 0.20 >= desired) {
                result -= result * 0.20;
                steps++;
            }
            console.log(`Lap x${steps}`);
            result = Math.floor(result);
            console.log("Transporting and washing");

        } else if (result - 20 >= desired) {
            while (result - 20 >= desired) {
                result -= 20;
                steps++;
            }
            console.log(`Grind x${steps}`);
            result = Math.floor(result);
            console.log("Transporting and washing");

        } else if (result - 2 >= desired || result - 2 === desired - 1) {
            while (result - 2 === desired - 1 || result - 2 >= desired) {
                result -= 2;
                steps++;
            }
            console.log(`Etch x${steps}`);
            result = Math.floor(result);
            console.log("Transporting and washing");

        } else {
            result++;
            console.log("X-ray x1");
        }

        return result
    }

}


crystal(
    [1000, 4000, 8100]
)