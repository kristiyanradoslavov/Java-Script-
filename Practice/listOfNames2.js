function solution(arr) {
    let result = arr.sort((first, second) => first.localeCompare(second))

    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`)
    }
}

solution(
    ["John", "Bob", "Christina", "Ema"]
)