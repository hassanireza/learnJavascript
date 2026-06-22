[← Back to Day 09 Lesson](../../days/day-09-objects/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 09: Contact Book

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 40 minutes | objects, nested data, destructuring, array of objects |

## Objective

Manage a small contact book where each contact is an object with name, phone, and email.

## Requirements

- Create an array `contacts` containing at least three contact objects with `name`, `phone`, and `email`
- Write a function `findContact(name)` that returns the matching contact object using `find()`
- Destructure the result of `findContact()` to print a formatted line for that contact
- Update one contact's phone number directly on the object

## Bonus Challenges

- Add a nested `address` object to each contact with `city` and `country`
- Write `addContact(contact)` that pushes a new contact into the array

## Files in This Project

```text
projects/day-09-contact-book/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

`findContact` can be written as `const findContact = name => contacts.find(c => c.name === name);` using an arrow function and `find()`.

</details>

---

**[← Back to Day 09 Lesson](../../days/day-09-objects/README.md)**
