let words = ["hello", "world", "javascript", "coding", "fun"]
let numbers = [1, 2, 3, 4, 5]

let combines = words.concat(numbers)
combines.push(true)

combines.shift()
console.log(combines)


let newlist = combines.slice(3, 7)
console.log(newlist)

console.log(Array.isArray(newlist))