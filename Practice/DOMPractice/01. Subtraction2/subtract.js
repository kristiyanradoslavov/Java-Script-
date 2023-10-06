function subtract() {
    let firstNumber = document.getElementById('firstNumber')
    let secondNumber = document.getElementById('secondNumber')
    let resultDiv = document.getElementById('result')

    let result = Number(firstNumber.value) - Number(secondNumber.value)
    resultDiv.textContent = result
}