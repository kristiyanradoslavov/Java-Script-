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
}


solve(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
)