function solution(first, second, third) {
    function add() {
        return first + second
    }

    function subtract() {
        let firstRes = add()
        return firstRes - third
    }

    console.log(subtract())
}


solution(
    42,
    58,
    100    
)