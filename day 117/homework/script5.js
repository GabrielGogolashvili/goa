let orders = [
    { id: 101, customer: "Nika", total: 350, delivered: true },
    { id: 102, customer: "Ana", total: 120, delivered: false },
    { id: 103, customer: "Gio", total: 750, delivered: true },
    { id: 104, customer: "Mariam", total: 90, delivered: false },
    { id: 105, customer: "Luka", total: 500, delivered: true },
    { id: 106, customer: "Saba", total: 220, delivered: false }
]

let deliveredOrders = orders.filter(order => order.delivered)

orders.forEach(order => {
    console.log(order.id, order.customer)
})

let increasedTotals = orders.map(order => ({
    id: order.id,
    customer: order.customer,
    total: order.total + 50,
    delivered: order.delivered
}))

let orderIndex = orders.findIndex(order => order.id === 104)

let ExpensiveOrder = orders.some(order => order.total > 700)

let allAbove100 = orders.every(order => order.total > 100)