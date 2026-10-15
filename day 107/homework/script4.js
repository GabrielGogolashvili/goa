const words = [
  "javascript",
  "html",
  "programming",
  "css",
  "developer",
  "react",
  "computer",
  "code",
  "algorithm"
]

const filteredWords = words.filter(word => word.length > 5)

const upperCaseWords = filteredWords.map(word => word.toUpperCase())

const finalWords = upperCaseWords.filter(word => word.length > 8)

const totalLength = finalWords.reduce((sum, word) => sum + word.length, 0)

const index = words.findIndex(word => word.length > 8)

const hasLongWord = words.some(word => word.length > 10)

const allAtLeastThree = words.every(word => word.length >= 3)

finalWords.forEach(word => console.log(word))