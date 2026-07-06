[← Back to Course Home](../../README.md)

# Day 14: Forms and Validation

> Learn how to read form input values with JavaScript and validate them before submission with clear error messages.

**Day 14 of 30** &nbsp;|&nbsp; Stage: The Browser and the DOM &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Read values from text inputs, checkboxes, and select elements
- Validate form input before processing it
- Display helpful error messages to users
- Understand basic HTML5 validation attributes

---

## Reading Input Values

```html
<input type="text" id="username" />
```

```js
const usernameInput = document.querySelector("#username");
console.log(usernameInput.value);
```

## Handling Form Submission

```html
<form id="signup-form">
  <input type="text" id="username" placeholder="Username" />
  <input type="email" id="email" placeholder="Email" />
  <button type="submit">Sign Up</button>
</form>
<p id="error-message"></p>
```

```js
const form = document.querySelector("#signup-form");
const errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();

  if (username === "") {
    errorMessage.textContent = "Username is required.";
    return;
  }

  if (!email.includes("@")) {
    errorMessage.textContent = "Please enter a valid email.";
    return;
  }

  errorMessage.textContent = "";
  console.log("Form is valid:", { username, email });
});
```

## Reading Checkboxes and Radio Buttons

```html
<input type="checkbox" id="agree" />
```

```js
const agree = document.querySelector("#agree");
console.log(agree.checked); // true or false
```

## Reading Select Dropdowns

```html
<select id="country">
  <option value="us">United States</option>
  <option value="pt">Portugal</option>
</select>
```

```js
const country = document.querySelector("#country");
console.log(country.value); // "us" or "pt"
```

## HTML5 Built In Validation

HTML provides basic validation attributes that work without JavaScript, useful as a first line of defense.

```html
<input type="email" required minlength="5" />
<input type="number" min="0" max="120" />
```

```js
const input = document.querySelector("input");
console.log(input.validity.valid); // true if it currently passes HTML validation
```

JavaScript validation is still important because it lets you create custom rules, custom error messages, and consistent behavior across browsers.

## A Reusable Validation Pattern

```js
function validateUsername(username) {
  if (username.length < 3) {
    return "Username must be at least 3 characters.";
  }
  return null; // null means valid
}

const error = validateUsername("ab");
if (error) {
  console.log(error);
}
```

---

## Best Practice

> Always call `event.preventDefault()` in a submit handler before processing data with JavaScript, validate every field with clear, specific error messages, and combine HTML5 attributes like `required` with your own JavaScript checks rather than relying on either one alone.

---

## Quick Recap

- `.value` reads text input content, `.checked` reads checkboxes
- `event.preventDefault()` stops the default form submission so JavaScript can take over
- Always trim and validate user input before using it
- HTML5 validation attributes complement, but do not replace, JavaScript validation

---

## Try It Yourself

Build a form with a single number input for age. On submit, prevent the default behavior and show an error if the age is not between 1 and 120.

---

## Today's Project: Sign Up Form Validator

Build a complete sign up form with custom JavaScript validation and clear inline error messages.

**[Open the Day 14 project brief →](../../projects/day-14-sign-up-form-validator/README.md)**

---

## Navigation

[← Day 13: DOM Events](../day-13-dom-events/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 15: Building a To-Do App →](../day-15-building-a-todo-app/README.md)
