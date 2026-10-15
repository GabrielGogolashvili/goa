function finalList(numbers) {
  if (!Array.isArray(numbers)) {
    return "Not an array"
  }

  numbers.shift()
  numbers.unshift(100)
  numbers.pop()
  numbers.push(200)

  numbers.splice(2, 0, 300)

  let finalCopy = numbers.slice()

  return finalCopy
}

console.log(finalList([15, 25, 35, 45, 55, 65]))