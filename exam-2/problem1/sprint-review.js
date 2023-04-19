function solve(input) {
    let n = Number(input.shift());

    let allTasks = {};
    let allCommands = {
        AddNew: addHandler,
        ChangeStatus: changeHandler,
        RemoveTask: removeHandler
    }

    for (let i = 0; i < n; i++) {
        let [assignee, taskId, title, status, points] = input.shift().split(":");

        if (!allTasks.hasOwnProperty(assignee)) {
            allTasks[assignee] = [{ taskId, title, status, points }];
        } else {
            allTasks[assignee].push({ taskId, title, status, points });
        }
    }

    for (const currentCommand of input) {
        let splitCommands = currentCommand.split(":");

        let keyCom = splitCommands.shift().split(" ").join("");
        allCommands[keyCom](splitCommands)

    }


    function addHandler(commands) {
        let [assignee, taskId, title, status, points] = commands;

        if (!allTasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
            allTasks[assignee].push({ taskId, title, status, points });
        }
    }

    function changeHandler(commands) {
        let [assignee, newTaskId, newStatus] = commands;
        if (!allTasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return
        }

        for (const currentTask of allTasks[assignee]) {
            if (currentTask.taskId === newTaskId) {
                currentTask.status = newStatus;
                return;
            }
        }

        console.log(`Task with ID ${newTaskId} does not exist for ${assignee}!`)
    }

    function removeHandler(commands) {
        let [assignee, index] = commands;
        if (!allTasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        if (index < 0 || index >= allTasks[assignee].length) {
            console.log(`Index is out of range!`);
            return;
        }

        allTasks[assignee].splice(index, 1);
    }

    let totalPoints = {
        ToDo: 0,
        InProgress: 0,
        CodeReview: 0,
        Done: 0,
    }

    for (const currentAssignee of Object.values(allTasks)) {
        for (const currentSprint of currentAssignee) {
            let currentStatus = currentSprint.status.split(" ").join("");
            let currentPoints = currentSprint.points;
            totalPoints[currentStatus] += Number(currentPoints);
        }
    }

    let donePoints = totalPoints["Done"];
    let otherPoints = totalPoints["CodeReview"] + totalPoints["InProgress"] + totalPoints["ToDo"];

    console.log(`ToDo: ${totalPoints["ToDo"]}pts`);
    console.log(`In Progress: ${totalPoints["InProgress"]}pts`);
    console.log(`Code Review: ${totalPoints["CodeReview"]}pts`);
    console.log(`Done Points: ${totalPoints["Done"]}pts`);

    if (donePoints >= otherPoints) {
        console.log("Sprint was successful!")
    } else {
        console.log("Sprint was unsuccessful...")
    }
}


solve(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)