let employees = [
    { name: "Giorgi", salary: 2500, department: "IT" },
    { name: "Nino", salary: 1800, department: "HR" },
    { name: "David", salary: 3200, department: "IT" },
    { name: "Maka", salary: 1500, department: "Sales" },
    { name: "Saba", salary: 2800, department: "Sales" }
]

employees.forEach(employee => console.log(employee.name, employee.salary))

let itEmployees = employees.filter(employee => employee.department === "IT")
console.log(itEmployees)

let highSalary = employees.filter(employee => employee.salary > 2000).map(employee => employee.name)
console.log(highSalary)

let salesCount = employees.filter(employee => employee.department === "Sales").length
console.log(salesCount)

let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0)
console.log(totalSalary)