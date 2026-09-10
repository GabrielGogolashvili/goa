function calculatePrice(price, quantity = 1) {
  return price * quantity
}

console.log(calculatePrice(10))
console.log(calculatePrice(25, 3))
console.log(calculatePrice(100, 5))