let characters = [
    { name: "Shadow", health: 85, level: 10, alive: true },
    { name: "Dragon", health: 0, level: 15, alive: false },
    { name: "Knight", health: 60, level: 7, alive: true },
    { name: "Wizard", health: 100, level: 20, alive: true },
    { name: "Hunter", health: 25, level: 5, alive: true },
    { name: "Ghost", health: 0, level: 12, alive: false }
]

let aliveCharacters = characters.filter(character => character.alive === true)

characters.forEach(character => {
    console.log(character.name, character.health)
})

let updHealth = characters.map(character => ({
    name: character.name,
    health: character.health + 20
}))

let wizardIndex = characters.findIndex(character => character.name === "Wizard")

let HighLevel = characters.some(character => character.level > 18)

let allAlive = characters.every(character => character.alive)