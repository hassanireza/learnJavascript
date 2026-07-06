[← Back to Day 04 Lesson](../../days/day-04-conditional-statements/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 04: Grade Calculator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Beginner | 30-40 minutes | if/else if/else, switch, comparison operators |

## Objective

Write a script that takes a numeric score and prints the corresponding letter grade along with encouraging feedback.

## Requirements

- Declare a `const score` between 0 and 100
- Use if/else if/else to determine the letter grade: A (90+), B (80-89), C (70-79), D (60-69), F (below 60)
- Print the letter grade clearly
- Print a different feedback message depending on the grade, using a switch statement on the grade letter

## Bonus Challenges

- Validate that the score is between 0 and 100, and print an error message if it is not
- Add support for a `+`/`-` modifier, for example `B+` for scores ending in 7, 8, or 9

## Files in This Project

```text
projects/day-04-grade-calculator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Use the modulo operator (`score % 10`) to detect the last digit for the bonus +/- modifier challenge.

</details>

---

**[← Back to Day 04 Lesson](../../days/day-04-conditional-statements/README.md)**
