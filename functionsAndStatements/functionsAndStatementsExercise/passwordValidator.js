function validatePass(pass) {
    const lengthValidation = (pas) => pas.length >= 6 && pas.length <= 10;
    const lettersCheck = (letters) => pattern.test(letters)

    let pattern = /^[A-Za-z0-9]+$/
    let containsDigits = 0

    for (let i = 0; i < pass.length; i++) {
        if (!isNaN(pass[i])){
            containsDigits += 1
        }
    }

    let result = []

    if (!lengthValidation(pass)) {
        result.push("Password must be between 6 and 10 characters")
    }

    if (!lettersCheck(pass)) {
        result.push("Password must consist only of letters and digits")
    }

    if (containsDigits < 2) {
        result.push("Password must have at least 2 digits")
    }


    if (result.length === 0) {
        return "Password is valid"
    }

    return result.join('\n')

}

console.log(validatePass('Pa$s$s'))