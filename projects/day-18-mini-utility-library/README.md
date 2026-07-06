[← Back to Day 18 Lesson](../../days/day-18-spread-rest-and-default-parameters/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 18: Mini Utility Library

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40 minutes | spread, rest parameters, default parameters |

## Objective

Write a small set of general purpose utility functions that other projects could reuse.

## Requirements

- Write `sumAll(...numbers)` that returns the total of any number of arguments
- Write `mergeObjects(...objects)` that merges any number of objects into one using spread
- Write `cloneArray(array)` that returns a shallow copy using spread
- Write `greet(name, greeting = "Hello")` that returns a greeting string
- Call each function at least twice with different inputs and log the results

## Bonus Challenges

- Write `getFirstAndRest(array)` that returns an object `{ first, rest }` using array destructuring with rest syntax
- Write `average(...numbers)` reusing your `sumAll` function internally

## Files in This Project

```text
projects/day-18-mini-utility-library/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

`mergeObjects` can be written as `objects.reduce((merged, obj) => ({ ...merged, ...obj }), {});`.

</details>

---

**[← Back to Day 18 Lesson](../../days/day-18-spread-rest-and-default-parameters/README.md)**
