do# Contributing to Learn JavaScript in 30 Days

Thank you for considering a contribution. This course improves through community feedback, and contributions of every size are welcome, from fixing a typo to proposing a new project.

## Ways to Contribute

- **Fix errors:** typos, broken links, incorrect code, or outdated information
- **Improve explanations:** clearer wording, better examples, additional diagrams
- **Add project variations:** alternative or bonus challenges for an existing day
- **Translate lessons:** help make this course available in other languages
- **Report issues:** even if you cannot fix something yourself, reporting it helps

## Before You Start

1. Check the [open issues](https://github.com/your-username/learn-javascript-30-days/issues) to see if your idea or fix is already being discussed.
2. For larger changes, such as adding a new lesson or restructuring the curriculum, open an issue first to discuss the change before writing it.
3. Small fixes, such as typos or broken links, can go straight to a pull request.

## Making a Change

1. **Fork** this repository.
2. **Clone** your fork:

   ```bash
   git clone https://github.com/your-username/learn-javascript-30-days.git
   cd learn-javascript-30-days
   ```

3. **Create a branch** with a descriptive name:

   ```bash
   git checkout -b fix/day-09-typo
   ```

4. **Make your changes.** Please follow the existing structure described below.
5. **Test any code** you add or modify. Every code block in this course must run correctly.
6. **Commit** with a clear message:

   ```bash
   git commit -m "Fix incorrect example in Day 9 objects lesson"
   ```

7. **Push** your branch and open a **pull request** against the `main` branch.

## Style Guide for Lesson Content

To keep the course consistent, please follow these rules when editing or adding lessons:

- Use `let` and `const`, never `var`, in new examples.
- Use strict equality (`===` and `!==`).
- Wrap every code snippet in a fenced code block with the `js`, `html`, or `css` language tag, for example:

  ```js
  const greeting = "Hello, world!";
  ```

- Keep explanations beginner friendly. Avoid jargon without first defining it.
- Every lesson must keep the existing navigation footer linking to the previous and next day.
- Do not use em dashes in prose; use commas, periods, or parentheses instead.
- Match the heading structure already used in other lessons (`#` for the title, `##` for sections).

## Style Guide for Project Code

- Each project should run with no build step. Plain HTML, CSS, and JavaScript only.
- Include comments in starter files that explain what the learner needs to implement.
- Keep projects achievable in one to two hours.

## Pull Request Checklist

Before submitting, confirm that:

- [ ] All code blocks have been tested and run without errors
- [ ] Links between lessons (previous/next) still work
- [ ] Spelling and grammar have been checked
- [ ] The change follows the style guide above
- [ ] The pull request description explains what changed and why

## Code of Conduct

Be respectful and constructive in all discussions, issues, and pull requests. Disagreements about content are welcome; personal attacks are not.

## Questions

If you are unsure about anything, open an issue and ask before investing significant time in a change.
