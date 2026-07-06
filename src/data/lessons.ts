import type { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  {
    "day": 1,
    "slug": "introduction-and-setup",
    "stage": 1,
    "title": "Introduction and Setup",
    "subtitle": "Learn what JavaScript is, why it powers the modern web, and how to write and run your first JavaScript code today.",
    "estMinutes": 40,
    "projectName": "Hello Console",
    "projectDesc": "Set up your first JavaScript file and print a personal introduction to the console.",
    "contentMd": "## What Is JavaScript?\n\nJavaScript is a programming language that runs in web browsers and, thanks to runtimes like Node.js, on servers and computers directly. It is the language that makes web pages interactive: validating forms, updating content without reloading the page, animating elements, fetching data from servers, and much more.\n\n| Technology | Responsibility |\n|---|---|\n| **HTML** | Structure and content |\n| **CSS** | Visual styling and layout |\n| **JavaScript** | Behavior, interactivity, and logic |\n\n## Running Your First Script\n\nOpen your browser, press `F12`, go to the **Console** tab, and type:\n\n```js\nconsole.log(\"Hello, JavaScript!\");\n```\n\n`console.log()` prints a value to the console. You will use it constantly throughout this course.\n\n## Comments\n\n```js\n// Single line comment\n/* Multi-line comment */\nconsole.log(\"Comments don't affect execution.\");\n```\n\n## Semicolons\n\nEnd every statement with a semicolon:\n\n```js\nconsole.log(\"Statement one\");\nconsole.log(\"Statement two\");\n```\n\n> **Best Practice:** Always end statements with a semicolon and use `console.log()` liberally while learning.",
    "quiz": {
      "question": "Which method is used to print output to the browser console?",
      "options": {
        "A": "console.print()",
        "B": "console.log()",
        "C": "document.write()",
        "D": "alert()"
      },
      "correct": "B",
      "explanation": "console.log() is the standard method for printing values to the browser developer console."
    }
  },
  {
    "day": 2,
    "slug": "variables-and-data-types",
    "stage": 1,
    "title": "Variables and Data Types",
    "subtitle": "Master JavaScript variables \u2014 let, const, and var \u2014 and every primitive data type.",
    "estMinutes": 45,
    "projectName": "Personal Bio Card",
    "projectDesc": "Build a dynamic personal bio card using variables and string concatenation.",
    "contentMd": "## Declaring Variables\n\n```js\nlet score = 0;         // reassignable\nconst PI  = 3.14159;   // constant \u2014 cannot be reassigned\n```\n\nAvoid `var` in modern JavaScript \u2014 it has confusing function scope behavior.\n\n## Primitive Data Types\n\n| Type      | Example |\n|-----------|---------|\n| `string`  | `\"hello\"` |\n| `number`  | `42`, `3.14` |\n| `boolean` | `true`, `false` |\n| `null`    | `null` |\n| `undefined` | `undefined` |\n| `symbol`  | `Symbol(\"id\")` |\n| `bigint`  | `9007199254740991n` |\n\n## Checking Types with typeof\n\n```js\ntypeof \"hello\"    // \"string\"\ntypeof 42         // \"number\"\ntypeof true       // \"boolean\"\ntypeof undefined  // \"undefined\"\ntypeof null       // \"object\" \u2014 historical quirk!\n```\n\n> **Best Practice:** Default to `const`. Only use `let` when the variable's value genuinely needs to change. Never use `var` in new code.",
    "quiz": {
      "question": "Which keyword declares a variable that cannot be reassigned?",
      "options": {
        "A": "var",
        "B": "let",
        "C": "const",
        "D": "static"
      },
      "correct": "C",
      "explanation": "const declares a block-scoped, read-only variable. Trying to reassign it throws a TypeError."
    }
  },
  {
    "day": 3,
    "slug": "operators-and-expressions",
    "stage": 1,
    "title": "Operators and Expressions",
    "subtitle": "Learn arithmetic, comparison, logical, and assignment operators with tested code examples.",
    "estMinutes": 40,
    "projectName": "Simple Calculator",
    "projectDesc": "Build a calculator that performs all four arithmetic operations.",
    "contentMd": "## Arithmetic Operators\n\n```js\n5 + 2  // 7\n5 - 2  // 3\n5 * 2  // 10\n5 / 2  // 2.5\n5 % 2  // 1  (remainder)\n5 ** 2 // 25 (power)\n```\n\n## Comparison Operators\n\n```js\n5 === 5   // true  \u2014 strict equality (always use this)\n5 !== 3   // true\n5 > 3     // true\n5 >= 5    // true\n```\n\n## Logical Operators\n\n```js\ntrue && false  // false\ntrue || false  // true\n!true          // false\n```\n\n## Ternary Operator\n\n```js\nconst age = 20;\nconst status = age >= 18 ? \"adult\" : \"minor\";\n```\n\n> **Best Practice:** Always use `===` and `!==` instead of `==` and `!=` to avoid unpredictable type coercion.",
    "quiz": {
      "question": "What does the === operator check in JavaScript?",
      "options": {
        "A": "Value only, allowing type coercion",
        "B": "Type only",
        "C": "Both value and type (strict equality)",
        "D": "Memory address"
      },
      "correct": "C",
      "explanation": "=== is strict equality \u2014 it checks both value AND type without any coercion. Always prefer it over ==."
    }
  },
  {
    "day": 4,
    "slug": "conditional-statements",
    "stage": 1,
    "title": "Conditional Statements",
    "subtitle": "Learn if, else if, else, and switch statements to control program flow.",
    "estMinutes": 40,
    "projectName": "Grade Calculator",
    "projectDesc": "Build a program that converts a numeric score to a letter grade.",
    "contentMd": "## The if Statement\n\n```js\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 80) {\n  console.log(\"B\");\n} else {\n  console.log(\"C or below\");\n}\n```\n\n## Truthy and Falsy Values\n\nThese six values are **falsy**: `false`, `0`, `\"\"`, `null`, `undefined`, `NaN`.\n\nEverything else is **truthy**.\n\n## The switch Statement\n\n```js\nswitch (day) {\n  case \"Monday\":\n    console.log(\"Start of the week\");\n    break;\n  case \"Friday\":\n    console.log(\"Almost weekend!\");\n    break;\n  default:\n    console.log(\"Midweek\");\n}\n```\n\n> **Best Practice:** Keep conditions simple. If a chain grows beyond 4\u20135 branches on a single value, consider a `switch` or a lookup object.",
    "quiz": {
      "question": "Which of the following is a falsy value in JavaScript?",
      "options": {
        "A": "\"false\"",
        "B": "[]",
        "C": "0",
        "D": "{}"
      },
      "correct": "C",
      "explanation": "0 is one of the six falsy values. Note: \"false\" (a non-empty string) is truthy, as are [] and {}."
    }
  },
  {
    "day": 5,
    "slug": "loops-and-iteration",
    "stage": 1,
    "title": "Loops and Iteration",
    "subtitle": "Learn for, while, and do...while loops, plus break and continue.",
    "estMinutes": 40,
    "projectName": "Multiplication Table Generator",
    "projectDesc": "Generate a multiplication table for any number using loops.",
    "contentMd": "## The for Loop\n\n```js\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n```\n\n## The while Loop\n\n```js\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}\n```\n\n## for...of (Arrays)\n\n```js\nconst fruits = [\"apple\", \"banana\", \"cherry\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n```\n\n## break and continue\n\n```js\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;       // stops loop entirely\n  if (i % 2 === 0) continue; // skips even numbers\n  console.log(i);\n}\n```\n\n> **Best Practice:** Prefer `for...of` when looping over array values \u2014 it is more readable than managing an index manually.",
    "quiz": {
      "question": "Which loop is best for iterating over an array's values without needing the index?",
      "options": {
        "A": "for loop with index",
        "B": "while loop",
        "C": "for...of loop",
        "D": "do...while loop"
      },
      "correct": "C",
      "explanation": "for...of iterates directly over values in an iterable like an array, making code cleaner and more readable."
    }
  },
  {
    "day": 6,
    "slug": "functions",
    "stage": 1,
    "title": "Functions",
    "subtitle": "Learn function declarations, expressions, arrow functions, parameters, and return values.",
    "estMinutes": 45,
    "projectName": "Tip Calculator",
    "projectDesc": "Build a tip calculator that computes the tip and total per person.",
    "contentMd": "## Function Declaration\n\n```js\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```\n\n## Arrow Functions\n\n```js\nconst greet = (name) => `Hello, ${name}!`;\nconst double = x => x * 2;\n```\n\n## Default Parameters\n\n```js\nfunction greet(name = \"World\") {\n  return `Hello, ${name}!`;\n}\ngreet();         // \"Hello, World!\"\ngreet(\"Reza\");   // \"Hello, Reza!\"\n```\n\n## Pure Functions\n\nA pure function always returns the same output for the same input and has no side effects:\n\n```js\nfunction add(a, b) {\n  return a + b; // pure\n}\n```\n\n> **Best Practice:** Keep functions focused on a single responsibility. A function that does one thing well is easier to test and reuse.",
    "quiz": {
      "question": "What is an arrow function equivalent of: function double(x) { return x * 2; }",
      "options": {
        "A": "const double = x => x * 2;",
        "B": "const double = (x) { return x * 2; }",
        "C": "arrow double(x) => x * 2;",
        "D": "function double => x * 2;"
      },
      "correct": "A",
      "explanation": "Arrow function syntax: const name = param => expression; \u2014 for single parameters the parentheses are optional."
    }
  },
  {
    "day": 7,
    "slug": "arrays",
    "stage": 2,
    "title": "Arrays",
    "subtitle": "Learn JavaScript arrays from scratch \u2014 creation, indexing, and the most common built-in methods.",
    "estMinutes": 45,
    "projectName": "Console Todo List",
    "projectDesc": "Build a todo list that runs in the browser console using arrays.",
    "contentMd": "## Creating Arrays\n\n```js\nconst fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits[0]); // \"apple\"\nconsole.log(fruits.length); // 3\n```\n\n## Modifying Arrays\n\n```js\nfruits.push(\"date\");    // add to end\nfruits.pop();           // remove from end\nfruits.unshift(\"avocado\"); // add to start\nfruits.shift();         // remove from start\n```\n\n## Checking for Values\n\n```js\nfruits.includes(\"banana\"); // true\nfruits.indexOf(\"cherry\");  // 2\n```\n\n## Looping\n\n```js\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\nfruits.forEach((fruit, i) => console.log(i, fruit));\n```\n\n> **Best Practice:** Use `push`/`pop` for end operations (fastest). Always check `Array.isArray()` rather than `typeof` to confirm something is an array.",
    "quiz": {
      "question": "Which method adds an element to the END of an array?",
      "options": {
        "A": "unshift()",
        "B": "push()",
        "C": "append()",
        "D": "add()"
      },
      "correct": "B",
      "explanation": "push() adds one or more elements to the end of an array and returns the new length."
    }
  },
  {
    "day": 8,
    "slug": "array-methods",
    "stage": 2,
    "title": "Array Methods",
    "subtitle": "Master map, filter, reduce, find, slice, and sort.",
    "estMinutes": 50,
    "projectName": "Shopping Cart Total",
    "projectDesc": "Use array methods to compute totals and apply discounts to a shopping cart.",
    "contentMd": "## map() \u2014 Transform Every Item\n\n```js\nconst prices = [10, 20, 30];\nconst withTax = prices.map(p => p * 1.2);\n// [12, 24, 36]\n```\n\n## filter() \u2014 Keep Matching Items\n\n```js\nconst numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\n// [2, 4, 6]\n```\n\n## reduce() \u2014 Combine to One Value\n\n```js\nconst total = prices.reduce((sum, p) => sum + p, 0);\n// 60\n```\n\n## find() and findIndex()\n\n```js\nconst users = [{id:1, name:\"Reza\"}, {id:2, name:\"Sara\"}];\nconst user = users.find(u => u.id === 1);\n// {id:1, name:\"Reza\"}\n```\n\n## Chaining\n\n```js\nconst result = numbers\n  .filter(n => n > 2)\n  .map(n => n * 2)\n  .reduce((sum, n) => sum + n, 0);\n```\n\n> **Best Practice:** Prefer `map`, `filter`, `reduce` over manual for loops when transforming data.",
    "quiz": {
      "question": "Which array method creates a NEW array with only elements that pass a test?",
      "options": {
        "A": "map()",
        "B": "reduce()",
        "C": "filter()",
        "D": "find()"
      },
      "correct": "C",
      "explanation": "filter() returns a new array containing only elements for which the callback returns true."
    }
  },
  {
    "day": 9,
    "slug": "objects",
    "stage": 2,
    "title": "Objects",
    "subtitle": "Learn JavaScript objects \u2014 creation, dot notation, nested objects, and destructuring.",
    "estMinutes": 45,
    "projectName": "Contact Book",
    "projectDesc": "Build a contact book that stores and retrieves contact information.",
    "contentMd": "## Creating Objects\n\n```js\nconst person = {\n  firstName: \"Reza\",\n  lastName:  \"Hassani\",\n  age:       30,\n};\n```\n\n## Accessing Properties\n\n```js\nperson.firstName         // \"Reza\"     \u2014 dot notation (preferred)\nperson[\"lastName\"]       // \"Hassani\"  \u2014 bracket notation\n```\n\n## Destructuring\n\n```js\nconst { firstName, age } = person;\nconsole.log(firstName); // \"Reza\"\n```\n\n## Nested Objects\n\n```js\nconst company = {\n  name: \"Laser Frame Studio\",\n  address: { city: \"Paris\", country: \"France\" },\n};\nconsole.log(company.address.city); // \"Paris\"\n```\n\n> **Best Practice:** Use destructuring when you only need a few properties. Use `Object.hasOwn()` to safely check for a property before using it.",
    "quiz": {
      "question": "What is the correct destructuring syntax to extract 'name' from an object?",
      "options": {
        "A": "const name = obj->name;",
        "B": "const [name] = obj;",
        "C": "const { name } = obj;",
        "D": "const name = obj::name;"
      },
      "correct": "C",
      "explanation": "Object destructuring uses curly braces: const { name } = obj; extracts the 'name' property into a variable."
    }
  },
  {
    "day": 10,
    "slug": "object-methods-and-this",
    "stage": 2,
    "title": "Object Methods and this",
    "subtitle": "Learn how to add methods to objects and understand how the this keyword behaves.",
    "estMinutes": 45,
    "projectName": "Bank Account Simulator",
    "projectDesc": "Build a bank account object with deposit, withdraw, and balance methods.",
    "contentMd": "## Methods Are Functions on Objects\n\n```js\nconst counter = {\n  count: 0,\n  increment() {\n    this.count++;\n  },\n  getValue() {\n    return this.count;\n  },\n};\ncounter.increment();\nconsole.log(counter.getValue()); // 1\n```\n\n## Object.keys, values, entries\n\n```js\nconst scores = { math: 90, english: 85, science: 92 };\nObject.keys(scores);    // [\"math\", \"english\", \"science\"]\nObject.values(scores);  // [90, 85, 92]\nObject.entries(scores); // [[\"math\",90], [\"english\",85], ...]\n```\n\n## Arrow Functions and this\n\nArrow functions don't bind their own `this` \u2014 they inherit from the enclosing scope. Use regular function syntax for object methods that rely on `this`.\n\n> **Best Practice:** Use regular function syntax for methods that rely on `this`. Reserve arrow functions for callbacks.",
    "quiz": {
      "question": "Inside an object method, what does 'this' refer to?",
      "options": {
        "A": "The global window object",
        "B": "The function itself",
        "C": "The object the method was called on",
        "D": "undefined"
      },
      "correct": "C",
      "explanation": "In a regular method call like obj.method(), 'this' refers to obj \u2014 the object to the left of the dot."
    }
  },
  {
    "day": 11,
    "slug": "strings-in-depth",
    "stage": 2,
    "title": "Strings in Depth",
    "subtitle": "Master template literals and the most useful string methods for real projects.",
    "estMinutes": 40,
    "projectName": "Palindrome Checker",
    "projectDesc": "Build a palindrome checker using string manipulation methods.",
    "contentMd": "## Template Literals\n\n```js\nconst name = \"Reza\";\nconst msg = `Hello, ${name}! You have ${3 + 2} messages.`;\n```\n\n## Common String Methods\n\n```js\n\"hello\".toUpperCase()           // \"HELLO\"\n\"  hello  \".trim()              // \"hello\"\n\"hello world\".includes(\"world\") // true\n\"hello\".startsWith(\"he\")        // true\n\"hello world\".split(\" \")        // [\"hello\", \"world\"]\n[\"hello\",\"world\"].join(\", \")    // \"hello, world\"\n\"abcdef\".slice(1, 4)            // \"bcd\"\n\"hello world\".replace(\"world\", \"JS\") // \"hello JS\"\n```\n\n## String Immutability\n\nStrings are immutable \u2014 all methods return a **new** string:\n\n```js\nconst s = \"hello\";\ns.toUpperCase(); // \"HELLO\" \u2014 s is still \"hello\"\n```\n\n> **Best Practice:** Prefer template literals over `+` concatenation for readability.",
    "quiz": {
      "question": "What does 'hello world'.split(' ') return?",
      "options": {
        "A": "\"hello world\"",
        "B": "[\"hello\", \"world\"]",
        "C": "{hello: 'world'}",
        "D": "['h','e','l','l','o',' ','w','o','r','l','d']"
      },
      "correct": "B",
      "explanation": "split() divides a string into an array of substrings using the given separator. ' ' splits on spaces."
    }
  },
  {
    "day": 12,
    "slug": "introduction-to-the-dom",
    "stage": 3,
    "title": "Introduction to the DOM",
    "subtitle": "Learn how the Document Object Model works and how to select and modify HTML elements.",
    "estMinutes": 50,
    "projectName": "DOM Playground",
    "projectDesc": "Build an interactive playground that lets you modify the page with JavaScript.",
    "contentMd": "## What Is the DOM?\n\nThe DOM (Document Object Model) is the browser's in-memory tree representation of an HTML page. JavaScript can read and modify it to make pages dynamic.\n\n## Selecting Elements\n\n```js\nconst btn = document.querySelector(\"#submit\");    // one element\nconst items = document.querySelectorAll(\".item\"); // NodeList\n```\n\n## Reading and Changing Content\n\n```js\nconst h1 = document.querySelector(\"h1\");\nh1.textContent = \"New heading\";          // safe \u2014 plain text only\nh1.innerHTML   = \"<em>Styled</em>\";      // parses HTML\n```\n\n## Working with Classes\n\n```js\nelement.classList.add(\"active\");\nelement.classList.remove(\"hidden\");\nelement.classList.toggle(\"visible\");\n```\n\n## Creating Elements\n\n```js\nconst li = document.createElement(\"li\");\nli.textContent = \"New item\";\ndocument.querySelector(\"ul\").appendChild(li);\n```\n\n> **Best Practice:** Prefer `textContent` over `innerHTML` for plain text. Use `classList` for visual state changes.",
    "quiz": {
      "question": "Which method selects ALL elements matching a CSS selector?",
      "options": {
        "A": "document.getElementById()",
        "B": "document.querySelector()",
        "C": "document.querySelectorAll()",
        "D": "document.getElements()"
      },
      "correct": "C",
      "explanation": "querySelectorAll() returns a NodeList of ALL matching elements. querySelector() returns only the first match."
    }
  },
  {
    "day": 13,
    "slug": "dom-events",
    "stage": 3,
    "title": "DOM Events",
    "subtitle": "Learn addEventListener, the event object, event bubbling, and delegation.",
    "estMinutes": 50,
    "projectName": "Color Switcher",
    "projectDesc": "Build a color palette switcher that changes the page background on click.",
    "contentMd": "## Listening for Events\n\n```js\nconst btn = document.querySelector(\"#btn\");\nbtn.addEventListener(\"click\", (event) => {\n  console.log(\"Clicked!\", event.target);\n});\n```\n\n## The Event Object\n\n```js\ndocument.addEventListener(\"keydown\", (e) => {\n  console.log(e.key);   // which key was pressed\n  console.log(e.target); // which element fired the event\n});\n```\n\n## Preventing Default Behavior\n\n```js\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault(); // stops page reload\n  // your validation logic here\n});\n```\n\n## Event Delegation\n\nInstead of attaching listeners to each child, listen on the parent:\n\n```js\ndocument.querySelector(\"ul\").addEventListener(\"click\", (e) => {\n  if (e.target.tagName === \"LI\") {\n    e.target.classList.toggle(\"done\");\n  }\n});\n```\n\n> **Best Practice:** Use event delegation for dynamic lists. Always call `e.preventDefault()` in form submit handlers.",
    "quiz": {
      "question": "What does event.preventDefault() do?",
      "options": {
        "A": "Stops the event from firing",
        "B": "Prevents the browser's default action (e.g. form submission reload)",
        "C": "Removes all event listeners",
        "D": "Stops event bubbling"
      },
      "correct": "B",
      "explanation": "preventDefault() stops the browser's built-in behavior. For forms, this prevents the page from reloading on submit."
    }
  },
  {
    "day": 14,
    "slug": "forms-and-validation",
    "stage": 3,
    "title": "Forms and Validation",
    "subtitle": "Learn how to read form values and validate input before submission.",
    "estMinutes": 50,
    "projectName": "Sign Up Form Validator",
    "projectDesc": "Build a sign-up form with real-time JavaScript validation.",
    "contentMd": "## Reading Input Values\n\n```js\nconst name  = document.querySelector(\"#name\").value;\nconst email = document.querySelector(\"#email\").value.trim();\nconst agree = document.querySelector(\"#agree\").checked;\n```\n\n## Handling Form Submission\n\n```js\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  if (!name) {\n    showError(\"Name is required.\");\n    return;\n  }\n  // process valid data\n});\n```\n\n## Displaying Error Messages\n\n```js\nfunction showError(field, message) {\n  const errEl = document.querySelector(`#${field}-error`);\n  errEl.textContent = message;\n  errEl.style.display = \"block\";\n}\n```\n\n## HTML5 Validation Attributes\n\nCombine HTML5 with JavaScript validation:\n\n```html\n<input type=\"email\" required minlength=\"5\" maxlength=\"100\">\n```\n\n> **Best Practice:** Always trim and validate input. Combine HTML5 attributes with JS validation \u2014 don't rely on either alone.",
    "quiz": {
      "question": "How do you read the value from a text input element?",
      "options": {
        "A": "input.text",
        "B": "input.content",
        "C": "input.value",
        "D": "input.innerHTML"
      },
      "correct": "C",
      "explanation": "The .value property contains the current text inside an input element."
    }
  },
  {
    "day": 15,
    "slug": "building-a-todo-app",
    "stage": 3,
    "title": "Building a To-Do App",
    "subtitle": "Combine DOM manipulation, events, and arrays to build a complete interactive app.",
    "estMinutes": 60,
    "projectName": "Interactive To-Do List",
    "projectDesc": "Build a full to-do app with add, complete, and delete functionality.",
    "contentMd": "## Data Drives the DOM\n\nThe key pattern: keep your data in a JavaScript array, and render the DOM from it every time something changes.\n\n```js\nlet todos = [];\n\nfunction render() {\n  const ul = document.querySelector(\"#todo-list\");\n  ul.innerHTML = todos\n    .map((todo, i) => `\n      <li class=\"${todo.done ? 'done' : ''}\">\n        ${todo.text}\n        <button data-i=\"${i}\" class=\"delete\">\u00d7</button>\n      </li>\n    `).join(\"\");\n}\n```\n\n## Adding Items\n\n```js\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const text = input.value.trim();\n  if (!text) return;\n  todos.push({ text, done: false });\n  input.value = \"\";\n  render();\n});\n```\n\n## Event Delegation for Delete\n\n```js\nul.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"delete\")) {\n    todos.splice(+e.target.dataset.i, 1);\n    render();\n  }\n});\n```\n\n> **Best Practice:** Treat your array as the single source of truth and always re-render from it after changes.",
    "quiz": {
      "question": "What is the 'data-driven DOM' pattern?",
      "options": {
        "A": "Storing all data in HTML attributes",
        "B": "Keeping data in a JS array and re-rendering the DOM from it after every change",
        "C": "Fetching data from a server on each update",
        "D": "Using CSS variables for dynamic content"
      },
      "correct": "B",
      "explanation": "The key pattern: your JS data is the source of truth. After any change, call a render() function to rebuild the DOM from the array."
    }
  },
  {
    "day": 16,
    "slug": "scope-and-closures",
    "stage": 4,
    "title": "Scope and Closures",
    "subtitle": "Understand global, function, and block scope, and how closures work and why they are useful.",
    "estMinutes": 50,
    "projectName": "Counter Factory",
    "projectDesc": "Build a counter factory using closures to create independent counters.",
    "contentMd": "## What Is Scope?\n\nScope determines where a variable can be accessed in your code.\n\n- **Global scope** \u2014 accessible anywhere\n- **Function scope** \u2014 accessible only inside the function\n- **Block scope** \u2014 accessible only inside `{}` when using `let`/`const`\n\n## What Is a Closure?\n\nA closure is a function that *remembers* the variables from its creation scope, even after that scope has finished executing.\n\n```js\nfunction makeCounter() {\n  let count = 0;  // private variable\n  return {\n    increment() { count++; },\n    getValue()  { return count; },\n  };\n}\n\nconst counterA = makeCounter();\nconst counterB = makeCounter();\ncounterA.increment();\ncounterA.increment();\nconsole.log(counterA.getValue()); // 2\nconsole.log(counterB.getValue()); // 0  \u2014 independent!\n```\n\n> **Best Practice:** Use closures to create private state via factory functions, rather than relying on global variables.",
    "quiz": {
      "question": "What is a closure in JavaScript?",
      "options": {
        "A": "A function that cannot be called",
        "B": "A function that remembers variables from its creation scope",
        "C": "A way to close the browser window",
        "D": "A method to end a loop early"
      },
      "correct": "B",
      "explanation": "A closure is formed when a function retains access to variables from its outer (enclosing) scope, even after that scope has returned."
    }
  },
  {
    "day": 17,
    "slug": "es6-plus-syntax",
    "stage": 4,
    "title": "ES6+ Syntax",
    "subtitle": "Learn the most important modern JavaScript features including destructuring and optional chaining.",
    "estMinutes": 50,
    "projectName": "Recipe Card Renderer",
    "projectDesc": "Render recipe cards using modern ES6+ destructuring and template literals.",
    "contentMd": "## Destructuring (Revisited)\n\n```js\nconst [first, , third] = [10, 20, 30]; // array\nconst { name, age = 25 } = user;        // object with default\n```\n\n## Optional Chaining (?.)\n\n```js\nconst city = user?.address?.city ?? \"Unknown\";\n```\n\n`?.` short-circuits to `undefined` instead of throwing if the property doesn't exist.\n\n## Nullish Coalescing (??)\n\n```js\nconst name = user.name ?? \"Guest\";\n// returns \"Guest\" only when user.name is null or undefined\n// (not for 0 or \"\" like || would)\n```\n\n## Computed Property Names\n\n```js\nconst key = \"score\";\nconst obj = { [key]: 100 }; // { score: 100 }\n```\n\n## Object Shorthand\n\n```js\nconst name = \"Reza\";\nconst age  = 30;\nconst person = { name, age }; // same as { name: name, age: age }\n```\n\n> **Best Practice:** Use `?.` when accessing possibly-missing properties. Use `??` for fallbacks \u2014 it distinguishes intentional `0` from missing values.",
    "quiz": {
      "question": "What does the optional chaining operator (?.) do?",
      "options": {
        "A": "Makes a property required",
        "B": "Returns undefined instead of throwing if a property doesn't exist",
        "C": "Creates optional function parameters",
        "D": "Checks for null only (not undefined)"
      },
      "correct": "B",
      "explanation": "user?.address?.city short-circuits to undefined if user or user.address is null/undefined, preventing a TypeError."
    }
  },
  {
    "day": 18,
    "slug": "spread-rest-and-default-parameters",
    "stage": 4,
    "title": "Spread, Rest, and Default Parameters",
    "subtitle": "Learn spread syntax, rest parameters, and default parameters with practical examples.",
    "estMinutes": 45,
    "projectName": "Mini Utility Library",
    "projectDesc": "Build a mini utility library using spread and rest parameters.",
    "contentMd": "## Spread Syntax \u2014 Arrays\n\n```js\nconst a = [1, 2, 3];\nconst b = [4, 5, 6];\nconst combined = [...a, ...b]; // [1, 2, 3, 4, 5, 6]\nconst copy = [...a];            // shallow copy\n```\n\n## Spread Syntax \u2014 Objects\n\n```js\nconst defaults = { color: \"black\", size: \"md\" };\nconst custom   = { ...defaults, color: \"red\" }; // override\n```\n\n## Rest Parameters\n\n```js\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10\n```\n\n## Default Parameters\n\n```js\nfunction greet(name = \"World\", greeting = \"Hello\") {\n  return `${greeting}, ${name}!`;\n}\n```\n\n> **Best Practice:** Use spread to create copies (avoid mutation). Use rest instead of the legacy `arguments` object.",
    "quiz": {
      "question": "What does the spread operator (...) do when used with an array?",
      "options": {
        "A": "Removes all elements from the array",
        "B": "Creates a deep copy of the array",
        "C": "Expands the array into individual elements",
        "D": "Sorts the array"
      },
      "correct": "C",
      "explanation": "The spread operator (...) expands an array into individual items. [...a, ...b] combines two arrays by spreading their elements."
    }
  },
  {
    "day": 19,
    "slug": "higher-order-functions",
    "stage": 4,
    "title": "Higher-Order Functions",
    "subtitle": "Understand higher-order functions and functional programming patterns using map, filter, and reduce.",
    "estMinutes": 50,
    "projectName": "Mini Sales Dashboard",
    "projectDesc": "Build a sales dashboard using higher-order functions to analyze data.",
    "contentMd": "## What Is a Higher-Order Function?\n\nA function is higher-order if it **accepts a function as an argument** or **returns a function**.\n\n```js\nfunction applyTwice(fn, value) {\n  return fn(fn(value));\n}\napplyTwice(x => x * 2, 3); // 12\n```\n\n## Functions That Return Functions\n\n```js\nfunction multiplier(factor) {\n  return (number) => number * factor;\n}\nconst double = multiplier(2);\nconst triple = multiplier(3);\ndouble(5); // 10\ntriple(5); // 15\n```\n\n## Chaining for Data Analysis\n\n```js\nconst sales = [\n  { rep: \"Alice\", amount: 500, region: \"North\" },\n  { rep: \"Bob\",   amount: 300, region: \"South\" },\n  { rep: \"Carol\", amount: 800, region: \"North\" },\n];\n\nconst northTotal = sales\n  .filter(s => s.region === \"North\")\n  .map(s => s.amount)\n  .reduce((sum, amt) => sum + amt, 0);\n// 1300\n```\n\n> **Best Practice:** Break complex data processing into small, named, single-purpose functions. This functional style is easier to test.",
    "quiz": {
      "question": "Which of the following is a higher-order function?",
      "options": {
        "A": "A function that returns a number",
        "B": "A function that accepts another function as an argument",
        "C": "A function declared with const",
        "D": "A function with more than 3 parameters"
      },
      "correct": "B",
      "explanation": "A higher-order function either accepts a function as an argument OR returns a function. map(), filter(), and reduce() are classic examples."
    }
  },
  {
    "day": 20,
    "slug": "error-handling",
    "stage": 4,
    "title": "Error Handling",
    "subtitle": "Learn try/catch/finally, throwing custom errors, and writing defensive code.",
    "estMinutes": 45,
    "projectName": "Safe Calculator",
    "projectDesc": "Build a calculator that handles all error cases gracefully.",
    "contentMd": "## try / catch / finally\n\n```js\ntry {\n  const data = JSON.parse(rawInput);\n  processData(data);\n} catch (error) {\n  console.error(\"Failed to parse:\", error.message);\n} finally {\n  console.log(\"Always runs.\");\n}\n```\n\n## Throwing Custom Errors\n\n```js\nfunction divide(a, b) {\n  if (b === 0) throw new Error(\"Cannot divide by zero.\");\n  return a / b;\n}\n```\n\n## Common Error Types\n\n| Type | Cause |\n|------|-------|\n| `TypeError` | Wrong type used |\n| `RangeError` | Value out of valid range |\n| `SyntaxError` | Invalid code syntax |\n| `ReferenceError` | Variable not found |\n\n## Defensive Functions\n\n```js\nfunction getAge(user) {\n  if (!user || typeof user.age !== \"number\") {\n    throw new TypeError(\"user.age must be a number\");\n  }\n  return user.age;\n}\n```\n\n> **Best Practice:** Use try/catch for genuinely unpredictable operations (JSON parsing, network). Use validation checks for predictable input problems.",
    "quiz": {
      "question": "Which block in try/catch/finally ALWAYS executes, even if an error occurs?",
      "options": {
        "A": "try",
        "B": "catch",
        "C": "finally",
        "D": "throw"
      },
      "correct": "C",
      "explanation": "The finally block always executes regardless of whether an error was thrown or caught \u2014 perfect for cleanup logic."
    }
  },
  {
    "day": 21,
    "slug": "asynchronous-javascript-basics",
    "stage": 4,
    "title": "Asynchronous JavaScript Basics",
    "subtitle": "Understand the event loop, setTimeout, and callbacks.",
    "estMinutes": 50,
    "projectName": "Simulated Loading Sequence",
    "projectDesc": "Build an animated loading sequence using setTimeout and async patterns.",
    "contentMd": "## Synchronous vs Asynchronous\n\nSynchronous code runs line by line \u2014 each line waits for the previous. Asynchronous code **doesn't block**: it schedules work and continues.\n\n```js\nconsole.log(\"1 - start\");\n\nsetTimeout(() => {\n  console.log(\"3 - timer fires\");\n}, 1000);\n\nconsole.log(\"2 - after setTimeout\"); // runs before timer!\n```\n\n## The Event Loop\n\nJavaScript is single-threaded. Async operations (timers, network, I/O) are handed off to the browser. When they complete, their callback is queued. The **event loop** runs queued callbacks when the call stack is empty.\n\n## Callbacks\n\n```js\nfunction fetchData(callback) {\n  setTimeout(() => {\n    callback({ name: \"Reza\", score: 95 });\n  }, 500);\n}\nfetchData((data) => console.log(data));\n```\n\n## Callback Hell\n\nNesting callbacks more than 2\u20133 levels deep creates \"callback hell\" \u2014 hard to read and maintain. This is why Promises and async/await were created.\n\n> **Best Practice:** Avoid deep callback nesting. If you see more than 2 levels, refactor with Promises or async/await.",
    "quiz": {
      "question": "What does setTimeout(fn, 1000) do?",
      "options": {
        "A": "Runs fn exactly after 1000ms, pausing all other code",
        "B": "Schedules fn to run after at least 1000ms without blocking other code",
        "C": "Repeats fn every 1000ms",
        "D": "Cancels fn after 1000ms"
      },
      "correct": "B",
      "explanation": "setTimeout schedules a callback for AFTER a minimum delay \u2014 it doesn't block. The event loop runs the callback when the call stack is clear."
    }
  },
  {
    "day": 22,
    "slug": "promises",
    "stage": 5,
    "title": "Promises",
    "subtitle": "Learn JavaScript Promises \u2014 then, catch, finally, and Promise.all.",
    "estMinutes": 55,
    "projectName": "Random User Card Generator",
    "projectDesc": "Build a card generator that fetches random user data using Promises.",
    "contentMd": "## What Is a Promise?\n\nA Promise represents a value that will be available **in the future** (or an error). It has three states: **pending**, **fulfilled**, **rejected**.\n\n## Consuming Promises\n\n```js\nfetch(\"https://api.github.com/users/octocat\")\n  .then(response => response.json())\n  .then(data => console.log(data.name))\n  .catch(error => console.error(\"Failed:\", error))\n  .finally(() => console.log(\"Done\"));\n```\n\n## Creating a Promise\n\n```js\nconst wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));\nawait wait(1000); // usage with async/await\n```\n\n## Promise.all() \u2014 Parallel\n\n```js\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);\n```\n\n`Promise.all()` runs all Promises in parallel and resolves when **all** complete (or rejects on first failure).\n\n> **Best Practice:** Always include `.catch()`. Use `Promise.all()` when independent async tasks can run simultaneously.",
    "quiz": {
      "question": "What does Promise.all([p1, p2, p3]) do?",
      "options": {
        "A": "Resolves with the FIRST promise that completes",
        "B": "Runs promises one after another in sequence",
        "C": "Resolves when ALL promises have resolved, rejects if any rejects",
        "D": "Only resolves if all promises reject"
      },
      "correct": "C",
      "explanation": "Promise.all() runs all promises in parallel and resolves with an array of results when ALL complete. It rejects immediately if any one rejects."
    }
  },
  {
    "day": 23,
    "slug": "async-and-await",
    "stage": 5,
    "title": "Async and Await",
    "subtitle": "Learn async/await syntax with error handling to write clean asynchronous code.",
    "estMinutes": 50,
    "projectName": "Quote Generator",
    "projectDesc": "Build a quote generator that fetches and displays quotes using async/await.",
    "contentMd": "## What async/await Really Is\n\n`async`/`await` is **syntactic sugar over Promises** \u2014 it makes async code read like synchronous code.\n\n```js\nasync function getUser(id) {\n  try {\n    const response = await fetch(`/api/users/${id}`);\n    if (!response.ok) throw new Error(\"User not found\");\n    const user = await response.json();\n    return user;\n  } catch (error) {\n    console.error(error.message);\n  }\n}\n```\n\n## An `async` function always returns a Promise.\n\n## Parallel vs Sequential\n\n```js\n// Sequential \u2014 waits for each (slow)\nconst a = await fetchA();\nconst b = await fetchB();\n\n// Parallel \u2014 runs together (fast)\nconst [a, b] = await Promise.all([fetchA(), fetchB()]);\n```\n\n## Key Rules\n\n1. `await` can only be used inside an `async` function\n2. `await` pauses the current async function, not the whole program\n3. Always wrap `await` in `try/catch` when failure is possible\n\n> **Best Practice:** Use async/await for new code. But understand Promises \u2014 async/await is built on them.",
    "quiz": {
      "question": "What does the 'await' keyword do inside an async function?",
      "options": {
        "A": "Blocks the entire JavaScript engine until the promise resolves",
        "B": "Pauses the current async function until the awaited promise settles",
        "C": "Converts a synchronous function to async",
        "D": "Creates a new promise"
      },
      "correct": "B",
      "explanation": "await pauses ONLY the current async function. The event loop continues running \u2014 other code, timers, and events still fire."
    }
  },
  {
    "day": 24,
    "slug": "fetch-api-and-json",
    "stage": 5,
    "title": "Fetch API and JSON",
    "subtitle": "Learn how to use the Fetch API to request real data and work with JSON responses.",
    "estMinutes": 55,
    "projectName": "GitHub Profile Finder",
    "projectDesc": "Build a GitHub profile finder that fetches and displays user data.",
    "contentMd": "## Making a Fetch Request\n\n```js\nasync function getGitHubUser(username) {\n  const response = await fetch(`https://api.github.com/users/${username}`);\n  if (!response.ok) {\n    throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n  }\n  const data = await response.json();\n  return data;\n}\n```\n\n## Important: Check response.ok\n\n`fetch()` only rejects on **network errors** \u2014 not on HTTP 404 or 500. Always check `response.ok`.\n\n## JSON.parse and JSON.stringify\n\n```js\n// Object \u2192 JSON string\nconst json = JSON.stringify({ name: \"Reza\", age: 30 });\n// '{\"name\":\"Reza\",\"age\":30}'\n\n// JSON string \u2192 Object\nconst obj = JSON.parse(json);\n// { name: \"Reza\", age: 30 }\n```\n\n## POST Request with Body\n\n```js\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Reza\" }),\n});\n```\n\n> **Best Practice:** Always check `response.ok`. Always use `try/catch` around fetch. Show loading and error states in the UI.",
    "quiz": {
      "question": "Why must you check response.ok after a fetch() call?",
      "options": {
        "A": "Because fetch() always returns null on failure",
        "B": "Because fetch() only rejects on network errors, not on HTTP error status codes like 404",
        "C": "Because response.json() requires it",
        "D": "It's optional \u2014 fetch() automatically throws on errors"
      },
      "correct": "B",
      "explanation": "fetch() resolves (doesn't throw) even for 404 and 500 responses. You must check response.ok or response.status to detect HTTP errors."
    }
  },
  {
    "day": 25,
    "slug": "local-storage",
    "stage": 5,
    "title": "Local Storage",
    "subtitle": "Learn how to use localStorage to persist data in the browser between page reloads.",
    "estMinutes": 45,
    "projectName": "Persistent To-Do List",
    "projectDesc": "Upgrade the to-do app to persist data across page reloads with localStorage.",
    "contentMd": "## Basic localStorage Usage\n\n```js\nlocalStorage.setItem(\"username\", \"Reza\");\nconst name = localStorage.getItem(\"username\"); // \"Reza\"\nlocalStorage.removeItem(\"username\");\nlocalStorage.clear(); // removes everything\n```\n\n## Storing Objects (JSON)\n\nlocalStorage only stores strings \u2014 serialize with JSON:\n\n```js\n// Save\nconst todos = [{ text: \"Learn JS\", done: false }];\nlocalStorage.setItem(\"todos\", JSON.stringify(todos));\n\n// Load (with fallback for missing key)\nconst saved = localStorage.getItem(\"todos\");\nconst todos = saved ? JSON.parse(saved) : [];\n```\n\n## Safe Loading Pattern\n\n```js\nfunction loadTodos() {\n  try {\n    return JSON.parse(localStorage.getItem(\"todos\")) ?? [];\n  } catch {\n    return [];\n  }\n}\n```\n\n## Limitations\n\n- Max ~5\u201310 MB per origin\n- Strings only \u2014 no functions or circular refs\n- Not synced across devices\n- **Never store passwords or sensitive tokens**\n\n> **Best Practice:** Always provide a fallback when reading. Never store sensitive data.",
    "quiz": {
      "question": "Why do you need JSON.stringify() when saving an object to localStorage?",
      "options": {
        "A": "To compress the data",
        "B": "Because localStorage only stores strings",
        "C": "To encrypt the data",
        "D": "JSON.stringify() is not needed for localStorage"
      },
      "correct": "B",
      "explanation": "localStorage stores only strings. JSON.stringify() converts an object to a JSON string for storage, and JSON.parse() converts it back."
    }
  },
  {
    "day": 26,
    "slug": "classes-and-oop",
    "stage": 5,
    "title": "Classes and OOP",
    "subtitle": "Learn JavaScript classes, constructors, inheritance, and object-oriented programming.",
    "estMinutes": 55,
    "projectName": "Library Management System",
    "projectDesc": "Build a library system using classes and inheritance.",
    "contentMd": "## Defining a Class\n\n```js\nclass BankAccount {\n  #balance = 0; // private field\n\n  constructor(owner) {\n    this.owner = owner;\n  }\n\n  deposit(amount) {\n    if (amount <= 0) throw new Error(\"Amount must be positive\");\n    this.#balance += amount;\n  }\n\n  get balance() { return this.#balance; }\n}\n\nconst acc = new BankAccount(\"Reza\");\nacc.deposit(1000);\nconsole.log(acc.balance); // 1000\n```\n\n## Inheritance\n\n```js\nclass SavingsAccount extends BankAccount {\n  constructor(owner, interestRate) {\n    super(owner); // must call super first\n    this.interestRate = interestRate;\n  }\n\n  applyInterest() {\n    this.deposit(this.balance * this.interestRate);\n  }\n}\n```\n\n## Static Methods\n\n```js\nclass MathHelper {\n  static square(n) { return n * n; }\n}\nMathHelper.square(5); // 25\n```\n\n> **Best Practice:** Use private fields (`#field`) for internal state. Favor composition over deep inheritance chains.",
    "quiz": {
      "question": "What does the 'extends' keyword do in a JavaScript class?",
      "options": {
        "A": "Creates a copy of the class",
        "B": "Makes all methods private",
        "C": "Sets up inheritance \u2014 the child class inherits from the parent",
        "D": "Prevents the class from being instantiated"
      },
      "correct": "C",
      "explanation": "extends sets up the prototype chain so the child class inherits all methods and properties from the parent class."
    }
  },
  {
    "day": 27,
    "slug": "javascript-modules",
    "stage": 5,
    "title": "JavaScript Modules",
    "subtitle": "Learn ES modules \u2014 export, import, default exports, and code organization.",
    "estMinutes": 45,
    "projectName": "Modular Calculator",
    "projectDesc": "Refactor a calculator into a modular structure with separate files.",
    "contentMd": "## Why Modules?\n\nModules let you split code across files, sharing only what is explicitly exported.\n\n## Named Exports\n\n```js\n// math.js\nexport function add(a, b)      { return a + b; }\nexport function subtract(a, b) { return a - b; }\nexport const PI = 3.14159;\n\n// main.js\nimport { add, PI } from \"./math.js\";\n```\n\n## Default Export\n\n```js\n// calculator.js\nexport default class Calculator { ... }\n\n// main.js\nimport Calculator from \"./calculator.js\"; // any name\n```\n\n## Renaming Imports\n\n```js\nimport { add as sum } from \"./math.js\";\n```\n\n## Browser Modules\n\n```html\n<script type=\"module\" src=\"main.js\"></script>\n```\n\nModules are **deferred** by default and have their own scope \u2014 no global leakage.\n\n> **Best Practice:** Use named exports for utilities. Reserve default exports for a file's single primary item (a class or component).",
    "quiz": {
      "question": "What is the key difference between named exports and default exports?",
      "options": {
        "A": "Default exports are faster",
        "B": "Named exports use curly braces on import; default exports can be imported with any name",
        "C": "Named exports are for functions only; default exports for classes only",
        "D": "There is no difference"
      },
      "correct": "B",
      "explanation": "Named exports: import { name }. Default export: import AnyName from './file'. A file can have many named exports but only one default."
    }
  },
  {
    "day": 28,
    "slug": "regular-expressions",
    "stage": 5,
    "title": "Regular Expressions",
    "subtitle": "Learn JavaScript regular expressions for pattern matching, validation, and text searching.",
    "estMinutes": 50,
    "projectName": "Regex Form Validator",
    "projectDesc": "Build a form validator using regular expressions for all fields.",
    "contentMd": "## What Is a Regular Expression?\n\nA regex is a pattern for matching, searching, or replacing text.\n\n```js\nconst emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nemailPattern.test(\"reza@example.com\"); // true\nemailPattern.test(\"not-an-email\");     // false\n```\n\n## Common Methods\n\n```js\n// test() \u2014 returns boolean\n/\\d+/.test(\"abc123\"); // true\n\n// match() \u2014 returns matches\n\"hello world\".match(/\\w+/g); // [\"hello\", \"world\"]\n\n// replace()\n\"2026-06-22\".replace(/(\\d{4})-(\\d{2})-(\\d{2})/, \"$3/$2/$1\");\n// \"22/06/2026\"\n```\n\n## Common Patterns\n\n```js\nconst patterns = {\n  email:    /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,\n  phone:    /^\\+?[\\d\\s\\-()]{7,15}$/,\n  password: /^(?=.*[A-Z])(?=.*\\d).{8,}$/,\n  url:      /^https?:\\/\\/.+\\..+/,\n};\n```\n\n## Flags\n\n- `g` \u2014 global (find all matches)\n- `i` \u2014 case-insensitive\n- `m` \u2014 multiline\n\n> **Best Practice:** Keep regex as simple as possible. Add comments above complex patterns explaining what they match.",
    "quiz": {
      "question": "Which regex method checks if a pattern matches a string and returns a boolean?",
      "options": {
        "A": "match()",
        "B": "search()",
        "C": "test()",
        "D": "exec()"
      },
      "correct": "C",
      "explanation": "regex.test(string) returns true if the pattern is found in the string, false otherwise. It's the simplest way to validate input."
    }
  },
  {
    "day": 29,
    "slug": "debugging-and-testing-basics",
    "stage": 5,
    "title": "Debugging and Testing Basics",
    "subtitle": "Learn essential debugging techniques with DevTools and the fundamentals of unit testing.",
    "estMinutes": 50,
    "projectName": "Tested Utility Functions",
    "projectDesc": "Write utility functions with unit tests using a simple test helper.",
    "contentMd": "## Advanced Console Methods\n\n```js\nconsole.table([{name:\"Reza\",score:95},{name:\"Sara\",score:88}]);\nconsole.time(\"render\");\nrenderApp();\nconsole.timeEnd(\"render\"); // \"render: 12.34ms\"\nconsole.group(\"User Data\");\nconsole.log(user);\nconsole.groupEnd();\n```\n\n## Breakpoints\n\nInstead of `console.log` everywhere, use **breakpoints** in DevTools:\n1. Open DevTools \u2192 Sources\n2. Click the line number to add a breakpoint\n3. Reload \u2014 code pauses at the breakpoint\n4. Inspect all variables in the Scope panel\n\n## Reading Error Messages\n\nAlways read the **stack trace** from the **top** \u2014 the first line shows the exact error and file/line.\n\n## Writing Simple Tests\n\n```js\nfunction assertEqual(actual, expected, label) {\n  if (JSON.stringify(actual) === JSON.stringify(expected)) {\n    console.log(`\u2713 ${label}`);\n  } else {\n    console.error(`\u2717 ${label}: expected ${expected}, got ${actual}`);\n  }\n}\n\nassertEqual(add(2, 3), 5, \"add(2,3) === 5\");\nassertEqual(add(-1, 1), 0, \"add(-1,1) === 0\");\n```\n\n> **Best Practice:** Reach for breakpoints instead of scattered console.log for anything beyond trivial debugging. Write tests for utility functions as you build them.",
    "quiz": {
      "question": "What is the advantage of using breakpoints over console.log for debugging?",
      "options": {
        "A": "Breakpoints run faster",
        "B": "You can inspect the FULL program state at the exact moment something goes wrong",
        "C": "Breakpoints work without DevTools",
        "D": "console.log requires internet access"
      },
      "correct": "B",
      "explanation": "A breakpoint pauses execution so you can inspect all variables, the call stack, and scope at that exact moment \u2014 far more powerful than scattered console.logs."
    }
  },
  {
    "day": 30,
    "slug": "capstone-project",
    "stage": 5,
    "title": "Capstone Project",
    "subtitle": "Apply everything from all 30 days to build a complete Expense Tracker application.",
    "estMinutes": 90,
    "projectName": "Expense Tracker App",
    "projectDesc": "Build a complete Expense Tracker combining classes, DOM, events, fetch, and localStorage.",
    "contentMd": "## You Have Reached the Capstone! \ud83c\udf89\n\nCongratulations on completing all 30 lessons. Now you apply everything together.\n\n## The Expense Tracker Architecture\n\n```\nExpenseManager (class)\n  \u251c\u2500\u2500 #expenses []        \u2014 private state\n  \u251c\u2500\u2500 addExpense(data)     \u2014 adds & saves\n  \u251c\u2500\u2500 deleteExpense(id)    \u2014 removes & saves\n  \u251c\u2500\u2500 filterBy(category)  \u2014 returns filtered array\n  \u2514\u2500\u2500 getTotal()          \u2014 computed total\n\nDOM Layer (functions)\n  \u251c\u2500\u2500 render()            \u2014 renders list from class data\n  \u251c\u2500\u2500 renderSummary()     \u2014 updates totals\n  \u2514\u2500\u2500 bindEvents()        \u2014 attaches all listeners\n```\n\n## Core Patterns Used\n\n| Day | Concept | Used In |\n|-----|---------|---------|\n| 2 | Variables & Types | Expense properties |\n| 7 | Arrays | Expense list |\n| 8 | Array Methods | filter, reduce for totals |\n| 9 | Objects | Each expense object |\n| 12 | DOM | Rendering the list |\n| 13 | Events | Add/delete buttons |\n| 14 | Forms | Input reading & validation |\n| 15 | Data \u2192 DOM | render() pattern |\n| 20 | Error Handling | Input validation |\n| 25 | localStorage | Persistence |\n| 26 | Classes | ExpenseManager |\n\n## Best Practice (The Most Important One)\n\n> **Separate your data logic from your DOM logic.** This is the foundation of every major frontend framework. The class manages data; the DOM functions only render and listen.\n\nAfter Day 30, you are ready to learn React, Vue, or Node.js with a solid foundation.\n\n## Take the Final Exam\n\nComplete all 30 lessons and take the **Final Exam** to earn your **Laser Frame Studio JavaScript Certificate**.",
    "quiz": {
      "question": "What is the most important architectural principle learned throughout this 30-day course?",
      "options": {
        "A": "Always use classes for everything",
        "B": "Never use localStorage",
        "C": "Separate data logic from DOM/rendering logic \u2014 keep one source of truth",
        "D": "Avoid using arrow functions"
      },
      "correct": "C",
      "explanation": "The data-driven DOM pattern: keep your data in JS (an array or class), and always re-render the DOM from that data. This is the foundation of React, Vue, and every other modern framework."
    }
  }
] as Lesson[];

export const STAGE_LABELS: Record<number, string> = {
  1: "JavaScript Fundamentals",
  2: "Data Structures",
  3: "The Browser and DOM",
  4: "Modern JavaScript",
  5: "Async, OOP and Real World",
};
