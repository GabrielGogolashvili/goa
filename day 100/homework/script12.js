function numberGame(secretNumber) {
    let guess = 1
    let attempts = 0

    while (true) {
        attempts++

        if (guess < secretNumber) {
            guess++
        } else if (guess === secretNumber) {
            console.log("You found it!")
            break
        }
    }

    return attempts
}

console.log("result:", numberGame(7))