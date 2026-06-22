// Day 25 Project: Persistent To-Do List

const STORAGE_KEY = "day25_todos";

function getStoredTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

let todos = getStoredTodos();

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

function render() {
  saveTodos(todos);
  // TODO: Clear and rebuild the <li> elements from `todos`, as in Day 15
}

// TODO: Handle form submit to add a new todo, then call render()
// TODO: Handle clicks on `list` to toggle done state or delete a todo

render();
console.log("Persistent To-Do List script loaded.");
