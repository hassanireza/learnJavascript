[← Back to Day 03 Lesson](../../days/day-03-operators-and-expressions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 03: Simple Calculator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Beginner | 30-40 minutes | arithmetic operators, strict equality, ternary operator |

## Objective

Write a script that takes two numbers and prints the result of every basic arithmetic operation between them, clearly labeled.

## Requirements

- Declare two `const` numbers, `numA` and `numB`
- Print the result of addition, subtraction, multiplication, division, and modulo
- Print the result of `numA` raised to the power of `numB`
- Use a ternary operator to print whether `numA` is greater than, less than, or equal to `numB`

## Bonus Challenges

- Change `numA` and `numB` to come from string values, then convert them with `Number()` before calculating
- Add a check using `===` to confirm whether the division result is a whole number

## Files in This Project

```text
projects/day-03-simple-calculator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Use `Number.isInteger(numA / numB)` to check if division produced a whole number for the bonus challenge.

</details>

---

**[← Back to Day 03 Lesson](../../days/day-03-operators-and-expressions/README.md)**
