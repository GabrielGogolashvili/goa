let numbers = [10, 25, 37, 49, 50, 63, 70, 20]

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]

    if (num > 50) {
        console.log("num which is greater than 50 is found " + num)
        break;
    }

    console.log(num)
}