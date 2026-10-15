function makeUpper(text){
    return text.toUpperCase()
}

function makeLower(text){
    return text.toLowerCase()
}

function textLength(text){
    return text.length
}

function processText(text, action){
    return action(text)
}

console.log(processText("javaSCRipt", makeUpper))
console.log(processText("JAVascrIpt", makeLower))
console.log(processText("javascript", textLength))