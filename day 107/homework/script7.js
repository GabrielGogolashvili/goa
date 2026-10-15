const numbers = [
  18, 45, 72, 91, 34, 120, 57, 86,
  103, 64, 39, 150, 77, 98, 25, 132
]

const filteredNumbers = numbers.filter(num => num > 30)

const indexedNumbers = filteredNumbers.map((num, index) => num + index)

const evenNumbers = indexedNumbers.filter(num => num % 2 === 0)

const adjustedNumbers = evenNumbers.map(num =>
  num % 2 === 0 ? num + 20 : num - 10
)

const finalNumbers = adjustedNumbers.filter(num => num > 100)

const sum = finalNumbers.reduce((acc, num) => acc + num, 0)

const average = sum / finalNumbers.length

const maxNumber = finalNumbers.reduce((max, num) => Math.max(max, num))

const index = numbers.findIndex(num => num < 100 && num % 2 === 0)

const hasGreaterThan140 = numbers.some(num => num > 140)

const allAbove100AndEven = finalNumbers.every(
  num => num > 100 && num % 2 === 0
)

finalNumbers.forEach((num, index) => {
  console.log(num, index, num > 200)
})

console.log("Original array length:", numbers.length)
console.log("Final array length:", finalNumbers.length)
console.log("Sum:", sum)
console.log("Average:", average)