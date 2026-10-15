function manageStore(store) {

    console.log(store[0][1][1][0])
    console.log(store[0][1][1][1])
    console.log(store[0][1][1][2][1])

    store[0][1][2][1] = 1000

    store[0][1][0][2].push("White")

    store[1][1][0][2][2] = "Green"

    let jeansColors = store[1][1][1][2]
    let blackIndex = jeansColors.indexOf("Black")
    jeansColors.splice(blackIndex, 1)

    store[2][1][0][2].unshift("Red")

    store[2][1][2][2][1] = "Green"

    store[2][1].push(["New Balance", 450, ["Gray", "Black"]])

    store[1][1].splice(2, 1)

    let electronicsProducts = store[0][1].slice()

    let newShoes = [
        ["Reebok", 280, ["Black", "White"]]
    ]

    store[2][1] = store[2][1].concat(newShoes)

    return store
}
