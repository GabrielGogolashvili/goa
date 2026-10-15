function studentManager(students) {
  students.shift()
  students.unshift("Mariam")
  students.push("Dato")

  let lukaIndex = students.indexOf("Luka")
  students.splice(lukaIndex, 1, "Gabrieli")

  let newStudents = students.slice(0, 4)

  return newStudents
}

console.log(studentManager(["Giorgi", "Nika", "Ana", "Luka", "Saba"]))