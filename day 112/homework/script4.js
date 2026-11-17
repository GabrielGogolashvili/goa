let orders = [
    { id: 101, customer: "Nika", total: 250, status: "delivered" },
    { id: 102, customer: "Ana", total: 80, status: "pending" },
    { id: 103, customer: "Gio", total: 420, status: "delivered" },
    { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
    { id: 105, customer: "Luka", total: 310, status: "pending" }
]

orders.forEach(order => console.log(order.id, order.customer))

let deliveredOrders = orders.filter(order => order.status === "delivered")
console.log(deliveredOrders)

let expensiveOrdersId = orders.filter(order => order.total > 200).map(order => order.id)
console.log(expensiveOrdersId)

let pendingCount = orders.filter(order => order.status === "pending").length
console.log(pendingCount)

let totalPrice = orders.reduce((sum, order) => sum + order.total, 0)
console.log(totalPrice)

let expensiveOrders = []

orders.forEach(order => {
    if (order.total > 200 && order.status === "delivered") {
        expensiveOrders.push(order)
    }
})

console.log(expensiveOrders)