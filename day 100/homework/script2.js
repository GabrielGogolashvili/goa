const numbers = [-5, 10, -2, 8, 0, 15, -7]

let positive = 0
let negative = 0
let zero = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive++
    } else if (numbers[i] < 0) {
        negative++
    } else {
        zero++
    }
}

console.log("positive:", positive)
console.log("negative:", negative)
console.log("zero:", zero)