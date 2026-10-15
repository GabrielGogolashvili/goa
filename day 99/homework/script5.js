let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95]

let sum = 0
let average = 0
let failedStudents = 0
let min = scores[0]
let max = scores[0]
let moreThanAverageScoreCount = 0
let highScore = []

for (let i = 0; i < scores.length; i++) {
    sum += scores[i]

    if (scores[i] < 50) {
        failedStudents++
    }
    else if (scores[i] > max) {
        max = scores[i]
    }
    else if (scores[i] < min) {
        min = scores[i]
    }
    else if (scores[i] >= 90) {
        console.log("Excellent:", scores[i])
    }
    else if (scores[i] >= 70 && scores[i] <= 89) {
        console.log("Good:", scores[i])
    }
    else if (scores[i] >= 50 && scores[i] <= 69) {
        console.log("Passed:", scores[i])
    }
    else {
        console.log("Failed:", scores[i])
    }

    if (scores[i] > 80) {
        highScore.push(scores[i])
    }

    average = sum / scores.length

    if (scores[i] > average) {
        moreThanAverageScoreCount++
    }

}

console.log("Sum:", sum)
console.log("Average:", average)
console.log("Failed students:", failedStudents)
console.log("Minimum score:", min)
console.log("Maximum score:", max)
console.log("Scores higher than 80:", highScore)
console.log("More than average:", moreThanAverageScoreCount)

console.log("Reverse scores:")

for (let i = scores.length - 1; i >= 0; i--) {
    console.log(scores[i])
}