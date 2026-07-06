[← Back to Day 26 Lesson](../../days/day-26-classes-and-oop/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 26: Library Management System

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Advanced | 50-70 minutes | classes, constructors, inheritance, encapsulation |

## Objective

Build a class based library system that tracks books, members, and borrowing activity.

## Requirements

- Create a `Book` class with `title`, `author`, and a private `#isCheckedOut` field defaulting to `false`
- Add `checkOut()` and `returnBook()` methods on `Book` that update `#isCheckedOut` and prevent invalid actions, such as checking out an already checked out book
- Create a `Library` class that stores an array of `Book` instances and has methods `addBook(book)`, `findBookByTitle(title)`, and `listAvailableBooks()`
- Demonstrate the system by adding at least four books, checking some out, and printing the available books before and after

## Bonus Challenges

- Create a `Member` class with a `name` and a `borrowedBooks` array, and connect it to `Library` so members can borrow and return books through the library
- Add a static method `Library.createDefault()` that returns a `Library` instance pre-populated with sample books

## Files in This Project

```text
projects/day-26-library-management-system/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Inside `checkOut()`, throw an error or log a message and return early if `#isCheckedOut` is already `true`, rather than allowing the state to be set incorrectly.

</details>

---

**[← Back to Day 26 Lesson](../../days/day-26-classes-and-oop/README.md)**
