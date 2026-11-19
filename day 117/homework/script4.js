let students = [
    ["Goga", 19, [90, 85, 95]],
    ["Nika", 20, [75, 88, 80]],
    ["Saba", 18, [100, 95, 90]]
]

let [
    [gogaN, gogaA, [gogaFirst, , gogaThird]],
    [nikaN, nikaA, [nikaFirst, , nikaThird]],
    [sabaN, sabaA, [sabaFirst, , sabaThird]]
] = students

let gogaTotal = students[0][2].reduce((sum, points) => sum + points, 0);

let has100 = students.some(([name, age, grades]) => grades.includes(100));

console.log(gogaN, gogaA, gogaFirst, gogaThird)
console.log(nikaN, nikaA, nikaFirst, nikaThird)
console.log(sabaN, sabaA, sabaFirst, sabaThird)
console.log(gogaTotal)
console.log(has100)