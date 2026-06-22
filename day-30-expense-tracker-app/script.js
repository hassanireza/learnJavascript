// Day 30 Capstone Project: Expense Tracker App

class ExpenseTracker {
  constructor() {
    this.expenses = this.loadExpenses();
  }

  loadExpenses() {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  }

  saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  // TODO: addExpense(expense)
  // TODO: deleteExpense(id)
  // TODO: getTotal()
  // TODO: getByCategory(category)
}

const tracker = new ExpenseTracker();

const form = document.querySelector("#expense-form");
const errorMessage = document.querySelector("#error-message");
const filterSelect = document.querySelector("#filter-select");
const expenseList = document.querySelector("#expense-list");
const totalEl = document.querySelector("#total");

function render() {
  // TODO: Render tracker.getByCategory(filterSelect.value) into expenseList
  // TODO: Update totalEl with tracker.getTotal()
}

// TODO: Handle form submit: validate input, call tracker.addExpense(), reset form, render()
// TODO: Handle delete button clicks inside expenseList using event delegation
// TODO: Handle filterSelect change to re-render with the selected category

render();
console.log("Expense Tracker App script loaded.");
