function solve() {
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const resulting = document.querySelector("#info > span");
    const URL = "http://localhost:3030/jsonstore/bus/schedule/";
    let busStop = "depot";
    let previousStop = "";

    function depart() {
        fetch(`${URL}${busStop}`)
            .then((info) => info.json())
            .then((data) => {
                let currentName = data.name;
                previousStop = currentName;
                let nextStop = data.next;
                busStop = nextStop;
                resulting.textContent = `Next stop ${currentName}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch (() => {
                resulting.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
            
    }

    async function arrive() {
        try {
            departBtn.disabled = false;
            arriveBtn.disabled = true;
            resulting.textContent = `Arriving at ${previousStop}`;
        }
        catch (err) {
            resulting.textContent = "Error";
            departBtn.disabled = false;
            arriveBtn.disabled = false;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();