function solve(inputOBj, inputArray) {
    for (const currentCommand of inputArray) {
        let website = currentCommand.split(" ")
        let command = website.shift()

        if (command === "Open") {
            inputOBj["Open Tabs"].push(website)
            inputOBj["Browser Logs"].push(`${command} ${website.join(" ")}`)
        } else if (command === "Close") {
            if (inputOBj["Open Tabs"].includes(website.join(" "))) {
                let websiteIndex = inputOBj["Open Tabs"].indexOf(website.join(" "));
                inputOBj["Open Tabs"].splice(websiteIndex, 1);
                inputOBj["Recently Closed"].push(website.join(" "));
                inputOBj["Browser Logs"].push(`${command} ${website.join(" ")}`)
            }
        } else if (command === "Clear") {
            inputOBj["Open Tabs"] = [];
            inputOBj["Recently Closed"] = [];
            inputOBj["Browser Logs"] = [];
        }
    }

    console.log(inputOBj["Browser Name"]);
    console.log(`Open Tabs: ${inputOBj["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${inputOBj["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${inputOBj["Browser Logs"].join(", ")}`);
}

solve(
    {
        "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]


)