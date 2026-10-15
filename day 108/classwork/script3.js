const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150]

const result = rawEnergies
    .filter(energy => energy > 10 && energy < 150)
    .map(energy => energy * 3 - 5)

console.log(result)