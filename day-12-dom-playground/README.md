[← Back to Day 12 Lesson](../../days/day-12-introduction-to-the-dom/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 12: DOM Playground

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40-50 minutes | querySelector, textContent, classList, createElement |

## Objective

Build a small page with buttons that each demonstrate a different DOM manipulation technique.

## Requirements

- Add a heading and three buttons to `index.html`: "Change Text", "Toggle Highlight", and "Add List Item"
- In `script.js`, select each button and the heading using `querySelector()`
- Clicking "Change Text" updates the heading's text
- Clicking "Toggle Highlight" toggles a `highlight` CSS class on the heading
- Clicking "Add List Item" creates and appends a new `li` to a `ul` on the page

## Bonus Challenges

- Add a counter showing how many list items have been added so far
- Add a "Clear List" button that removes all items

## Files in This Project

```text
projects/day-12-dom-playground/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Attach click behavior with `button.addEventListener('click', () => { ... });`, covered fully on Day 13, but a small preview is fine here.

</details>

---

**[← Back to Day 12 Lesson](../../days/day-12-introduction-to-the-dom/README.md)**
