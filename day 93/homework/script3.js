function calculateShipping(price, shipping = 10) {
  if (price >= 100) {
    return price
  } else {
    return price + shipping
  }
}

console.log(calculateShipping(150))
console.log(calculateShipping(50))
console.log(calculateShipping(50, 20))