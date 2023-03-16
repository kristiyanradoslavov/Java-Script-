function sumTable() {
    const amounts = Array.from(document.querySelectorAll("table tbody tr :nth-child(2)"));
    amounts.shift()
    const result = amounts.pop();

    let finalAmount = 0;

    amounts.forEach(element => finalAmount += Number(element.textContent));

    result.textContent = finalAmount;
}   