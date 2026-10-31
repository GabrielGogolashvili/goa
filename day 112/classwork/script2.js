let students = [
    { name: "Nika", age: 17, score: 92, attendance: 95 },
    { name: "Mariam", age: 19, score: 68, attendance: 80 },
    { name: "Giorgi", age: 18, score: 85, attendance: 90 },
    { name: "Ana", age: 16, score: 45, attendance: 60 },
    { name: "Luka", age: 20, score: 78, attendance: 88 },
    { name: "Saba", age: 17, score: 96, attendance: 98 },
    { name: "Elene", age: 19, score: 55, attendance: 75 },
    { name: "Data", age: 18, score: 89, attendance: 92 }
]

let filteredStudents = students.filter(student =>
    student.score >= 80 && student.attendance >= 90
)

filteredStudents.forEach(student => {
    console.log(
        `${student.name} - Age: ${student.age}, Score: ${student.score}, Attendance: ${student.attendance}%`
    )
})

console.log("Number of students:", filteredStudents.length)