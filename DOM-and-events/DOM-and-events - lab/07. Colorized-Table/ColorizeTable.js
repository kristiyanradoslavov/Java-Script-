function colorize() {
    const row = document.querySelectorAll("table tbody > :nth-child(even)")
    
    for (const currentRow of row) {
        currentRow.style.backgroundColor = "Teal"
    }
}