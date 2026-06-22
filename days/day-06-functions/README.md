[← Back to Course Home](../../README.md)

# Day 06: Functions

> Learn JavaScript functions, including declarations, expressions, arrow functions, parameters, and return values.

**Day 6 of 30** &nbsp;|&nbsp; Stage: JavaScript Fundamentals &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Write function declarations and function expressions
- Write arrow functions
- Use parameters, default parameters, and return values
- Understand the difference between a parameter and an argument

---

## Why Functions

A function is a reusable block of code that performs a task. Functions let you avoid repeating yourself and break a problem into smaller, named pieces.

## Function Declarations

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Maria")); // "Hello, Maria!"
```

`name` is a **parameter**, a placeholder for a value the function expects. `"Maria"` is the **argument**, the actual value passed in when calling the function.

## Function Expressions

A function can also be stored in a variable.

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

## Arrow Functions

Arrow functions, introduced in ES6, are a shorter syntax for writing function expressions.

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4)); // 7

// If the function body is a single return statement, it can be shortened further:
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// A single parameter does not need parentheses:
const double = n => n * 2;
console.log(double(5)); // 10
```

## Default Parameters

```js
function greetUser(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log(greetUser());        // "Welcome, Guest!"
console.log(greetUser("Lucas")); // "Welcome, Lucas!"
```

## return vs No Return

A function without a `return` statement returns `undefined`.

```js
function logMessage(message) {
  console.log(message);
  // no return statement
}

const result = logMessage("Hello");
console.log(result); // undefined
```

## Function Scope

Variables declared inside a function only exist inside that function.

```js
function calculateTotal() {
  const tax = 0.1;
  return tax;
}

console.log(calculateTotal()); // 0.1
// console.log(tax); // ReferenceError: tax is not defined
```

## Pure Functions

A pure function always returns the same output for the same input and does not change anything outside itself. Pure functions are easier to test, reuse, and reason about.

```js
// Pure: depends only on its inputs, no side effects
function add(a, b) {
  return a + b;
}

// Impure: depends on external state
let total = 0;
function addToTotal(amount) {
  total += amount; // modifies something outside the function
}
```

---

## Best Practice

> Prefer pure functions whenever possible, give every function a clear, verb based name (`calculateTotal`, not `calc`), and keep each function focused on a single responsibility. A function that does one thing well is easier to test and reuse.

---

## Quick Recap

- Functions group reusable logic under a name
- Function declarations, function expressions, and arrow functions are three ways to define one
- Parameters are placeholders, arguments are the actual values passed in
- Default parameters provide a fallback value when none is given
- Pure functions avoid side effects and are easier to reason about

---

## Try It Yourself

Write an arrow function `isEven` that takes a number and returns `true` if it is even, `false` otherwise.

---

## Today's Project: Tip Calculator

Build a function based tip calculator that computes the tip and total bill for any amount and percentage.

**[Open the Day 06 project brief →](../../projects/day-06-tip-calculator/README.md)**

---

## Navigation

[← Day 05: Loops and Iteration](../day-05-loops-and-iteration/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 07: Arrays →](../day-07-arrays/README.md)
