function analyzeNumbers(numbers) {
    let sum = 0
    let evenCount = 0
    let oddCount = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]

        if (numbers[i] % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    }

    return {
        sum: sum,
        evenCount: evenCount,
        oddCount: oddCount
    }
}

console.log(analyzeNumbers([1, 2, 3, 4, 5, 6]))