// 1

// filter - მეთოდი, რომელიც მასივიდან გაფილტრავს იმ ელემენტებს, რომლებიც ჩვენს პირობას აკმაყოფილებს

// 2

let ages = [20, 15, 40, 53, 12, 32, 17, 18, 19, 33, 29, 85, 67]

let minors = ages.filter(function(age) {
    return age < 18;
});

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log("Minors:", minors)
console.log("Adults:", adults)

// 3

let numbers = [25, 111, 921, 321, 432, 545, 133, 987, 436]

let newNumber = numbers.map(function(number) {
    if (number % 2 === 0) {
        return number * 13
    } else {
        return number * 16
    }
});

let onlyEven = newNumber.filter(function(number) {
    return number % 2 === 0
});

console.log("New Number:", newNumber)
console.log("Only Even:", onlyEven)