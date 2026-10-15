let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21]

let oddSum = 0
let max = numbers[0]
let min = numbers[0]

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        console.log("even:", numbers[i])
    } else {
        oddSum += numbers[i]
    }

    if (numbers[i] > max) {
        max = numbers[i]
    }

    if (numbers[i] < min) {
        min = numbers[i]
    }

    if (numbers[i] > 10 && numbers[i] < 25) {
        console.log("Special number")
    }
}

console.log("odd sum:", oddSum)
console.log("max:", max)
console.log("min:", min)

for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 3 === 0) {
        console.log("3is jeradi:", numbers[i])
    }
}
