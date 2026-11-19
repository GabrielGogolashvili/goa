let student = {
    name: "Nika",
    age: 17,
    grade: 11,
    scores: [90, 85, 95]
}

let { name, age, scores } = student

let [score1, score2, score3] = scores

console.log(name)
console.log(age)
console.log(score1)
console.log(score2)
console.log(score3)

console.log(score1 + score2 + score3)