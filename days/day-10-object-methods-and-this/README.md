[← Back to Course Home](../../README.md)

# Day 10: Object Methods and this

> Learn how to add methods to JavaScript objects and understand how the this keyword behaves in different contexts.

**Day 10 of 30** &nbsp;|&nbsp; Stage: Data Structures &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Add functions as object methods
- Understand how the this keyword behaves inside methods
- Use Object.keys(), Object.values(), and Object.entries()
- Recognize how arrow functions handle this differently

---

## Methods Are Functions Stored on Objects

```js
const calculator = {
  value: 0,
  add(amount) {
    this.value += amount;
    return this.value;
  },
};

console.log(calculator.add(5));  // 5
console.log(calculator.add(10)); // 15
```

## Understanding this

Inside a regular method, `this` refers to the object the method was called on.

```js
const person = {
  name: "Lucia",
  greet() {
    return `Hi, I am ${this.name}`;
  },
};

console.log(person.greet()); // "Hi, I am Lucia"
```

### A Common Pitfall

If you copy a method out of its object, `this` loses its connection.

```js
const greetFn = person.greet;
// console.log(greetFn()); // "Hi, I am undefined" in strict contexts, or an error
```

This happens because `this` depends on **how a function is called**, not where it was defined.

### Arrow Functions and this

Arrow functions do not have their own `this`, they use `this` from the surrounding scope where they were defined. This makes them unsuitable as object methods that rely on `this`.

```js
const counter = {
  count: 0,
  increment: function () {
    this.count++; // works, regular function gets its own `this`
  },
  incrementArrow: () => {
    // `this` here does NOT refer to `counter`
    // this.count++; would not work as expected
  },
};

counter.increment();
console.log(counter.count); // 1
```

## Object.keys(), Object.values(), Object.entries()

```js
const car = { brand: "Honda", model: "Civic", year: 2022 };

console.log(Object.keys(car));   // ["brand", "model", "year"]
console.log(Object.values(car)); // ["Honda", "Civic", 2022]
console.log(Object.entries(car));
// [["brand", "Honda"], ["model", "Civic"], ["year", 2022]]

Object.entries(car).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

## Copying Objects

```js
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // spread syntax, covered fully on Day 18
console.log(copy); // { a: 1, b: 2, c: 3 }
console.log(original); // unchanged: { a: 1, b: 2 }
```

---

## Best Practice

> Use regular function syntax (`methodName() {}`) for object methods that rely on `this`, and reserve arrow functions for callbacks or cases where you intentionally want to inherit `this` from the surrounding scope.

---

## Quick Recap

- Methods are functions stored as object properties
- `this` inside a regular method refers to the object it was called on
- Arrow functions do not bind their own `this`, which can cause bugs if used as object methods
- `Object.keys()`, `Object.values()`, and `Object.entries()` let you iterate over an object's data

---

## Try It Yourself

Create an object `wallet` with a `balance` and methods `deposit(amount)` and `withdraw(amount)` that update the balance using `this`.

---

## Today's Project: Bank Account Simulator

Simulate a simple bank account object with deposit, withdraw, and transaction history methods.

**[Open the Day 10 project brief →](../../projects/day-10-bank-account-simulator/README.md)**

---

## Navigation

[← Day 09: Objects](../day-09-objects/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 11: Strings in Depth →](../day-11-strings-in-depth/README.md)
