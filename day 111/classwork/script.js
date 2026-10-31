let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    city: "Tbilisi",
    departments: 4,
    budget: 120000,
    active: true,
    projects: 8
}

let keys = Object.keys(company)
let values = Object.values(company)

console.log(keys.length)
console.log(values.length)

for (let key of keys) {
    console.log(key)
}

for (let value of values) {
    console.log(value)
}

let numbers = values.filter(value => typeof value === "number")
console.log(numbers)

let sum = numbers.reduce((total, number) => total + number, 0)
console.log(sum)