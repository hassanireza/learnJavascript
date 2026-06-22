[← Back to Day 29 Lesson](../../days/day-29-debugging-and-testing-basics/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 29: Tested Utility Functions

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | debugging, console methods, simple unit testing |

## Objective

Write a handful of utility functions and a lightweight test suite, using assertEqual(), that verifies each one works correctly across multiple cases.

## Requirements

- Write at least four utility functions, for example `capitalize(text)`, `isPalindrome(text)`, `sumArray(numbers)`, and `isEven(n)`
- Write an `assertEqual(actual, expected, testName)` helper function
- Write at least three tests per utility function, including at least one edge case each (empty string, zero, negative number, and so on)
- Run all tests and print a final summary count of passed versus failed tests

## Bonus Challenges

- Write an `assertThrows(fn, testName)` helper that passes only if calling `fn` throws an error
- Intentionally introduce a bug in one function, run the tests, and confirm the failure is reported clearly, then fix it

## Files in This Project

```text
projects/day-29-tested-utility-functions/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Track pass and fail counts in two variables that `assertEqual()` increments, then log the final tally after all tests have run.

</details>

---

**[← Back to Day 29 Lesson](../../days/day-29-debugging-and-testing-basics/README.md)**
