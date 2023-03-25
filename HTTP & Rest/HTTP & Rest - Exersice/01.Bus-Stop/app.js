function getInfo() {
    const BusID = document.getElementById("stopId").value;
    const stopNameContainer = document.getElementById("stopName");
    const busList = document.getElementById("buses");

    const URL = "http://localhost:3030/jsonstore/bus/businfo/";

    busList.innerHTML = ""
    fetch(`${URL}${BusID}`)
    .then((result) => result.json())
    .then((data) => {

        let busStop = data.name;
        let busInfo = data.buses;
        stopNameContainer.textContent = busStop;

        for ([key, value] of Object.entries(busInfo)){
            let newList = document.createElement("li");
            newList.textContent = `Bus ${key} arrives in ${value} minutes`;

            busList.appendChild(newList);
        }
    })
    .catch(() => {
        stopNameContainer.textContent = "Error"
        })

}