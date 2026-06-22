[← Back to Course Home](../../README.md)

# Day 17: ES6+ Syntax

> Learn the most important modern JavaScript ES6+ features, including destructuring, template literals, and let and const.

**Day 17 of 30** &nbsp;|&nbsp; Stage: Modern JavaScript &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Review and deepen array and object destructuring
- Use shorthand object property syntax
- Use optional chaining and nullish coalescing
- Recognize commonly used modern syntax in real codebases

---

## Why ES6+ Matters

ECMAScript 2015, commonly called ES6, and the yearly versions since then, introduced syntax that is now standard in almost every JavaScript codebase. By this point in the course you have already used several ES6+ features, including `let`/`const`, arrow functions, and template literals. Today brings the remaining essentials together.

## Array Destructuring

```js
const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first);  // "red"
console.log(second); // "green"

const [, , third] = colors; // skip items with empty commas
console.log(third); // "blue"
```

## Object Property Shorthand

```js
const name = "Lina";
const age = 24;

// Old way:
const person1 = { name: name, age: age };

// Shorthand:
const person2 = { name, age };

console.log(person2); // { name: "Lina", age: 24 }
```

## Shorthand Method Syntax

```js
const calculator = {
  add(a, b) {
    return a + b;
  },
};
```

## Optional Chaining (?.)

Optional chaining safely accesses nested properties without throwing an error if something along the way is missing.

```js
const user = { profile: { name: "Theo" } };

console.log(user.profile?.name);    // "Theo"
console.log(user.address?.city);    // undefined, no error thrown
// console.log(user.address.city);  // TypeError without optional chaining
```

## Nullish Coalescing (??)

`??` provides a fallback only when the value is `null` or `undefined`, unlike `||`, which also treats `0`, `""`, and `false` as missing.

```js
const settings = { volume: 0 };

console.log(settings.volume || 50); // 50, wrong! 0 is treated as falsy
console.log(settings.volume ?? 50); // 0, correct, 0 is a valid value
```

## Combining Both

```js
const config = {};
const port = config.server?.port ?? 3000;
console.log(port); // 3000
```

## Computed Property Names

```js
const key = "favoriteColor";
const preferences = {
  [key]: "blue",
};

console.log(preferences); // { favoriteColor: "blue" }
```

---

## Best Practice

> Use optional chaining (`?.`) when accessing properties that might not exist, and nullish coalescing (`??`) when providing fallback values, since it correctly distinguishes between an intentionally falsy value like `0` and a genuinely missing one.

---

## Quick Recap

- Array and object destructuring extract values into clean, named variables
- Object shorthand syntax reduces repetition when keys and variables share a name
- Optional chaining (`?.`) avoids errors when accessing nested, possibly missing properties
- Nullish coalescing (`??`) provides fallbacks only for `null`/`undefined`, not all falsy values

---

## Try It Yourself

Given `const config = { theme: { mode: "dark" } };`, use optional chaining to safely read `config.theme.fontSize`, falling back to `16` with nullish coalescing.

---

## Today's Project: Recipe Card Renderer

Render recipe data into HTML cards using destructuring, shorthand syntax, and safe property access.

**[Open the Day 17 project brief →](../../projects/day-17-recipe-card-renderer/README.md)**

---

## Navigation

[← Day 16: Scope and Closures](../day-16-scope-and-closures/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 18: Spread, Rest, and Default Parameters →](../day-18-spread-rest-and-default-parameters/README.md)
