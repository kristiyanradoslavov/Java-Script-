function toggle() {
    let button = document.getElementsByClassName("button")[0];
    const par = document.getElementById("extra");

    if (button.textContent === "More") {
        par.style.display = "block"
        button.textContent = "Less"
    } else {
        par.style.display = "none";
        button.textContent = "More"
    }
}