const number = 100

let count = 0

for (let i = 1; i <= number; i++) {
    console.log(i)

    if (i % 3 === 0) {
        console.log("იყოფა 3-ზე:", i)
        count++
    }
}

console.log("3-ზე გაყოფადი რიცხვების რაოდენობა:", count)