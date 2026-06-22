[← Back to Course Home](../../README.md)

# Day 23: Async and Await

> Learn JavaScript async and await syntax, including error handling with try catch, to write clean asynchronous code.

**Day 23 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Write asynchronous code using async and await
- Handle errors in async functions with try/catch
- Run multiple awaited operations efficiently
- Understand how async/await relates to Promises

---

## What async/await Really Is

`async`/`await` is syntax built on top of Promises that lets asynchronous code read almost like synchronous code, which is significantly easier to follow.

```js
function getUser() {
  return Promise.resolve({ name: "Iris", age: 24 });
}

async function showUser() {
  const user = await getUser(); // pauses here until the Promise resolves
  console.log(user);
}

showUser();
```

An `async` function always returns a Promise, even if you return a plain value inside it.

```js
async function getNumber() {
  return 42;
}

getNumber().then((value) => console.log(value)); // 42
```

## Error Handling with try/catch

```js
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Access granted.");
    } else {
      reject(new Error("Access denied."));
    }
  });
}

async function verifyUser(age) {
  try {
    const message = await checkAge(age);
    console.log(message);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

verifyUser(20); // "Access granted."
verifyUser(15); // "Error: Access denied."
```

## Awaiting Multiple Operations in Sequence

```js
async function loadDashboard() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
  console.log({ user, posts, comments });
}
```

Each `await` waits for the previous one to finish, which is correct when one step depends on the result of the one before it.

## Running Independent Operations in Parallel

When steps do not depend on each other, awaiting them one by one wastes time. Use `Promise.all()` together with `await` instead.

```js
async function loadAllData() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments(),
  ]);
  console.log(users, posts, comments);
}
```

## A Side by Side Comparison

```js
// Promise chain style
function loadUserPromiseStyle() {
  return fetchUser()
    .then((user) => fetchPosts(user.id))
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error.message));
}

// async/await style, same behavior
async function loadUserAsyncStyle() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    console.log(posts);
  } catch (error) {
    console.log(error.message);
  }
}
```

---

## Best Practice

> Use `async`/`await` for new code, since it reads more clearly than chained `.then()` calls, but remember it is built directly on Promises, so understanding Promises (Day 22) is essential, not optional. Always wrap `await` calls in `try`/`catch` when failure is possible.

---

## Quick Recap

- `await` pauses an async function until a Promise resolves or rejects
- An `async` function always returns a Promise
- `try`/`catch` handles errors from awaited operations cleanly
- Independent async operations should run together with `Promise.all()`, not awaited one by one

---

## Try It Yourself

Rewrite the rollDice() Promise from Day 22's exercise using an async function with await and a try/catch block.

---

## Today's Project: Quote Generator

Build a quote generator that simulates an async data source using async/await and proper error handling.

**[Open the Day 23 project brief →](../../projects/day-23-quote-generator/README.md)**

---

## Navigation

[← Day 22: Promises](../day-22-promises/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 24: Fetch API and JSON →](../day-24-fetch-api-and-json/README.md)
