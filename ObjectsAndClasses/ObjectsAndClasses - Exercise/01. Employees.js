function employees(input) {
    let empInformation = {};

    for (const currentEmployee of input) {
        let number = currentEmployee.length;

        empInformation[currentEmployee] = number;
    }

    for (const [key, value] of Object.entries(empInformation)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

employees(
    [
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
)