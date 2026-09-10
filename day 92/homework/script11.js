let action = "withdraw";
let balance = 500;
let amount = 200;

switch (action) {
  case "balance":
    console.log("Balance:", balance);
    break;

  case "deposit":
    balance += amount;
    console.log("Deposited:", amount);
    console.log("Balance:", balance);
    break;

  case "withdraw":
    if (amount > balance) {
      console.log("Insufficient balance");
    } else {
      balance -= amount;
      console.log("Withdrawn:", amount);
      console.log("Remaining balance:", balance);
    }
    break;

  case "exit":
    console.log("Goodbye");
    break;

  default:
    console.log("Invalid action");
}