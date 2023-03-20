function validate() {
    const currentEmail = document.getElementById("email");

    currentEmail.addEventListener("change", eventHandler);

    function eventHandler(event) {
        let pattern = /^([a-z|\.]+)@[a-z]+\.[a-z]+$/;
        let result = event.target;

        if (result.value.match(pattern)){
            result.style = ""
        } else{
            result.add.class("test")
        }
    }
}