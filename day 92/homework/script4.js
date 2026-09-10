let username = "adminGoga"

let result = username === "" ? "Username is empty" : username.startsWith("admin") ? "Admin" : username.startsWith("user") ? "User" : "Unknown user"

console.log(result)