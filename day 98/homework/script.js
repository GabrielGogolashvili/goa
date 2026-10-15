function editProducts(products) {
    products.unshift("phone")
    products.push("headphones")
    products.pop()

    let mouseIndex = products.indexOf("mouse")
    products.splice(mouseIndex, 1, "webcam")

    return products
}

console.log(editProducts(["laptop", "mouse", "keyboard", "monitor"]))