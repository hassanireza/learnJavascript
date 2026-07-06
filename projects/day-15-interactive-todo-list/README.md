[← Back to Day 15 Lesson](../../days/day-15-building-a-todo-app/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 15: Interactive To-Do List

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 60-90 minutes | arrays, DOM rendering, event delegation, forms |

## Objective

Build a complete to-do list application: add tasks, mark them complete, delete them, and see an accurate live count.

## Requirements

- Build a form with a text input to add new tasks
- Store tasks in a `todos` array of objects with `text` and `done`
- Render the list from the array using a single `render()` function
- Clicking a task toggles its completed state, with a visual style change
- Each task has a delete button that removes it from the array and re-renders
- Show a live count of completed versus total tasks

## Bonus Challenges

- Add a "Clear Completed" button that removes all completed tasks at once
- Prevent adding empty or whitespace only tasks, with a brief inline warning

## Files in This Project

```text
projects/day-15-interactive-todo-list/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Store the array index on each rendered element using `li.dataset.index = index`, then read it back inside your delegated click handler with `Number(event.target.dataset.index)`.

</details>

---

**[← Back to Day 15 Lesson](../../days/day-15-building-a-todo-app/README.md)**
