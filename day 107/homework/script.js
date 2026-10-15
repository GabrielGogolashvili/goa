const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64]

let moreThanSixty = scores.filter(n => n >= 60)
console.log(moreThanSixty)

let addFive = scores.map(n => n + 5)
console.log(addFive)

let moreThanEighty = scores.filter(n => n > 80)
console.log(moreThanEighty)

let addNumbers = scores.reduce((total, n) => total + n, 0)
console.log(addNumbers)

let findFirstHundred = scores.findIndex(n => n >= 100)
console.log(findFirstHundred)

let checkLess = scores.some(n => n < 30)
console.log(checkLess)

let checkMore = scores.every(n => n > 20)
console.log(checkMore)

let finalNumbers = scores.forEach(n => console.log(n))