[← Back to Course Home](../../README.md)

# Day 05: Loops and Iteration

> Learn JavaScript for, while, and do while loops, plus break and continue, with clear practical examples.

**Day 5 of 30** &nbsp;|&nbsp; Stage: JavaScript Fundamentals &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Repeat code using for loops
- Repeat code using while and do while loops
- Control loops with break and continue
- Avoid common infinite loop mistakes

---

## The for Loop

A `for` loop repeats code a known number of times.

```js
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
```

The three parts of a `for` loop are:

1. **Initialization**: `let i = 1`, runs once at the start.
2. **Condition**: `i <= 5`, checked before every loop, and the loop stops once it is false.
3. **Update**: `i++`, runs at the end of every loop.

## The while Loop

A `while` loop repeats code as long as a condition stays true, useful when you do not know the exact number of repetitions in advance.

```js
let count = 0;

while (count < 3) {
  console.log(`Iteration ${count}`);
  count++;
}
```

## The do while Loop

A `do while` loop always runs its block at least once before checking the condition.

```js
let attempts = 0;

do {
  console.log(`Attempt number ${attempts + 1}`);
  attempts++;
} while (attempts < 3);
```

## break and continue

`break` exits a loop completely, and `continue` skips to the next iteration without exiting.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // stop the loop entirely once i reaches 5
  }
  console.log(i); // prints 1, 2, 3, 4
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(i); // prints 1, 3, 5
}
```

## Looping Over Arrays

```js
const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// A cleaner alternative for arrays:
for (const color of colors) {
  console.log(color);
}
```

## Avoiding Infinite Loops

An infinite loop happens when the condition never becomes false. Always confirm your loop variable changes correctly inside the loop.

```js
// Dangerous: i never increases, this never stops
// for (let i = 0; i < 5;) {
//   console.log(i);
// }

// Correct: i increases every iteration
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## Best Practice

> Prefer `for...of` when looping over array values, since it is more readable than managing an index manually. Reserve the classic `for` loop for cases where you specifically need the index or a custom step.

---

## Quick Recap

- `for` loops are ideal when the number of iterations is known
- `while` and `do while` loops repeat based on a condition rather than a count
- `break` exits a loop entirely, `continue` skips to the next iteration
- `for...of` is the cleanest way to loop over array values

---

## Try It Yourself

Use a for loop to print every number from 1 to 20 that is divisible by 3.

---

## Today's Project: Multiplication Table Generator

Build a script that prints a formatted multiplication table for any number using nested loops.

**[Open the Day 05 project brief →](../../projects/day-05-multiplication-table-generator/README.md)**

---

## Navigation

[← Day 04: Conditional Statements](../day-04-conditional-statements/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 06: Functions →](../day-06-functions/README.md)
