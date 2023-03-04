function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let shieldCounter = 0
    let totalExpenses = 0

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            totalExpenses += helmetPrice
        }

        if (i % 3 == 0) {
            totalExpenses += swordPrice
        }

        if (i % 2 == 0 && i % 3 == 0) {
            totalExpenses += shieldPrice
            shieldCounter += 1

            if (shieldCounter % 2 == 0) {
                totalExpenses += armorPrice
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}

gladiator(
    7,
    2,
    3,
    4,
    5
)

gladiator(
    23,
    12.50,
    21.50,
    40,
    200

)