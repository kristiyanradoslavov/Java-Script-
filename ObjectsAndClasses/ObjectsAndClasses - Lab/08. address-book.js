function addresses(input) {

    let addressObject = {};

    for (const info of input) {
        let [firstName, address] = info.split(":");
        addressObject[firstName] = address;
    }

    let result = []

    for (const [key, value] of Object.entries(addressObject)) {
        result.push(`${key} -> ${value}`);
    }

    let sortedInput = [...result].sort((a, b) => a.localeCompare(b));


    for (let i of sortedInput) {
        console.log(i);
    }

}

addresses(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)