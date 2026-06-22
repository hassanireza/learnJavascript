[← Back to Course Home](../../README.md)

# Day 01: Introduction and Setup

> Learn what JavaScript is, why it powers the modern web, and how to write and run your first JavaScript code today.

**Day 1 of 30** &nbsp;|&nbsp; Stage: JavaScript Fundamentals &nbsp;|&nbsp; Estimated time: 30-45 minutes

---

## What You Will Learn

- Understand what JavaScript is and where it runs
- Learn the difference between JavaScript, HTML, and CSS
- Run JavaScript in the browser console
- Run JavaScript with Node.js from the terminal
- Write and execute your first script

---

## What Is JavaScript?

JavaScript is a programming language that runs in web browsers and, thanks to runtimes like Node.js, on servers and computers directly. It is the language that makes web pages interactive: validating forms, updating content without reloading the page, animating elements, fetching data from servers, and much more.

Three technologies work together to build a typical website:

| Technology | Responsibility |
|---|---|
| **HTML** | Structure and content of the page |
| **CSS** | Visual styling and layout |
| **JavaScript** | Behavior, interactivity, and logic |

JavaScript was created in 1995 and is standardized today under the name **ECMAScript**. Every major browser, Chrome, Firefox, Safari, and Edge, implements the same ECMAScript standard, which is why JavaScript code generally runs the same way everywhere.

## Where JavaScript Runs

JavaScript code can run in two main environments throughout this course:

1. **The browser**, using the built-in JavaScript engine (Chrome uses V8, Firefox uses SpiderMonkey).
2. **Node.js**, a runtime that lets JavaScript run outside the browser, commonly used for servers and tooling.

## Running Your First Script in the Browser

1. Open your browser and press `F12` (or `Cmd+Option+I` on macOS) to open Developer Tools.
2. Click the **Console** tab.
3. Type the following and press Enter:

```js
console.log("Hello, JavaScript!");
```

`console.log()` prints a value to the console. You will use it constantly throughout this course to inspect what your code is doing.

## Running Your First Script with Node.js

1. Create a new file named `app.js`.
2. Add the following code:

```js
console.log("Hello, JavaScript!");
console.log(2 + 2);
console.log("My JavaScript journey starts today.");
```

3. Open a terminal in the same folder and run:

```bash
node app.js
```

You should see three lines printed to your terminal.

## Comments

Comments are notes in your code that JavaScript ignores when running. Use them to explain why your code does something.

```js
// This is a single line comment

/*
  This is a
  multi line comment
*/

console.log("Comments do not affect how the code runs.");
```

## Semicolons and Statements

A JavaScript program is made of statements, instructions the engine executes one after another. Most statements end with a semicolon `;`. JavaScript has a feature called Automatic Semicolon Insertion that can insert them for you, but relying on it can cause subtle bugs, so this course always writes semicolons explicitly.

```js
console.log("Statement one");
console.log("Statement two");
```

---

## Best Practice

> Always end statements with a semicolon and use `console.log()` liberally while learning. Removing debug logs before committing real projects is a habit worth building from day one.

---

## Quick Recap

- JavaScript adds behavior and interactivity to web pages alongside HTML and CSS
- JavaScript runs in browsers and in Node.js
- `console.log()` prints values for debugging
- Comments (`//` and `/* */`) document code without affecting execution
- Statements typically end with a semicolon

---

## Try It Yourself

Open your browser console and print the result of `5 * 6`, then print your name as a string, then print the text `"I am learning JavaScript"`.

---

## Today's Project: Hello Console

Set up your very first JavaScript file and print a short personal introduction to the console, confirming your environment works end to end.

**[Open the Day 01 project brief →](../../projects/day-01-hello-console/README.md)**

---

## Navigation

[Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 02: Variables and Data Types →](../day-02-variables-and-data-types/README.md)
