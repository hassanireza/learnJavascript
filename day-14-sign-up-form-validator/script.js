// Day 14 Project: Sign Up Form Validator

const form = document.querySelector("#signup-form");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  // TODO: Validate username length (at least 3 characters)
  // TODO: Validate email format (contains "@" and ".")
  // TODO: Validate password length (at least 8 characters)
  // TODO: Validate password === confirmPassword
  // TODO: Show the first matching error in `message`, or a success message

  console.log("Replace this comment block with your validation logic.");
});
