const numbers = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32]

const filteredNumbers = numbers.filter(num => num > 20)

const indexedNumbers = filteredNumbers.map((num, index) => num + index)

const evenNumbers = indexedNumbers.filter(num => num % 2 === 0)

const finalNumbers = evenNumbers.map(num => num * 2)

const sum = finalNumbers.reduce((acc, num) => acc + num, 0)

const maxNumber = finalNumbers.reduce((max, num) => Math.max(max, num))

const index = numbers.findIndex(num => num > 60)

const hasGreaterThan200 = finalNumbers.some(num => num > 200)

const allEven = finalNumbers.every(num => num % 2 === 0)

finalNumbers.forEach(num => console.log(num))