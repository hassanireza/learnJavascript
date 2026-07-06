[← Back to Day 10 Lesson](../../days/day-10-object-methods-and-this/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 10: Bank Account Simulator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | object methods, this, Object.entries, guard conditions |

## Objective

Build an account object that tracks balance and a transaction history using its own methods.

## Requirements

- Create an `account` object with `balance` set to `0` and an empty `history` array
- Add a `deposit(amount)` method that increases the balance and logs the transaction into `history`
- Add a `withdraw(amount)` method that decreases the balance, but refuses if funds are insufficient
- Add a `printStatement()` method that prints the balance and every entry in `history`

## Bonus Challenges

- Add an `interest(rate)` method that increases the balance by a percentage
- Use `Object.entries()` inside `printStatement()` to print account details dynamically

## Files in This Project

```text
projects/day-10-bank-account-simulator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Inside `withdraw`, check `if (amount > this.balance) { console.log('Insufficient funds.'); return; }` before subtracting.

</details>

---

**[← Back to Day 10 Lesson](../../days/day-10-object-methods-and-this/README.md)**
