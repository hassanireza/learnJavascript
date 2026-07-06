[← Back to Course Home](../../README.md)

# Day 18: Spread, Rest, and Default Parameters

> Learn JavaScript spread syntax, rest parameters, and default parameters with practical, correct examples.

**Day 18 of 30** &nbsp;|&nbsp; Stage: Modern JavaScript &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Copy and merge arrays and objects with spread syntax
- Collect function arguments with rest parameters
- Combine default, rest, and spread patterns confidently

---

## Spread Syntax with Arrays

The spread operator (`...`) expands an array's items.

```js
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // [1, 2, 3, 4, 5]

const copy = [...numbers]; // a true copy, not a reference
copy.push(99);
console.log(numbers); // [1, 2, 3], unaffected
console.log(copy);    // [1, 2, 3, 99]
```

## Spread Syntax with Objects

```js
const user = { name: "Iris", age: 30 };
const updatedUser = { ...user, age: 31 }; // later properties override earlier ones
console.log(updatedUser); // { name: "Iris", age: 31 }

const merged = { ...{ a: 1 }, ...{ b: 2 } };
console.log(merged); // { a: 1, b: 2 }
```

## Spread in Function Calls

```js
function sum(a, b, c) {
  return a + b + c;
}

const values = [1, 2, 3];
console.log(sum(...values)); // 6
```

## Rest Parameters

Rest parameters collect any number of arguments into a single array, useful when a function should accept a flexible number of inputs.

```js
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2));       // 3
console.log(sumAll(1, 2, 3, 4)); // 10
```

Rest parameters must be the last parameter in a function definition.

```js
function logFirstAndRest(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}

logFirstAndRest(1, 2, 3, 4);
// First: 1
// Rest: [2, 3, 4]
```

## Default Parameters Revisited

```js
function createUser(name, role = "member") {
  return { name, role };
}

console.log(createUser("Theo"));            // { name: "Theo", role: "member" }
console.log(createUser("Theo", "admin"));   // { name: "Theo", role: "admin" }
```

## Combining All Three

```js
function buildProfile(name, { age = 18, country = "Unknown" } = {}, ...hobbies) {
  return { name, age, country, hobbies };
}

console.log(buildProfile("Nadia", { age: 22, country: "Brazil" }, "chess", "painting"));
// { name: "Nadia", age: 22, country: "Brazil", hobbies: ["chess", "painting"] }
```

---

## Best Practice

> Use spread syntax to copy arrays and objects instead of mutating the original, which keeps your data predictable, especially when working with the data driven rendering pattern from Day 15. Use rest parameters instead of the older `arguments` object when a function needs to accept a variable number of arguments.

---

## Quick Recap

- Spread syntax (`...`) expands arrays or objects into individual items or properties
- Spread creates shallow copies, useful for avoiding accidental mutation
- Rest parameters (`...args`) collect multiple arguments into a single array
- Default, rest, and spread patterns combine cleanly in real function signatures

---

## Try It Yourself

Write a function `combineLists(...lists)` that accepts any number of arrays and returns one merged array using spread syntax.

---

## Today's Project: Mini Utility Library

Build a small library of reusable helper functions using spread syntax, rest parameters, and default values.

**[Open the Day 18 project brief →](../../projects/day-18-mini-utility-library/README.md)**

---

## Navigation

[← Day 17: ES6+ Syntax](../day-17-es6-plus-syntax/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 19: Higher Order Functions →](../day-19-higher-order-functions/README.md)
