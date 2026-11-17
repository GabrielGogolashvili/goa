let players = [
    { name: "Sandro", sport: "Football", goals: 12 },
    { name: "Elene", sport: "Tennis", goals: 8 },
    { name: "Lasha", sport: "Football", goals: 19 },
    { name: "Tako", sport: "Basketball", goals: 15 },
    { name: "Data", sport: "Football", goals: 6 }
]

players.forEach(player => console.log(player.name, player.sport))

let footballPlayers = players.filter(player => player.sport === "Football").map(player => player.name)
console.log(footballPlayers)

let highScorers = players.filter(player => player.goals > 10).map(player => player.name)
console.log(highScorers)

let footballCount = players.filter(player => player.sport === "Football").length
console.log(footballCount)

let totalGoals = players.reduce((sum, player) => sum + player.goals, 0)
console.log(totalGoals)

let topPlayers = []

players.forEach(player => {
    if (player.goals >= 10) {
        topPlayers.push(player)
    }
})

console.log(topPlayers)