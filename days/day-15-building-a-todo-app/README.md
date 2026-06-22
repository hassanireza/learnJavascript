[← Back to Course Home](../../README.md)

# Day 15: Building a To-Do App

> Combine DOM manipulation, events, and arrays to build a complete interactive to-do list application in JavaScript.

**Day 15 of 30** &nbsp;|&nbsp; Stage: The Browser and the DOM &nbsp;|&nbsp; Estimated time: 60-75 minutes

---

## What You Will Learn

- Combine arrays, the DOM, and events into one application
- Render a dynamic list from JavaScript data
- Add, complete, and delete items interactively
- Keep the DOM in sync with underlying data

---

## Combining Everything You Have Learned

Today is a checkpoint, not a new topic. You will combine arrays (Day 7), array methods (Day 8), the DOM (Day 12), and events (Day 13) into a single working application: a to-do list.

## The Core Pattern: Data Drives the DOM

A reliable pattern for interactive UIs is: keep your true data in a JavaScript array, then **render** that array to the DOM every time it changes, rather than manually editing HTML in many places.

```js
let todos = [
  { text: "Learn the DOM", done: true },
  { text: "Build a project", done: false },
];

function render() {
  const list = document.querySelector("#todo-list");
  list.innerHTML = ""; // clear and rebuild, simple and reliable for small lists

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.classList.toggle("done", todo.done);
    li.dataset.index = index;
    list.appendChild(li);
  });
}

render();
```

Clearing and rebuilding the list (`innerHTML = ""` followed by re-appending) is simple and performs well for small lists like this one. Larger applications use more advanced techniques, often provided by frameworks, to update only what changed.

## Adding Items

```js
const input = document.querySelector("#todo-input");
const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  todos.push({ text, done: false });
  input.value = "";
  render();
});
```

## Toggling and Deleting with Event Delegation

```js
const list = document.querySelector("#todo-list");

list.addEventListener("click", (event) => {
  const index = Number(event.target.dataset.index);

  if (event.target.matches(".delete-btn")) {
    todos.splice(index, 1);
  } else if (event.target.tagName === "LI") {
    todos[index].done = !todos[index].done;
  }

  render();
});
```

Every change to `todos` is followed by calling `render()` again, so the DOM always reflects the current data. This pattern, **single source of truth plus re-render**, is the foundation for how modern frameworks like React think about UI, even though they automate the re-rendering step.

---

## Best Practice

> Treat your JavaScript array as the single source of truth, and always re-render the DOM from that array after a change, rather than editing both the array and the DOM separately in different places. Keeping one source of truth avoids the data and the screen falling out of sync.

---

## Quick Recap

- Keep application data in a JavaScript array, separate from the DOM
- Render the array to the DOM with a dedicated `render()` function
- Re-render after every data change to keep the UI in sync
- Event delegation handles clicks on dynamically rendered items cleanly

---

## Try It Yourself

Add a counter element above the list that shows "X of Y tasks complete", updated every time render() runs.

---

## Today's Project: Interactive To-Do List

Build a fully interactive to-do list with add, complete, and delete functionality backed by a single render function.

**[Open the Day 15 project brief →](../../projects/day-15-interactive-todo-list/README.md)**

---

## Navigation

[← Day 14: Forms and Validation](../day-14-forms-and-validation/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 16: Scope and Closures →](../day-16-scope-and-closures/README.md)
