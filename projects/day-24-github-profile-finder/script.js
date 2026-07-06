// Day 24 Project: GitHub Profile Finder

const form = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username-input");
const result = document.querySelector("#result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  if (!username) return;

  result.textContent = "Loading...";

  try {
    // TODO: fetch `https://api.github.com/users/${username}`
    // TODO: throw an error if response.ok is false
    // TODO: parse the JSON and render avatar, name, bio, public_repos into `result`
  } catch (error) {
    result.textContent = error.message;
  }
});

console.log("GitHub Profile Finder script loaded.");
