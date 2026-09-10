let cart = ["Phone", "Laptop", "Mouse"]

cart.push("Keyboard")

cart.unshift("USB Cable")

cart.pop();

cart.shift();

cart.splice(2, 1, "Headphones")

let firstTwo = cart.slice(0, 2)

console.log("პირველი 2:", firstTwo)

let extraProducts = ["Webcam", "Microphone"]

let finalCart = cart.concat(extraProducts)

let result = finalCart.join(" | ")

console.log("საბოლოო კალათა:", result)