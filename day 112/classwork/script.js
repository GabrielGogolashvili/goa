let products = [
    { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
    { name: "Phone", price: 1800, category: "Electronics", inStock: false },
    { name: "Book", price: 40, category: "Education", inStock: true },
    { name: "Headphones", price: 150, category: "Electronics", inStock: true },
    { name: "Notebook", price: 15, category: "Education", inStock: false }
]
console.log("1. Product names:")

products.forEach(product => {
    console.log(product.name)
})
console.log("2. Product names and prices:")

products.forEach(product => {
    console.log(`${product.name} - ${product.price}`)
})
console.log("3. Products in stock:")

products.forEach(product => {
    if (product.inStock === true) {
        console.log(product.name)
    }
})
console.log("4. Products with price greater than 1000:")

products.forEach(product => {
    if (product.price > 1000) {
        console.log(`${product.name} - ${product.price}`)
    }
})
console.log("5. Education products:")

products.forEach(product => {
    if (product.category === "Education") {
        console.log(product.name)
    }
})
console.log("6. Total price:");

let sum = 0

products.forEach(product => {
    sum += product.price;
})
console.log(sum)