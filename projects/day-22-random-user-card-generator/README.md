[← Back to Day 22 Lesson](../../days/day-22-promises/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 22: Random User Card Generator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | Promises, then/catch/finally, simulated async data |

## Objective

Simulate fetching a random user profile through a Promise based function and render the result as a styled card.

## Requirements

- Write `generateRandomUser()` that returns a Promise resolving with a random object containing `name`, `age`, and `city`, after a short simulated delay
- Make the Promise reject roughly 20 percent of the time with an error, to simulate a failed request
- On a button click, call `generateRandomUser()` and render the result as a card using `.then()`
- Handle rejection with `.catch()` by displaying a friendly error message instead of a card

## Bonus Challenges

- Use `Promise.all()` to generate three users at once and render all three cards together
- Disable the button while loading and re-enable it in `.finally()`

## Files in This Project

```text
projects/day-22-random-user-card-generator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Use `Math.random() < 0.2` inside the Promise body to decide whether to call `reject()` instead of `resolve()`.

</details>

---

**[← Back to Day 22 Lesson](../../days/day-22-promises/README.md)**
