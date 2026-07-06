[← Back to Day 06 Lesson](../../days/day-06-functions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 06: Tip Calculator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Beginner | 30-40 minutes | functions, parameters, default parameters, return values |

## Objective

Write reusable functions that calculate a tip amount and final total for a restaurant bill.

## Requirements

- Write a function `calculateTip(billAmount, tipPercent)` that returns the tip amount
- Give `tipPercent` a default value of `15`
- Write a function `calculateTotal(billAmount, tipPercent)` that returns the bill plus the tip
- Call both functions with at least two different bills and print the results clearly

## Bonus Challenges

- Write a function `splitBill(total, numberOfPeople)` that returns how much each person owes
- Round all money values to two decimal places using `.toFixed(2)`

## Files in This Project

```text
projects/day-06-tip-calculator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

`(123.456).toFixed(2)` returns the string `"123.46"`, useful for formatting currency in the bonus challenge.

</details>

---

**[← Back to Day 06 Lesson](../../days/day-06-functions/README.md)**
