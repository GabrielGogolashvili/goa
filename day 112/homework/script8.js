let employees = [
    { name: "Nika", department: "IT", salary: 3500, experience: 4 },
    { name: "Ana", department: "HR", salary: 2200, experience: 2 },
    { name: "Giorgi", department: "IT", salary: 2800, experience: 5 },
    { name: "Mariam", department: "Finance", salary: 4000, experience: 6 },
    { name: "Luka", department: "IT", salary: 4200, experience: 1 },
    { name: "Elene", department: "HR", salary: 3000, experience: 4 }
]

let filteredEmployees = employees.filter(employee => employee.department === "IT" && employee.salary > 2500)

filteredEmployees.forEach(employee => {
    let bonus = employee.experience >= 3 ? "Bonus eligible" : "No bonus"

    let salaryStatus

    if (employee.salary >= 4000) {
        salaryStatus = "High salary"
    } else {
        salaryStatus = "Regular salary"
    }

    console.log(`${employee.name} - Salary: ${employee.salary} - ${bonus} - ${salaryStatus}`)
})