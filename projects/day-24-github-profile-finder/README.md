[← Back to Day 24 Lesson](../../days/day-24-fetch-api-and-json/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md)

# Project 24: GitHub Profile Finder

| Difficulty | Estimated Time | Concepts Practiced |
|---|---|---|
| Advanced | 45-60 minutes | fetch, async/await, JSON, error handling, DOM rendering |

## Objective

Build a search tool that fetches a real GitHub user's profile by username and displays their avatar, name, bio, and repository count.

## Requirements

- Build a form with a text input for a GitHub username
- On submit, prevent the default behavior and fetch `https://api.github.com/users/{username}`
- Display a loading message while the request is in progress
- On success, render the user's avatar image, name, bio, and public repository count
- On failure (user not found, or network error), display a clear error message

## Bonus Challenges

- Disable the search button while a request is in progress
- Add a link to the user's GitHub profile using the `html_url` field from the response

## Files in This Project

```text
projects/day-24-github-profile-finder/
├── README.md
├── index.html
├── style.css
└── script.js
```

Open `index.html` with the **Live Server** extension, or open `script.js` directly in a Node.js environment, depending on what the lesson requires. Look for `// TODO` comments inside `script.js` to know exactly what to implement.

## Solution Approach

<details>
<summary>Click to reveal a hint if you get stuck (try solving it yourself first)</summary>

GitHub's API returns `avatar_url`, `name`, `login`, `bio`, `public_repos`, and `html_url`, fields you can render directly into the page.

</details>

---

**[← Back to Day 24 Lesson](../../days/day-24-fetch-api-and-json/README.md)**
