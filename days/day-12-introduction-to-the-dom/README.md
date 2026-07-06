[← Back to Course Home](../../README.md)

# Day 12: Introduction to the DOM

> Learn how the Document Object Model works and how to select and modify HTML elements with JavaScript.

**Day 12 of 30** &nbsp;|&nbsp; Stage: The Browser and the DOM &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Understand what the DOM is and how it relates to HTML
- Select elements with querySelector and querySelectorAll
- Read and change text content and HTML
- Modify element styles and classes with JavaScript

---

## What Is the DOM?

When a browser loads an HTML page, it builds an in memory tree representation of that page called the **Document Object Model (DOM)**. JavaScript can read and modify this tree, which is how it makes pages interactive.

```html
<body>
  <h1 id="title">Hello</h1>
  <p class="intro">Welcome to my page.</p>
</body>
```

The DOM tree for this HTML has a `body` node containing an `h1` node and a `p` node, each represented as a JavaScript object you can interact with.

## Selecting Elements

```js
const title = document.querySelector("#title");      // by id
const intro = document.querySelector(".intro");       // by class
const firstParagraph = document.querySelector("p");   // by tag, first match

const allParagraphs = document.querySelectorAll("p"); // NodeList of all matches
```

`querySelector()` returns the first matching element or `null`. `querySelectorAll()` returns a NodeList of all matches, which you can loop over with `forEach()`.

## Reading and Changing Content

```js
const title = document.querySelector("#title");

console.log(title.textContent); // "Hello"
title.textContent = "Hello, DOM!";

const intro = document.querySelector(".intro");
intro.innerHTML = "Welcome to <strong>my page</strong>.";
```

Use `textContent` for plain text and `innerHTML` when you intentionally need to insert HTML markup. Inserting untrusted user input with `innerHTML` can create security risks, so prefer `textContent` unless you specifically need HTML.

## Changing Styles

```js
const title = document.querySelector("#title");

title.style.color = "navy";
title.style.fontSize = "32px";
```

## Working with Classes

Modifying CSS classes from JavaScript is generally cleaner than inline styles.

```js
const title = document.querySelector("#title");

title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("highlight"); // adds if missing, removes if present
console.log(title.classList.contains("highlight")); // true or false
```

## Creating and Inserting Elements

```js
const list = document.querySelector("#list");

const newItem = document.createElement("li");
newItem.textContent = "New item";

list.appendChild(newItem);
```

## Removing Elements

```js
const item = document.querySelector("#item-to-remove");
item.remove();
```

---

## Best Practice

> Prefer `textContent` over `innerHTML` whenever you are inserting plain text, and prefer `classList` for visual state changes instead of setting `style` properties directly, since CSS classes keep styling concerns inside your CSS files.

---

## Quick Recap

- The DOM is the browser's in memory tree representation of an HTML page
- `querySelector()`/`querySelectorAll()` select elements using CSS style selectors
- `textContent` and `innerHTML` read or change an element's content
- `classList.add/remove/toggle` manage CSS classes from JavaScript
- `createElement()` and `appendChild()` add new elements to the page

---

## Try It Yourself

Select the page's `h1` element, change its text, add a CSS class called "highlighted" to it, then remove that class after logging a confirmation message.

---

## Today's Project: DOM Playground

Build an interactive page where buttons trigger DOM changes: text updates, style changes, and dynamic element creation.

**[Open the Day 12 project brief →](../../projects/day-12-dom-playground/README.md)**

---

## Navigation

[← Day 11: Strings in Depth](../day-11-strings-in-depth/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 13: DOM Events →](../day-13-dom-events/README.md)
