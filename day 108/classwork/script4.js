const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"]
const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"]
const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"]

const checkTokens = tokens => tokens.every(token => token.startsWith("SEC-") && token.length >= 8)

console.log(checkTokens(tokens_serv1))
console.log(checkTokens(tokens_serv2))
console.log(checkTokens(tokens_serv3))