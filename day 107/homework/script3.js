const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11]

let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)

let multipliedNumbers = evenNumbers.map(num => num * 3)
console.log(multipliedNumbers)

let filteredNumbers = multipliedNumbers.filter(num => num > 50)
console.log(filteredNumbers)

let sum = filteredNumbers.reduce((acc, num) => acc + num, 0)
console.log(sum)

let index = numbers.findIndex(num => num > 20)
console.log(index)

let hasGreaterThan40 = numbers.some(num => num > 40)
console.log(hasGreaterThan40)

let allPositive = numbers.every(num => num > 0)
console.log(allPositive)

filteredNumbers.forEach(num => console.log(num))