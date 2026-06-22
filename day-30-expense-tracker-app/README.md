[← Back to Day 30 Lesson](../../days/day-30-capstone-project/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 30: Expense Tracker App

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Capstone | 3-5 hours | classes, arrays, DOM rendering, events, forms, localStorage, error handling |

## Objective

Build a fully working Expense Tracker application where users can add, categorize, filter, delete, and persist expenses, with an accurate running total.

## Requirements

- Build a form to add an expense with `description`, `amount`, and `category` fields, validating that description is not empty and amount is a positive number
- Store expenses using an `ExpenseTracker` class that manages an internal array and persists it to `localStorage`
- Render the expense list from the class's data using a dedicated `render()` function, never editing the DOM directly from form handlers
- Display an accurate running total that updates whenever expenses change
- Allow deleting an individual expense
- Allow filtering the visible list by category using a dropdown, without losing the underlying data

## Bonus Challenges

- Add a category breakdown summary, for example total spent per category, using `reduce()`
- Add a date range filter using the `date` field on each expense
- Add a simple bar chart built from plain HTML and CSS (no charting library) representing spending per category
- Add an edit feature that lets a user update an existing expense's description or amount

## Files in This Project

```text
projects/day-30-expense-tracker-app/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Generate unique IDs with `Date.now()` for each new expense, and always filter by `id`, never by array index, when deleting, since the array's order or contents may not match what was rendered after a filter is applied.

</details>

---

**[← Back to Day 30 Lesson](../../days/day-30-capstone-project/README.md)**
