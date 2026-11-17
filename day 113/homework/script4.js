let employees = [
    { name: "Gio", salary: 2500, experience: 3, department: "IT" },
    { name: "Nino", salary: 1800, experience: 1, department: "HR" },
    { name: "Luka", salary: 3200, experience: 5, department: "IT" },
    { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
    { name: "Saba", salary: 4000, experience: 7, department: "IT" },
    { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
]

let itEmployees = employees.filter(employee => employee.department === "IT")

employees.forEach(employee => {
    console.log(employee.name, employee.salary)
})

let employeeBonus = employees.map(employee => ({
    name: employee.name,
    bonus: employee.experience >= 5 ? 500 : 200
}))

let employeeIndex = employees.findIndex(employee => employee.salary === 4000)

let ExpEmployee = employees.some(employee => employee.experience > 6)

let HighSalaries = employees.every(employee => employee.salary > 1000)