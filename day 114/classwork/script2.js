const user = {
    name: "Giorgi",
    _email: "old@gmail.com",
    _password: "12345",

    get email() {
        return this._email;
    },

    set email(newEmail) {
        this._email = newEmail;
    },

    get password() {
        return this._password;
    },

    set password(newPassword) {
        this._password = newPassword;
    }
}

user.email = "new@gmail.com"
user.password = "67890"

console.log("name:", user.name)
console.log("updated email:", user.email)
console.log("updated password:", user.password)