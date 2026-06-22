[← Back to Day 08 Lesson](../../days/day-08-array-methods/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 08: Shopping Cart Total

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | map, filter, reduce, sort, method chaining |

## Objective

Process an array of cart items to calculate the subtotal, apply a discount, and list items sorted by price.

## Requirements

- Create a `cart` array of at least four objects, each with `name`, `price`, and `quantity`
- Use `map()` and `reduce()` to calculate the subtotal (price multiplied by quantity, summed)
- Apply a 10 percent discount if the subtotal is over 100
- Use `sort()` to print items ordered from most to least expensive

## Bonus Challenges

- Use `filter()` to list only items with a quantity greater than 1
- Format all money values with `.toFixed(2)`

## Files in This Project

```text
projects/day-08-shopping-cart-total/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Calculate the subtotal with `cart.reduce((sum, item) => sum + item.price * item.quantity, 0)`.

</details>

---

**[← Back to Day 08 Lesson](../../days/day-08-array-methods/README.md)**
