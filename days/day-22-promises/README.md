[← Back to Course Home](../../README.md)

# Day 22: Promises

> Learn JavaScript Promises in depth, including then, catch, finally, and Promise.all, with correct examples.

**Day 22 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Understand what a Promise represents
- Consume Promises with then, catch, and finally
- Create your own Promises
- Run multiple Promises together with Promise.all

---

## What Is a Promise?

A Promise represents a value that may not be available yet, but will be at some point, either successfully (**resolved**) or unsuccessfully (**rejected**). Promises solve the nested callback problem from Day 21.

## Consuming a Promise

```js
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Mateo", age: 29 });
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log("User loaded:", user);
  })
  .catch((error) => {
    console.log("Something went wrong:", error.message);
  })
  .finally(() => {
    console.log("Done, whether it succeeded or failed.");
  });
```

## Creating Your Own Promise

A Promise constructor takes a function with `resolve` and `reject` parameters.

```js
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Access granted.");
    } else {
      reject(new Error("Access denied, must be 18 or older."));
    }
  });
}

checkAge(20)
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));

checkAge(15)
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
```

## Chaining Promises

Returning a value or another Promise inside `.then()` lets you chain steps cleanly, avoiding the nested structure from callback based code.

```js
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Sora" });
}

function fetchPosts(userId) {
  return Promise.resolve([`Post 1 by user ${userId}`, `Post 2 by user ${userId}`]);
}

fetchUser()
  .then((user) => fetchPosts(user.id))
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error.message));
```

## Promise.all(): Running Tasks in Parallel

`Promise.all()` waits for every Promise in an array to resolve, and rejects immediately if any one of them rejects.

```js
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results); // [10, 20, 30]
});
```

## Promise.race() and Promise.allSettled()

```js
// Resolves or rejects as soon as the first Promise finishes
Promise.race([promise1, promise2]).then((first) => console.log(first));

// Waits for all Promises, regardless of success or failure
Promise.allSettled([promise1, Promise.reject("failed")]).then((results) => {
  console.log(results);
  // [{status: "fulfilled", value: 10}, {status: "rejected", reason: "failed"}]
});
```

---

## Best Practice

> Always include a `.catch()` at the end of a Promise chain to handle errors. Use `Promise.all()` when multiple independent asynchronous tasks can run at the same time, rather than awaiting them one after another, which wastes time unnecessarily.

---

## Quick Recap

- A Promise represents a future value that resolves successfully or rejects with an error
- `.then()` handles success, `.catch()` handles failure, `.finally()` always runs
- `new Promise((resolve, reject) => {...})` creates a custom Promise
- `Promise.all()` runs multiple Promises in parallel and waits for all of them

---

## Try It Yourself

Write a function rollDice() that returns a Promise resolving with a random number from 1 to 6 after a half second delay, and log the result with .then().

---

## Today's Project: Random User Card Generator

Build a card generator that simulates fetching random user data through Promises and displays it on the page.

**[Open the Day 22 project brief →](../../projects/day-22-random-user-card-generator/README.md)**

---

## Navigation

[← Day 21: Asynchronous JavaScript Basics](../day-21-asynchronous-javascript-basics/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 23: Async and Await →](../day-23-async-and-await/README.md)
