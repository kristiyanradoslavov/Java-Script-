function phoneBook(phoneInformation) {

    let result = {};

    for (const currentContact of phoneInformation) {
        let [name, number] = currentContact.split(" ");
        result[name] = number;
    }

    for (const [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`)
    }
}

phoneBook(
    ['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']

)


phoneBook(
    ['George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344']

)
