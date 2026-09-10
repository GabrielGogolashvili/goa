function convertTemperature(value, type = "C") {
  if (type === "C") {
    return value * 9 / 5 + 32
  } else if (type === "F") {
    return (value - 32) * 5 / 9
  }
}

console.log(convertTemperature(0))
console.log(convertTemperature(100))
console.log(convertTemperature(32, "F"))
console.log(convertTemperature(212, "F"))