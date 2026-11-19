let company = {
    name: "TechVision",
    address: "Tbilisi",
    employees: [
        {
            fullName: "Giorgi",
            position: "Developer",
            details: [25, 3000, "Frontend"]
        },
        {
            fullName: "Nika",
            position: "Designer",
            details: [23, 2500, "UI/UX"]
        },
        {
            fullName: "Ana",
            position: "Manager",
            details: [28, 4000, "Management"]
        }
    ],
    departments: ["Development", "Design", "Management"]
}

let { name, address, employees, departments } = company

let [department1, department2, department3] = departments

let { fullName: name1, position: position1, details: details1 } = employees[0]
let [age1, salary1, specialization1] = details1

let { fullName: name2, position: position2, details: details2 } = employees[1]
let [age2, salary2, specialization2] = details2

console.log(name)
console.log(address)

console.log(name1, position1, age1, salary1, specialization1)
console.log(name2, position2, age2, salary2, specialization2)

if (salary1 > salary2) {
    console.log(name1 + " has a higher salary")
} else if (salary2 > salary1) {
    console.log(name2 + " has a higher salary")
} else {
    console.log("Both have equal salaries")
}

if (salary1 > 3000) {
    console.log(name1, "High salary")
}

if (salary2 > 3000) {
    console.log(name2, "High salary")
}