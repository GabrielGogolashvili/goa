let numbers = [2, 5, 8, 7, 10, 9, 3, 12, 15]

numbers.forEach(function(number, index) {
    if (index % 2 !== 0 && number % 2 !== 0) {
        console.log(number)
    }
})