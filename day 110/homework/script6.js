let player = {
    name: "Shadow",
    health: 100,
    attack: 25,

    showInfo() {
        console.log(`Player: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Attack: ${this.attack}`)
    },

    attackEnemy(enemy) {
        enemy.health -= this.attack

        if (enemy.health < 0) {
            enemy.health = 0
        }

        console.log(`${this.name} attacked ${enemy.name}`)
        console.log(`${enemy.name}'s health: ${enemy.health}`)
    }
}

let enemy = {
    name: "Dragon",
    health: 150,
    attack: 20,

    showInfo() {
        console.log(`Enemy: ${this.name}`)
        console.log(`Health: ${this.health}`)
        console.log(`Attack: ${this.attack}`)
    },

    attackPlayer(player) {
        player.health -= this.attack

        if (player.health < 0) {
            player.health = 0
        }

        console.log(`${this.name} attacked ${player.name}`)
        console.log(`${player.name}'s health: ${player.health}`)
    }
}

player.showInfo()
enemy.showInfo()

player.attackEnemy(enemy)

enemy.attackPlayer(player)

player.showInfo()
enemy.showInfo()