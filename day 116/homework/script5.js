let product = {
    title: "Gaming Laptop",
    price: 2500,
    specifications: ["16GB RAM", "512GB SSD", "RTX 4060"],
    colors: ["Black", "White", "Gray"]
}

let { title, price, specifications, colors } = product

let [ram, storage, graphics] = specifications

let [firstColor, , thirdColor] = colors

console.log(title)
console.log(price)
console.log(ram)
console.log(storage)
console.log(graphics)
console.log(firstColor)
console.log(thirdColor)

if (price > 2000) {
    console.log("Expensive Product")
} else {
    console.log("Affordable Product")
}