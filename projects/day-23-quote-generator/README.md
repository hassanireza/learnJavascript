[← Back to Day 23 Lesson](../../days/day-23-async-and-await/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 23: Quote Generator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 30-40 minutes | async/await, try/catch, simulated async data |

## Objective

Fetch a random quote from a simulated async source using async/await, displaying it on the page with proper loading and error states.

## Requirements

- Write `getRandomQuote()` returning a Promise that resolves with a random quote object after a short delay
- Write an `async function showNewQuote()` that awaits `getRandomQuote()` inside a `try`/`catch` block
- Display a loading message while waiting, then replace it with the quote, or an error message on failure
- Trigger `showNewQuote()` on a button click

## Bonus Challenges

- Add an author name to each quote object and display it
- Disable the button while loading to prevent duplicate requests

## Files in This Project

```text
projects/day-23-quote-generator/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Set the loading text immediately before calling `await getRandomQuote()`, and update the DOM again only after the `await` completes.

</details>

---

**[← Back to Day 23 Lesson](../../days/day-23-async-and-await/README.md)**
