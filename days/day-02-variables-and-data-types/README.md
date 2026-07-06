[← Back to Course Home](../../README.md)

# Day 02: Variables and Data Types

> Master JavaScript variables, let, const, and var, and every primitive data type with clear, correct examples.

**Day 2 of 30** &nbsp;|&nbsp; Stage: JavaScript Fundamentals &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Declare variables using let and const
- Understand why this course avoids var
- Identify all JavaScript primitive data types
- Use the typeof operator to check data types
- Understand type coercion at a basic level

---

## Declaring Variables

A variable is a named container for a value. JavaScript has three keywords for declaring variables: `let`, `const`, and `var`.

```js
let age = 25;
const name = "Alex";
var city = "Lisbon"; // avoid in modern code
```

### let

Use `let` for values that will change later.

```js
let score = 0;
score = score + 10;
console.log(score); // 10
```

### const

Use `const` for values that should never be reassigned. Prefer `const` by default and switch to `let` only when you know the value must change.

```js
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant variable.
```

### Why This Course Avoids var

`var` is function scoped and gets hoisted in ways that cause confusing bugs, while `let` and `const` are block scoped, which behaves predictably. Modern JavaScript style guides, including Airbnb's, recommend never using `var` in new code.

## Naming Variables

- Use **camelCase**: `firstName`, `totalPrice`.
- Names must start with a letter, `_`, or `$`, and cannot start with a number.
- Names are case sensitive: `score` and `Score` are different variables.
- Use descriptive names: `userAge` is clearer than `x`.

```js
const userAge = 30;
const isLoggedIn = true;
const _privateValue = 42;
```

## Primitive Data Types

JavaScript has seven primitive data types:

| Type | Example | Description |
|---|---|---|
| `String` | `"Hello"` | Text |
| `Number` | `42`, `3.14` | Integers and decimals |
| `Boolean` | `true`, `false` | Logical value |
| `undefined` | `let x;` | Declared but not assigned |
| `null` | `let x = null;` | Intentional absence of a value |
| `BigInt` | `123n` | Arbitrarily large integers |
| `Symbol` | `Symbol("id")` | Unique identifier |

```js
const productName = "Wireless Mouse"; // String
const price = 29.99;                   // Number
const inStock = true;                  // Boolean
let shippingDate;                      // undefined
const discount = null;                 // null, intentionally empty
```

## Checking Types with typeof

```js
console.log(typeof "hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (a well known historical quirk)
```

## Type Coercion

JavaScript sometimes converts one type to another automatically, called coercion. This is a common source of bugs for beginners.

```js
console.log("5" + 5);   // "55", number is converted to a string
console.log("5" - 1);   // 4, string is converted to a number
console.log("5" * "2"); // 10
```

To avoid surprises, convert types explicitly when needed:

```js
const input = "42";
const value = Number(input);
console.log(value + 8); // 50
```

---

## Best Practice

> Default to `const`. Only use `let` when the variable's value genuinely needs to change. Never use `var` in new code, and always convert types explicitly with `Number()`, `String()`, or `Boolean()` rather than relying on implicit coercion.

---

## Quick Recap

- `let` declares reassignable, block scoped variables
- `const` declares variables that cannot be reassigned
- Avoid `var` because of confusing scoping behavior
- JavaScript has seven primitive types: String, Number, Boolean, undefined, null, BigInt, and Symbol
- `typeof` reveals a value's type, and coercion can silently convert types

---

## Try It Yourself

Declare a `const` for your name, a `let` for your current mood, and a `let` for your age. Log the `typeof` each one.

---

## Today's Project: Personal Bio Card

Store information about yourself in well named variables of different types, then print a formatted bio card to the console.

**[Open the Day 02 project brief →](../../projects/day-02-personal-bio-card/README.md)**

---

## Navigation

[← Day 01: Introduction and Setup](../day-01-introduction-and-setup/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 03: Operators and Expressions →](../day-03-operators-and-expressions/README.md)
