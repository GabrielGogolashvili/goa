let student = {
    name: "Nika",
    scores: [85, 90, 70, 100],

    showScores() {
        console.log(this.scores)
    },

    addScore(score) {
        if (score >= 0 && score <= 100) {
            this.scores.push(score)
            console.log(this.scores)
        } else {
            console.log("Invalid score!")
        }
    },

    calculateAverage() {
        let sum = 0

        for (let score of this.scores) {
            sum += score
        }

        return sum / this.scores.length
    },

    getHighestScore() {
        return Math.max(...this.scores)
    },

    getLowestScore() {
        return Math.min(...this.scores)
    }
}

student.showScores()

student.addScore(95)

console.log(student.calculateAverage())
console.log(student.getHighestScore())
console.log(student.getLowestScore())