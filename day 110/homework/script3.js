let product = {
    name: "Laptop",
    price: 2500,
    quantity: 10,

    showInfo() {
        console.log(`Name: ${this.name}`)
        console.log(`Price: ${this.price}`)
        console.log(`Quantity: ${this.quantity}`)
    },

    calculateTotal() {
        return this.price * this.quantity
    },

    sell(amount) {
        if (amount > 0 && amount <= this.quantity) {
            this.quantity -= amount
            console.log(`Sold: ${amount}`)
            console.log(`Remaining quantity: ${this.quantity}`)
        } else {
            console.log("Not enough products!")
        }
    },

    restock(amount) {
        if (amount > 0) {
            this.quantity += amount
            console.log(`Restocked: ${amount}`)
            console.log(`New quantity: ${this.quantity}`)
        }
    },

    changePrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice
            console.log(`New price: ${this.price}`)
        }
    }
}

product.showInfo()
console.log(product.calculateTotal())

product.sell(3)
product.restock(5)
product.changePrice(2800)

product.showInfo()
console.log(product.calculateTotal())