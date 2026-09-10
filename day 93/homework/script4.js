function checkAge(name, age = 18) {
  if (age >= 18) {
    return `${name} is adult`
  } else {
    return `${name} is minor`
  }
}

console.log(checkAge("goga", 20))
console.log(checkAge("nika", 16))
console.log(checkAge("ana"))
console.log(checkAge("luka", 12))