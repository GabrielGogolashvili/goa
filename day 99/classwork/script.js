let names = ["giorgi", "giga", "gabrieli", "saba", "nika", "gogita", "dato"]

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5 && names[i][0] === "g") {
        console.log(names[i])
    }
}
