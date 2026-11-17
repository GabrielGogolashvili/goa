let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
    { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
    { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
    { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
    { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
    { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
    { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
]

products.forEach(product => console.log(`${product.name} costs ${product.price} GEL`))

products.forEach(product => {
    if (product.inStock) console.log(product.name)
})

let electronics = products.filter(product => product.category === "Electronics")

let expensiveProducts = products.filter(product => product.price > 500 && product.rating > 4.5)

let outOfStock = products.filter(product => !product.inStock)

let productNamesAndPrices = products.map(product => `${product.name} - ${product.price} GEL`)

let increasedPrices = products.map(product => ({
    ...product,
    price: product.price + 100
}))

let monitorIndex = products.findIndex(product => product.name === "Monitor")
let lowRatingIndex = products.findIndex(product => product.rating < 4)
let expensiveExists = products.some(product => product.price > 2000)
let unavailableExists = products.some(product => !product.inStock)
let allPricesAbove100 = products.every(product => product.price > 100)
let allRatingsAbove35 = products.every(product => product.rating > 3.5)
let availableProducts = products
    .filter(product => product.inStock)
    .map(product => `${product.name} - ${product.price} GEL`)

availableProducts.forEach(product => console.log(product))

console.log(electronics)
console.log(expensiveProducts)
console.log(outOfStock)
console.log(productNamesAndPrices)
console.log(increasedPrices)
console.log(monitorIndex)
console.log(lowRatingIndex)
console.log(expensiveExists)
console.log(unavailableExists)
console.log(allPricesAbove100)
console.log(allRatingsAbove35)