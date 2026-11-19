let character = {
    user: "Shadow",
    level: 15,
    stats: [100, 80, 45],
    weapons: ["Sword", "Bow", "Dagger"]
}

let { user, level, stats, weapons } = character

let [health, energy, damage] = stats

let [weapon1, weapon2] = weapons

console.log(user)
console.log(level)
console.log(health)
console.log(energy)
console.log(damage)
console.log(weapon1)
console.log(weapon2)

if (health < 50) {
    console.log("low health")
} else {
    console.log("character is ready")
}