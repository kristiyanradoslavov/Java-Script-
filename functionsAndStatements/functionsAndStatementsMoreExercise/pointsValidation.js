function coordinateValidation(arr) {
    let x1 = arr[0]
    let y1 = arr[1]
    let x2 = arr[2]
    let y2 = arr[3]

    let FindBetween = Math.sqrt(((x2-x1)**2) + ((y2 -y1)**2))

    let findX = Math.sqrt(((0-x1)**2) + ((0 -y1)**2))

    let findY = Math.sqrt(((x2-0)**2) + ((y2 -0)**2))


    if (findX === Math.floor(findX)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (findY === Math.floor(findY)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }


    if (FindBetween == Math.floor(FindBetween)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

}

coordinateValidation([3, 0, 0, 4])

// coordinateValidation(2, 1, 1, 1)

