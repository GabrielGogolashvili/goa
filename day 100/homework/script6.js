const prices = [100, 250, 80, 400, 150]

function calculateDiscount(discountPercent) {
    for (let i = 0; i < prices.length; i++) {
        const discount = prices[i] * discountPercent / 100
        const newPrice = prices[i] - discount

        console.log(newPrice)
    }
}

calculateDiscount(20)