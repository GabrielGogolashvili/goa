function calculateSalary(salary, bonus = 0) {
  if (salary < 1000) {
    return salary + bonus * 2
  } else {
    return salary + bonus
  }
}

console.log(calculateSalary(800, 100))
console.log(calculateSalary(1500, 200))
console.log(calculateSalary(900))
console.log(calculateSalary(2000, 300))