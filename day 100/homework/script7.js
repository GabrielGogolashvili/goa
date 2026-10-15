function findDivisors(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i)
        }
    }
}

findDivisors(12)