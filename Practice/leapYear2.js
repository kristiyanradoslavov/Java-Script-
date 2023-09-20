function solution(year) {
    let firstDivision = year % 4;
    let secondDivision = year % 100;
    let thirdDivision = year % 400;

    if ((firstDivision == 0 && secondDivision != 0) || thirdDivision == 0) {
        console.log("yes")
    } else {
        console.log('no')
    }
}

solution(4)