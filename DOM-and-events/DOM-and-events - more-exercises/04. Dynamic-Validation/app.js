function validate() {
    const currentEmail = document.getElementById("email");

    currentEmail.addEventListener("change", eventHandler);

    function eventHandler(event) {
        let pattern = /^([a-z0-9|\.]+)@[a-z]+\.[a-z]+$/;
        let result = event.target.value;

        
    }
}