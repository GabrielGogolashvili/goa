let car = {
    brand: "BMW",
    model: "M5",
    speed: 0,
    fuel: 60,

    showInfo() {
        console.log(`Brand: ${this.brand}`)
        console.log(`Model: ${this.model}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Fuel: ${this.fuel}`)
    },

    accelerate(amount) {
        if (amount > 0) {
            this.speed += amount
            console.log(`New speed: ${this.speed}`)
        }
    },

    brake(amount) {
        if (amount > 0) {
            this.speed -= amount

            if (this.speed < 0) {
                this.speed = 0
            }

            console.log(`New speed: ${this.speed}`)
        }
    },

    drive(distance) {
        if (distance <= 0) {
            console.log("Invalid distance!")
            return
        }

        let requiredFuel = distance / 10

        if (this.fuel >= requiredFuel) {
            this.fuel -= requiredFuel
            console.log(`Distance driven: ${distance} km`)
            console.log(`Remaining fuel: ${this.fuel}`)
        } else {
            console.log("Not enough fuel!")
        }
    }
}

car.showInfo()

car.accelerate(80)
car.brake(30)

car.drive(200)

car.showInfo()