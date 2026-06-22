[← Back to Course Home](../../README.md)

# Day 03: Operators and Expressions

> Learn JavaScript arithmetic, comparison, logical, and assignment operators with correct, tested code examples.

**Day 3 of 30** &nbsp;|&nbsp; Stage: JavaScript Fundamentals &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Use arithmetic operators to perform calculations
- Compare values with comparison operators
- Combine conditions with logical operators
- Use assignment and compound assignment operators
- Understand operator precedence

---

## Arithmetic Operators

```js
const a = 10;
const b = 3;

console.log(a + b); // 13, addition
console.log(a - b); // 7,  subtraction
console.log(a * b); // 30, multiplication
console.log(a / b); // 3.3333333333333335, division
console.log(a % b); // 1,  remainder (modulo)
console.log(a ** b); // 1000, exponentiation
```

## Increment and Decrement

```js
let count = 5;
count++; // same as count = count + 1
console.log(count); // 6

count--; // same as count = count - 1
console.log(count); // 5
```

## Comparison Operators

Comparison operators return a boolean (`true` or `false`).

```js
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 4);  // false
console.log(5 == "5");  // true,  loose equality, coerces types
console.log(5 === "5"); // false, strict equality, no coercion
console.log(5 !== "5"); // true
```

### Always Prefer Strict Equality

`==` and `!=` coerce types before comparing, which can cause unexpected results. `===` and `!==` compare both value and type, which is predictable.

```js
console.log(0 == false);   // true,  surprising
console.log(0 === false);  // false, clear and correct
console.log("" == false);  // true,  surprising
console.log(null == undefined); // true
console.log(null === undefined); // false
```

## Logical Operators

```js
const isAdult = true;
const hasTicket = false;

console.log(isAdult && hasTicket); // false, AND: both must be true
console.log(isAdult || hasTicket); // true,  OR: at least one must be true
console.log(!isAdult);             // false, NOT: flips the boolean
```

## Assignment Operators

```js
let total = 10;
total += 5;  // total = total + 5  -> 15
total -= 3;  // total = total - 3  -> 12
total *= 2;  // total = total * 2  -> 24
total /= 4;  // total = total / 4  -> 6
console.log(total); // 6
```

## Operator Precedence

Like in mathematics, some operators run before others. Multiplication and division run before addition and subtraction. Use parentheses to make order explicit and your code easier to read.

```js
console.log(2 + 3 * 4);   // 14, multiplication first
console.log((2 + 3) * 4); // 20, parentheses first
```

## The Ternary Operator

A compact way to write a simple if/else as an expression.

```js
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"
```

---

## Best Practice

> Always use `===` and `!==` instead of `==` and `!=` to avoid unpredictable type coercion. Use parentheses to make operator precedence explicit, even when not strictly required, because it improves readability for anyone reading your code later.

---

## Quick Recap

- Arithmetic operators perform calculations: `+ - * / % **`
- Comparison operators return booleans, and `===`/`!==` are strict and safe
- Logical operators (`&& || !`) combine or invert boolean values
- Compound assignment operators shorten common update patterns
- The ternary operator (`condition ? a : b`) is a compact if/else expression

---

## Try It Yourself

Calculate the area of a rectangle with width 12 and height 5, then use a ternary operator to print "large" if the area is greater than 50, otherwise "small".

---

## Today's Project: Simple Calculator

Build a console based calculator that performs addition, subtraction, multiplication, division, and modulo on two numbers.

**[Open the Day 03 project brief →](../../projects/day-03-simple-calculator/README.md)**

---

## Navigation

[← Day 02: Variables and Data Types](../day-02-variables-and-data-types/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 04: Conditional Statements →](../day-04-conditional-statements/README.md)
