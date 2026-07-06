[← Back to Day 27 Lesson](../../days/day-27-javascript-modules/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 27: Modular Calculator

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40 minutes | ES modules, named exports, default exports, project organization |

## Objective

Split a calculator application into clearly separated modules, then wire them together in a main entry file.

## Requirements

- Create `operations.js` exporting named functions `add`, `subtract`, `multiply`, and `divide`
- Create `formatter.js` with a default export function `formatCurrency(amount)` returning a string like `$42.00`
- Create `main.js` that imports from both files and runs a few sample calculations, logging formatted results
- Link `main.js` in `index.html` using `<script type="module" src="main.js"></script>`

## Bonus Challenges

- Add a `historyLogger.js` module exporting a class `HistoryLogger` that records every calculation performed
- Have `divide` throw a custom error for division by zero, caught and handled inside `main.js`

## Files in This Project

```text
projects/day-27-modular-calculator/
├── README.md
├── index.html
├── style.css
├── main.js
├── operations.js
└── formatter.js
```

Open `index.html` with the **Live Server** extension. This project must be served over HTTP, not opened directly as a `file://` path, because ES modules require a server to load correctly. Look for `// TODO` comments inside `main.js` and `operations.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Open this project using the Live Server extension rather than double clicking `index.html` directly, since modules require an HTTP server to load correctly.

</details>

---

**[← Back to Day 27 Lesson](../../days/day-27-javascript-modules/README.md)**
