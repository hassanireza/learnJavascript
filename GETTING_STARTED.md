# Getting Started

This guide walks you through setting up everything you need to complete **Learn JavaScript in 30 Days**. Setup takes about ten minutes.

## 1. Install a Code Editor

We recommend **[Visual Studio Code](https://code.visualstudio.com/)**, a free editor used by most professional JavaScript developers.

1. Download it for your operating system from the official site.
2. Install it using the default options.
3. Open it once to confirm it works.

## 2. Install a Modern Browser

Any modern browser works, but **[Google Chrome](https://www.google.com/chrome/)** or **[Mozilla Firefox](https://www.mozilla.org/firefox/)** are recommended because their developer tools are excellent for learning JavaScript.

## 3. Install the Live Server Extension

For lessons from Day 12 onward, you will write JavaScript that interacts with HTML pages. The **Live Server** extension lets you preview these pages with automatic reloading.

1. Open Visual Studio Code.
2. Go to the Extensions panel (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for `Live Server` by Ritwick Dey.
4. Click **Install**.
5. To use it, right click any `index.html` file and select **Open with Live Server**.

## 4. Install Git

Git lets you clone this repository and track your own progress.

- **Windows:** Download from [git-scm.com](https://git-scm.com/) and install with default settings.
- **macOS:** Run `git --version` in Terminal; macOS will prompt you to install developer tools if needed.
- **Linux:** Run `sudo apt install git` (Debian/Ubuntu) or the equivalent for your distribution.

Confirm it is installed:

```bash
git --version
```

## 5. (Optional) Install Node.js

Node.js is not required until later lessons that mention running JavaScript outside the browser, but it is useful from Day 1 if you prefer running scripts from the terminal instead of the browser console.

1. Download the **LTS version** from [nodejs.org](https://nodejs.org/).
2. Install it with default settings.
3. Confirm the installation:

   ```bash
   node --version
   ```

## 6. Clone This Repository

```bash
git clone https://github.com/your-username/learn-javascript-30-days.git
cd learn-javascript-30-days
code .
```

## 7. Run Your First Script

You can run JavaScript in two ways throughout this course.

### Option A: Browser Console

1. Open any HTML page in your browser, or open a new blank tab.
2. Open Developer Tools (`F12` or `Ctrl+Shift+I` on Windows, `Cmd+Option+I` on macOS).
3. Click the **Console** tab.
4. Type:

   ```js
   console.log("Hello, JavaScript!");
   ```

5. Press Enter. You should see `Hello, JavaScript!` printed.

### Option B: Node.js in the Terminal

1. Create a file named `app.js` with the following content:

   ```js
   console.log("Hello, JavaScript!");
   ```

2. Run it from the terminal:

   ```bash
   node app.js
   ```

3. You should see `Hello, JavaScript!` printed in your terminal.

## You Are Ready

You now have everything you need. Head to **[Day 1: Introduction and Setup](./days/day-01-introduction-and-setup/README.md)** to begin the course.
