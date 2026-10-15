const text = "JavaScript is fun and JavaScript is powerful"

function analyzeText(str) {
    let aCount = 0
    let spaceCount = 0
    let firstSpaceFound = false

    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        console.log(str[i])

        if (str[i].toLowerCase() === "a") {
            aCount++
        }

        if (str[i] === " ") {
            spaceCount++
        }

        if (vowels.includes(str[i].toLowerCase())) {
            console.log("ხმოვანი:", str[i])
        }

        if (str[i] === " " && !firstSpaceFound) {
            console.log("პირველი გამოტოვება ინდექსზე:", i)
            firstSpaceFound = true
        }
    }

    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    console.log("a count:", aCount)
    console.log("space count:", spaceCount)
    console.log("reverse:", reversed)
}

analyzeText(text)