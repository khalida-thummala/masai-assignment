// Q1: Closure Counter
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();


// Q2: Bank Account with Closures
function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push("Deposited: " + amount);
      console.log("Deposited:", amount);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push("Withdrawn: " + amount);
        console.log("Withdrawn:", amount);
      } else {
        console.log("Insufficient balance");
      }
    },
    checkBalance() {
      console.log("Current balance:", balance);
    },
    getHistory() {
      console.log(transactionHistory);
    }
  };
}

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance);
