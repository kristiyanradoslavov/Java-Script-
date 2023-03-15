function calc() {
    const firstNum = document.getElementById("num1");
    const secondNum = document.getElementById("num2");

    const result = Number(firstNum.value) + Number(secondNum.value);
    document.getElementById("sum").value = result;
}
