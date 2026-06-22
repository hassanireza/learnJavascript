// Day 28 Project: Regex Form Validator

const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

const form = document.querySelector("#signup-form");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;

  // TODO: Validate username, email, and password using the patterns above
  // TODO: Show the first matching error message, or a success message

  console.log("Replace this comment block with your regex validation logic.");
});
