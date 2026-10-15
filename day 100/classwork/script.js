let names = ["Ana", "Nika", "Gio", "Luka", "Dato", "Mariam"]

let i = 0

while (i < names.length) {
    if (names[i].length < 4) {
        console.log(names[i])
    }
    i++
}

let names1 = ["Ana", "Nika", "Gio", "Luka", "Dato", "Mariam"];

let i1 = 0;

do {
    if (names[i1].length < 4) {
        console.log(names[i1]);
    }
    i++;
} while (i1 < names.length);