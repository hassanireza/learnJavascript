[← Back to Day 25 Lesson](../../days/day-25-local-storage/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 25: Persistent To-Do List

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | localStorage, JSON.stringify/parse, syncing state and storage |

## Objective

Persist a to-do list to localStorage so tasks remain after the page is closed and reopened.

## Requirements

- Reuse or rebuild the to-do list from Day 15: add, toggle complete, delete
- On page load, read any existing todos from `localStorage`, defaulting to an empty array if none exist
- Every time `todos` changes, save the updated array back to `localStorage`
- Reloading the page should show the same list as before the reload

## Bonus Challenges

- Add a "Clear All" button that empties both the array and `localStorage`
- Store the timestamp of the last update and display "Last updated: ..." on the page

## Files in This Project

```text
projects/day-25-persistent-todo-list/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Call your `saveTodos(todos)` helper at the very end of every function that changes the `todos` array: add, toggle, and delete.

</details>

---

**[← Back to Day 25 Lesson](../../days/day-25-local-storage/README.md)**
