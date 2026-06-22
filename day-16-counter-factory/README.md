[← Back to Day 16 Lesson](../../days/day-16-scope-and-closures/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 16: Counter Factory

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 30-40 minutes | closures, factory functions, private state |

## Objective

Write a `createCounter()` factory function that returns independent counter objects, each tracking its own private count.

## Requirements

- Write `createCounter(startingValue = 0)` that returns an object with `increment`, `decrement`, and `getValue` methods
- The internal count must be private, not accessible directly from outside the returned object
- Create at least two separate counters and prove they do not affect each other

## Bonus Challenges

- Add a `step` parameter so `increment`/`decrement` change by a custom amount instead of always 1
- Add a `history` array, private as well, that records every value the counter has held

## Files in This Project

```text
projects/day-16-counter-factory/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Declare `let count = startingValue;` inside `createCounter`, then have the returned methods read and modify that same variable through closure.

</details>

---

**[← Back to Day 16 Lesson](../../days/day-16-scope-and-closures/README.md)**
