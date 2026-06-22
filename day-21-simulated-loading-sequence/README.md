[← Back to Day 21 Lesson](../../days/day-21-asynchronous-javascript-basics/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 21: Simulated Loading Sequence

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 30-40 minutes | setTimeout, callbacks, asynchronous sequencing |

## Objective

Simulate a three step loading process (connecting, authenticating, ready) using chained setTimeout calls and callbacks.

## Requirements

- Write three functions, `connect(callback)`, `authenticate(callback)`, `loadDashboard(callback)`, each using `setTimeout` to simulate a 1 second delay
- Each function should update a status message on the page before calling its callback
- Chain the three functions so each starts only after the previous one finishes
- Display a final "Ready!" message once all three steps complete

## Bonus Challenges

- Add a progress percentage that updates at each step (33%, 66%, 100%)
- Randomize each step's delay between 500ms and 2000ms using `Math.random()`

## Files in This Project

```text
projects/day-21-simulated-loading-sequence/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Call each next function from inside the previous one's callback: `connect(() => authenticate(() => loadDashboard(() => { /* done */ })));`

</details>

---

**[← Back to Day 21 Lesson](../../days/day-21-asynchronous-javascript-basics/README.md)**
