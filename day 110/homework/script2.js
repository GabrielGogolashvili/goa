let bankAccount = {
    owner: "Goga",
    balance: 1500,
    currency: "GEL",

    showBalance() {
        console.log(`Owner: ${this.owner}`)
        console.log(`Balance: ${this.balance} ${this.currency}`)
    },

    deposit(amount) {
        this.balance += amount
        console.log(`Deposited: ${amount} ${this.currency}`)
        console.log(`New balance: ${this.balance} ${this.currency}`)
    },

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            console.log(`Withdrawn: ${amount} ${this.currency}`)
            console.log(`New balance: ${this.balance} ${this.currency}`)
        } else {
            console.log("Not enough money!")
        }
    },

    showInfo() {
        console.log(this)
    }
}

bankAccount.showBalance()
bankAccount.deposit(500)
bankAccount.withdraw(200)
bankAccount.withdraw(3000)
bankAccount.showInfo()