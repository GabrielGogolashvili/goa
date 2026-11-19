let school = {
    schoolName: "Future Academy",
    location: "Tbilisi",
    students: [
        ["Nika", 16, 90],
        ["Ana", 17, 95],
        ["Gio", 15, 75]
    ],
    subjects: ["Math", "English", "Programming"]
}

let { schoolName, location, students, subjects } = school

let [subject1, subject2, subject3] = subjects

let [[name1, age1, score1], [name2, age2, score2]] = students

console.log(schoolName)
console.log(location)

console.log(name1, age1, score1)
console.log(name2, age2, score2)

if (score1 > 80) {
    console.log("nika has more than 80")
} else {
    console.log("nika has 80 or less")
}