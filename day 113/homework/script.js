let students = [
    { name: "Nika", age: 17, score: 85, active: true },
    { name: "Ana", age: 19, score: 45, active: false },
    { name: "Giorgi", age: 21, score: 92, active: true },
    { name: "Mariam", age: 18, score: 67, active: true },
    { name: "Luka", age: 16, score: 38, active: false },
    { name: "Saba", age: 20, score: 74, active: true }
]

let activeStudents = students.filter(student => student.active === true)

let eachStudent = students.forEach(student => console.log(`the student is ${student.name} and ${student.score} points`))

let studentStatus = students.map(student =>
    student.score >= 50 ? "passed" : "failed"
)

let findMari = students.findIndex(student => student.name === "Mariam")

let checkStudent = students.some(student => student.score >= 90)

let checkAge = students.every(student => student.age > 16)