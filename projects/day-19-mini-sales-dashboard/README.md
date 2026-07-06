[← Back to Day 19 Lesson](../../days/day-19-higher-order-functions/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 19: Mini Sales Dashboard

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | higher order functions, map, filter, reduce, function composition |

## Objective

Process a list of sales records to calculate totals, top products, and region breakdowns using chained array methods.

## Requirements

- Create an array of at least eight sales records, each with `product`, `amount`, and `region`
- Calculate and print the total revenue across all sales
- Calculate and print the total revenue per region using `reduce()`
- Find and print the single highest value sale using `reduce()` or `sort()`
- Print a list of products with sales above a chosen threshold, using `filter()`

## Bonus Challenges

- Write a reusable `groupBy(array, keyFn)` higher order function and use it to group sales by region
- Calculate the average sale amount using `reduce()` and `.length`

## Files in This Project

```text
projects/day-19-mini-sales-dashboard/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

`groupBy` can use `reduce()` with an object accumulator: `array.reduce((groups, item) => { const key = keyFn(item); (groups[key] ??= []).push(item); return groups; }, {});`

</details>

---

**[← Back to Day 19 Lesson](../../days/day-19-higher-order-functions/README.md)**
