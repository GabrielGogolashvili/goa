const scores = [
  45, 88, 72, 96, 54, 100, 63, 81,
  39, 92, 77, 68, 85, 49, 98, 59
]

const filteredScores = scores.filter(score => score >= 60)

const addedScores = filteredScores.map(score => score + 7)

const highScores = addedScores.filter(score => score >= 80)

const adjustedScores = highScores.map((score, index) => score - index)

const finalScores = adjustedScores.filter(score => score % 2 !== 0)

const sum = finalScores.reduce((acc, score) => acc + score, 0)

const average = sum / finalScores.length

const index = scores.findIndex(score => score > 90)

const hasBelow90 = finalScores.some(score => score < 90)

const allAbove70 = finalScores.every(score => score > 70)

finalScores.forEach(score => {
  console.log(score, score >= 80 ? "Passed" : "Failed")
})