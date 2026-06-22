[← Back to Course Home](../../README.md)

# Day 19: Higher Order Functions

> Understand JavaScript higher order functions and functional programming patterns using map, filter, and reduce together.

**Day 19 of 30** &nbsp;|&nbsp; Stage: Modern JavaScript &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Define what makes a function a higher order function
- Pass functions as arguments and return functions from functions
- Combine map, filter, and reduce to analyze real data
- Recognize functional programming patterns in everyday JavaScript

---

## What Is a Higher Order Function?

A higher order function is a function that does at least one of the following:

- Accepts another function as an argument
- Returns a function as its result

You have already used several: `map()`, `filter()`, `reduce()`, `forEach()`, and `addEventListener()` all accept functions as arguments. `createCounter()` from Day 16 returned functions.

## Functions as Arguments

```js
function processNumbers(numbers, operation) {
  return numbers.map(operation);
}

const doubled = processNumbers([1, 2, 3], n => n * 2);
console.log(doubled); // [2, 4, 6]

const squared = processNumbers([1, 2, 3], n => n * n);
console.log(squared); // [1, 4, 9]
```

`processNumbers` does not need to know what calculation will happen, it just applies whatever function it is given. This makes it flexible and reusable.

## Functions That Return Functions

```js
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30
```

## Combining map, filter, and reduce for Real Analysis

```js
const sales = [
  { product: "Book", amount: 25, region: "EU" },
  { product: "Pen", amount: 3, region: "US" },
  { product: "Laptop", amount: 1200, region: "EU" },
  { product: "Notebook", amount: 8, region: "US" },
];

const euTotal = sales
  .filter(sale => sale.region === "EU")
  .map(sale => sale.amount)
  .reduce((total, amount) => total + amount, 0);

console.log(euTotal); // 1225
```

## Writing Your Own map() (To Understand It Better)

Implementing a simplified version of a built in method is a great way to deeply understand it.

```js
function myMap(array, transformFn) {
  const result = [];
  for (const item of array) {
    result.push(transformFn(item));
  }
  return result;
}

console.log(myMap([1, 2, 3], n => n * 10)); // [10, 20, 30]
```

## Function Composition

A common functional pattern is building a pipeline of small functions.

```js
const addTax = price => price * 1.2;
const applyDiscount = price => price * 0.9;

const finalPrice = applyDiscount(addTax(100));
console.log(finalPrice); // 108
```

---

## Best Practice

> Break complex data processing into a chain of small, named, single purpose functions, such as filter then map then reduce, rather than one large loop with many responsibilities. This style, often called functional programming, tends to produce code that is easier to test and reason about.

---

## Quick Recap

- A higher order function accepts or returns other functions
- Passing behavior as a function argument makes code flexible and reusable
- Chaining `filter`, `map`, and `reduce` is a powerful pattern for data analysis
- Writing a simplified version of a built in method deepens your understanding of how it works

---

## Try It Yourself

Write a higher order function `repeat(action, times)` that calls the `action` function `times` times, passing the current iteration number to it.

---

## Today's Project: Mini Sales Dashboard

Analyze an array of sales records using chained higher order functions to produce a small console based dashboard.

**[Open the Day 19 project brief →](../../projects/day-19-mini-sales-dashboard/README.md)**

---

## Navigation

[← Day 18: Spread, Rest, and Default Parameters](../day-18-spread-rest-and-default-parameters/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 20: Error Handling →](../day-20-error-handling/README.md)
