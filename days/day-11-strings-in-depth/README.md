[← Back to Course Home](../../README.md)

# Day 11: Strings in Depth

> Master JavaScript strings, including template literals and the most useful string methods for real projects.

**Day 11 of 30** &nbsp;|&nbsp; Stage: Data Structures &nbsp;|&nbsp; Estimated time: 40-50 minutes

---

## What You Will Learn

- Build dynamic strings with template literals
- Use core string methods for searching and transforming text
- Split and join strings
- Trim and pad strings for clean formatting

---

## Template Literals

Template literals use backticks and allow embedded expressions with `${}`, and they support multi line strings naturally.

```js
const name = "Carlos";
const age = 27;

console.log(`My name is ${name} and I am ${age} years old.`);

const multiLine = `Line one
Line two
Line three`;
console.log(multiLine);
```

## Common String Methods

```js
const text = "  Hello, JavaScript World!  ";

console.log(text.trim());            // "Hello, JavaScript World!"
console.log(text.toUpperCase());     // "  HELLO, JAVASCRIPT WORLD!  "
console.log(text.toLowerCase());     // "  hello, javascript world!  "
console.log(text.includes("World")); // true
console.log(text.indexOf("Java"));   // 9
console.log(text.trim().length);     // 25
```

## Slicing and Extracting Text

```js
const text = "JavaScript";

console.log(text.slice(0, 4));  // "Java"
console.log(text.slice(-6));    // "Script"
console.log(text.charAt(0));    // "J"
console.log(text[0]);           // "J"
```

## Replacing Text

```js
const sentence = "I like cats and cats like me";

console.log(sentence.replace("cats", "dogs"));    // replaces first match only
console.log(sentence.replaceAll("cats", "dogs")); // replaces all matches
```

## Splitting and Joining

```js
const csv = "apple,banana,cherry";
const fruitsArray = csv.split(",");
console.log(fruitsArray); // ["apple", "banana", "cherry"]

const sentence = ["JavaScript", "is", "fun"].join(" ");
console.log(sentence); // "JavaScript is fun"
```

## Padding Strings

```js
console.log("7".padStart(3, "0"));  // "007"
console.log("7".padEnd(3, "0"));    // "700"
```

## Checking Start and End

```js
const filename = "report.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.endsWith(".pdf"));      // true
```

## Strings Are Immutable

String methods always return a new string, they never modify the original.

```js
const original = "hello";
const upper = original.toUpperCase();

console.log(original); // "hello", unchanged
console.log(upper);    // "HELLO"
```

---

## Best Practice

> Prefer template literals over string concatenation with `+` for anything involving variables, they are more readable and less error prone. Remember that all string methods return new strings rather than mutating the original.

---

## Quick Recap

- Template literals (`` `${}` ``) embed expressions directly inside strings
- `slice()`, `replace()`/`replaceAll()`, and `split()`/`join()` cover most text manipulation needs
- `padStart()`/`padEnd()` are useful for formatting fixed width text
- Strings are immutable, every method returns a new string

---

## Try It Yourself

Take the string "  javascript is FUN  ", trim it, capitalize only the first letter, and log the result as "Javascript is fun".

---

## Today's Project: Palindrome Checker

Build a function that checks whether a word or phrase reads the same forwards and backwards.

**[Open the Day 11 project brief →](../../projects/day-11-palindrome-checker/README.md)**

---

## Navigation

[← Day 10: Object Methods and this](../day-10-object-methods-and-this/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 12: Introduction to the DOM →](../day-12-introduction-to-the-dom/README.md)
