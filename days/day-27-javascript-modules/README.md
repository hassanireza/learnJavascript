[← Back to Course Home](../../README.md)

# Day 27: JavaScript Modules

> Learn JavaScript ES modules, including export, import, default exports, and how to organize code across files.

**Day 27 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Understand why modules matter for organizing code
- Export and import functions, objects, and classes
- Use named exports versus default exports
- Run module based JavaScript in the browser

---

## Why Modules?

As programs grow, putting everything in one file becomes hard to manage. Modules let you split code across multiple files, each responsible for one part of the program, and explicitly share only what is needed between them.

## Named Exports

```js
// mathUtils.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;
```

```js
// main.js
import { add, subtract, PI } from "./mathUtils.js";

console.log(add(2, 3));      // 5
console.log(subtract(5, 2)); // 3
console.log(PI);             // 3.14159
```

## Default Exports

Each file can have one default export, useful when a file's main purpose is to provide a single thing, often a class or a main function.

```js
// Calculator.js
export default class Calculator {
  add(a, b) {
    return a + b;
  }
}
```

```js
// main.js
import Calculator from "./Calculator.js";

const calc = new Calculator();
console.log(calc.add(4, 5)); // 9
```

A default export can be imported under any name, since there is no fixed export name to match.

## Combining Named and Default Exports

```js
// userService.js
export default function getUser(id) {
  return { id, name: "Sample User" };
}

export const ROLES = ["admin", "member", "guest"];
```

```js
import getUser, { ROLES } from "./userService.js";
```

## Renaming Imports and Exports

```js
import { add as sum } from "./mathUtils.js";
console.log(sum(1, 2)); // 3
```

## Running Modules in the Browser

To use modules in the browser, the script tag needs `type="module"`.

```html
<script type="module" src="main.js"></script>
```

Modules loaded this way are deferred automatically and run in strict mode by default. Note that modules only work correctly when served from a real server, including a local one like Live Server, not from a file opened directly with `file://`.

## Organizing a Small Project with Modules

```text
project/
├── index.html
├── main.js          (imports from the files below)
├── mathUtils.js
└── domHelpers.js
```

This structure keeps each file focused on a single responsibility, which makes the codebase easier to navigate as it grows, a principle that becomes essential once you move on to frameworks after this course.

---

## Best Practice

> Use named exports for utility functions and constants where multiple related things are exported from one file, and reserve default exports for a file's single, primary piece, such as a main class or component. Keep each module focused on one responsibility.

---

## Quick Recap

- Modules split code across files, sharing only what is explicitly exported
- Named exports use `export { }`/`import { }` and must match names exactly, unless renamed
- A default export is the one main thing a file provides, importable under any name
- Browser modules require `type="module"` and a local server to run correctly

---

## Try It Yourself

Create a file stringUtils.js with named exports capitalize(text) and reverse(text), then import and use both from a separate main.js file.

---

## Today's Project: Modular Calculator

Refactor a calculator into separate modules for operations, formatting, and the main application logic.

**[Open the Day 27 project brief →](../../projects/day-27-modular-calculator/README.md)**

---

## Navigation

[← Day 26: Classes and OOP](../day-26-classes-and-oop/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 28: Regular Expressions →](../day-28-regular-expressions/README.md)
