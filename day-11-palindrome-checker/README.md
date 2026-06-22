[← Back to Day 11 Lesson](../../days/day-11-strings-in-depth/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 11: Palindrome Checker

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Intermediate | 30-40 minutes | string methods, split, reverse, join, normalization |

## Objective

Write a function `isPalindrome(text)` that correctly detects palindromes, ignoring case, spaces, and punctuation.

## Requirements

- Write a function `isPalindrome(text)` that returns `true` or `false`
- Normalize the input by lowercasing it and removing non letter characters before checking
- Test it against at least five different phrases, including "Was it a car or a cat I saw"
- Print each test phrase alongside its result

## Bonus Challenges

- Write a function `longestWord(sentence)` that returns the longest word in a sentence
- Count and print how many vowels are in a given string

## Files in This Project

```text
projects/day-11-palindrome-checker/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

Reverse a string with `text.split('').reverse().join('')`, and strip non letters with `text.replace(/[^a-z]/gi, '')` before comparing.

</details>

---

**[← Back to Day 11 Lesson](../../days/day-11-strings-in-depth/README.md)**
