[← Back to Day 20 Lesson](../../days/day-20-error-handling/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 20: Safe Calculator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 30-40 minutes | try/catch, custom errors, input validation |

## Objective

Build calculator functions that validate their input and handle edge cases like division by zero without crashing.

## Requirements

- Write `safeDivide(a, b)` that throws a custom error for division by zero, and catches it to return `null` while logging a clear message
- Write `safeSquareRoot(n)` that throws a custom error for negative numbers, caught the same way
- Write `parseNumberSafely(text)` that uses `try`/`catch` around logic that throws if the text cannot be converted to a valid number
- Call each function with both valid and invalid input, and print the results

## Bonus Challenges

- Create a custom error class `ValidationError` extending `Error` and use it in place of the generic `Error`
- Write a `calculate(operation, a, b)` function that dispatches to the correct safe function based on a string like "divide" or "sqrt"

## Files in This Project

```text
projects/day-20-safe-calculator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

A custom error class looks like: `class ValidationError extends Error { constructor(message) { super(message); this.name = "ValidationError"; } }`

</details>

---

**[← Back to Day 20 Lesson](../../days/day-20-error-handling/README.md)**
