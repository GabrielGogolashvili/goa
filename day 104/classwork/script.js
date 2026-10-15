let player1 = Math.floor(Math.random() * 21) + 10
let player2 = Math.floor(Math.random() * 21) + 10

console.log("p1 power:", player1)
console.log("p2 power", player2)

if (player1 === 20) {
    player1 += 5
}

if (player2 === 20) {
    player2 += 5
}

console.log("p1 power final levl", player1)
console.log("p2 powwer final level:", player2)

if (player1 > player2) {
    console.log("p1 win")
} else if (player2 > player1) {
    console.log("p2 win")
} else {
    console.log("tie")
}