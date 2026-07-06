[← Back to Course Home](../../README.md)

# Day 25: Local Storage

> Learn how to use the JavaScript localStorage API to persist data in the browser between page reloads and visits.

**Day 25 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Store and retrieve data with localStorage
- Persist objects and arrays using JSON.stringify and JSON.parse
- Understand the limitations of localStorage
- Sync application state with the browser's storage

---

## What Is Local Storage?

`localStorage` lets you save key-value data in the browser that persists even after the page is closed or reloaded, unlike regular JavaScript variables, which reset every time.

## Basic Usage

```js
localStorage.setItem("username", "Theo");
console.log(localStorage.getItem("username")); // "Theo"

localStorage.removeItem("username");
console.log(localStorage.getItem("username")); // null

localStorage.setItem("a", "1");
localStorage.setItem("b", "2");
localStorage.clear(); // removes everything
```

## Local Storage Only Stores Strings

`localStorage` can only store strings. To store objects or arrays, convert them with `JSON.stringify()`, and convert them back with `JSON.parse()`.

```js
const user = { name: "Sora", age: 27 };

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Sora"
```

## A Safe Pattern for Reading Stored Data

```js
function getStoredTodos() {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

let todos = getStoredTodos();
todos.push({ text: "Learn localStorage", done: false });
saveTodos(todos);
```

## Combining with the Render Pattern from Day 15

```js
function render() {
  saveTodos(todos); // persist on every change
  // ... re-render the DOM from `todos` as usual
}
```

By saving inside the same function that re-renders the UI, your data and your screen stay in sync, and now also survive a page reload.

## Limitations of Local Storage

- Storage is limited to roughly 5 to 10 MB per site, varying by browser.
- Data is stored as plain text, so never store sensitive information like passwords.
- Storage is specific to a browser and device, it does not sync across devices automatically.
- `sessionStorage` is nearly identical, but clears when the browser tab closes, useful for temporary, per session data.

---

## Best Practice

> Always wrap stored JSON in a fallback when reading it back, since `localStorage.getItem()` returns `null` for missing keys, and passing `null` to `JSON.parse()` throws an error. Never store sensitive data such as passwords or tokens that should remain secret in `localStorage`, since it is plain text and accessible to any script running on the page.

---

## Quick Recap

- `localStorage` persists string data in the browser across reloads and visits
- `JSON.stringify()`/`JSON.parse()` allow storing and retrieving objects and arrays
- Always provide a fallback when reading potentially missing keys
- `localStorage` has size limits and should never hold sensitive data

---

## Try It Yourself

Save your name to localStorage under the key "visitorName", reload the page mentally (or actually), and write code that greets the visitor by name if it exists, or asks for it if not.

---

## Today's Project: Persistent To-Do List

Upgrade the Day 15 to-do list so tasks are saved to localStorage and survive page reloads.

**[Open the Day 25 project brief →](../../projects/day-25-persistent-todo-list/README.md)**

---

## Navigation

[← Day 24: Fetch API and JSON](../day-24-fetch-api-and-json/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 26: Classes and OOP →](../day-26-classes-and-oop/README.md)
