[← Back to Course Home](../../README.md)

# Day 04: Conditional Statements

> Learn JavaScript if, else if, else, and switch statements to control program flow with correct examples.

**Day 4 of 30** &nbsp;|&nbsp; Stage: JavaScript Fundamentals &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Control program flow using if, else if, and else
- Use the switch statement for multiple fixed conditions
- Understand truthy and falsy values
- Combine conditions using logical operators

---

## The if Statement

```js
const temperature = 30;

if (temperature > 25) {
  console.log("It is hot today.");
}
```

## if / else

```js
const age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote yet.");
}
```

## if / else if / else

```js
const score = 72;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

Conditions are checked top to bottom, and only the first matching block runs.

## Truthy and Falsy Values

Every value in JavaScript is either truthy or falsy when used in a condition. There are exactly six falsy values, everything else is truthy.

| Falsy Values | Truthy Examples |
|---|---|
| `false` | `true` |
| `0` | any non-zero number |
| `""` (empty string) | `"hello"` |
| `null` | `{}` |
| `undefined` | `[]` |
| `NaN` | `"0"` (a non-empty string) |

```js
const username = "";

if (username) {
  console.log(`Welcome, ${username}`);
} else {
  console.log("Username is required.");
}
```

## Combining Conditions

```js
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You are allowed to drive.");
}
```

## The switch Statement

`switch` is useful when comparing one value against several fixed possibilities.

```js
const day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek grind.");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("It must be the weekend.");
}
```

The `break` keyword stops the switch from falling through to the next case. Forgetting it is a common bug, so always include it unless you intentionally want fallthrough, as shown with `"Wednesday"` and `"Thursday"` sharing the `"Tuesday"` block above.

---

## Best Practice

> Keep conditions simple and readable. If an if/else chain grows beyond four or five branches based on a single value, consider a `switch` statement or a lookup object instead, both of which are often easier to read and maintain.

---

## Quick Recap

- `if`, `else if`, and `else` control which block of code runs
- Exactly six values are falsy: `false`, `0`, `""`, `null`, `undefined`, and `NaN`
- Logical operators combine multiple conditions
- `switch` compares one value against several fixed cases, and needs `break` to avoid fallthrough

---

## Try It Yourself

Write a conditional that prints "Weekday" for Monday through Friday and "Weekend" for Saturday and Sunday, using a switch statement.

---

## Today's Project: Grade Calculator

Build a script that converts a numeric exam score into a letter grade and a short feedback message.

**[Open the Day 04 project brief →](../../projects/day-04-grade-calculator/README.md)**

---

## Navigation

[← Day 03: Operators and Expressions](../day-03-operators-and-expressions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 05: Loops and Iteration →](../day-05-loops-and-iteration/README.md)
