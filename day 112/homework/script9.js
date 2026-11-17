let characters = [
    { name: "Shadow", level: 15, health: 85, damage: 70 },
    { name: "Blaze", level: 8, health: 95, damage: 45 },
    { name: "Storm", level: 20, health: 60, damage: 90 },
    { name: "Frost", level: 12, health: 80, damage: 65 },
    { name: "Titan", level: 25, health: 100, damage: 55 },
    { name: "Raven", level: 18, health: 40, damage: 85 }
]

let filteredCharacters = characters.filter(character => character.level >= 10 && character.damage >= 60)

filteredCharacters.forEach(character => {
    let healthStatus = character.health >= 70 ? "Healthy" : "Weak"
    let powerStatus = character.damage >= 80 ? "Powerful" : "Normal"

    let warning

    if (character.health < 50) {
        warning = "Warning: Low health!"
    } else {
        warning = "Health is stable"
    }

    console.log(`${character.name} - ${healthStatus} - ${powerStatus} - ${warning}`)
})