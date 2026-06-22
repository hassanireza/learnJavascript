[← Back to Course Home](../../README.md)

# Day 28: Regular Expressions

> Learn JavaScript regular expressions for pattern matching, validation, and text searching with clear examples.

**Day 28 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Understand what regular expressions are and when to use them
- Write basic patterns with common metacharacters
- Use test, match, and replace with regular expressions
- Apply regex to real world input validation

---

## What Is a Regular Expression?

A regular expression (regex) is a pattern used to match, search, or replace text. JavaScript represents them between slashes, `/pattern/flags`.

```js
const pattern = /hello/i; // "i" means case insensitive
console.log(pattern.test("Hello World")); // true
```

## Common Metacharacters

| Symbol | Meaning |
|---|---|
| `.` | Any single character |
| `\d` | Any digit (0-9) |
| `\w` | Any word character (letters, digits, underscore) |
| `\s` | Any whitespace character |
| `*` | Zero or more of the previous character |
| `+` | One or more of the previous character |
| `?` | Zero or one of the previous character |
| `^` | Start of string |
| `$` | End of string |
| `[abc]` | Any one of a, b, or c |
| `{n,m}` | Between n and m repetitions |

## test(): Checking for a Match

```js
const hasDigit = /\d/;
console.log(hasDigit.test("abc123")); // true
console.log(hasDigit.test("abcdef")); // false
```

## match(): Extracting Matches

```js
const text = "Contact us at hello@example.com or support@example.com";
const emailPattern = /[\w.-]+@[\w.-]+\.\w+/g;

console.log(text.match(emailPattern));
// ["hello@example.com", "support@example.com"]
```

The `g` flag makes the regex find all matches, not just the first one.

## replace() with Regular Expressions

```js
const messy = "too    many     spaces";
const clean = messy.replace(/\s+/g, " ");
console.log(clean); // "too many spaces"
```

## Practical Validation Examples

```js
function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
}

function isValidUsPhone(phone) {
  return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}

function isStrongPassword(password) {
  // at least 8 characters, one letter, one number
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidUsPhone("555-123-4567"));    // true
console.log(isStrongPassword("abc12345"));      // true
console.log(isStrongPassword("short1"));        // false
```

## Named Capture Groups

```js
const datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result = "2026-06-22".match(datePattern);

console.log(result.groups.year);  // "2026"
console.log(result.groups.month); // "06"
console.log(result.groups.day);   // "22"
```

---

## Best Practice

> Keep regular expressions as simple as possible for the task at hand, and add comments above complex patterns explaining what they match, since regex syntax is notoriously hard to read later, even for the person who wrote it. For genuinely complex validation, such as full email RFC compliance, prefer a well tested library over a hand written pattern.

---

## Quick Recap

- A regular expression is a pattern for matching, searching, or replacing text
- `test()` checks for a match, `match()` extracts matches, `replace()` substitutes them
- The `g` flag finds all matches, the `i` flag ignores case
- Named capture groups make extracting structured data from matches more readable

---

## Try It Yourself

Write a regex that validates a simple hex color code like "#A1B2C3" or "#fff", and test it against several valid and invalid examples.

---

## Today's Project: Regex Form Validator

Rebuild the Day 14 sign up form's validation logic using regular expressions for stricter, more precise checks.

**[Open the Day 28 project brief →](../../projects/day-28-regex-form-validator/README.md)**

---

## Navigation

[← Day 27: JavaScript Modules](../day-27-javascript-modules/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 29: Debugging and Testing Basics →](../day-29-debugging-and-testing-basics/README.md)
