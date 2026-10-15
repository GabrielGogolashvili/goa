let prices = [120, 45, 300, 80, 150, 25, 400]

let total = 0

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
        prices[i] = prices[i] - 20
        total += prices[i]
    } else if (prices[i] >= 50 && prices[i] <= 100) {
        prices[i] = prices[i] - 10
        total += prices[i]
    }
}

console.log("total:", total);

for (let i = prices.length - 1; i >= 0; i--) {
    console.log(prices[i])
}