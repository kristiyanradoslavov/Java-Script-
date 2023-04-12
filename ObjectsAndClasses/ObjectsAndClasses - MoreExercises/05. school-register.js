function solve(input) {
    let register = {};

    for (const currentInput of input) {
        let [initName, initGrade, initAverageGrade] = currentInput.split(", ");
        let [_name, name] = initName.split(": ");
        let [_grade, grade] = initGrade.split(": ");
        let [_average, average] = initAverageGrade.split(": ");

        if (average < 3) {
            continue;
        }

        if (!register.hasOwnProperty(grade)) {
            register[grade] = {
                students: [name],
                avgGrade: Number(average)
            };

        } else {
            register[grade].students.push(name);
            register[grade].avgGrade += Number(average);
        }
    }

    let sortedRegister = Object.keys(register)
        .sort((a, b) => a - b)
        .reduce((accumulator, key) => {
            accumulator[key] = register[key]

            return accumulator
        }, [])


    for ([key, value] of Object.entries(sortedRegister)) {
        let allStudents = value.students.length;
        let averageGrade = value.avgGrade / allStudents;

        console.log(`${Number(key) + 1} Grade`);
        console.log(`List of students: ${value.students.join(", ")}`);
        console.log(`Average annual score from last year: ${averageGrade.toFixed(2)}`);
        console.log("")
    }
}


solve(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
            "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
            "Student name: George, Grade: 8, Graduated with an average score: 2.83",
            "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
            "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
            "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
            "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
            "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
            "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
            "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
            "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
            "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
        ]
             

)