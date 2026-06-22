[← Back to Course Home](../../README.md)

# Day 08: Array Methods

> Master the most important JavaScript array methods, including map, filter, reduce, find, slice, and sort.

**Day 8 of 30** &nbsp;|&nbsp; Stage: Data Structures &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Transform arrays with map()
- Filter arrays with filter()
- Reduce arrays to a single value with reduce()
- Find items with find() and findIndex()
- Copy and reorder arrays with slice() and sort()

---

## map(): Transform Every Item

`map()` returns a new array where every item has been transformed by a function.

```js
const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.2);
console.log(withTax); // [12, 24, 36]
```

## filter(): Keep Only Matching Items

`filter()` returns a new array containing only the items for which the function returns `true`.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```

## reduce(): Combine Into One Value

`reduce()` walks through the array, accumulating a single result.

```js
const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60
```

The second argument to `reduce()`, `0` above, is the starting value of the accumulator.

## find() and findIndex()

```js
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Bruno" },
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bruno" }

const index = users.findIndex(u => u.id === 2);
console.log(index); // 1
```

## slice(): Copy a Portion

`slice()` returns a new array without modifying the original.

```js
const letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(1, 3)); // ["b", "c"]
console.log(letters); // unchanged: ["a", "b", "c", "d", "e"]
```

## sort(): Order an Array

`sort()` modifies the original array in place.

```js
const numbers = [5, 2, 8, 1];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [1, 2, 5, 8]

numbers.sort((a, b) => b - a); // descending
console.log(numbers); // [8, 5, 2, 1]
```

Without a comparator function, `sort()` converts items to strings, which produces incorrect results for numbers, for example `[10, 1, 2].sort()` becomes `[1, 10, 2]`. Always pass a comparator when sorting numbers.

## Chaining Array Methods

Methods that return arrays can be chained together for readable, declarative code.

```js
const orders = [
  { item: "Book", price: 15, paid: true },
  { item: "Pen", price: 2, paid: false },
  { item: "Laptop", price: 1200, paid: true },
];

const totalPaid = orders
  .filter(order => order.paid)
  .map(order => order.price)
  .reduce((sum, price) => sum + price, 0);

console.log(totalPaid); // 1215
```

---

## Best Practice

> Prefer `map`, `filter`, and `reduce` over manual `for` loops when transforming data. They are declarative, meaning the code states what you want, not how to loop, which makes intent clearer and reduces off by one errors.

---

## Quick Recap

- `map()` transforms every item into a new array
- `filter()` keeps only items that pass a test
- `reduce()` combines an array into a single value
- `find()`/`findIndex()` locate a single matching item
- `sort()` modifies the array in place and needs a comparator for numbers

---

## Try It Yourself

Given `const ages = [12, 17, 19, 22, 15, 30];`, use filter to get everyone 18 or older, then use reduce to sum their ages.

---

## Today's Project: Shopping Cart Total

Calculate totals, discounts, and summaries for a shopping cart represented as an array of objects.

**[Open the Day 08 project brief →](../../projects/day-08-shopping-cart-total/README.md)**

---

## Navigation

[← Day 07: Arrays](../day-07-arrays/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 09: Objects →](../day-09-objects/README.md)
