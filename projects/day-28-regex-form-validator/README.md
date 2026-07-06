[← Back to Day 28 Lesson](../../days/day-28-regular-expressions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 28: Regex Form Validator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Advanced | 40-50 minutes | regular expressions, test, match, form validation |

## Objective

Validate a registration form using regular expressions for email format, username rules, and password strength.

## Requirements

- Build a form with `username`, `email`, and `password` fields
- Validate `username` matches `/^[a-zA-Z0-9_]{3,16}$/` (letters, numbers, underscores, 3 to 16 characters)
- Validate `email` matches a reasonable email pattern
- Validate `password` is at least 8 characters and contains at least one letter and one number
- Show a specific error message identifying exactly which rule failed

## Bonus Challenges

- Add real time validation feedback as the user types, using the `input` event on each field
- Add a regex based check that the username does not start with a number

## Files in This Project

```text
projects/day-28-regex-form-validator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Test each rule independently and collect failures in an array, then show only the first failure, similar to the layered approach used in Day 14.

</details>

---

**[← Back to Day 28 Lesson](../../days/day-28-regular-expressions/README.md)**
