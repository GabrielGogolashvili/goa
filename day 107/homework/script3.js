const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11]

const evenNumbers = numbers.filter(num => num % 2 === 0)

const multipliedNumbers = evenNumbers.map(num => num * 3)

const filteredNumbers = multipliedNumbers.filter(num => num > 50)

const sum = filteredNumbers.reduce((acc, num) => acc + num, 0)

const index = numbers.findIndex(num => num > 20)

const hasGreaterThan40 = numbers.some(num => num > 40)

const allPositive = numbers.every(num => num > 0)

filteredNumbers.forEach(num => console.log(num))