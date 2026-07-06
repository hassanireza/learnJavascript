[← Back to Course Home](../../README.md)

# Day 21: Asynchronous JavaScript Basics

> Understand asynchronous JavaScript, the event loop, setTimeout, and callbacks with clear, practical examples.

**Day 21 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Understand the difference between synchronous and asynchronous code
- Use setTimeout and setInterval
- Understand callbacks and callback based asynchronous patterns
- Get an intuitive understanding of the event loop

---

## Synchronous vs Asynchronous

Synchronous code runs line by line, each line waiting for the previous one to finish.

```js
console.log("First");
console.log("Second");
console.log("Third");
// Always prints: First, Second, Third
```

Asynchronous code lets slow operations, such as timers or network requests, run in the background without blocking the rest of the program.

```js
console.log("First");

setTimeout(() => {
  console.log("Second (after 2 seconds)");
}, 2000);

console.log("Third");

// Prints: First, Third, Second (after 2 seconds)
```

Notice that `"Third"` prints before `"Second"`, even though `setTimeout` appears earlier in the code. JavaScript does not wait for the timer, it continues running the rest of the script immediately.

## setTimeout and setInterval

```js
setTimeout(() => {
  console.log("Runs once, after 1 second");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId); // stop the interval after 5 seconds
  console.log("Interval stopped");
}, 5000);
```

## What Is a Callback?

A callback is a function passed into another function, to be called later, often once an asynchronous operation completes.

```js
function fetchUserData(callback) {
  setTimeout(() => {
    const user = { name: "Sora", age: 27 };
    callback(user);
  }, 1000);
}

fetchUserData((user) => {
  console.log("User loaded:", user);
});
```

## Callback Hell

Nesting many callbacks creates code that is hard to read, sometimes called "callback hell."

```js
fetchUserData((user) => {
  fetchUserPosts(user.id, (posts) => {
    fetchPostComments(posts[0].id, (comments) => {
      console.log(comments);
      // deeply nested, hard to follow
    });
  });
});
```

This problem is exactly what Promises, covered on Day 22, were designed to solve.

## A Mental Model for the Event Loop

JavaScript runs on a single thread, meaning it can only do one thing at a time. Asynchronous operations like `setTimeout` are handed off to the browser (or Node.js), which notifies JavaScript once they are ready, placing the related callback into a queue. JavaScript finishes whatever it is currently doing, then picks up queued callbacks one at a time. This is why `"Third"` printed before the delayed `"Second"` above: the synchronous code always finishes first.

---

## Best Practice

> Avoid deeply nesting callbacks. If you find yourself nesting more than two callbacks, it is a strong signal to refactor using Promises or async/await, both covered in the next two lessons, which produce far more readable asynchronous code.

---

## Quick Recap

- Synchronous code runs in strict order, asynchronous code does not block execution while waiting
- `setTimeout()` delays code, `setInterval()` repeats it on a schedule
- A callback is a function passed in to be called later, often when an async task finishes
- Deeply nested callbacks are hard to read, a problem Promises solve

---

## Try It Yourself

Write a function `delayedGreeting(name, callback)` that waits 1 second using setTimeout, then calls callback with the message "Hello, {name}!".

---

## Today's Project: Simulated Loading Sequence

Simulate a multi-step loading sequence using setTimeout and callbacks, updating the page at each stage.

**[Open the Day 21 project brief →](../../projects/day-21-simulated-loading-sequence/README.md)**

---

## Navigation

[← Day 20: Error Handling](../day-20-error-handling/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 22: Promises →](../day-22-promises/README.md)
