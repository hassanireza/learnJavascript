[← Back to Course Home](../../README.md)

# Day 29: Debugging and Testing Basics

> Learn essential JavaScript debugging techniques with browser dev tools and the fundamentals of writing simple unit tests.

**Day 29 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Use browser DevTools to debug JavaScript effectively
- Set breakpoints and inspect variables
- Understand the purpose of automated tests
- Write simple unit tests without a framework

---

## Debugging with console Methods

`console.log()` is useful, but DevTools offers far more.

```js
console.log("Basic value:", 42);
console.table([{ name: "Ana", age: 25 }, { name: "Beto", age: 30 }]); // renders a table
console.warn("This is a warning");
console.error("This is an error");

console.time("loop");
for (let i = 0; i < 100000; i++) {} // some work
console.timeEnd("loop"); // logs how long the block took
```

## Using Breakpoints

Breakpoints pause code execution so you can inspect the program's exact state at that moment, often faster than adding and removing `console.log()` calls repeatedly.

1. Open DevTools and go to the **Sources** tab.
2. Find your JavaScript file and click a line number to set a breakpoint.
3. Reload the page or trigger the code, execution pauses at that line.
4. Use the **Scope** panel to inspect current variable values.
5. Use the step controls (step over, step into) to move through the code line by line.

You can also set a breakpoint directly in code:

```js
function calculateTotal(price, quantity) {
  debugger; // execution pauses here if DevTools is open
  return price * quantity;
}
```

## Reading Error Messages

A stack trace shows where an error happened and the chain of function calls that led there. Read it from the top down. The first line usually names the error and its message, the lines below show the call stack.

```js
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero.");
  return a / b;
}

divide(10, 0);
// Uncaught Error: Cannot divide by zero.
//     at divide (script.js:2)
//     at script.js:6
```

## Why Automated Tests Matter

Manually checking that code works by reading console output does not scale as a project grows. Automated tests run your code against expected results automatically, catching mistakes (called regressions) before they reach users.

## Writing a Simple Test Helper

Professional projects typically use a framework like Jest or Vitest, but understanding the underlying idea is straightforward and can be built with plain JavaScript.

```js
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`PASS: ${testName}`);
  } else {
    console.error(`FAIL: ${testName} (expected ${expected}, got ${actual})`);
  }
}

function add(a, b) {
  return a + b;
}

assertEqual(add(2, 3), 5, "add(2, 3) should equal 5");
assertEqual(add(-1, 1), 0, "add(-1, 1) should equal 0");
assertEqual(add(2, 2), 5, "intentionally wrong test to show a failure");
```

## What Comes Next

Real world JavaScript testing typically uses frameworks such as **Jest**, **Vitest**, or **Mocha**, which provide `describe()`, `it()`, and built in assertion methods like `expect().toBe()`. The `assertEqual()` pattern above is a simplified version of the same underlying idea, and understanding it makes those frameworks far easier to learn afterward.

---

## Best Practice

> Reach for breakpoints instead of scattering `console.log()` everywhere when debugging anything beyond a trivial issue, since you can inspect the full program state at the exact moment something goes wrong. Write small test functions for your utility functions as you build them, it catches mistakes immediately rather than after they cause confusing bugs elsewhere.

---

## Quick Recap

- `console.table()`, `console.time()`, and breakpoints go far beyond basic `console.log()` debugging
- Stack traces should be read from the top, showing the error and the chain of calls that led to it
- Automated tests catch regressions that manual checking misses as a project grows
- A simple `assertEqual()` helper demonstrates the core idea behind real testing frameworks

---

## Try It Yourself

Write three assertEqual() style tests for a function isEven(n), covering an even number, an odd number, and zero.

---

## Today's Project: Tested Utility Functions

Build a small set of utility functions alongside a simple hand written test suite that verifies their correctness.

**[Open the Day 29 project brief →](../../projects/day-29-tested-utility-functions/README.md)**

---

## Navigation

[← Day 28: Regular Expressions](../day-28-regular-expressions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 30: Capstone Project →](../day-30-capstone-project/README.md)
