function movie(input) {
    let moviesObj = {};

    for (const i of input) {
        let currentInput = i.split(" ");

        if (currentInput[0] === "addMovie") {
            currentInput.shift();
            currentInput = currentInput.join(" ");

            moviesObj[currentInput] = {};
            moviesObj[currentInput]["name"] = currentInput;

        } else if (currentInput.includes("directedBy")) {
            let controlIdx = currentInput.indexOf("directedBy");
            let movieName = currentInput.slice(0, controlIdx).join(" ");
            let directorName = currentInput.slice(controlIdx + 1, moviesObj.length).join(" ");

            if (moviesObj.hasOwnProperty(movieName)) {
                moviesObj[movieName]["director"] = directorName;
            }
        } else if (currentInput.includes("onDate")) {
            let controlIdx = currentInput.indexOf("onDate");
            let movieName = currentInput.slice(0, controlIdx).join(" ");
            let date = currentInput.slice(controlIdx + 1, moviesObj.length).join(" ");

            if (moviesObj.hasOwnProperty(movieName)) {
                moviesObj[movieName]["date"] = date;
            }
        }
    }

    for (const i of Object.values(moviesObj)) {
        if (i.hasOwnProperty("director") && i.hasOwnProperty("date")){
            let result = JSON.stringify(i)
            console.log(result)
        }
    }   
}


movie(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]

)

movie(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]

)