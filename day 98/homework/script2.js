function organizeNumbers(Numbers) {
    let firList = Numbers.slice(0, 4)
    let secList = Numbers.slice(4)

    secList.unshift(100)
    firList.push(5)

    let bothList = firList.concat(secList)
    return bothList
}

console.log(organizeNumbers([10, 20, 30, 40, 50, 60, 70, 80]))