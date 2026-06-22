[← Back to Day 07 Lesson](../../days/day-07-arrays/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 07: Console Todo List

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Beginner | 30-40 minutes | arrays, push, splice, indexOf, forEach |

## Objective

Manage a list of tasks stored in an array, supporting adding, removing, and listing tasks.

## Requirements

- Create an array `tasks` with at least three starting tasks
- Add a new task using `push()`
- Remove a specific task by its index using `splice()`
- Print the full list with numbered output using `forEach()`

## Bonus Challenges

- Write a function `findTask(taskName)` that returns the index of a task, or `-1` if missing
- Add a second array `completedTasks` and move a finished task from `tasks` into it

## Files in This Project

```text
projects/day-07-console-todo-list/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

`tasks.splice(index, 1)` removes exactly one item at the given index. Use `tasks.indexOf(taskName)` to find that index dynamically.

</details>

---

**[← Back to Day 07 Lesson](../../days/day-07-arrays/README.md)**
