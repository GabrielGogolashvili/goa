function shoppingCart(cart) {
  cart.unshift("Water")
  cart.push("Chocolate")
  cart.shift()

  let cheeseIndex = cart.indexOf("Cheese")
  cart.splice(cheeseIndex, 1, "Yogurt")

  let newCart = cart.slice(0, 4)

  return newCart
}

console.log(shoppingCart(["Bread", "Milk", "Cheese", "Apple", "Juice"]))