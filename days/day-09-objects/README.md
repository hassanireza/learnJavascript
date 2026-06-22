[← Back to Course Home](../../README.md)

# Day 09: Objects

> Learn JavaScript objects, including creation, dot and bracket notation, nested objects, and destructuring.

**Day 9 of 30** &nbsp;|&nbsp; Stage: Data Structures &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Create objects using object literal syntax
- Access and update properties with dot and bracket notation
- Work with nested objects
- Destructure objects into variables

---

## Creating Objects

An object stores related data as key-value pairs.

```js
const person = {
  name: "Sofia",
  age: 28,
  isStudent: false,
};

console.log(person); // { name: "Sofia", age: 28, isStudent: false }
```

## Accessing Properties

```js
console.log(person.name);     // "Sofia", dot notation
console.log(person["age"]);   // 28, bracket notation
```

Use bracket notation when the key is stored in a variable, or contains characters that are not valid in dot notation.

```js
const key = "age";
console.log(person[key]); // 28
```

## Updating and Adding Properties

```js
person.age = 29;          // update an existing property
person.city = "Porto";    // add a new property
console.log(person); // { name: "Sofia", age: 29, isStudent: false, city: "Porto" }
```

## Deleting Properties

```js
delete person.isStudent;
console.log(person); // { name: "Sofia", age: 29, city: "Porto" }
```

## Nested Objects

```js
const user = {
  name: "Diego",
  address: {
    city: "Madrid",
    zip: "28013",
  },
};

console.log(user.address.city); // "Madrid"
```

## Objects Containing Arrays, and Arrays Containing Objects

```js
const blogPost = {
  title: "Learning JavaScript",
  tags: ["javascript", "beginner", "tutorial"],
};

console.log(blogPost.tags[0]); // "javascript"

const users = [
  { name: "Ana" },
  { name: "Beto" },
];

console.log(users[1].name); // "Beto"
```

## Destructuring Objects

Destructuring extracts properties into standalone variables, which makes code shorter and easier to read.

```js
const product = { name: "Laptop", price: 999, brand: "TechCo" };

const { name, price } = product;
console.log(name);  // "Laptop"
console.log(price); // 999

// Renaming while destructuring:
const { name: productName } = product;
console.log(productName); // "Laptop"
```

## Checking If a Key Exists

```js
const car = { brand: "Toyota" };

console.log("brand" in car);  // true
console.log("model" in car);  // false
console.log(car.model);       // undefined
```

---

## Best Practice

> Use destructuring when you only need a few properties from an object, it keeps function signatures and code blocks clean. Use the `in` operator or `Object.hasOwn()` to safely check for a property before assuming it exists, rather than relying on `undefined` checks alone.

---

## Quick Recap

- Objects store related data as key-value pairs
- Dot notation is preferred, bracket notation is needed for dynamic or special keys
- Objects can be nested inside other objects and arrays, and vice versa
- Destructuring extracts object properties into clean, named variables

---

## Try It Yourself

Create an object representing a book with title, author, and year. Destructure title and author into variables and log a sentence using them.

---

## Today's Project: Contact Book

Build a contact book that stores contacts as objects inside an array, supporting search and updates.

**[Open the Day 09 project brief →](../../projects/day-09-contact-book/README.md)**

---

## Navigation

[← Day 08: Array Methods](../day-08-array-methods/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 10: Object Methods and this →](../day-10-object-methods-and-this/README.md)
