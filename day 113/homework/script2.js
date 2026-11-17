let products = [
    { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
    { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
    { name: "Book", price: 40, stock: 12, category: "Education" },
    { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
    { name: "Notebook", price: 15, stock: 0, category: "Education" },
    { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
]

let availableProducts = products.filter(product => product.stock > 0)

products.forEach(product => {
    console.log(product.name, product.price)
})

let increasePrices = products.map(product => ({
    name: product.name,
    price: product.price + 100,
    stock: product.stock,
    category: product.category
}))

let headphonesIndex = products.findIndex(product => product.name === "Headphones")
console.log(headphonesIndex)

let ExpProduct = products.some(product => product.price > 2000)

let InStock = products.every(product => product.stock >= 1)