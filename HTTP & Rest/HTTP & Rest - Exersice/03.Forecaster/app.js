function attachEvents() {
    const currentName = document.getElementById("location");
    const btn = document.getElementById("submit");
    const forecastDiv = document.getElementById("forecast");
    const currentForecast = document.getElementById("current");
    const upcomingForecast = document.getElementById("upcoming");

    const URL_CITIES = "http://localhost:3030/jsonstore/forecaster/locations";
    const URL_CONDITION = "http://localhost:3030/jsonstore/forecaster/today/";
    const URL_FORECAST = "http://localhost:3030/jsonstore/forecaster/upcoming/";

    btn.addEventListener("click", eventHandler);

    function eventHandler() {
        fetch(URL_CITIES)
            .then((fetchResult) => fetchResult.json())
            .then((data) => {
                let cityToForecast = data.filter(currentInput => currentInput.name === currentName.value);
                if (cityToForecast.length > 0) {
                    dayForecast(cityToForecast[0].code);
                    threeDayForecast(cityToForecast[0].code);
                    forecastDiv.style.display = "block";
                } else {
                   console.log("Error");
                }

            })
            .catch((error) => {
                console.error("Error");
            })
    }

    function dayForecast(code) {
        let previousForecast = document.getElementsByClassName("forecasts");
        if (previousForecast[0]) {
            currentForecast.removeChild(previousForecast[0]);
        }

        fetch(`${URL_CONDITION}${code}`)
            .then((secondFetch) => secondFetch.json())
            .then((currentData) => {
                let { name, forecast } = currentData;
                let divParent = addElements("div", currentForecast, "forecasts");
                addElements("span", divParent, "condition symbol", determineSymbol(forecast.condition));

                let conditionParent = addElements("span", divParent, "condition");
                addElements("span", conditionParent, "forecast-data", name);
                addElements("span", conditionParent, "forecast-data", `${forecast.low}°/${forecast.high}°`);
                addElements("span", conditionParent, "forecast-data", forecast.condition);
            })
            .catch((error) => {
                console.error("Error");
            })
    }

    function threeDayForecast(code) {
        let previousThreeForecast = document.getElementsByClassName("forecast-info");
        if (previousThreeForecast[0]) {
            upcomingForecast.removeChild(previousThreeForecast[0]);
        }

        fetch(`${URL_FORECAST}${code}`)
            .then((thirdFetch) => thirdFetch.json())
            .then((currentD) => {
                let { forecast, _name } = currentD;
                let foreCastParent = addElements("div", upcomingForecast, "forecast-info");

                for (const currentDay of forecast) {
                    let upcomingParent = addElements("span", foreCastParent, "upcoming");
                    addElements("span", upcomingParent, "symbol", determineSymbol(currentDay.condition));
                    addElements("span", upcomingParent, "forecast-data", `${currentDay.low}°/${currentDay.high}°`);
                    addElements("span", upcomingParent, "forecast-data", currentDay.condition);
                }
            })
            .catch((error) => {
                console.error("Error");
            })
    }

    function addElements(element, parent, classInfo, content) {
        let newElement = document.createElement(element);
        newElement.className = classInfo;
        newElement.textContent = content;
        parent.appendChild(newElement);
        return newElement;
    }

    function determineSymbol(condition) {
        if (condition === "Sunny") {
            return "☀";
        } else if (condition === "Partly sunny") {
            return "⛅";
        } else if (condition === "Overcast") {
            return "☁";
        } else if (condition === "Rain") {
            return "☂";
        }
    }
}

attachEvents();