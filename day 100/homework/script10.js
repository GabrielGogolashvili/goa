function calculateSum(n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {
        sum += i
    }

    return sum
}

let sum = 100

console.log("function results:", calculateSum(5))
console.log("sum:", sum)