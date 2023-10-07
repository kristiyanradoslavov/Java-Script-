function attachEventsListeners() {
    let inputFields = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
    }

    let allButtons = Array.from(document.querySelectorAll("input[type=button]"));

    for (const currentBtn of allButtons) {
        currentBtn.addEventListener('click', btnHandler)
    }

    function btnHandler() {
        let newDays = 0;
        let newHours = 0;
        let newMinutes = 0;
        let newSeconds = 0;

        let enteredDays = inputFields.days.value ? inputFields.days.value : 0;
        let enteredHours = inputFields.hours.value ? inputFields.hours.value : 0;
        let enteredMinutes = inputFields.minutes.value ? inputFields.minutes.value : 0;
        let enteredSeconds = inputFields.seconds.value ? inputFields.seconds.value : 0;

        if (enteredDays) {
            newDays = enteredDays;
            newHours = enteredDays * 24;
            newMinutes = enteredDays * 24 * 60;
            newSeconds = enteredDays * 24 * 60 * 60;
        } else if (enteredHours) {
            newDays = enteredHours / 24;
            newMinutes = enteredHours * 60;
            newHours = enteredHours;
            newSeconds = enteredHours * 60 * 60;
        } else if (enteredMinutes) {
            newDays = enteredMinutes / 60 / 24;
            newMinutes = enteredHours * 60;
            newHours = enteredHours;
            newSeconds = enteredHours * 60 * 60;
        }

        inputFields.days.value = newDays
        inputFields.hours.value = newHours;
        inputFields.minutes.value = newMinutes;
        inputFields.seconds.value = newSeconds;

    }

}