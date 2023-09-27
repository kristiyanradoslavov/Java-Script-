function solution(arr, rotations) {
    let result = arr
    for (let currentRot = 0; currentRot < rotations; currentRot++) {
        let currentNum = result.shift
        result.push
    } 

    console.log(result.join(', '))
}


solution([51, 47, 32, 61, 21], 2)