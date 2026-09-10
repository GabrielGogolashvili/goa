function getResult(name, score = 0) {
  if (score >= 90) {
    return `${name}: Excellent`
  } else if (score >= 70) {
    return `${name}: Good`
  } else if (score >= 50) {
    return `${name}: Passed`
  } else {
    return `${name}: Failed`
  }
}

console.log(getResult("goga", 95))
console.log(getResult("guga", 80))
console.log(getResult("ana", 60))
console.log(getResult("gabo", 40))
console.log(getResult("saba"))