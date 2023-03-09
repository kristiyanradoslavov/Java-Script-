function meetingsManger(meetings) {
    let meetingCalendar = {};

    for (const currentLog of meetings) {
        let [day, name] = currentLog.split(" ");

        if (meetingCalendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingCalendar[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for(const currentMeeting of Object.keys(meetingCalendar)){
        console.log(`${currentMeeting} -> ${meetingCalendar[currentMeeting]}`)
    }
}

meetingsManger(
    [
        'Friday Bob',
        'Saturday Ted',
        'Monday Bill',
        'Monday John',
        'Wednesday George'
        
    ]

)