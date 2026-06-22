[← Back to Course Home](../../README.md)

# Day 20: Error Handling

> Learn JavaScript error handling with try catch finally, throwing custom errors, and writing defensive code.

**Day 20 of 30** &nbsp;|&nbsp; Stage: Modern JavaScript &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Handle runtime errors with try, catch, and finally
- Throw custom errors with meaningful messages
- Understand common built in error types
- Write defensive functions that fail predictably

---

## Why Error Handling Matters

Real programs encounter unexpected situations: invalid input, missing data, failed network requests. Error handling lets your program respond gracefully instead of crashing.

## try, catch, and finally

```js
try {
  const result = 10 / 0;
  console.log(result); // Infinity, this specific case does not throw
  JSON.parse("{ invalid json }"); // this will throw
} catch (error) {
  console.log("Something went wrong:", error.message);
} finally {
  console.log("This always runs, whether an error occurred or not.");
}
```

## Throwing Your Own Errors

```js
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient funds.");
  }
  return balance - amount;
}

try {
  console.log(withdraw(100, 150));
} catch (error) {
  console.log("Transaction failed:", error.message);
}
```

## Common Built In Error Types

| Error Type | Typical Cause |
|---|---|
| `Error` | Generic, base error type |
| `TypeError` | Using a value of the wrong type, such as calling a non function |
| `RangeError` | A number is outside an allowed range |
| `SyntaxError` | Invalid code structure, often from `JSON.parse()` |
| `ReferenceError` | Using a variable that does not exist |

```js
try {
  null.someMethod();
} catch (error) {
  console.log(error.name);    // "TypeError"
  console.log(error.message); // "Cannot read properties of null (reading 'someMethod')"
}
```

## Catching Specific Conditions

```js
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new RangeError("Cannot divide by zero.");
    }
    return a / b;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return null;
  }
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // logs RangeError message, returns null
```

## Defensive Functions Without try/catch

Not every situation needs a `try`/`catch`. Often, checking conditions before they cause a problem is clearer.

```js
function getFirstLetter(text) {
  if (typeof text !== "string" || text.length === 0) {
    return null;
  }
  return text[0];
}

console.log(getFirstLetter("Hello")); // "H"
console.log(getFirstLetter(""));      // null
console.log(getFirstLetter(42));      // null
```

---

## Best Practice

> Use `try`/`catch` for operations that can genuinely fail unpredictably, such as parsing JSON or network requests, and use simple validation checks for predictable situations, such as checking a parameter's type before using it. Always include a clear, specific message when throwing an error, since you or another developer will read that message later while debugging.

---

## Quick Recap

- `try`/`catch`/`finally` handles runtime errors without crashing the program
- `throw new Error("message")` raises a custom error with a helpful message
- Built in error types like `TypeError` and `RangeError` describe specific failure categories
- Simple validation checks are often clearer than `try`/`catch` for predictable input problems

---

## Try It Yourself

Write a function `parseJSONSafely(text)` that uses try/catch to return the parsed object, or null if the text is invalid JSON.

---

## Today's Project: Safe Calculator

Build a calculator that handles invalid input and division by zero gracefully using proper error handling.

**[Open the Day 20 project brief →](../../projects/day-20-safe-calculator/README.md)**

---

## Navigation

[← Day 19: Higher Order Functions](../day-19-higher-order-functions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 21: Asynchronous JavaScript Basics →](../day-21-asynchronous-javascript-basics/README.md)
