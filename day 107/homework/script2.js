const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60]

let moreThanTwoHundred = prices.filter(n => n > 200)
console.log(moreThanTwoHundred)

let minusFifty = moreThanTwoHundred.map(n => n - 50)
console.log(minusFifty)

let double = minusFifty.map (n => n * 2)
console.log(double)

let addDoubleSum = double.reduce((total, n) => total + n, 0)
console.log(addDoubleSum)

let findFirstFiveHundred = double.findIndex(n => n > 500)
console.log(findFirstFiveHundred)

let findFirstThousand = double.some(n => n > 1000)
console.log(findFirstThousand)

let findIfAll = double.every(n => n > 50)
console.log(findIfAll)

let finalNumbers = double.forEach(n => console.log(n))