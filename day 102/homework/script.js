function double(number) {
    return number * 2
}

function triple(number) {
    return number * 3
}

function square(number){
    return number * 4
}

function processNumber(number, operation) {
    return operation(number)
}

console.log(processNumber(10, double))
console.log(processNumber(10, triple))
console.log(processNumber(10, square))