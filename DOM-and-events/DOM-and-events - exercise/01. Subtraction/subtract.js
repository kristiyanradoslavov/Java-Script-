function subtract() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const result = document.getElementById("result");

    let subtracted = Number(firstNumber) - Number(secondNumber);

    result.textContent = subtracted;
}