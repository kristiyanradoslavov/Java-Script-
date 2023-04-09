function solve(input) {
    let n = Number(input.shift());

    let sprintBoard = {}
    let commandFuncs = {
        AddNew: addHandler,
        ChangeStatus: changeHandler,
        RemoveTask: removeHandler,
    }

    for (let i = 0; i < n; i++) {
        let [assignee, taskId, title, status, estimatedPoints] = input.shift().split(":");
        if (!sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee] = [{ taskId, title, status, estimatedPoints }]
        } else {
            sprintBoard[assignee].push({ taskId, title, status, estimatedPoints })
        }
    }

    for (const currentCommand of input) {
        let splitCommand = currentCommand.split(":");

        let keyCommand = splitCommand.shift().split(" ").join("")
        let currentAssignee = splitCommand.shift();
        if (keyCommand === "AddNew") {
            let addId = splitCommand.shift();
            let addTitle = splitCommand.shift();
            let addStatus = splitCommand.shift();
            let addPoints = splitCommand.shift();
            commandFuncs[keyCommand](currentAssignee, addId, addTitle, addStatus, addPoints)
        } else if (keyCommand === "ChangeStatus") {
            let [chId, chStatus] = splitCommand;
            commandFuncs[keyCommand](currentAssignee, chId, chStatus)
        } else if (keyCommand === "RemoveTask") {
            commandFuncs[keyCommand](currentAssignee, splitCommand)
        }
    }

    let pointsInfo = {
        toDo: 0,
        inProgress: 0,
        codeReview: 0,
        done: 0,
    }

    let donePoints = 0;
    let otherPoints = 0

    for (const currentValue of Object.values(sprintBoard)) {
        for (const curTask of currentValue) {
            if (curTask.status === "ToDo") {
                pointsInfo["toDo"] += Number(curTask.estimatedPoints);
                otherPoints += Number(curTask.estimatedPoints);
            } else if (curTask.status === "In Progress") {
                pointsInfo["inProgress"] += Number(curTask.estimatedPoints);
                otherPoints += Number(curTask.estimatedPoints);
            } else if (curTask.status === "Code Review") {
                pointsInfo["codeReview"] += Number(curTask.estimatedPoints);
                otherPoints += Number(curTask.estimatedPoints);
            } else if (curTask.status === "Done") {
                pointsInfo["done"] += Number(curTask.estimatedPoints);
                donePoints += Number(curTask.estimatedPoints)
            }
        }
    }

    console.log(`ToDo: ${pointsInfo["toDo"]}pts`);
    console.log(`In Progress: ${pointsInfo["inProgress"]}pts`);
    console.log(`Code Review: ${pointsInfo["codeReview"]}pts`);
    console.log(`Done Points: ${pointsInfo["done"]}pts`);

    if (donePoints >= otherPoints) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }

    function addHandler(assignee, taskId, title, status, estimatedPoints) {
        if (!sprintBoard.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        } else {
            sprintBoard[assignee].push({ taskId, title, status, estimatedPoints })
        }
    }

    function changeHandler(assignee, newTaskID, newStatus) {
        if (!sprintBoard.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
            return;
        } else {
            let assigneeTasks = Object.values(sprintBoard[assignee]);
            for (currentTask of assigneeTasks) {
                if (currentTask.taskId === newTaskID) {
                    currentTask.status = newStatus;
                    return;
                }
            }
        }
        console.log(`Task with ID ${newTaskID} does not exist for ${assignee}!`)
    }

    function removeHandler(currentAssignee, index) {
        let idx = Number(index)
        if (!sprintBoard.hasOwnProperty(currentAssignee)) {
            console.log(`Assignee ${currentAssignee} does not exist on the board!`)
            return;
        }
        let currentValues = Object.values(sprintBoard[currentAssignee]);
        let valuesLen = currentValues.length;

        if (idx > valuesLen - 1 || idx < 0) {
            console.log(`Index is out of range!`);
            return;
        }
        Object.values(sprintBoard[currentAssignee].splice(idx, 1))
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