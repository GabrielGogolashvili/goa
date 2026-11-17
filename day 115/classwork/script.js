function crtUser(name, surname, age, adress, hobby) {
    return {
        name: name,
        surname: surname,
        age: age,
        adress: adress,
        hobby: hobby,
        displayName: function() {
            return `${this.name} ${this.surname}, ${this.adress}`
        }
    }
}

let user1 = crtUser("Giorgi", "Beridze", 22, "Tbilisi", "Football")
let user2 = crtUser("Nino", "Kapanadze", 25, "Batumi", "Reading")
let user3 = crtUser("Luka", "Maisuradze", 20, "Kutaisi", "Gaming")
let user4 = crtUser("Ana", "Gelashvili", 23, "Rustavi", "Traveling")

console.log(user1.displayName())
console.log(user2.displayName())
console.log(user3.displayName())
console.log(user4.displayName())
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)