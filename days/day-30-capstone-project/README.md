[← Back to Course Home](../../README.md)

# Day 30: Capstone Project

> Apply everything learned in this 30 day JavaScript course to build a complete capstone Expense Tracker application.

**Day 30 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 3-5 hours

---

## What You Will Learn

- Combine variables, functions, arrays, and objects into one application
- Use the DOM, events, and forms together
- Persist data with localStorage
- Apply classes, error handling, and clean code organization

---

## You Have Reached the Capstone

Over the past 29 days you learned variables, functions, arrays, objects, the DOM, events, closures, modern syntax, asynchronous JavaScript, classes, regular expressions, and testing basics. Today's project combines nearly everything into one complete, realistic application: an **Expense Tracker**.

There is no new syntax to learn today. This lesson is a guided architecture plan. The implementation is the project itself, described in full in the project brief below.

## Planning Before Coding

Before writing any code, sketch the application's shape:

**Data:** What does one expense look like?

```js
{
  id: 1,
  description: "Groceries",
  amount: 45.50,
  category: "Food",
  date: "2026-06-20",
}
```

**State:** What does the application need to remember?

- The full list of expenses
- Possibly a current filter (such as a selected category)

**Actions:** What can the user do?

- Add an expense
- Delete an expense
- Filter expenses by category
- See a running total

## A Suggested Architecture

```js
class ExpenseTracker {
  constructor() {
    this.expenses = this.loadExpenses();
  }

  loadExpenses() {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  }

  saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  addExpense(expense) {
    this.expenses.push({ id: Date.now(), ...expense });
    this.saveExpenses();
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter((expense) => expense.id !== id);
    this.saveExpenses();
  }

  getTotal() {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  getByCategory(category) {
    return category === "all"
      ? this.expenses
      : this.expenses.filter((expense) => expense.category === category);
  }
}
```

This single class is responsible only for managing data, not the DOM, following the same separation of concerns you practiced from Day 15 onward: data logic stays separate from rendering logic.

## Connecting the Class to the DOM

```js
const tracker = new ExpenseTracker();

function render(category = "all") {
  const list = document.querySelector("#expense-list");
  list.innerHTML = "";

  tracker.getByCategory(category).forEach((expense) => {
    const li = document.createElement("li");
    li.textContent = `${expense.description}: $${expense.amount.toFixed(2)} (${expense.category})`;
    list.appendChild(li);
  });

  document.querySelector("#total").textContent = `Total: $${tracker.getTotal().toFixed(2)}`;
}

render();
```

The full requirements, including validation, filtering, and bonus features, are described in the project brief. Treat this as a real, complete project, the same way you would approach an assignment from a job or a personal portfolio piece.

---

## Best Practice

> Separate your data logic (the class managing expenses) from your DOM logic (the functions rendering the page), exactly as practiced from Day 15 onward. This separation is the single most valuable habit from this entire course, and is the foundation of how every major frontend framework is structured.

---

## Quick Recap

- A capstone project combines variables, functions, arrays, objects, the DOM, events, classes, and storage
- Plan your data shape and required actions before writing implementation code
- Keep data management logic separate from DOM rendering logic
- This architecture pattern, data class plus render function, mirrors how real frameworks are structured

---

## Try It Yourself

Before opening the project brief, write out on paper or in a comment block exactly what properties one expense object should have, and what user actions your app must support.

---

## Today's Project: Expense Tracker App

Build a complete, persistent expense tracker, the final project of the course, combining every major concept you have learned.

**[Open the Day 30 project brief →](../../projects/day-30-expense-tracker-app/README.md)**

---

## Navigation

[← Day 29: Debugging and Testing Basics](../day-29-debugging-and-testing-basics/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)
