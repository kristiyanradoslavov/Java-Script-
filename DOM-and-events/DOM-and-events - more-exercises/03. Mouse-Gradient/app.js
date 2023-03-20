function attachGradientEvents() {
    const div = document.getElementById("gradient");
    const result = document.getElementById("result");

    div.addEventListener("mousemove", moveHandler);
    div.addEventListener("mouseout", () => {result.textContent = ""});

    function moveHandler(e) {
        let event = e.offsetX;
        if (event === 299){
            event = 300;
        }

        result.textContent = `${Math.floor(event / 3)}%`;
    }
}