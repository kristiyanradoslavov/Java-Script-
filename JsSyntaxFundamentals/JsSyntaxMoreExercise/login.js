function logIn(usernames){
    let numberOfTries = 0
    let correctUser = usernames[0]

    for (let i = 1; i< usernames.length; i++){
        let currentTry = usernames[i].split("").reverse().join("")
        
        if(currentTry === correctUser){
            console.log(`User ${correctUser} logged in.`)
            break
        }
        
        numberOfTries += 1

        if (numberOfTries === 4){
            console.log(`User ${correctUser} blocked!`)
            break
        }

        console.log("Incorrect password. Try again.")
    }
}


// logIn(['Acer','login','go','let me in','recA'])
// logIn(['momo','omom'])
logIn(['sunny','rainy','cloudy','sunny','not sunny'])