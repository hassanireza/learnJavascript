[← Back to Day 17 Lesson](../../days/day-17-es6-plus-syntax/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 17: Recipe Card Renderer

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | destructuring, optional chaining, nullish coalescing, DOM rendering |

## Objective

Render an array of recipe objects into styled cards on the page, safely handling any missing fields.

## Requirements

- Create an array of at least three recipe objects, each with `title`, `minutes`, `servings`, and an optional `notes`
- Use destructuring to pull fields out of each recipe inside your render loop
- Use optional chaining and nullish coalescing to default missing `notes` to "No notes provided."
- Render each recipe as a card with a title, time, servings, and notes

## Bonus Challenges

- Add an optional nested `author.name` field and render it safely if present
- Sort recipes by `minutes` before rendering, fastest first

## Files in This Project

```text
projects/day-17-recipe-card-renderer/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Use `const { title, minutes, servings, notes } = recipe;` then `const finalNotes = notes ?? "No notes provided.";`.

</details>

---

**[← Back to Day 17 Lesson](../../days/day-17-es6-plus-syntax/README.md)**
