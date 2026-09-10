function createMessage(name, message = "Hello") {
  return `${message}, ${name}!`
}

console.log(createMessage("Goga"))
console.log(createMessage("Goga", "Welcome"))
