[← Back to Day 13 Lesson](../../days/day-13-dom-events/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 13: Color Switcher

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 30-40 minutes | addEventListener, event.target, event delegation, classList |

## Objective

Build an interactive color switcher using a single delegated event listener on a container of color buttons.

## Requirements

- Add a container with at least five color swatch buttons, each with a `data-color` attribute
- Attach a single click listener to the container, not to each button individually
- Inside the listener, read `event.target.dataset.color` and apply it as the page background
- Highlight the currently selected swatch with a CSS class

## Bonus Challenges

- Add a "Random Color" button that sets the background to a randomly generated hex color
- Save the last selected color so it persists if the page is reloaded (preview of Day 25's Local Storage)

## Files in This Project

```text
projects/day-13-color-switcher/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Read custom data attributes with `element.dataset.color`, which maps directly to a `data-color="..."` attribute in the HTML.

</details>

---

**[← Back to Day 13 Lesson](../../days/day-13-dom-events/README.md)**
