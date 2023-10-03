function solution(names) {
    let employees = {};

    for (const currentEmployee of names) {
        let currentNumber = currentEmployee.length;

        employees[currentEmployee] = currentNumber;

    }

    for (const employee in employees) {
        console.log(
            `Name: ${employee} -- Personal Number: ${employees[employee]}`
        )
    }
}


solution(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)