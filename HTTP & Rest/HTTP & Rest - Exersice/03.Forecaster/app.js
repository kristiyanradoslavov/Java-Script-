function attachEvents() {
    const currentName = document.getElementById("location");
    const btn = document.getElementById("submit");

    const URL_CITIES = "http://localhost:3030/jsonstore/forecaster/locations/";
    const URL_CONDITION = "http://localhost:3030/jsonstore/forecaster/today/";
    const URL_FORECAST = "http://localhost:3030/jsonstore/forecaster/upcoming/:";

    btn.addEventListener("click", eventHandler);

    function eventHandler() {
        fetch(URL_CITIES)
            .then((fetchResult) => fetchResult.json())
            .then((data) => {
                for (const currentCountry of data) {
                    let { code, name } = currentCountry;
                    if (name === currentName.value) {
                        dayForecast(code);
                        threeDayForecast(code);
                    } else {
                        pass
                    }
                }
            })
            .catch ((error) => {
                pass
            })
    }

    function dayForecast(code) {
        fetch(`${URL_CONDITION}${code}`)
            .then((secondFetch) => secondFetch.json())
            .then((currentData) => {
                
            })
    }

    function threeDayForecast(code) {
        fetch(`${URL_FORECAST}${code}`)
            .then((thirdFetch) => thirdFetch.json())
            .then((currentD) => {
                pass
            })
    }
}

attachEvents();