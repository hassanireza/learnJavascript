[← Back to Course Home](../../README.md)

# Day 13: DOM Events

> Learn JavaScript DOM events with addEventListener, the event object, event bubbling, and delegation.

**Day 13 of 30** &nbsp;|&nbsp; Stage: The Browser and the DOM &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Listen for events with addEventListener
- Use the event object inside event handlers
- Understand event bubbling
- Apply event delegation for dynamic content

---

## Listening for Events

```js
const button = document.querySelector("#my-button");

button.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

## Common Event Types

| Event | Fires When |
|---|---|
| `click` | An element is clicked |
| `input` | A form field's value changes as the user types |
| `submit` | A form is submitted |
| `keydown` | A key is pressed |
| `mouseover` | The pointer enters an element |
| `DOMContentLoaded` | The HTML has fully loaded |

## The Event Object

Every event handler receives an event object with useful information.

```js
const input = document.querySelector("#name-input");

input.addEventListener("input", (event) => {
  console.log(event.target.value); // the current value of the input
});

document.addEventListener("keydown", (event) => {
  console.log(event.key); // which key was pressed
});
```

## Preventing Default Behavior

```js
const form = document.querySelector("#signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading
  console.log("Form submitted without a page reload.");
});
```

## Event Bubbling

When an event fires on an element, it also fires on that element's ancestors, an effect called bubbling.

```html
<div id="outer">
  <button id="inner">Click me</button>
</div>
```

```js
document.querySelector("#outer").addEventListener("click", () => {
  console.log("Outer div clicked");
});

document.querySelector("#inner").addEventListener("click", () => {
  console.log("Button clicked");
});

// Clicking the button logs both messages, button first, then outer div
```

## Event Delegation

Instead of attaching a listener to many child elements, attach one listener to their shared parent and check `event.target`. This is especially useful for elements added to the page dynamically.

```js
const list = document.querySelector("#todo-list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});
```

This single listener correctly handles every `li`, including ones added after the page first loaded.

## Removing Event Listeners

```js
function handleClick() {
  console.log("Clicked");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick); // must reference the same named function
```

---

## Best Practice

> Use event delegation when handling many similar elements, especially ones that may be added dynamically, instead of attaching a separate listener to each one. Always call `event.preventDefault()` inside form submit handlers when you intend to process the data with JavaScript instead of reloading the page.

---

## Quick Recap

- `addEventListener()` attaches behavior to DOM events
- The event object carries details such as `target` and `key`
- `preventDefault()` stops a browser's default action, such as a form reload
- Events bubble up from child to parent elements
- Event delegation handles many elements, including dynamic ones, with a single listener

---

## Try It Yourself

Add a click listener to the document that logs the tag name of whatever element was clicked, using event.target.tagName.

---

## Today's Project: Color Switcher

Build a page where clicking color swatches changes the page background, using event delegation.

**[Open the Day 13 project brief →](../../projects/day-13-color-switcher/README.md)**

---

## Navigation

[← Day 12: Introduction to the DOM](../day-12-introduction-to-the-dom/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 14: Forms and Validation →](../day-14-forms-and-validation/README.md)
