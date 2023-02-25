function solve(number, arr) {
    let newArr = [];

    for (let i = 0; i < number; i++){
        newArr.unshift(arr[i]);
    }

    console.log(newArr.join(" "));
}

solve(4, [-1, 20, 99, 5])