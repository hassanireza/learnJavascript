[← Back to Course Home](../../README.md)

# Day 24: Fetch API and JSON

> Learn how to use the JavaScript Fetch API to request real data from APIs and work with JSON responses correctly.

**Day 24 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 45-60 minutes

---

## What You Will Learn

- Make real HTTP requests using fetch()
- Convert responses to JSON and handle errors
- Understand JSON.stringify and JSON.parse
- Combine fetch with async/await

---

## What Is the Fetch API?

`fetch()` is a built in browser function for making HTTP requests, commonly used to retrieve data from an API. It returns a Promise.

```js
fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Request failed:", error.message));
```

`response.json()` parses the response body as JSON and itself returns a Promise, which is why it needs its own `.then()`.

## fetch with async/await

```js
async function getGithubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching user:", error.message);
  }
}

getGithubUser("octocat");
```

Note that `fetch()` only rejects on network failures, such as no internet connection. A 404 or 500 response is still considered a "successful" fetch at the network level, which is why checking `response.ok` is essential.

## What Is JSON?

JSON (JavaScript Object Notation) is a lightweight text format for representing structured data, used by most web APIs.

```json
{
  "name": "Octocat",
  "company": "GitHub",
  "followers": 9000
}
```

## JSON.parse and JSON.stringify

```js
const jsonString = '{"name": "Mira", "age": 26}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Mira"

const user = { name: "Mira", age: 26 };
const text = JSON.stringify(user);
console.log(text); // '{"name":"Mira","age":26}'
```

`JSON.stringify()` is also useful for saving data to Local Storage, covered on Day 25.

## Sending Data with fetch (POST Requests)

```js
async function createPost(title, body) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
  });

  const data = await response.json();
  console.log(data);
}

createPost("My First Post", "This is the content.");
```

## Handling Loading and Error States in the UI

```js
async function loadProfile(username) {
  const statusEl = document.querySelector("#status");
  statusEl.textContent = "Loading...";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("User not found.");

    const data = await response.json();
    statusEl.textContent = `Loaded profile for ${data.name ?? data.login}`;
  } catch (error) {
    statusEl.textContent = error.message;
  }
}
```

---

## Best Practice

> Always check `response.ok` before assuming a `fetch()` call succeeded, since `fetch()` only rejects on network errors, not on HTTP error status codes like 404. Always wrap `fetch()` calls in `try`/`catch` when using `async`/`await`, and show clear loading and error states in the UI so users are never left wondering what happened.

---

## Quick Recap

- `fetch()` makes HTTP requests and returns a Promise
- `response.json()` parses the response body, and also returns a Promise
- `response.ok` must be checked manually, since `fetch()` does not reject on HTTP error codes
- `JSON.stringify()` and `JSON.parse()` convert between JavaScript objects and JSON text

---

## Try It Yourself

Use fetch to request data from https://api.github.com/users/github and log only the `name` and `public_repos` fields from the response.

---

## Today's Project: GitHub Profile Finder

Build a real working app that fetches and displays any GitHub user's public profile using the Fetch API.

**[Open the Day 24 project brief →](../../projects/day-24-github-profile-finder/README.md)**

---

## Navigation

[← Day 23: Async and Await](../day-23-async-and-await/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 25: Local Storage →](../day-25-local-storage/README.md)
