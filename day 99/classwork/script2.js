let numbers = [10, 25, 50, 101, 150, 77, 200, 33, 42]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 || numbers[i] > 100) {
        console.log(numbers[i])
    }
}