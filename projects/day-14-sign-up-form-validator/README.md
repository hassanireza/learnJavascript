[← Back to Day 14 Lesson](../../days/day-14-forms-and-validation/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 14: Sign Up Form Validator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 45-60 minutes | form handling, validation, event.preventDefault, error messaging |

## Objective

Validate a sign up form with username, email, and password fields, showing specific errors for each problem.

## Requirements

- Build a form with `username`, `email`, `password`, and `confirmPassword` fields
- On submit, prevent the default behavior
- Validate that username is at least 3 characters
- Validate that email contains an `@` and a `.`
- Validate that password is at least 8 characters and matches `confirmPassword`
- Display a specific error message for the first failing rule, or a success message if everything passes

## Bonus Challenges

- Clear the error message as soon as the user starts typing again, using an `input` event
- Add a basic password strength indicator based on length and character variety

## Files in This Project

```text
projects/day-14-sign-up-form-validator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Validate fields in order and `return` immediately after setting the first error message, so only one error shows at a time.

</details>

---

**[← Back to Day 14 Lesson](../../days/day-14-forms-and-validation/README.md)**
