let data = "apple,banana,orange,kiwi,mango"
let fruits = data.split(",")

console.log(fruits)

console.log(Array.isArray(fruits))

fruits.push("watermelon");
fruits.unshift("strawberry")

fruits.pop()
fruits.shift()

fruits.splice(2, 1, "peach")

console.log(fruits)

let middleFruits = fruits.slice(1, 4)

console.log("შუა 3:", middleFruits)

let withoutOneFruit = fruits.toSpliced(1, 1)

console.log("ერთი ელემენტის გარეშე:", withoutOneFruit)

let extraFruits = ["grape", "melon"]

let finalFruits = fruits.concat(extraFruits)

console.log("concat:", finalFruits)

let result = finalFruits.join(" | ")

console.log(result)