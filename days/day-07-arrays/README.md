[← Back to Course Home](../../README.md)

# Day 07: Arrays

> Learn JavaScript arrays from scratch, including creation, indexing, length, and the most common built in methods.

**Day 7 of 30** &nbsp;|&nbsp; Stage: Data Structures &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Create and access arrays
- Understand zero based indexing
- Add and remove items with push, pop, shift, and unshift
- Loop over arrays with for...of and forEach

---

## Creating Arrays

An array stores an ordered list of values.

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits); // ["apple", "banana", "cherry"]
console.log(fruits.length); // 3
```

## Zero Based Indexing

The first item is at index `0`, not `1`.

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[fruits.length - 1]); // "cherry", the last item
console.log(fruits[5]); // undefined, index does not exist
```

## Modifying Arrays

```js
const fruits = ["apple", "banana"];

fruits.push("cherry");   // adds to the end
console.log(fruits); // ["apple", "banana", "cherry"]

fruits.unshift("mango"); // adds to the beginning
console.log(fruits); // ["mango", "apple", "banana", "cherry"]

fruits.pop();    // removes the last item
fruits.shift();  // removes the first item
console.log(fruits); // ["apple", "banana"]
```

## Checking for a Value

```js
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana")); // true
console.log(fruits.indexOf("cherry"));  // 2
console.log(fruits.indexOf("kiwi"));    // -1, not found
```

## Looping Over Arrays

```js
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

## Arrays Can Hold Any Type

```js
const mixed = ["text", 42, true, null, [1, 2, 3]];
console.log(mixed[4]); // [1, 2, 3], an array inside an array
```

## Arrays Are Objects

`typeof` an array returns `"object"`. Use `Array.isArray()` to reliably check if a value is an array.

```js
console.log(typeof [1, 2, 3]);     // "object"
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false
```

---

## Best Practice

> Use `push`/`pop` for adding or removing from the end of an array, since they are the fastest operations. Avoid `unshift`/`shift` in performance sensitive code on large arrays, because they have to reindex every element. Always check `Array.isArray()` rather than `typeof` when you need to confirm something is an array.

---

## Quick Recap

- Arrays store ordered lists of values, indexed from `0`
- `push`/`pop` modify the end, `unshift`/`shift` modify the beginning
- `includes()` and `indexOf()` search for values
- `for...of` and `forEach()` are the cleanest ways to loop over arrays

---

## Try It Yourself

Create an array of five of your favorite movies, log the second one, add a sixth movie with push, then remove the first one with shift.

---

## Today's Project: Console Todo List

Build a simple to-do list manager that runs entirely in the console using array methods to add, complete, and remove tasks.

**[Open the Day 07 project brief →](../../projects/day-07-console-todo-list/README.md)**

---

## Navigation

[← Day 06: Functions](../day-06-functions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 08: Array Methods →](../day-08-array-methods/README.md)
