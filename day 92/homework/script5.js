let temperature = 28

let result = temperature < 0 ? "Freezing" : temperature <= 10 ? "Cold" : temperature <= 20 ? "Cool" : temperature <= 30 ? "Warm" : "Hot"

console.log(result)