[← Back to Course Home](../../README.md)

# Day 16: Scope and Closures

> Understand JavaScript scope, block scope, and closures with clear examples that explain how and why they work.

**Day 16 of 30** &nbsp;|&nbsp; Stage: Modern JavaScript &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Understand global, function, and block scope
- Understand how closures work and why they are useful
- Build private state using closures
- Avoid common scope related bugs

---

## What Is Scope?

Scope determines where a variable is accessible in your code.

```js
const globalVariable = "I am global";

function showScope() {
  const localVariable = "I am local";
  console.log(globalVariable); // accessible, defined outside but visible inside
  console.log(localVariable);  // accessible, defined in this function
}

showScope();
// console.log(localVariable); // ReferenceError: not defined outside the function
```

## Block Scope with let and const

`let` and `const` are scoped to the nearest enclosing block (`{}`), such as an `if` statement or a loop.

```js
if (true) {
  const blockScoped = "Only available inside this block";
  console.log(blockScoped);
}
// console.log(blockScoped); // ReferenceError
```

## What Is a Closure?

A closure happens when a function "remembers" the variables from the scope where it was created, even after that outer function has finished running.

```js
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("Maria")); // "Hello, Maria!"
console.log(sayHi("Diego"));    // "Hi, Diego!"
```

`sayHello` keeps access to `greeting` from `createGreeter`, even though `createGreeter` already finished executing. This is a closure.

## Using Closures for Private State

Closures are commonly used to create private variables that cannot be accessed directly from outside.

```js
function createCounter() {
  let count = 0; // private, not accessible from outside

  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.reset());     // 0
// console.log(counter.count);    // undefined, count is private
```

## A Common Closure Bug

```js
const functions = [];

for (let i = 0; i < 3; i++) {
  functions.push(() => console.log(i));
}

functions.forEach(fn => fn()); // 0, 1, 2, as expected with `let`
```

If `var` were used instead of `let` in the loop above, every function would log `3`, because `var` is not block scoped and all three functions would share the same variable. This is one of the clearest reasons to avoid `var`.

---

## Best Practice

> Use closures intentionally to create private state, for example inside factory functions, rather than relying on global variables that any part of your program could accidentally modify. Always use `let` or `const` in loops that create functions, to avoid the classic shared variable bug shown above.

---

## Quick Recap

- Scope controls where a variable can be accessed
- `let`/`const` are block scoped, `var` is function scoped
- A closure is a function that remembers variables from its creation scope
- Closures enable private state, a common and powerful JavaScript pattern

---

## Try It Yourself

Write a function `createMultiplier(factor)` that returns a new function which multiplies any number passed to it by `factor`.

---

## Today's Project: Counter Factory

Build a counter factory function that creates independent counters, each with private state powered by closures.

**[Open the Day 16 project brief →](../../projects/day-16-counter-factory/README.md)**

---

## Navigation

[← Day 15: Building a To-Do App](../day-15-building-a-todo-app/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 17: ES6+ Syntax →](../day-17-es6-plus-syntax/README.md)
