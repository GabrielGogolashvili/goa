let athletes = [
    { name: "Nika", sport: "Swimming", age: 21, medals: 5, score: 92 },
    { name: "Mariam", sport: "Tennis", age: 19, medals: 3, score: 85 },
    { name: "Giorgi", sport: "Swimming", age: 24, medals: 7, score: 88 },
    { name: "Ana", sport: "Running", age: 17, medals: 2, score: 95 },
    { name: "Luka", sport: "Tennis", age: 22, medals: 6, score: 78 },
    { name: "Elene", sport: "Swimming", age: 20, medals: 4, score: 96 },
    { name: "Saba", sport: "Running", age: 25, medals: 8, score: 82 },
    { name: "Data", sport: "Tennis", age: 23, medals: 5, score: 91 }
]

let filteredAthletes = athletes.filter(athlete => athlete.sport === "Swimming" && athlete.medals >= 4)

let totalScore = 0

filteredAthletes.forEach(athlete => {
    let result = athlete.score >= 90 ? "Excellent" : athlete.score >= 80 ? "Good" : "Needs improvement"

    let medalStatus

    if (athlete.medals >= 5) {
        medalStatus = "Has 5 or more medals"
    } else {
        medalStatus = "Has less than 5 medals"
    }

    totalScore += athlete.score

    console.log(`${athlete.name} - Age: ${athlete.age} - Medals: ${athlete.medals} - Score: ${athlete.score} - ${result} - ${medalStatus}`)
})

console.log("Number of athletes:", filteredAthletes.length)
console.log("Total score:", totalScore)