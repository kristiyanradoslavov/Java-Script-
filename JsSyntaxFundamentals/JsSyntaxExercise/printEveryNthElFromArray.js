function array(arr, num) {

    let result = []

    for (let i = 0; i <= arr.length; i += num) {
        if (i < arr.length) {
            result.push(arr[i])

        }
    }

    return(result)
}

console.log(array(['5',
'20',
'31',
'4',
'20'],
2
))