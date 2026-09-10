let numbers = [10, 20, 30, 40, 50]

numbers.splice(2, 1, 100)

console.log("splice:", numbers)

let numbers2 = [10, 20, 30, 40, 50]

let newNumbers = numbers2.toSpliced(2, 1, 100)

console.log("toSpliced:", newNumbers)
console.log("ორიგინალი:", numbers2)
