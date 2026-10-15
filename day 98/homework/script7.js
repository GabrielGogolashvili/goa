let products = [
    ["Laptop", 2500],
    ["Phone", 1500],
    ["Mouse", 80],
    ["Keyboard", 120]
]

function updateProducts(products) {
    products[0][1] = 2300
    products[2][1] = 100

    products.splice(2, 0, ["Tablet", 900])

    products.pop()

    return products
}

console.log(updateProducts(products))
