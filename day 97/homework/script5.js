let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"]

let firstThree = products.slice(0, 3)

let lastThree = products.slice(-3)

let phoneToWatch = products.slice(1, 4)

console.log("პირველი 3:", firstThree)
console.log("ბოლო 3:", lastThree)
console.log("Phone-დან Watch-მდე:", phoneToWatch)

console.log("ორიგინალი:", products)
